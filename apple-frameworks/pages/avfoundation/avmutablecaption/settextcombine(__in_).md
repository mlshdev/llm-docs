> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecaption/settextcombine(_:in:)](https://developer.apple.com/documentation/avfoundation/avmutablecaption/settextcombine(_:in:))

# setTextCombine(\_:in:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Sets text combine for a range.

## Declaration

```swift
@nonobjc func setTextCombine(_ textCombine: AVCaption.TextCombine, in range: NSRange)
```

## Parameters

- `textCombine`: The text combine.
- `range`: The range to which the text combine applies.

## See Also

### Configuring advanced typography

- [AVCaption.Ruby](../avcaption/ruby.md): An object that presents ruby characters.
- [setRuby(\_:in:)](setruby%28__in_%29.md): Sets ruby text for a range.
- [removeRuby(in:)](removeruby%28in_%29.md): Removes ruby text from a range.
- [AVCaption.TextCombine](../avcaption/textcombine.md): The caption’s supported rendering policy options.
- [removeTextCombine(in:)](removetextcombine%28in_%29.md): Removes text combine from a range.
