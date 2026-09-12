> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/getperiodicdelay(_:interval:)](https://developer.apple.com/documentation/appkit/nsbuttoncell/getperiodicdelay(_:interval:))

# getPeriodicDelay(\_:interval:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns by reference the delay and interval periods for a continuous button.

## Declaration

```swift
func getPeriodicDelay(_ delay: UnsafeMutablePointer<Float>, interval: UnsafeMutablePointer<Float>)
```

## Parameters

- `delay`: On return, the amount of time (in seconds) that the button will pause before starting to periodically send action messages to the target object. Default values are taken from the user’s defaults (60 seconds maximum); if the user hasn’t specified a default value, this defaults to 0.4 seconds.
- `interval`: On return, the amount of time (in seconds) between each action message. Default values are taken from the user’s defaults (60 seconds maximum); if the user hasn’t specified a default value, this defaults to 0.075 seconds.

## See Also

### Related Documentation

- [isContinuous](../nscell/iscontinuous.md): A Boolean value indicating whether the cell sends its action message continuously during mouse tracking.

### Managing the Repeat Interval

- [setPeriodicDelay(\_:interval:)](setperiodicdelay%28__interval_%29.md): Sets the message delay and interval for the button.

# getPeriodicDelay:interval: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns by reference the delay and interval periods for a continuous button.

## Declaration

```objectivec
- (void) getPeriodicDelay:(float *) delay interval:(float *) interval;
```

## Parameters

- `delay`: On return, the amount of time (in seconds) that the button will pause before starting to periodically send action messages to the target object. Default values are taken from the user’s defaults (60 seconds maximum); if the user hasn’t specified a default value, this defaults to 0.4 seconds.
- `interval`: On return, the amount of time (in seconds) between each action message. Default values are taken from the user’s defaults (60 seconds maximum); if the user hasn’t specified a default value, this defaults to 0.075 seconds.

## See Also

### Related Documentation

- [continuous](../nscell/iscontinuous.md): A Boolean value indicating whether the cell sends its action message continuously during mouse tracking.

### Managing the Repeat Interval

- [setPeriodicDelay:interval:](setperiodicdelay%28__interval_%29.md): Sets the message delay and interval for the button.
