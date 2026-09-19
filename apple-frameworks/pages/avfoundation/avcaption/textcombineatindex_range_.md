> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcaption/textcombineatindex:range:

# textCombineAtIndex:range:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

Returns the text combine at the index position.

## Declaration

```objectivec
- (AVCaptionTextCombine) textCombineAtIndex:(NSInteger) index range:(NSRange *) outRange;
```

## Parameters

- `index`: A character position in the caption text.
- `outRange`: A pointer that stores the range to which the returned text combine applies.

<a id="return-value"></a>

## Return Value

The text combine.

## See Also

### Accessing advanced typography

- [rubyAtIndex:range:](rubyatindex_range_.md): Returns the ruby text at the index position.
- [AVCaptionRuby](ruby.md): An object that presents ruby characters.
- [AVCaptionTextCombine](textcombine.md): The caption’s supported rendering policy options.
