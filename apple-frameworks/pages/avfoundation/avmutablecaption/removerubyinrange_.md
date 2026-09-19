> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmutablecaption/removerubyinrange:

# removeRubyInRange:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

Removes ruby text from a range.

## Declaration

```objectivec
- (void) removeRubyInRange:(NSRange) range;
```

## Parameters

- `range`: The range from which the system removes the ruby text.

## See Also

### Configuring advanced typography

- [AVCaptionRuby](../avcaption/ruby.md): An object that presents ruby characters.
- [setRuby:inRange:](setruby_inrange_.md): Sets ruby text for a range.
- [AVCaptionTextCombine](../avcaption/textcombine.md): The caption’s supported rendering policy options.
- [setTextCombine:inRange:](settextcombine_inrange_.md): Sets text combine for a range.
- [removeTextCombineInRange:](removetextcombineinrange_.md): Removes text combine from a range of text.
