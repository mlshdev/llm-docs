> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecaption/setbackgroundcolor:inrange:](https://developer.apple.com/documentation/avfoundation/avmutablecaption/setbackgroundcolor:inrange:)

# setBackgroundColor:inRange:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS

Sets the background color for a range of text.

## Declaration

```objectivec
- (void) setBackgroundColor:(CGColorRef) color inRange:(NSRange) range;
```

## Parameters

- `color`: The background color.
- `range`: The range to which this background color applies.

## See Also

### Configuring colors

- [setTextColor:inRange:](settextcolor_inrange_.md): Sets the text color for a range of text.
- [removeTextColorInRange:](removetextcolorinrange_.md): Removes the text color for a range of text.
- [removeBackgroundColorInRange:](removebackgroundcolorinrange_.md): Removes a background color from a range of text.
