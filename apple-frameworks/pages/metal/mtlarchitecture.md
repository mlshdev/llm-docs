> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlarchitecture](https://developer.apple.com/documentation/metal/mtlarchitecture)

# MTLArchitecture (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A class that contains the architectural details of a GPU device.

## Declaration

```swift
class MTLArchitecture
```

## Topics

### Inspecting a GPU device’s architecture details

- [name](mtlarchitecture/name.md): The name of a GPU device’s architecture.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Identifying a GPU device

- [name](mtldevice/name.md): The full name of the GPU device.
- [architecture](mtldevice/architecture.md): The architectural details of the GPU device.
- [registryID](mtldevice/registryid.md): The GPU device’s registry identifier.
- [location](mtldevice/location.md): Deprecated. The physical location of the GPU relative to the system.
- [MTLDeviceLocation](mtldevicelocation.md): Deprecated. Indicates the location of the GPU relative to the system it’s connect to.
- [locationNumber](mtldevice/locationnumber.md): Deprecated. A specific GPU position based on its general location.
- [isLowPower](mtldevice/islowpower.md): Deprecated. A Boolean value that indicates whether the GPU lowers its performance to conserve energy.
- [isRemovable](mtldevice/isremovable.md): Deprecated. A Boolean value that indicates whether the GPU is removable.
- [isHeadless](mtldevice/isheadless.md): Deprecated. A Boolean value that indicates whether a GPU device doesn’t have a connection to a display.
- [peerGroupID](mtldevice/peergroupid.md): Deprecated. The peer group ID the GPU belongs to, if applicable.
- [peerCount](mtldevice/peercount.md): Deprecated. The total number of GPUs in the peer group, if applicable.
- [peerIndex](mtldevice/peerindex.md): Deprecated. The unique identifier for a GPU in a peer group.

# MTLArchitecture (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A class that contains the architectural details of a GPU device.

## Declaration

```objectivec
@interface MTLArchitecture : NSObject
```

## Topics

### Inspecting a GPU device’s architecture details

- [name](mtlarchitecture/name.md): The name of a GPU device’s architecture.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Identifying a GPU device

- [name](mtldevice/name.md): The full name of the GPU device.
- [architecture](mtldevice/architecture.md): The architectural details of the GPU device.
- [registryID](mtldevice/registryid.md): The GPU device’s registry identifier.
- [location](mtldevice/location.md): Deprecated. The physical location of the GPU relative to the system.
- [MTLDeviceLocation](mtldevicelocation.md): Deprecated. Indicates the location of the GPU relative to the system it’s connect to.
- [locationNumber](mtldevice/locationnumber.md): Deprecated. A specific GPU position based on its general location.
- [lowPower](mtldevice/islowpower.md): Deprecated. A Boolean value that indicates whether the GPU lowers its performance to conserve energy.
- [removable](mtldevice/isremovable.md): Deprecated. A Boolean value that indicates whether the GPU is removable.
- [headless](mtldevice/isheadless.md): Deprecated. A Boolean value that indicates whether a GPU device doesn’t have a connection to a display.
- [peerGroupID](mtldevice/peergroupid.md): Deprecated. The peer group ID the GPU belongs to, if applicable.
- [peerCount](mtldevice/peercount.md): Deprecated. The total number of GPUs in the peer group, if applicable.
- [peerIndex](mtldevice/peerindex.md): Deprecated. The unique identifier for a GPU in a peer group.
