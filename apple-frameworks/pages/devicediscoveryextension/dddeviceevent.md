> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddeviceevent](https://developer.apple.com/documentation/devicediscoveryextension/dddeviceevent)

# DDDeviceEvent (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

An object that provides a device or communicates its change in status.

## Declaration

```swift
class DDDeviceEvent
```

<a id="overview"></a>

## Overview

The extension creates and configures an instance of this class to represent a moment of interest in the device discovery life cycle. The event’s `eventType` ([DDDeviceEvent.EventType](dddeviceevent/eventtype-swift.enum.md)) describes a particular status.

For example, when the extension discovers a device of interest, it instantiates an instance of this class with the type [DDDeviceEvent.EventType.deviceFound](dddeviceevent/eventtype-swift.enum/devicefound.md).

```swift
var session: DDDiscoverySession?
...
var deviceEvent = DDDeviceEvent(eventType: .deviceFound, device: ddDevice)
```

Then, the extension provides the discovered device to the system using [report(\_:)](dddiscoverysession/report%28__%29.md) for eventual display in the route picker view ([AVRoutePickerView](../avkit/avroutepickerview.md)).

```swift
session?.report(deviceEvent)
```

## Topics

### Creating a device event

- [init(eventType:device:)](dddeviceevent/init%28eventtype_device_%29.md): Creates an event object that conveys status for a discovered device of interest.

### Configuring a device event

- [eventType](dddeviceevent/eventtype-swift.property.md): A type for the event that describes the discovery status.
- [DDDeviceEvent.EventType](dddeviceevent/eventtype-swift.enum.md): Identifiers for the types of events that occur in the device discovery life cycle.
- [device](dddeviceevent/device.md): An object that describes a third-party media receiver.

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

## See Also

### Life cycle

- [DDDeviceEvent.EventType](dddeviceevent/eventtype-swift.enum.md): Identifiers for the types of events that occur in the device discovery life cycle.
- [DDEventTypeToString(\_:)](ddeventtypetostring%28__%29.md): Returns human-readable text for the specified event identifier.
- [DDEventHandler](ddeventhandler.md): A function that the extension invokes to signal an event.

# DDDeviceEvent (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

An object that provides a device or communicates its change in status.

## Declaration

```objectivec
@interface DDDeviceEvent : NSObject
```

<a id="overview"></a>

## Overview

The extension creates and configures an instance of this class to represent a moment of interest in the device discovery life cycle. The event’s `eventType` ([DDEventType](dddeviceevent/eventtype-swift.enum.md)) describes a particular status.

For example, when the extension discovers a device of interest, it instantiates an instance of this class with the type [DDEventTypeDeviceFound](dddeviceevent/eventtype-swift.enum/devicefound.md).

```swift
var session: DDDiscoverySession?
...
var deviceEvent = DDDeviceEvent(eventType: .deviceFound, device: ddDevice)
```

Then, the extension provides the discovered device to the system using [reportEvent:](dddiscoverysession/report%28__%29.md) for eventual display in the route picker view ([AVRoutePickerView](../avkit/avroutepickerview.md)).

```swift
session?.report(deviceEvent)
```

## Topics

### Creating a device event

- [initWithEventType:device:](dddeviceevent/init%28eventtype_device_%29.md): Creates an event object that conveys status for a discovered device of interest.

### Configuring a device event

- [eventType](dddeviceevent/eventtype-swift.property.md): A type for the event that describes the discovery status.
- [DDEventType](dddeviceevent/eventtype-swift.enum.md): Identifiers for the types of events that occur in the device discovery life cycle.
- [device](dddeviceevent/device.md): An object that describes a third-party media receiver.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Life cycle

- [DDEventType](dddeviceevent/eventtype-swift.enum.md): Identifiers for the types of events that occur in the device discovery life cycle.
- [DDEventTypeToString](ddeventtypetostring%28__%29.md): Returns human-readable text for the specified event identifier.
- [DDEventHandler](ddeventhandler.md): A function that the extension invokes to signal an event.
