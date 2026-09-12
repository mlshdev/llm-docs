> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecaption/setfontstyle:inrange:](https://developer.apple.com/documentation/avfoundation/avmutablecaption/setfontstyle:inrange:)

# setFontStyle:inRange:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

Sets the font style for a range of text.

## Declaration

```objectivec
- (void) setFontStyle:(AVCaptionFontStyle) fontStyle inRange:(NSRange) range;
```

## Parameters

- `fontStyle`: The font style.
- `range`: The range to which this style applies.

## See Also

### Configuring font styles

- [AVCaptionFontStyle](../avcaption/fontstyle.md): Font styles for caption text.
- [removeFontStyleInRange:](removefontstyleinrange_.md): Removes a font style from a range of text.
- [AVCaptionFontWeight](../avcaption/fontweight.md): Font weights for a caption.
- [setFontWeight:inRange:](setfontweight_inrange_.md): Sets the font weight for a range of text.
- [removeFontWeightInRange:](removefontweightinrange_.md): Removes a font weight from a range of text.
- [AVCaptionDecoration](../avcaption/decoration.md): Text decorations for caption text.
- [setDecoration:inRange:](setdecoration_inrange_.md): Sets a decoration for a range of text.
- [removeDecorationInRange:](removedecorationinrange_.md): Removes a decoration from a range of text.
