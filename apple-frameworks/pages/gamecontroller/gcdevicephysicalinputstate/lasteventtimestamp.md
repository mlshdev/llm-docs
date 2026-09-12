> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicephysicalinputstate/lasteventtimestamp](https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinputstate/lasteventtimestamp)

# lastEventTimestamp (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The time of the most recent event.

## Declaration

```swift
var lastEventTimestamp: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This property isn’t relative to any specific date and time. To determine the time between events, subtract a previous value of this property from the current value. You can also compare [lastEventTimestamp](lasteventtimestamp.md) properties of two different devices to determine which event occurs first.

## See Also

### Getting change information

- [lastEventLatency](lasteventlatency.md): The time in seconds between the last event and the current time.

# lastEventTimestamp (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The time of the most recent event.

## Declaration

```objectivec
@property (readonly) NSTimeInterval lastEventTimestamp;
```

<a id="Discussion"></a>

## Discussion

This property isn’t relative to any specific date and time. To determine the time between events, subtract a previous value of this property from the current value. You can also compare [lastEventTimestamp](lasteventtimestamp.md) properties of two different devices to determine which event occurs first.

## See Also

### Getting change information

- [lastEventLatency](lasteventlatency.md): The time in seconds between the last event and the current time.
