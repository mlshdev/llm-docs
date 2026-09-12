> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddeviceevent/device](https://developer.apple.com/documentation/devicediscoveryextension/dddeviceevent/device)

# device (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

An object that describes a third-party media receiver.

## Declaration

```swift
var device: DDDevice { get }
```

## See Also

### Configuring a device event

- [eventType](eventtype-swift.property.md): A type for the event that describes the discovery status.
- [DDDeviceEvent.EventType](eventtype-swift.enum.md): Identifiers for the types of events that occur in the device discovery life cycle.

# device (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

An object that describes a third-party media receiver.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) DDDevice * device;
```

## See Also

### Configuring a device event

- [eventType](eventtype-swift.property.md): A type for the event that describes the discovery status.
- [DDEventType](eventtype-swift.enum.md): Identifiers for the types of events that occur in the device discovery life cycle.
