> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/strokecolor](https://developer.apple.com/documentation/foundation/nsattributedstring/key/strokecolor)

# strokeColor

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The color of the stroke.

## Declaration

```swift
static let strokeColor: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

The value of this parameter is a [UIColor](../../../uikit/uicolor.md) object. If it is not defined  (which is the case by default), it is assumed to be the same as the value of [foregroundColor](foregroundcolor.md); otherwise, it describes the outline color. For more details, see [Drawing attributed strings that are both filled and stroked](https://developer.apple.com/library/archive/qa/qa1531/_index.html#//apple_ref/doc/uid/DTS40007490).

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
- [strikethroughStyle](strikethroughstyle.md): The strikethrough style of the text.
- [strokeWidth](strokewidth.md): The width of the stroke.
- [superscript](superscript.md): The superscript of the text.
- [tracking](tracking.md): The amount to modify the default tracking.
- [underlineColor](underlinecolor.md): The color of the underline.
- [underlineStyle](underlinestyle.md): The underline style of the text.
