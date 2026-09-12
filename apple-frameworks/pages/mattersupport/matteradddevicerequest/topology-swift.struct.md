> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddevicerequest/topology-swift.struct](https://developer.apple.com/documentation/mattersupport/matteradddevicerequest/topology-swift.struct)

# MatterAddDeviceRequest.Topology

**Framework:** MatterSupport  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

Information describing the properties of the ecosystem.

## Declaration

```swift
struct Topology
```

<a id="overview"></a>

## Overview

The topology of a fabric consists of its homes, rooms, and devices. The number of homes included in this class determines whether the setup presents a home selection step. If there are two or more homes, the user selects one home to add the device to.

## Topics

### Creating the topology

- [init(from:)](init%28from_%29.md): Create the request from a decoder.
- [init(ecosystemName:homes:)](topology-swift.struct/init%28ecosystemname_homes_%29.md): Creates the topology.

### Getting the properties

- [ecosystemName](topology-swift.struct/ecosystemname.md): The name of your ecosystem.
- [homes](topology-swift.struct/homes.md): An array of available homes to add the new device into.

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
- [MatterAddDeviceRequest.Room](room.md): The representation of a room that appears in the picker during device setup.
- [setupPayload](setuppayload.md): The payload to use for Matter device setup.
- [topology](topology-swift.property.md): A configuration object representing the topology of the initiating ecosystem.
