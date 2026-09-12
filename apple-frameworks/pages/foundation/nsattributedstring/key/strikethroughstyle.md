> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/strikethroughstyle](https://developer.apple.com/documentation/foundation/nsattributedstring/key/strikethroughstyle)

# strikethroughStyle

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The strikethrough style of the text.

## Declaration

```swift
static let strikethroughStyle: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSNumber](../../nsnumber.md) object containing an integer. This value indicates whether the text has a line through it and corresponds to one of the constants described in [NSUnderlineStyle](../../../uikit/nsunderlinestyle.md). The default value for this attribute is [NSUnderlineStyleNone](../../../uikit/nsunderlinestyle/nsunderlinestylenone.md).

## See Also

### Getting rendering attribute keys

- [backgroundColor](backgroundcolor.md): The color of the background behind the text.
- [baselineOffset](baselineoffset.md): The vertical offset for the position of the text.
- [font](font.md): The font of the text.
- [foregroundColor](foregroundcolor.md): The color of the text.
- [glyphInfo](glyphinfo.md): The name of a glyph info object.
- [kern](kern.md): The kerning of the text.
- [ligature](ligature.md): The ligature of the text.
- [paragraphStyle](paragraphstyle.md): The paragraph style of the text.
- [strikethroughColor](strikethroughcolor.md): The color of the strikethrough.
- [strokeColor](strokecolor.md): The color of the stroke.
- [strokeWidth](strokewidth.md): The width of the stroke.
- [superscript](superscript.md): The superscript of the text.
- [tracking](tracking.md): The amount to modify the default tracking.
- [underlineColor](underlinecolor.md): The color of the underline.
- [underlineStyle](underlinestyle.md): The underline style of the text.
