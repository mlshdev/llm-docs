> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avcustomdeviceroute](https://developer.apple.com/documentation/avrouting/avcustomdeviceroute)

# AVCustomDeviceRoute (Swift)

**Framework:** AVRouting  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that represents a custom device route.

## Declaration

```swift
class AVCustomDeviceRoute
```

<a id="overview"></a>

## Overview

Use the value of a route’s [networkEndpoint](avcustomdeviceroute/networkendpoint.md) or [bluetoothIdentifier](avcustomdeviceroute/bluetoothidentifier.md) property to establish a connection to a device. Typically, only one of the properties provides a valid value, depending on the type of device. In certain cases, both properties may provide valid values, in which case your app determines which one to use.

## Topics

### Identifying routes

- [bluetoothIdentifier](avcustomdeviceroute/bluetoothidentifier.md): An identifier to use to establish a connection to a Bluetooth device.
- [networkEndpoint](avcustomdeviceroute/networkendpoint.md): A local or remote endpoint to connect to.

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

### Inspecting an event

- [route](avcustomroutingevent/route.md): A route for the event.
- [reason](avcustomroutingevent/reason.md): A reason for an event, such as a user request to activate or deactivate a route.
- [AVCustomRoutingEventReason](avcustomroutingeventreason.md): Values that indicate the reason for a routing event.

# AVCustomDeviceRoute (Objective-C)

**Framework:** AVRouting  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that represents a custom device route.

## Declaration

```objectivec
@interface AVCustomDeviceRoute : NSObject
```

<a id="overview"></a>

## Overview

Use the value of a route’s [networkEndpoint](avcustomdeviceroute/networkendpoint.md) or [bluetoothIdentifier](avcustomdeviceroute/bluetoothidentifier.md) property to establish a connection to a device. Typically, only one of the properties provides a valid value, depending on the type of device. In certain cases, both properties may provide valid values, in which case your app determines which one to use.

## Topics

### Identifying routes

- [bluetoothIdentifier](avcustomdeviceroute/bluetoothidentifier.md): An identifier to use to establish a connection to a Bluetooth device.
- [networkEndpoint](avcustomdeviceroute/networkendpoint.md): A local or remote endpoint to connect to.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Inspecting an event

- [route](avcustomroutingevent/route.md): A route for the event.
- [reason](avcustomroutingevent/reason.md): A reason for an event, such as a user request to activate or deactivate a route.
- [AVCustomRoutingEventReason](avcustomroutingeventreason.md): Values that indicate the reason for a routing event.
