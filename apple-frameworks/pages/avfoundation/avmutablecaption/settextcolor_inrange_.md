> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecaption/settextcolor:inrange:](https://developer.apple.com/documentation/avfoundation/avmutablecaption/settextcolor:inrange:)

# setTextColor:inRange:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

Sets the text color for a range of text.

## Declaration

```objectivec
- (void) setTextColor:(CGColorRef) color inRange:(NSRange) range;
```

## Parameters

- `color`: The text color.
- `range`: The range to which this text color applies.

## See Also

### Configuring colors

- [removeTextColorInRange:](removetextcolorinrange_.md): Removes the text color for a range of text.
- [setBackgroundColor:inRange:](setbackgroundcolor_inrange_.md): Sets the background color for a range of text.
- [removeBackgroundColorInRange:](removebackgroundcolorinrange_.md): Removes a background color from a range of text.
