> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption/fontweightatindex:range:](https://developer.apple.com/documentation/avfoundation/avcaption/fontweightatindex:range:)

# fontWeightAtIndex:range:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

Returns the font weight and range at the index position.

## Declaration

```objectivec
- (AVCaptionFontWeight) fontWeightAtIndex:(NSInteger) index range:(NSRange *) outRange;
```

## Parameters

- `index`: A character position in the caption text.
- `outRange`: A pointer that stores the range to which the returned weight applies.

<a id="return-value"></a>

## Return Value

The font weight.

## See Also

### Accessing font styles

- [fontStyleAtIndex:range:](fontstyleatindex_range_.md): Returns the font style and range at the index position.
- [AVCaptionFontStyle](fontstyle.md): Font styles for caption text.
- [AVCaptionFontWeight](fontweight.md): Font weights for a caption.
- [decorationAtIndex:range:](decorationatindex_range_.md): Returns the text decoration at the index position.
- [AVCaptionDecoration](decoration.md): Text decorations for caption text.
