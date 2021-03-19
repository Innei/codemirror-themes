import {EditorView} from '@codemirror/view'
import {Extension} from '@codemirror/state'
import {HighlightStyle, tags as t} from '@codemirror/highlight'

export const materialLightTheme = EditorView.theme({
  '&': {
    color: '#90A4AE',
    backgroundColor: '#FAFAFA',
    '& ::selection': {backgroundColor: '#80CBC440'},
    caretColor: '#272727',
  },

  '&.cm-focused .cm-cursor': {borderLeftColor: '#272727'},
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground': {backgroundColor: '#80CBC440'},

  '.cm-panels': {backgroundColor: '#FAFAFA', color: '#90A4AE'},
  '.cm-panels.cm-panels-top': {borderBottom: '2px solid black'},
  '.cm-panels.cm-panels-bottom': {borderTop: '2px solid black'},

  '.cm-searchMatch': {
    backgroundColor: '#FAFAFA',
    outline: `1px solid #00000010`
  },
  '.cm-searchMatch.cm-searchMatch-selected': {
    backgroundColor: '#80CBC440'
  },

  '.cm-activeLine': {backgroundColor: '#80CBC440'},
  '.cm-selectionMatch': {backgroundColor: '#80CBC440'},

  '.cm-matchingBracket, .cm-nonmatchingBracket': {
    backgroundColor: '#E5393570',
    outline: 'none'
  },
  '.cm-gutters': {
    backgroundColor: '#FAFAFA',
    color: '#90A4AE',
    border: 'none'
  },
  '.cm-lineNumbers, .cm-gutterElement': {color: 'inherit'},

  '.cm-foldPlaceholder': {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#90A4AE'
  },

  '.cm-tooltip': {
    border: '1px solid #00000010',
    backgroundColor: '#FAFAFA'
  },
  '.cm-tooltip-autocomplete': {
    '& > ul > li[aria-selected]': {
      backgroundColor: '#80CBC440',
      color: '#90A4AE'
    }
  }
}, {dark: false})

export const materialLightHighlightStyle = HighlightStyle.define([
  // const, let, function, if
  {tag: t.keyword, color: '#39ADB5'},
  // document
  {tag: [t.name, t.deleted, t.character, t.macroName], color: '#90A4AE'},
  // getElementById
  {tag: [t.propertyName], color: '#6182B8'},
  // "string"
  {tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)], color: '#91B859'},
  // render
  {tag: [t.function(t.variableName), t.labelName], color: '#6182B8'},
  // ???
  {tag: [t.color, t.constant(t.name), t.standard(t.name)], color: '#39ADB5'},
  // btn, count, fn render()
  {tag: [t.definition(t.name), t.separator], color: '#90A4AE'},
  {tag: [t.className], color: '#E2931D'},
  {tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: '#F76D47'},
  {tag: [t.typeName], color: '#E2931D', fontStyle: ''},
  {tag: [t.operator, t.operatorKeyword], color: '#39ADB5'},
  {tag: [t.url, t.escape, t.regexp, t.link], color: '#91B859'},
  {tag: [t.meta, t.comment], color: '#90A4AE'},
  {tag: t.strong, fontWeight: 'bold'},
  {tag: t.emphasis, fontStyle: 'italic'},
  {tag: t.link, textDecoration: 'underline'},
  {tag: t.heading, fontWeight: 'bold', color: '#39ADB5'},
  {tag: [t.atom, t.bool, t.special(t.variableName)], color: '#90A4AE'},
  {tag: t.invalid, color: '#E5393570'},
])

export const materialLight: Extension = [
  materialLightTheme,
  materialLightHighlightStyle,
]
