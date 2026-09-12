> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472145-textedit_attribute_selectors](https://developer.apple.com/documentation/coreservices/1472145-textedit_attribute_selectors)

# TextEdit Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for TextEdit.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltTEAttr](1472145-textedit_attribute_selectors/gestaltteattr.md): The `Gestalt` selector you pass to determine whichTextEdit attributes are present.
- [gestaltTEHasGetHiliteRgn](1472145-textedit_attribute_selectors/gestalttehasgethilitergn.md): If true, TextEdit has `TEGetHiliteRgn`.
- [gestaltTESupportsInlineInput](1472145-textedit_attribute_selectors/gestalttesupportsinlineinput.md): If `true`, TextEdit does Inline Input.
- [gestaltTESupportsTextObjects](1472145-textedit_attribute_selectors/gestalttesupportstextobjects.md): If `true`, TextEdit does Text Objects.
- [gestaltTEHasWhiteBackground](1472145-textedit_attribute_selectors/gestalttehaswhitebackground.md): If `true`, TextEdit supports overriding the `TERec`' data structure background field to white.
