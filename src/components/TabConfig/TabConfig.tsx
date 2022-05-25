import React from 'react';
import { FormConfig } from '../../types';

import './TabConfig.css';

interface Props {
    config: FormConfig;
    handleChangeConfig: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

class TabConfig extends React.PureComponent<Props> {
    render() {
        const { config, handleChangeConfig } = this.props;

        return (
            <div className="TabConfig">
                <textarea className="TabConfig__configInput" onChange={ handleChangeConfig }>
                    { JSON.stringify(config, null, 4) }
                </textarea>
            </div>
        );
    }
}

export default TabConfig;
