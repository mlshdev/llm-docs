> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gctouchedstateinput/lasttouchedstatelatency](https://developer.apple.com/documentation/gamecontroller/gctouchedstateinput/lasttouchedstatelatency)

# lastTouchedStateLatency (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The time in seconds between the last touch state change and the current time.

## Declaration

```swift
var lastTouchedStateLatency: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

Use this property as a minimum latency value that may not include latency that accrues on the device or when it transmits the event.

## See Also

### Getting change information

- [isTouched](istouched.md): A Boolean value that indicates whether the user touches the button.
- [lastTouchedStateTimestamp](lasttouchedstatetimestamp.md): The time of the most recent touch state change.
- [touchedDidChangeHandler](toucheddidchangehandler.md): A block that the element calls when its touch value changes.

# lastTouchedStateLatency (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The time in seconds between the last touch state change and the current time.

## Declaration

```objectivec
@property (readonly) NSTimeInterval lastTouchedStateLatency;
```

<a id="Discussion"></a>

## Discussion

Use this property as a minimum latency value that may not include latency that accrues on the device or when it transmits the event.

## See Also

### Getting change information

- [touched](istouched.md): A Boolean value that indicates whether the user touches the button.
- [lastTouchedStateTimestamp](lasttouchedstatetimestamp.md): The time of the most recent touch state change.
- [touchedDidChangeHandler](toucheddidchangehandler.md): A block that the element calls when its touch value changes.
