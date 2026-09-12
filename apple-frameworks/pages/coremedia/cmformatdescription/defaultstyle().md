> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescription/defaultstyle()](https://developer.apple.com/documentation/coremedia/cmformatdescription/defaultstyle())

# defaultStyle()

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the default text style.

## Declaration

```swift
func defaultStyle() throws -> (localFontID: Int, bold: Bool, italic: Bool, underline: Bool, fontSize: CGFloat, colorComponents: [CGFloat])
```

## See Also

### Working with Text Descriptions

- [defaultTextBox(originIsAtTopLeft:heightOfTextTrack:)](defaulttextbox%28originisattopleft_heightoftexttrack_%29.md): Returns the default text box.
- [displayFlags()](displayflags%28%29.md): Returns the display mode flags for the text media.
- [fontName(localFontID:)](fontname%28localfontid_%29.md): Returns the font name for the local font identifier.
- [justification()](justification%28%29.md): Returns the horizontal and vertical justification.
