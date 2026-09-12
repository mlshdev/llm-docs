> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avcustomroutingeventreason](https://developer.apple.com/documentation/avrouting/avcustomroutingeventreason)

# AVCustomRoutingEventReason (Swift)

**Framework:** AVRouting  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Values that indicate the reason for a routing event.

## Declaration

```swift
enum AVCustomRoutingEventReason
```

## Topics

### Reasons

- [AVCustomRoutingEventReason.activate](avcustomroutingeventreason/activate.md): A value that indicates that a user selects a route in the picker.
- [AVCustomRoutingEventReason.deactivate](avcustomroutingeventreason/deactivate.md): A value that indicates that a user deselects a route in the picker.
- [AVCustomRoutingEventReason.reactivate](avcustomroutingeventreason/reactivate.md): A value that indicates to reactivate a route a user authorized previously.

### Initializers

- [init(rawValue:)](avcustomroutingeventreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting an event

- [route](avcustomroutingevent/route.md): A route for the event.
- [AVCustomDeviceRoute](avcustomdeviceroute.md): An object that represents a custom device route.
- [reason](avcustomroutingevent/reason.md): A reason for an event, such as a user request to activate or deactivate a route.

# AVCustomRoutingEventReason (Objective-C)

**Framework:** AVRouting  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Values that indicate the reason for a routing event.

## Declaration

```objectivec
enum AVCustomRoutingEventReason : NSInteger;
```

## Topics

### Reasons

- [AVCustomRoutingEventReasonActivate](avcustomroutingeventreason/activate.md): A value that indicates that a user selects a route in the picker.
- [AVCustomRoutingEventReasonDeactivate](avcustomroutingeventreason/deactivate.md): A value that indicates that a user deselects a route in the picker.
- [AVCustomRoutingEventReasonReactivate](avcustomroutingeventreason/reactivate.md): A value that indicates to reactivate a route a user authorized previously.

## See Also

### Inspecting an event

- [route](avcustomroutingevent/route.md): A route for the event.
- [AVCustomDeviceRoute](avcustomdeviceroute.md): An object that represents a custom device route.
- [reason](avcustomroutingevent/reason.md): A reason for an event, such as a user request to activate or deactivate a route.
