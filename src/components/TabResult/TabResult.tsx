import React from 'react';
import {
    FieldType,
    FormConfig,
    NumberField,
    TextField,
    RadioField,
    CheckboxField,
    Field,

} from '../../types';

import './TabResult.css'

interface Props {
    config: FormConfig;
}

class TabResult extends React.PureComponent<Props> {
    render() {
        const { config } = this.props;

        return (
            <div className="TabResult">
                <div className="TabResult__formTitle">{ config.title }</div>
                { config.fields.map((field) => this.renderField(field)) }
                { this.renderButtons() }
            </div>
        );
    }

    renderField(field: Field) {
        switch(field.type) {
            case FieldType.Number:
                return this.renderNumberField(field);
            case FieldType.Text:
                return this.renderTextField(field);
            case FieldType.TextArea:
                return this.renderTextAreaField(field);
            case FieldType.Date:
                return this.renderDateField(field);
            case FieldType.Radio:
                return this.renderRadioField(field);
            case FieldType.Checkbox:
                return this.renderCheckboxField(field);
            default:
                return null;
        }
    }

    renderNumberField(field: NumberField) {
        return (
            <div className="TabResult__field TabResult__field_number">
                <div className="TabResult__fieldLabel">{ field.label }</div>
                <input
                    className="TabResult__fieldInput"
                    defaultValue={ field.defaultValue }
                    type="number"
                />
            </div>
        )
    }

    renderTextField(field: TextField) {
        return (
            <div className="TabResult__field TabResult__field_number">
                <div className="TabResult__fieldLabel">{ field.label }</div>
                <input
                    className="TabResult__fieldInput"
                    type="text"
                    defaultValue={ field.defaultValue }
                />
            </div>
        )
    }

    renderDateField(field: TextField) {
        return (
            <div className="TabResult__field TabResult__field_number">
                <div className="TabResult__fieldLabel">{ field.label }</div>
                <input
                    className="TabResult__fieldInput"
                    defaultValue={ field.defaultValue as string} // it's not acceptable in real prod code
                    type="date"
                />
            </div>
        )
    }

    
    renderTextAreaField(field: TextField) {
        return (
            <div className="TabResult__field TabResult__field_number">
                <div className="TabResult__fieldLabel">{ field.label }</div>
                <textarea className="TabResult__fieldInput">{ field.defaultValue }</textarea>
            </div>
        )
    }

    renderRadioField(field: RadioField) {
        return (
            <div className="TabResult__field TabResult__field_number">
                <div className="TabResult__fieldLabel">{ field.label }</div>
                <fieldset>
                    { field.options?.map(option => {
                        return (
                            <div>
                                <input
                                    className="TabResult__fieldInput"
                                    type="radio"
                                    value={ option }
                                    id={ option }
                                    name={ field.label }
                                />
                                <label htmlFor={ option }>{ option }</label>
                            </div>
                        );
                    })}
                </fieldset>
            </div>
        )
    }

    renderCheckboxField(field: CheckboxField) {
        return (
            <div className="TabResult__field TabResult__field_number">
                <div className="TabResult__fieldLabel">{ field.label }</div>
                <input
                    className="TabResult__fieldInput"
                    type="checkbox"
                    defaultChecked={ field.defaultValue }
                />
            </div>
        )
    }

    renderButtons() {
        const buttons = this.props.config.buttons;

        return (
            <div className="TabResult__buttons">
                { buttons.map(button => {
                    return (
                        <button className="TabResult__button">{ button.text }</button>
                    );
                } )}
            </div>
        );
    }
}

export default TabResult;