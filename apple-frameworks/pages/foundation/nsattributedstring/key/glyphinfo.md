> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/glyphinfo](https://developer.apple.com/documentation/foundation/nsattributedstring/key/glyphinfo)

# glyphInfo

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.0+

The name of a glyph info object.

## Declaration

```swift
static let glyphInfo: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

The [NSLayoutManager](https://developer.apple.com/documentation/appkit/nslayoutmanager) object assigns the glyph specified by this [NSGlyphInfo](https://developer.apple.com/documentation/appkit/nsglyphinfo) object to the entire attribute range, provided that its contents match the specified base string, and that the specified glyph is available in the font specified by `NSFontAttributeName`.

## See Also

### Getting rendering attribute keys

- [backgroundColor](backgroundcolor.md): The color of the background behind the text.
- [baselineOffset](baselineoffset.md): The vertical offset for the position of the text.
- [font](font.md): The font of the text.
- [foregroundColor](foregroundcolor.md): The color of the text.
- [kern](kern.md): The kerning of the text.
- [ligature](ligature.md): The ligature of the text.
- [paragraphStyle](paragraphstyle.md): The paragraph style of the text.
- [strikethroughColor](strikethroughcolor.md): The color of the strikethrough.
- [strikethroughStyle](strikethroughstyle.md): The strikethrough style of the text.
- [strokeColor](strokecolor.md): The color of the stroke.
- [strokeWidth](strokewidth.md): The width of the stroke.
- [superscript](superscript.md): The superscript of the text.
- [tracking](tracking.md): The amount to modify the default tracking.
- [underlineColor](underlinecolor.md): The color of the underline.
- [underlineStyle](underlinestyle.md): The underline style of the text.
