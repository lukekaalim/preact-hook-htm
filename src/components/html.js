// @flow
import { createElement } from '../index';
/*::
import type { PreactElement } from '../index';
*/

/*::
type HTMLStyle = {
  width?: number,
  height?: number,
};

type HTMLElement = {
  className?: string,
  style?: HTMLStyle,
};
*/



// Dividers
/*::
type DivProps = HTMLElement;
type SpanProps = HTMLElement;
*/
export const div = (props/*:: ?: DivProps*/, ...children/*: Array<PreactElement>*/) => createElement('div', props, ...children);
export const span = (props/*:: ?: SpanProps*/, ...children/*: Array<PreactElement>*/) => createElement('span', props, ...children);

// Text
/*::
export type H1Props = HTMLElement;
export type H2Props = HTMLElement;
export type H3Props = HTMLElement;
export type ParagraphProps = HTMLElement;
*/
export const h1 = (props/*:: ?:H1Props*/, ...children/*: Array<PreactElement>*/) => createElement('h1', props, ...children);
export const h2 = (props/*:: ?:H2Props*/, ...children/*: Array<PreactElement>*/) => createElement('h2', props, ...children);
export const h3 = (props/*:: ?:H3Props*/, ...children/*: Array<PreactElement>*/) => createElement('h3', props, ...children);
export const paragraph = (props/*:: ?:ParagraphProps*/, ...children/*: Array<PreactElement>*/) => createElement('p', props, ...children);

// Form
/*::
type ButtonProps = {
  onClick: () => void,
} & HTMLElement;

type TextInputProps = {
  type: 'text',
  value: string,
  placeholder?: string,
  onChange: (event: { target: { value: string } }) => void,
} & HTMLElement;

type InputProps = (
  | TextInputProps
) & HTMLElement;

type SelectProps = { onChange: (event: { target: { value: string } }) => void } & HTMLElement;

type OptionProps = { value: string } & HTMLElement;
*/
export const button = (props/*:: ?:ButtonProps*/, children/*: Array<PreactElement>*/) => createElement('button', props, ...children);
export const input = (props/*:: ?:InputProps*/, ...children/*: Array<PreactElement>*/) => createElement('input', props, ...children);
export const select = (props/*:: ?:SelectProps*/, ...children/*: Array<PreactElement>*/) => createElement('select', props, ...children);
export const option = (props/*:: ?:OptionProps*/, ...children/*: Array<PreactElement>*/) => createElement('option', props, ...children);