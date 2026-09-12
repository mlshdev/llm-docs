> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstexthighlightstyledefault](https://developer.apple.com/documentation/appkit/nstexthighlightstyledefault)

# NSTextHighlightStyleDefault

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

The default highlight style to apply to text.

## Declaration

```objectivec
extern NSTextHighlightStyle const NSTextHighlightStyleDefault;
```

<a id="Discussion"></a>

## Discussion

Use this constant as the value for the [NSTextHighlightStyleAttributeName](nstexthighlightstyleattributename.md) attribute. The system applies the default highlight color to your text. To specify a different highlight color, add the [NSTextHighlightColorSchemeAttributeName](nstexthighlightcolorschemeattributename.md) attribute to your text and set its value to the color you want.
