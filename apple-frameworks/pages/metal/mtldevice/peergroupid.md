> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/peergroupid](https://developer.apple.com/documentation/metal/mtldevice/peergroupid)

# peerGroupID (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** macOS 10.15+ (deprecated in 27.0)

The peer group ID the GPU belongs to, if applicable.

> Not applicable on Apple Silicon

## Declaration

```swift
var peerGroupID: UInt64 { get }
```

## Mentioned In

- [Transferring data between connected GPUs](../transferring-data-between-connected-gpus.md)

<a id="discussion"></a>

## Discussion

A group ID value of `0` indicates the GPU isn’t in a peer group. Otherwise, the GPU is in a peer group and the value is the group’s ID. All other GPUs in the same peer group have the same group ID.

## See Also

### Identifying a GPU device

- [name](name.md): The full name of the GPU device.
- [architecture](architecture.md): The architectural details of the GPU device.
- [MTLArchitecture](../mtlarchitecture.md): A class that contains the architectural details of a GPU device.
- [registryID](registryid.md): The GPU device’s registry identifier.
- [location](location.md): Deprecated. The physical location of the GPU relative to the system.
- [MTLDeviceLocation](../mtldevicelocation.md): Deprecated. Indicates the location of the GPU relative to the system it’s connect to.
- [locationNumber](locationnumber.md): Deprecated. A specific GPU position based on its general location.
- [isLowPower](islowpower.md): Deprecated. A Boolean value that indicates whether the GPU lowers its performance to conserve energy.
- [isRemovable](isremovable.md): Deprecated. A Boolean value that indicates whether the GPU is removable.
- [isHeadless](isheadless.md): Deprecated. A Boolean value that indicates whether a GPU device doesn’t have a connection to a display.
- [peerCount](peercount.md): Deprecated. The total number of GPUs in the peer group, if applicable.
- [peerIndex](peerindex.md): Deprecated. The unique identifier for a GPU in a peer group.

# peerGroupID (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** macOS 10.15+ (deprecated in 27.0)

The peer group ID the GPU belongs to, if applicable.

> Not applicable on Apple Silicon

## Declaration

```objectivec
@property (readonly) uint64_t peerGroupID;
```

## Mentioned In

- [Transferring data between connected GPUs](../transferring-data-between-connected-gpus.md)

<a id="discussion"></a>

## Discussion

A group ID value of `0` indicates the GPU isn’t in a peer group. Otherwise, the GPU is in a peer group and the value is the group’s ID. All other GPUs in the same peer group have the same group ID.

## See Also

### Identifying a GPU device

- [name](name.md): The full name of the GPU device.
- [architecture](architecture.md): The architectural details of the GPU device.
- [MTLArchitecture](../mtlarchitecture.md): A class that contains the architectural details of a GPU device.
- [registryID](registryid.md): The GPU device’s registry identifier.
- [location](location.md): Deprecated. The physical location of the GPU relative to the system.
- [MTLDeviceLocation](../mtldevicelocation.md): Deprecated. Indicates the location of the GPU relative to the system it’s connect to.
- [locationNumber](locationnumber.md): Deprecated. A specific GPU position based on its general location.
- [lowPower](islowpower.md): Deprecated. A Boolean value that indicates whether the GPU lowers its performance to conserve energy.
- [removable](isremovable.md): Deprecated. A Boolean value that indicates whether the GPU is removable.
- [headless](isheadless.md): Deprecated. A Boolean value that indicates whether a GPU device doesn’t have a connection to a display.
- [peerCount](peercount.md): Deprecated. The total number of GPUs in the peer group, if applicable.
- [peerIndex](peerindex.md): Deprecated. The unique identifier for a GPU in a peer group.
