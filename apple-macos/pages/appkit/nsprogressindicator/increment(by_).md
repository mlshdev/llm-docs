> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprogressindicator/increment(by:)](https://developer.apple.com/documentation/appkit/nsprogressindicator/increment(by:))

# increment(by:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Advances the progress bar of a determinate progress indicator by the specified amount.

## Declaration

```swift
func increment(by delta: Double)
```

## Parameters

- `delta`: The amount by which to increment the progress bar. For example, if you want to advance a progress bar from 0.0 to 100.0 in 20 steps, you would invoke [increment(by:)](increment%28by_%29.md) 20 times with a delta value of 5.0.

## See Also

### Advancing the progress bar

- [doubleValue](doublevalue.md): The value that indicates the current extent of the progress indicator.
- [minValue](minvalue.md): The minimum value for the progress indicator.
- [maxValue](maxvalue.md): The maximum value for the progress indicator.

# incrementBy: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Advances the progress bar of a determinate progress indicator by the specified amount.

## Declaration

```objectivec
- (void) incrementBy:(double) delta;
```

## Parameters

- `delta`: The amount by which to increment the progress bar. For example, if you want to advance a progress bar from 0.0 to 100.0 in 20 steps, you would invoke [incrementBy:](increment%28by_%29.md) 20 times with a delta value of 5.0.

## See Also

### Advancing the progress bar

- [doubleValue](doublevalue.md): The value that indicates the current extent of the progress indicator.
- [minValue](minvalue.md): The minimum value for the progress indicator.
- [maxValue](maxvalue.md): The maximum value for the progress indicator.
