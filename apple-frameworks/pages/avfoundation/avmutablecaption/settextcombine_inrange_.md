> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecaption/settextcombine:inrange:](https://developer.apple.com/documentation/avfoundation/avmutablecaption/settextcombine:inrange:)

# setTextCombine:inRange:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

Sets text combine for a range.

## Declaration

```objectivec
- (void) setTextCombine:(AVCaptionTextCombine) textCombine inRange:(NSRange) range;
```

## Parameters

- `textCombine`: The text combine.
- `range`: The range to which the text combine applies.

## See Also

### Configuring advanced typography

- [AVCaptionRuby](../avcaption/ruby.md): An object that presents ruby characters.
- [setRuby:inRange:](setruby_inrange_.md): Sets ruby text for a range.
- [removeRubyInRange:](removerubyinrange_.md): Removes ruby text from a range.
- [AVCaptionTextCombine](../avcaption/textcombine.md): The caption’s supported rendering policy options.
- [removeTextCombineInRange:](removetextcombineinrange_.md): Removes text combine from a range of text.
