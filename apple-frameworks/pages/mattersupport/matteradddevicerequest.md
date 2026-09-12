> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddevicerequest](https://developer.apple.com/documentation/mattersupport/matteradddevicerequest)

# MatterAddDeviceRequest

**Framework:** MatterSupport  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

A request that adds and sets up a device into an ecosystem.

## Declaration

```swift
struct MatterAddDeviceRequest
```

## Topics

### Creating the request

- [init(from:)](matteradddevicerequest/init%28from_%29.md): Create the request from a decoder.
- [init(topology:setupPayload:showing:)](matteradddevicerequest/init%28topology_setuppayload_showing_%29.md): Create the request.
- [init(topology:setupPayload:showing:shouldScanNetworks:)](matteradddevicerequest/init%28topology_setuppayload_showing_shouldscannetworks_%29.md): Create the request with an optional network scan.

### Setting up the request

- [MatterAddDeviceRequest.Home](matteradddevicerequest/home.md): The representation of a home that appears in the picker during device setup.
- [MatterAddDeviceRequest.Room](matteradddevicerequest/room.md): The representation of a room that appears in the picker during device setup.
- [MatterAddDeviceRequest.Topology](matteradddevicerequest/topology-swift.struct.md): Information describing the properties of the ecosystem.
- [setupPayload](matteradddevicerequest/setuppayload.md): The payload to use for Matter device setup.
- [topology](matteradddevicerequest/topology-swift.property.md): A configuration object representing the topology of the initiating ecosystem.

### Defining the device criteria

- [MatterAddDeviceRequest.DeviceCriteria](matteradddevicerequest/devicecriteria.md): A predicate to match against possible devices that may appear in the picker.
- [showDeviceCriteria](matteradddevicerequest/showdevicecriteria.md): A predicate that filters what devices appear in the picker.

### Performing the request

- [shouldScanNetworks](matteradddevicerequest/shouldscannetworks.md): A flag that indicates whether to receive network scan results.
- [perform()](matteradddevicerequest/perform%28%29.md): Launch the user interface to set up a Matter device in the ecosystem.

### Type Properties

- [isSupported](matteradddevicerequest/issupported.md): A flag that indicates whether `MatterAddDeviceRequest` usage is supported

### Default Implementations

- [Decodable Implementations](matteradddevicerequest/decodable-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adding a device

- [Adding Matter support to your ecosystem](adding-matter-support-to-your-ecosystem.md): Allow people to add Matter accessories to your platform.
- [MatterAddDeviceExtensionRequestHandler](matteradddeviceextensionrequesthandler.md): The object that handles configuration and commissioning of a device into an ecosystem.
