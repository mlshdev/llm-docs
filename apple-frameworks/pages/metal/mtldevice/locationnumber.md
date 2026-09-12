> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/locationnumber](https://developer.apple.com/documentation/metal/mtldevice/locationnumber)

# locationNumber (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** macOS 10.15+ (deprecated in 27.0)

A specific GPU position based on its general location.

> Not applicable on Apple Silicon

## Declaration

```swift
var locationNumber: Int { get }
```

<a id="discussion"></a>

## Discussion

The meaning of the location number depends on a device’s [location](location.md) property:

- For [MTLDeviceLocation.builtIn](../mtldevicelocation/builtin.md), the location number is `0` for low-power GPUs (see [isLowPower](islowpower.md)) and `1` for other GPUs.
- For [MTLDeviceLocation.slot](../mtldevicelocation/slot.md), the location number represents the slot.
- For [MTLDeviceLocation.external](../mtldevicelocation/external.md), the location number represents the Thunderbolt port.

> **Note**

>  It’s possible for multiple devices to share the same location and number. For example, a card in a slot may have multiple GPUs, or a person may connect multiple eGPUs to the same Thunderbolt port.

## See Also

### Identifying a GPU device

- [name](name.md): The full name of the GPU device.
- [architecture](architecture.md): The architectural details of the GPU device.
- [MTLArchitecture](../mtlarchitecture.md): A class that contains the architectural details of a GPU device.
- [registryID](registryid.md): The GPU device’s registry identifier.
- [location](location.md): Deprecated. The physical location of the GPU relative to the system.
- [MTLDeviceLocation](../mtldevicelocation.md): Deprecated. Indicates the location of the GPU relative to the system it’s connect to.
- [isLowPower](islowpower.md): Deprecated. A Boolean value that indicates whether the GPU lowers its performance to conserve energy.
- [isRemovable](isremovable.md): Deprecated. A Boolean value that indicates whether the GPU is removable.
- [isHeadless](isheadless.md): Deprecated. A Boolean value that indicates whether a GPU device doesn’t have a connection to a display.
- [peerGroupID](peergroupid.md): Deprecated. The peer group ID the GPU belongs to, if applicable.
- [peerCount](peercount.md): Deprecated. The total number of GPUs in the peer group, if applicable.
- [peerIndex](peerindex.md): Deprecated. The unique identifier for a GPU in a peer group.

# locationNumber (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** macOS 10.15+ (deprecated in 27.0)

A specific GPU position based on its general location.

> Not applicable on Apple Silicon

## Declaration

```objectivec
@property (readonly) NSUInteger locationNumber;
```

<a id="discussion"></a>

## Discussion

The meaning of the location number depends on a device’s [location](location.md) property:

- For [MTLDeviceLocationBuiltIn](../mtldevicelocation/builtin.md), the location number is `0` for low-power GPUs (see [lowPower](islowpower.md)) and `1` for other GPUs.
- For [MTLDeviceLocationSlot](../mtldevicelocation/slot.md), the location number represents the slot.
- For [MTLDeviceLocationExternal](../mtldevicelocation/external.md), the location number represents the Thunderbolt port.

> **Note**

>  It’s possible for multiple devices to share the same location and number. For example, a card in a slot may have multiple GPUs, or a person may connect multiple eGPUs to the same Thunderbolt port.

## See Also

### Identifying a GPU device

- [name](name.md): The full name of the GPU device.
- [architecture](architecture.md): The architectural details of the GPU device.
- [MTLArchitecture](../mtlarchitecture.md): A class that contains the architectural details of a GPU device.
- [registryID](registryid.md): The GPU device’s registry identifier.
- [location](location.md): Deprecated. The physical location of the GPU relative to the system.
- [MTLDeviceLocation](../mtldevicelocation.md): Deprecated. Indicates the location of the GPU relative to the system it’s connect to.
- [lowPower](islowpower.md): Deprecated. A Boolean value that indicates whether the GPU lowers its performance to conserve energy.
- [removable](isremovable.md): Deprecated. A Boolean value that indicates whether the GPU is removable.
- [headless](isheadless.md): Deprecated. A Boolean value that indicates whether a GPU device doesn’t have a connection to a display.
- [peerGroupID](peergroupid.md): Deprecated. The peer group ID the GPU belongs to, if applicable.
- [peerCount](peercount.md): Deprecated. The total number of GPUs in the peer group, if applicable.
- [peerIndex](peerindex.md): Deprecated. The unique identifier for a GPU in a peer group.
