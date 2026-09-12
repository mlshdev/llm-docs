> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption/decoration(at:)](https://developer.apple.com/documentation/avfoundation/avcaption/decoration(at:))

# decoration(at:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Returns the text decoration at the index position.

## Declaration

```swift
@nonobjc func decoration(at index: String.Index) -> (AVCaption.Decoration, Range<String.Index>)
```

## Parameters

- `index`: A character position in the caption text.

<a id="return-value"></a>

## Return Value

A tuple that contains the text decoration and range to which it applies.

## See Also

### Accessing font styles

- [fontStyle(at:)](fontstyle%28at_%29.md): Returns the font style and range at the index position.
- [AVCaption.FontStyle](fontstyle.md): Font styles for caption text.
- [fontWeight(at:)](fontweight%28at_%29.md): Returns the font weight and range at the index position.
- [AVCaption.FontWeight](fontweight.md): Font weights for a caption.
- [AVCaption.Decoration](decoration.md): Text decorations for caption text.
