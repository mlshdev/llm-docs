> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicephysicalinputstate/lasteventlatency](https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinputstate/lasteventlatency)

# lastEventLatency (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The time in seconds between the last event and the current time.

## Declaration

```swift
var lastEventLatency: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

Use this property as a minimum latency value that may not include latency that accrues on the device or when it transmits the event. If the host goes to sleep between when the event occurs and when you get this property, the value may not be accurate.

## See Also

### Getting change information

- [lastEventTimestamp](lasteventtimestamp.md): The time of the most recent event.

# lastEventLatency (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The time in seconds between the last event and the current time.

## Declaration

```objectivec
@property (readonly) NSTimeInterval lastEventLatency;
```

<a id="Discussion"></a>

## Discussion

Use this property as a minimum latency value that may not include latency that accrues on the device or when it transmits the event. If the host goes to sleep between when the event occurs and when you get this property, the value may not be accurate.

## See Also

### Getting change information

- [lastEventTimestamp](lasteventtimestamp.md): The time of the most recent event.
