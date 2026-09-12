> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecaption/setfontweight:inrange:](https://developer.apple.com/documentation/avfoundation/avmutablecaption/setfontweight:inrange:)

# setFontWeight:inRange:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

Sets the font weight for a range of text.

## Declaration

```objectivec
- (void) setFontWeight:(AVCaptionFontWeight) fontWeight inRange:(NSRange) range;
```

## Parameters

- `fontWeight`: The font weight.
- `range`: The range to which this font weight applies.

## See Also

### Configuring font styles

- [AVCaptionFontStyle](../avcaption/fontstyle.md): Font styles for caption text.
- [setFontStyle:inRange:](setfontstyle_inrange_.md): Sets the font style for a range of text.
- [removeFontStyleInRange:](removefontstyleinrange_.md): Removes a font style from a range of text.
- [AVCaptionFontWeight](../avcaption/fontweight.md): Font weights for a caption.
- [removeFontWeightInRange:](removefontweightinrange_.md): Removes a font weight from a range of text.
- [AVCaptionDecoration](../avcaption/decoration.md): Text decorations for caption text.
- [setDecoration:inRange:](setdecoration_inrange_.md): Sets a decoration for a range of text.
- [removeDecorationInRange:](removedecorationinrange_.md): Removes a decoration from a range of text.
