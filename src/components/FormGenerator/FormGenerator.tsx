import React from 'react';
import cn from 'classnames';

import TabConfig from '../TabConfig/TabConfig';
import TabResult from '../TabResult/TabResult';

import { FormConfig, Tab } from './../../types';

import './FormGenerator.css';
import initialConfig from '../../initialConfig';

interface State {
  activeTab: Tab;
  config: FormConfig;
}

class FormGenerator extends React.PureComponent<{}, State> {
  state = {
    activeTab: Tab.Config,
    config: initialConfig,
  }

  render() {
    const { activeTab, config } = this.state;

    console.log(config);

    return (
      <div className="App">
        <div className="FormGenerator">
          <div className="FormGenerator__tabs">
            <div
              className={ cn('FormGenerator__tab', { 'FormGenerator__tab_active': activeTab === Tab.Config }) }
              onClick={ this.handleConfigTabClick }
            >
              Config
            </div>
            <div
              className={ cn('FormGenerator__tab', { 'FormGenerator__tab_active': activeTab === Tab.Result }) }
              onClick={ this.handleResultTabClick }
            >
              Result
            </div>
          </div>
          { this.renderTabContent() }
        </div>
      </div>
    );
  }

  renderTabContent() {
    const { activeTab, config } = this.state;

    if (activeTab === Tab.Config) {
      return (
        <TabConfig
            config={ config }
            handleChangeConfig={ this.handleChangeConfig }
        />
    );
    }

    if (activeTab === Tab.Result) {
      return (
          <TabResult
            config={ config }
          />
      );
    }

    return null;
  }


  /* ---------- handlers ---------- */

  handleConfigTabClick = () => this.setState({ activeTab: Tab.Config })

  handleResultTabClick = () => this.setState({ activeTab: Tab.Result })

  handleChangeConfig = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // no error handling here, should be valid
    this.setState({ config: JSON.parse(e.target.value) });
  }
}

export default FormGenerator;
