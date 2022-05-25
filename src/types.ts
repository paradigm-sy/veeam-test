export enum Tab {
    Config = 'config',
    Result = 'result',
}

export enum FieldType {
    Number = 'number',
    Text = 'text',
    TextArea = 'textArea',
    Checkbox = 'checkbox',
    Date = 'date',
    Radio = 'radio'
}

export interface ButtonDescription {
    text: string;
}

export type FieldDescription = Array<Field>;

export type Field =
    TextField |
    RadioField |
    CheckboxField |
    NumberField;

interface BaseTextField {
    label: string;
}

export interface TextField extends BaseTextField {
    type: FieldType.Text | FieldType.TextArea | FieldType.Date;
    defaultValue?: string
}

export interface RadioField extends BaseTextField {
    type: FieldType.Radio;
    options: Array<string>
    defaultValue?: string;
}

export interface CheckboxField extends BaseTextField {
    type: FieldType.Checkbox;
    defaultValue?: boolean;
}

export interface NumberField extends BaseTextField {
    type: FieldType.Number;
    defaultValue?: number;
}

export interface FormConfig {
    buttons: Array<ButtonDescription>;
    fields: FieldDescription;
    title: string;
}
