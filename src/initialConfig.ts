import { FormConfig, FieldType } from './types'

const initialConfig: FormConfig = {
    "title": 'My Awesome and useless form',
    "fields": [
        {
            type: FieldType.Checkbox,
            label: 'I am checkbox',
            defaultValue: true,
        },
        {
            type: FieldType.Number,
            label: 'I am number',
            defaultValue: 779,
        },
        {
            type: FieldType.Text,
            label: 'I am text',
            defaultValue: 'Hooks are awesome',
        },
        {
            type: FieldType.TextArea,
            label: 'I am textarea',
            defaultValue: "Cortana: Just one question: what if you miss? Master Chief: I won't.",
        },
        {
            type: FieldType.Date,
            label: 'I am date',
            defaultValue: '2018-07-22'
        },
        {
            type: FieldType.Radio,
            label: 'I am radio',
            options: [ 'Solar', 'Void', 'Arc', 'Stasis' ],
            defaultValue: 'Arc',
        }
    ],
    "buttons": [
        { text: 'Hello there' },
        { text: 'General Kenobi' },
    ],
}

export default initialConfig;
