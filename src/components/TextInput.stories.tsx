import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputInputProps, TextInputRootProps } from './TextInput'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
            <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder="Type your e-mail address" />

        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
} as Meta<TextInputInputProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WhitoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: [
            <TextInput.Input placeholder="Type your e-mail address" />,
        ],
    },
}