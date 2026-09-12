> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/paragraphstyle](https://developer.apple.com/documentation/foundation/nsattributedstring/key/paragraphstyle)

# paragraphStyle

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The paragraph style of the text.

## Declaration

```swift
static let paragraphStyle: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSParagraphStyle](https://developer.apple.com/documentation/appkit/nsparagraphstyle) object. Use this attribute to apply multiple attributes to a range of text. If you do not specify this attribute, the string uses the default paragraph attributes, as returned by the [default](https://developer.apple.com/documentation/appkit/nsparagraphstyle/default) method of [NSParagraphStyle](https://developer.apple.com/documentation/appkit/nsparagraphstyle).

## See Also

### Getting rendering attribute keys

- [backgroundColor](backgroundcolor.md): The color of the background behind the text.
- [baselineOffset](baselineoffset.md): The vertical offset for the position of the text.
- [font](font.md): The font of the text.
- [foregroundColor](foregroundcolor.md): The color of the text.
- [glyphInfo](glyphinfo.md): The name of a glyph info object.
- [kern](kern.md): The kerning of the text.
- [ligature](ligature.md): The ligature of the text.
- [strikethroughColor](strikethroughcolor.md): The color of the strikethrough.
- [strikethroughStyle](strikethroughstyle.md): The strikethrough style of the text.
- [strokeColor](strokecolor.md): The color of the stroke.
- [strokeWidth](strokewidth.md): The width of the stroke.
- [superscript](superscript.md): The superscript of the text.
- [tracking](tracking.md): The amount to modify the default tracking.
- [underlineColor](underlinecolor.md): The color of the underline.
- [underlineStyle](underlinestyle.md): The underline style of the text.
