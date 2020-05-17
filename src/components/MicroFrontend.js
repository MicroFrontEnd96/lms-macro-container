import React from 'react';

const renderMicroFrontend = (name, history) => {
    if (window[`render${name}`]) {
        window[`render${name}`](`${name}-container`, history);
    }
};

export const MicroFrontEnd = ({ name, host, history }) => {
    React.useEffect(() => {
        const scriptId = `micro-frontend-script-${name}`;
        if (document.getElementById(scriptId)) {
            renderMicroFrontend(name, history);
            return;
        }

        fetch(`${host}/asset-manifest.json`)
            .then(res => res.json())
            .then(manifest => {
                const script = document.createElement('script');
                script.id = scriptId;
                script.crossOrigin = '';
                script.src = `${host}${manifest['main.js']}`;
                script.onload = renderMicroFrontend;
                document.head.appendChild(script);
                console.log(document.head)
            });
        return () => {
            window[`unmount${name}`](`${name}-container`);
        }
    }, [name, host, history])

    return <main id={`${name}-container`} />;
}

