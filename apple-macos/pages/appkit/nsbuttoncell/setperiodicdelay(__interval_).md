> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/setperiodicdelay(_:interval:)](https://developer.apple.com/documentation/appkit/nsbuttoncell/setperiodicdelay(_:interval:))

# setPeriodicDelay(\_:interval:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the message delay and interval for the button.

## Declaration

```swift
func setPeriodicDelay(_ delay: Float, interval: Float)
```

## Parameters

- `delay`: The amount of time (in seconds) that a continuous button will pause before starting to periodically send action messages to the target object.

  The maximum value is 60.0 seconds; if a larger value is supplied, it’s ignored, and 60.0 seconds is used.
- `interval`: The amount of time (in seconds) between each action message.

  The maximum value is 60.0 seconds; if a larger value is supplied, it’s ignored, and 60.0 seconds is used.

<a id="Discussion"></a>

## Discussion

These values are used if the button is configured (by a [isContinuous](../nscell/iscontinuous.md) message) to continuously send the action message to the target object while tracking the mouse.

## See Also

### Related Documentation

- [isContinuous](../nscell/iscontinuous.md): A Boolean value indicating whether the cell sends its action message continuously during mouse tracking.

### Managing the Repeat Interval

- [getPeriodicDelay(\_:interval:)](getperiodicdelay%28__interval_%29.md): Returns by reference the delay and interval periods for a continuous button.

# setPeriodicDelay:interval: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the message delay and interval for the button.

## Declaration

```objectivec
- (void) setPeriodicDelay:(float) delay interval:(float) interval;
```

## Parameters

- `delay`: The amount of time (in seconds) that a continuous button will pause before starting to periodically send action messages to the target object.

  The maximum value is 60.0 seconds; if a larger value is supplied, it’s ignored, and 60.0 seconds is used.
- `interval`: The amount of time (in seconds) between each action message.

  The maximum value is 60.0 seconds; if a larger value is supplied, it’s ignored, and 60.0 seconds is used.

<a id="Discussion"></a>

## Discussion

These values are used if the button is configured (by a [continuous](../nscell/iscontinuous.md) message) to continuously send the action message to the target object while tracking the mouse.

## See Also

### Related Documentation

- [continuous](../nscell/iscontinuous.md): A Boolean value indicating whether the cell sends its action message continuously during mouse tracking.

### Managing the Repeat Interval

- [getPeriodicDelay:interval:](getperiodicdelay%28__interval_%29.md): Returns by reference the delay and interval periods for a continuous button.
