> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/registryid](https://developer.apple.com/documentation/metal/mtldevice/registryid)

# registryID (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The GPU device’s registry identifier.

## Declaration

```swift
var registryID: UInt64 { get }
```

<a id="discussion"></a>

## Discussion

You can use the value to identify the same GPU across task boundaries because it’s global to all tasks.

## See Also

### Identifying a GPU device

- [name](name.md): The full name of the GPU device.
- [architecture](architecture.md): The architectural details of the GPU device.
- [MTLArchitecture](../mtlarchitecture.md): A class that contains the architectural details of a GPU device.
- [location](location.md): Deprecated. The physical location of the GPU relative to the system.
- [MTLDeviceLocation](../mtldevicelocation.md): Deprecated. Indicates the location of the GPU relative to the system it’s connect to.
- [locationNumber](locationnumber.md): Deprecated. A specific GPU position based on its general location.
- [isLowPower](islowpower.md): Deprecated. A Boolean value that indicates whether the GPU lowers its performance to conserve energy.
- [isRemovable](isremovable.md): Deprecated. A Boolean value that indicates whether the GPU is removable.
- [isHeadless](isheadless.md): Deprecated. A Boolean value that indicates whether a GPU device doesn’t have a connection to a display.
- [peerGroupID](peergroupid.md): Deprecated. The peer group ID the GPU belongs to, if applicable.
- [peerCount](peercount.md): Deprecated. The total number of GPUs in the peer group, if applicable.
- [peerIndex](peerindex.md): Deprecated. The unique identifier for a GPU in a peer group.

# registryID (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The GPU device’s registry identifier.

## Declaration

```objectivec
@property (readonly) uint64_t registryID;
```

<a id="discussion"></a>

## Discussion

You can use the value to identify the same GPU across task boundaries because it’s global to all tasks.

## See Also

### Identifying a GPU device

- [name](name.md): The full name of the GPU device.
- [architecture](architecture.md): The architectural details of the GPU device.
- [MTLArchitecture](../mtlarchitecture.md): A class that contains the architectural details of a GPU device.
- [location](location.md): Deprecated. The physical location of the GPU relative to the system.
- [MTLDeviceLocation](../mtldevicelocation.md): Deprecated. Indicates the location of the GPU relative to the system it’s connect to.
- [locationNumber](locationnumber.md): Deprecated. A specific GPU position based on its general location.
- [lowPower](islowpower.md): Deprecated. A Boolean value that indicates whether the GPU lowers its performance to conserve energy.
- [removable](isremovable.md): Deprecated. A Boolean value that indicates whether the GPU is removable.
- [headless](isheadless.md): Deprecated. A Boolean value that indicates whether a GPU device doesn’t have a connection to a display.
- [peerGroupID](peergroupid.md): Deprecated. The peer group ID the GPU belongs to, if applicable.
- [peerCount](peercount.md): Deprecated. The total number of GPUs in the peer group, if applicable.
- [peerIndex](peerindex.md): Deprecated. The unique identifier for a GPU in a peer group.
