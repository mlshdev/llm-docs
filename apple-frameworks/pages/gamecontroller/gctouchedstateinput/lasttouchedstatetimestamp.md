> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gctouchedstateinput/lasttouchedstatetimestamp](https://developer.apple.com/documentation/gamecontroller/gctouchedstateinput/lasttouchedstatetimestamp)

# lastTouchedStateTimestamp (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The time of the most recent touch state change.

## Declaration

```swift
var lastTouchedStateTimestamp: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This property isn’t a specific date and time. To determine the time between changes, subtract a previous value from the current value.

## See Also

### Getting change information

- [isTouched](istouched.md): A Boolean value that indicates whether the user touches the button.
- [lastTouchedStateLatency](lasttouchedstatelatency.md): The time in seconds between the last touch state change and the current time.
- [touchedDidChangeHandler](toucheddidchangehandler.md): A block that the element calls when its touch value changes.

# lastTouchedStateTimestamp (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The time of the most recent touch state change.

## Declaration

```objectivec
@property (readonly) NSTimeInterval lastTouchedStateTimestamp;
```

<a id="Discussion"></a>

## Discussion

This property isn’t a specific date and time. To determine the time between changes, subtract a previous value from the current value.

## See Also

### Getting change information

- [touched](istouched.md): A Boolean value that indicates whether the user touches the button.
- [lastTouchedStateLatency](lasttouchedstatelatency.md): The time in seconds between the last touch state change and the current time.
- [touchedDidChangeHandler](toucheddidchangehandler.md): A block that the element calls when its touch value changes.
