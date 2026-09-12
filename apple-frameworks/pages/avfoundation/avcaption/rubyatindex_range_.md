> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption/rubyatindex:range:](https://developer.apple.com/documentation/avfoundation/avcaption/rubyatindex:range:)

# rubyAtIndex:range:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

Returns the ruby text at the index position.

## Declaration

```objectivec
- (AVCaptionRuby *) rubyAtIndex:(NSInteger) index range:(NSRange *) outRange;
```

## Parameters

- `index`: A character position in the caption text.
- `outRange`: A pointer that stores the range to which the returned ruby text applies.

<a id="return-value"></a>

## Return Value

The ruby text.

## See Also

### Accessing advanced typography

- [AVCaptionRuby](ruby.md): An object that presents ruby characters.
- [textCombineAtIndex:range:](textcombineatindex_range_.md): Returns the text combine at the index position.
- [AVCaptionTextCombine](textcombine.md): The caption’s supported rendering policy options.
