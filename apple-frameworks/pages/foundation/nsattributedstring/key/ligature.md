> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/ligature](https://developer.apple.com/documentation/foundation/nsattributedstring/key/ligature)

# ligature

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The ligature of the text.

## Declaration

```swift
static let ligature: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSNumber](../../nsnumber.md) object containing an integer. Ligatures cause specific character combinations to be rendered using a single custom glyph that corresponds to those characters. The value `0` indicates no ligatures. The value `1` indicates the use of the default ligatures. The value `2` indicates the use of all ligatures. The default value for this attribute is `1`. (Value `2` is unsupported on iOS.)

## See Also

### Getting rendering attribute keys

- [backgroundColor](backgroundcolor.md): The color of the background behind the text.
- [baselineOffset](baselineoffset.md): The vertical offset for the position of the text.
- [font](font.md): The font of the text.
- [foregroundColor](foregroundcolor.md): The color of the text.
- [glyphInfo](glyphinfo.md): The name of a glyph info object.
- [kern](kern.md): The kerning of the text.
- [paragraphStyle](paragraphstyle.md): The paragraph style of the text.
- [strikethroughColor](strikethroughcolor.md): The color of the strikethrough.
- [strikethroughStyle](strikethroughstyle.md): The strikethrough style of the text.
- [strokeColor](strokecolor.md): The color of the stroke.
- [strokeWidth](strokewidth.md): The width of the stroke.
- [superscript](superscript.md): The superscript of the text.
- [tracking](tracking.md): The amount to modify the default tracking.
- [underlineColor](underlinecolor.md): The color of the underline.
- [underlineStyle](underlinestyle.md): The underline style of the text.
