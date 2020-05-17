import React from 'react';

renderMicroFrontend = (name, history) => {
    window[`render${name}`](`${name}-container`, history);
};

export const MicroFrontEnd = ({ name, host, history }) => {
    React.useEffect(() => {
        const scriptId = `micro-frontend-script-${name}`;
        if (document.getElementById(scriptId)) {
            this.renderMicroFrontend(name, history);
            return;
        }

        fetch(`${host}/asset-manifest.json`)
            .then(res => res.json())
            .then(manifest => {
                const script = document.createElement('script');
                script.id = scriptId;
                script.crossOrigin = '';
                script.src = `${host}${manifest['main.js']}`;
                script.onload = this.renderMicroFrontend;
                document.head.appendChild(script);
            });
        return () => {
            window[`unmount${name}`](`${name}-container`);
        }
    }, [])

    return <main id={`${this.props.name}-container`} />;
}

