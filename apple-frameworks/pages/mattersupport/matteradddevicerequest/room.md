> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddevicerequest/room](https://developer.apple.com/documentation/mattersupport/matteradddevicerequest/room)

# MatterAddDeviceRequest.Room

**Framework:** MatterSupport  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

The representation of a room that appears in the picker during device setup.

## Declaration

```swift
struct Room
```

## Topics

### Creating the room

- [init(from:)](init%28from_%29.md): Create the request from a decoder.
- [init(displayName:)](room/init%28displayname_%29.md): Creates a new room.

### Getting the properties

- [displayName](room/displayname.md): The name of the room that appears in the picker.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting up the request

- [MatterAddDeviceRequest.Home](home.md): The representation of a home that appears in the picker during device setup.
- [MatterAddDeviceRequest.Topology](topology-swift.struct.md): Information describing the properties of the ecosystem.
- [setupPayload](setuppayload.md): The payload to use for Matter device setup.
- [topology](topology-swift.property.md): A configuration object representing the topology of the initiating ecosystem.
