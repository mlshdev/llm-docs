> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption/textcombine(at:)](https://developer.apple.com/documentation/avfoundation/avcaption/textcombine(at:))

# textCombine(at:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Returns the text combine at the index position.

## Declaration

```swift
@nonobjc func textCombine(at index: String.Index) -> (AVCaption.TextCombine, Range<String.Index>)
```

## Parameters

- `index`: A character position in the caption text.

<a id="return-value"></a>

## Return Value

A tuple that contains the text combine color and range to which it applies.

## See Also

### Accessing advanced typography

- [ruby(at:)](ruby%28at_%29.md): Returns the ruby text at the index position.
- [AVCaption.Ruby](ruby.md): An object that presents ruby characters.
- [AVCaption.TextCombine](textcombine.md): The caption’s supported rendering policy options.
