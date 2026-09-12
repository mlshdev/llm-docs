> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecaption/setruby:inrange:](https://developer.apple.com/documentation/avfoundation/avmutablecaption/setruby:inrange:)

# setRuby:inRange:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

Sets ruby text for a range.

## Declaration

```objectivec
- (void) setRuby:(AVCaptionRuby *) ruby inRange:(NSRange) range;
```

## Parameters

- `ruby`: The ruby text.
- `range`: The range to which the ruby text applies.

## See Also

### Configuring advanced typography

- [AVCaptionRuby](../avcaption/ruby.md): An object that presents ruby characters.
- [removeRubyInRange:](removerubyinrange_.md): Removes ruby text from a range.
- [AVCaptionTextCombine](../avcaption/textcombine.md): The caption’s supported rendering policy options.
- [setTextCombine:inRange:](settextcombine_inrange_.md): Sets text combine for a range.
- [removeTextCombineInRange:](removetextcombineinrange_.md): Removes text combine from a range of text.
