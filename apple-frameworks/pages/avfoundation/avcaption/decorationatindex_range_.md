> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption/decorationatindex:range:](https://developer.apple.com/documentation/avfoundation/avcaption/decorationatindex:range:)

# decorationAtIndex:range:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

Returns the text decoration at the index position.

## Declaration

```objectivec
- (AVCaptionDecoration) decorationAtIndex:(NSInteger) index range:(NSRange *) outRange;
```

## Parameters

- `index`: A character position in the caption text.
- `outRange`: A pointer to store the range to which the returned decoration applies.

<a id="return-value"></a>

## Return Value

The text decoration.

## See Also

### Accessing font styles

- [fontStyleAtIndex:range:](fontstyleatindex_range_.md): Returns the font style and range at the index position.
- [AVCaptionFontStyle](fontstyle.md): Font styles for caption text.
- [fontWeightAtIndex:range:](fontweightatindex_range_.md): Returns the font weight and range at the index position.
- [AVCaptionFontWeight](fontweight.md): Font weights for a caption.
- [AVCaptionDecoration](decoration.md): Text decorations for caption text.
