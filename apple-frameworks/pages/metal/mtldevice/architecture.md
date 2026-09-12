> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/architecture](https://developer.apple.com/documentation/metal/mtldevice/architecture)

# architecture (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The architectural details of the GPU device.

## Declaration

```swift
var architecture: MTLArchitecture { get }
```

## See Also

### Identifying a GPU device

- [name](name.md): The full name of the GPU device.
- [MTLArchitecture](../mtlarchitecture.md): A class that contains the architectural details of a GPU device.
- [registryID](registryid.md): The GPU device’s registry identifier.
- [location](location.md): Deprecated. The physical location of the GPU relative to the system.
- [MTLDeviceLocation](../mtldevicelocation.md): Deprecated. Indicates the location of the GPU relative to the system it’s connect to.
- [locationNumber](locationnumber.md): Deprecated. A specific GPU position based on its general location.
- [isLowPower](islowpower.md): Deprecated. A Boolean value that indicates whether the GPU lowers its performance to conserve energy.
- [isRemovable](isremovable.md): Deprecated. A Boolean value that indicates whether the GPU is removable.
- [isHeadless](isheadless.md): Deprecated. A Boolean value that indicates whether a GPU device doesn’t have a connection to a display.
- [peerGroupID](peergroupid.md): Deprecated. The peer group ID the GPU belongs to, if applicable.
- [peerCount](peercount.md): Deprecated. The total number of GPUs in the peer group, if applicable.
- [peerIndex](peerindex.md): Deprecated. The unique identifier for a GPU in a peer group.

# architecture (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The architectural details of the GPU device.

## Declaration

```objectivec
@property (readonly, nonnull) MTLArchitecture * architecture;
```

## See Also

### Identifying a GPU device

- [name](name.md): The full name of the GPU device.
- [MTLArchitecture](../mtlarchitecture.md): A class that contains the architectural details of a GPU device.
- [registryID](registryid.md): The GPU device’s registry identifier.
- [location](location.md): Deprecated. The physical location of the GPU relative to the system.
- [MTLDeviceLocation](../mtldevicelocation.md): Deprecated. Indicates the location of the GPU relative to the system it’s connect to.
- [locationNumber](locationnumber.md): Deprecated. A specific GPU position based on its general location.
- [lowPower](islowpower.md): Deprecated. A Boolean value that indicates whether the GPU lowers its performance to conserve energy.
- [removable](isremovable.md): Deprecated. A Boolean value that indicates whether the GPU is removable.
- [headless](isheadless.md): Deprecated. A Boolean value that indicates whether a GPU device doesn’t have a connection to a display.
- [peerGroupID](peergroupid.md): Deprecated. The peer group ID the GPU belongs to, if applicable.
- [peerCount](peercount.md): Deprecated. The total number of GPUs in the peer group, if applicable.
- [peerIndex](peerindex.md): Deprecated. The unique identifier for a GPU in a peer group.
