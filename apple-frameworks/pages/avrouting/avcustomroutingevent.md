> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avcustomroutingevent](https://developer.apple.com/documentation/avrouting/avcustomroutingevent)

# AVCustomRoutingEvent (Swift)

**Framework:** AVRouting  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that represents an event that occurs on a route.

## Declaration

```swift
class AVCustomRoutingEvent
```

<a id="overview"></a>

## Overview

Depending on the route’s reason, apps establish or tear down a connection to a specified route.

## Topics

### Inspecting an event

- [route](avcustomroutingevent/route.md): A route for the event.
- [AVCustomDeviceRoute](avcustomdeviceroute.md): An object that represents a custom device route.
- [reason](avcustomroutingevent/reason.md): A reason for an event, such as a user request to activate or deactivate a route.
- [AVCustomRoutingEventReason](avcustomroutingeventreason.md): Values that indicate the reason for a routing event.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Media routing

- [AVCustomRoutingController](avcustomroutingcontroller.md): An object that manages the connection from a device to a destination.
- [AVCustomRoutingControllerDelegate](avcustomroutingcontrollerdelegate.md): A protocol for delegates of a custom routing controller.
- [AVCustomRoutingActionItem](avcustomroutingactionitem.md): An object that represents a custom action item to display in a device route picker.

# AVCustomRoutingEvent (Objective-C)

**Framework:** AVRouting  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that represents an event that occurs on a route.

## Declaration

```objectivec
@interface AVCustomRoutingEvent : NSObject
```

<a id="overview"></a>

## Overview

Depending on the route’s reason, apps establish or tear down a connection to a specified route.

## Topics

### Inspecting an event

- [route](avcustomroutingevent/route.md): A route for the event.
- [AVCustomDeviceRoute](avcustomdeviceroute.md): An object that represents a custom device route.
- [reason](avcustomroutingevent/reason.md): A reason for an event, such as a user request to activate or deactivate a route.
- [AVCustomRoutingEventReason](avcustomroutingeventreason.md): Values that indicate the reason for a routing event.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Media routing

- [AVCustomRoutingController](avcustomroutingcontroller.md): An object that manages the connection from a device to a destination.
- [AVCustomRoutingControllerDelegate](avcustomroutingcontrollerdelegate.md): A protocol for delegates of a custom routing controller.
- [AVCustomRoutingActionItem](avcustomroutingactionitem.md): An object that represents a custom action item to display in a device route picker.
