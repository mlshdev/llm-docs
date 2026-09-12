> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevicelocation](https://developer.apple.com/documentation/metal/mtldevicelocation)

# MTLDeviceLocation (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** macOS 10.15+ (deprecated in 27.0)

Indicates the location of the GPU relative to the system it’s connect to.

> Not applicable on Apple Silicon

## Declaration

```swift
enum MTLDeviceLocation
```

<a id="overview"></a>

## Overview

Check the location of a GPU by checking the [location](mtldevice/location.md) property of its [MTLDevice](mtldevice.md) instance.

## Topics

### Determining the GPU’s location

- [MTLDeviceLocation.builtIn](mtldevicelocation/builtin.md): Deprecated. A location that indicates the GPU is permanently connected to the system internally.
- [MTLDeviceLocation.slot](mtldevicelocation/slot.md): Deprecated. A GPU location that indicates a person connected the GPU to a system’s internal slot.
- [MTLDeviceLocation.external](mtldevicelocation/external.md): Deprecated. A GPU location that indicates a person connected the GPU to the system with an external interface, such as Thunderbolt.
- [MTLDeviceLocation.unspecified](mtldevicelocation/unspecified.md): Deprecated. A value that indicates the system can’t determine how the GPU connects to it.

### Initializers

- [init(rawValue:)](mtldevicelocation/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying a GPU device

- [name](mtldevice/name.md): The full name of the GPU device.
- [architecture](mtldevice/architecture.md): The architectural details of the GPU device.
- [MTLArchitecture](mtlarchitecture.md): A class that contains the architectural details of a GPU device.
- [registryID](mtldevice/registryid.md): The GPU device’s registry identifier.
- [location](mtldevice/location.md): Deprecated. The physical location of the GPU relative to the system.
- [locationNumber](mtldevice/locationnumber.md): Deprecated. A specific GPU position based on its general location.
- [isLowPower](mtldevice/islowpower.md): Deprecated. A Boolean value that indicates whether the GPU lowers its performance to conserve energy.
- [isRemovable](mtldevice/isremovable.md): Deprecated. A Boolean value that indicates whether the GPU is removable.
- [isHeadless](mtldevice/isheadless.md): Deprecated. A Boolean value that indicates whether a GPU device doesn’t have a connection to a display.
- [peerGroupID](mtldevice/peergroupid.md): Deprecated. The peer group ID the GPU belongs to, if applicable.
- [peerCount](mtldevice/peercount.md): Deprecated. The total number of GPUs in the peer group, if applicable.
- [peerIndex](mtldevice/peerindex.md): Deprecated. The unique identifier for a GPU in a peer group.

# MTLDeviceLocation (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** macOS 10.15+ (deprecated in 27.0)

Indicates the location of the GPU relative to the system it’s connect to.

> Not applicable on Apple Silicon

## Declaration

```objectivec
enum MTLDeviceLocation : NSUInteger;
```

<a id="overview"></a>

## Overview

Check the location of a GPU by checking the [location](mtldevice/location.md) property of its [MTLDevice](mtldevice.md) instance.

## Topics

### Determining the GPU’s location

- [MTLDeviceLocationBuiltIn](mtldevicelocation/builtin.md): Deprecated. A location that indicates the GPU is permanently connected to the system internally.
- [MTLDeviceLocationSlot](mtldevicelocation/slot.md): Deprecated. A GPU location that indicates a person connected the GPU to a system’s internal slot.
- [MTLDeviceLocationExternal](mtldevicelocation/external.md): Deprecated. A GPU location that indicates a person connected the GPU to the system with an external interface, such as Thunderbolt.
- [MTLDeviceLocationUnspecified](mtldevicelocation/unspecified.md): Deprecated. A value that indicates the system can’t determine how the GPU connects to it.

## See Also

### Identifying a GPU device

- [name](mtldevice/name.md): The full name of the GPU device.
- [architecture](mtldevice/architecture.md): The architectural details of the GPU device.
- [MTLArchitecture](mtlarchitecture.md): A class that contains the architectural details of a GPU device.
- [registryID](mtldevice/registryid.md): The GPU device’s registry identifier.
- [location](mtldevice/location.md): Deprecated. The physical location of the GPU relative to the system.
- [locationNumber](mtldevice/locationnumber.md): Deprecated. A specific GPU position based on its general location.
- [lowPower](mtldevice/islowpower.md): Deprecated. A Boolean value that indicates whether the GPU lowers its performance to conserve energy.
- [removable](mtldevice/isremovable.md): Deprecated. A Boolean value that indicates whether the GPU is removable.
- [headless](mtldevice/isheadless.md): Deprecated. A Boolean value that indicates whether a GPU device doesn’t have a connection to a display.
- [peerGroupID](mtldevice/peergroupid.md): Deprecated. The peer group ID the GPU belongs to, if applicable.
- [peerCount](mtldevice/peercount.md): Deprecated. The total number of GPUs in the peer group, if applicable.
- [peerIndex](mtldevice/peerindex.md): Deprecated. The unique identifier for a GPU in a peer group.
