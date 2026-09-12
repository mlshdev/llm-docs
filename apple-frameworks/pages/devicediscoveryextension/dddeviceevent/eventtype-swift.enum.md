> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddeviceevent/eventtype-swift.enum](https://developer.apple.com/documentation/devicediscoveryextension/dddeviceevent/eventtype-swift.enum)

# DDDeviceEvent.EventType (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Identifiers for the types of events that occur in the device discovery life cycle.

## Declaration

```swift
enum EventType
```

<a id="overview"></a>

## Overview

An event (`DDEvent`) `eventType` is of this type.

## Topics

### Distinguishing event types

- [DDDeviceEvent.EventType.unknown](eventtype-swift.enum/unknown.md): A value for uninitialized event types.
- [DDDeviceEvent.EventType.deviceFound](eventtype-swift.enum/devicefound.md): A status that indicates when the extension finds the device of interest.
- [DDDeviceEvent.EventType.deviceLost](eventtype-swift.enum/devicelost.md): A status that indicates when the extension loses a connection to the device of interest.
- [DDDeviceEvent.EventType.deviceChanged](eventtype-swift.enum/devicechanged.md): A status that indicates when the device of interest changes configuration.

### Initializers

- [init(rawValue:)](eventtype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Life cycle

- [DDDeviceEvent](../dddeviceevent.md): An object that provides a device or communicates its change in status.
- [DDEventTypeToString(\_:)](../ddeventtypetostring%28__%29.md): Returns human-readable text for the specified event identifier.
- [DDEventHandler](../ddeventhandler.md): A function that the extension invokes to signal an event.

# DDEventType (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Identifiers for the types of events that occur in the device discovery life cycle.

## Declaration

```objectivec
enum DDEventType : NSInteger;
```

<a id="overview"></a>

## Overview

An event (`DDEvent`) `eventType` is of this type.

## Topics

### Distinguishing event types

- [DDEventTypeUnknown](eventtype-swift.enum/unknown.md): A value for uninitialized event types.
- [DDEventTypeDeviceFound](eventtype-swift.enum/devicefound.md): A status that indicates when the extension finds the device of interest.
- [DDEventTypeDeviceLost](eventtype-swift.enum/devicelost.md): A status that indicates when the extension loses a connection to the device of interest.
- [DDEventTypeDeviceChanged](eventtype-swift.enum/devicechanged.md): A status that indicates when the device of interest changes configuration.

## See Also

### Life cycle

- [DDDeviceEvent](../dddeviceevent.md): An object that provides a device or communicates its change in status.
- [DDEventTypeToString](../ddeventtypetostring%28__%29.md): Returns human-readable text for the specified event identifier.
- [DDEventHandler](../ddeventhandler.md): A function that the extension invokes to signal an event.
