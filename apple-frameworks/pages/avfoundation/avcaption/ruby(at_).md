> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption/ruby(at:)](https://developer.apple.com/documentation/avfoundation/avcaption/ruby(at:))

# ruby(at:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Returns the ruby text at the index position.

## Declaration

```swift
@nonobjc func ruby(at index: String.Index) -> (AVCaption.Ruby?, Range<String.Index>)
```

## Parameters

- `index`: A character position in the caption text.

<a id="return-value"></a>

## Return Value

A tuple that contains the ruby text and range to which it applies.

## See Also

### Accessing advanced typography

- [AVCaption.Ruby](ruby.md): An object that presents ruby characters.
- [textCombine(at:)](textcombine%28at_%29.md): Returns the text combine at the index position.
- [AVCaption.TextCombine](textcombine.md): The caption’s supported rendering policy options.
