> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/audioaccessorykit/accessorycontroldevice/capabilities](https://developer.apple.com/documentation/audioaccessorykit/accessorycontroldevice/capabilities)

# AccessoryControlDevice.Capabilities

**Framework:** AudioAccessoryKit  
**Kind:** Structure  
**Availability:** iOS 26.4+

A set of capabilities that an audio accessory supports.

## Declaration

```swift
struct Capabilities
```

<a id="overview"></a>

## Overview

The [AccessoryControlDevice](../accessorycontroldevice.md) class’s initializer takes an argument of this type. Use this structure to specify which features your accessory supports when initializing an audio accessory configuration.

## Topics

### Capability options

- [audioSwitching](capabilities/audioswitching.md): A capability indicating the device supports automatic audio switching.
- [placement](capabilities/placement.md): A capability indicating the device supports placement detection.

### Type Properties

- [audioSpatialization](capabilities/audiospatialization.md): Device supports audio spatialization
- [headTracking](capabilities/headtracking.md): Device supports head tracking for audio spatialization

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Device characteristics

- [AccessoryControlDevice.Placement](placement.md): The physical placement of an audio accessory.
- [AccessoryControlDevice.Configuration](configuration-swift.struct.md): The configuration for an accessory.
