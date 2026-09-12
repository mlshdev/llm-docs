> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/isheadless](https://developer.apple.com/documentation/metal/mtldevice/isheadless)

# isHeadless (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0)

A Boolean value that indicates whether a GPU device doesn’t have a connection to a display.

> Not applicable on Apple Silicon

## Declaration

```swift
var isHeadless: Bool { get }
```

## Mentioned In

- [Finding multiple GPUs on an Intel-based Mac](../finding-multiple-gpus-on-an-intel-based-mac.md)

<a id="discussion"></a>

## Discussion

The value is [true](https://developer.apple.com/documentation/swift/true) when the GPU is *headless*, which means it isn’t connected to any displays.

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
- [peerGroupID](peergroupid.md): Deprecated. The peer group ID the GPU belongs to, if applicable.
- [peerCount](peercount.md): Deprecated. The total number of GPUs in the peer group, if applicable.
- [peerIndex](peerindex.md): Deprecated. The unique identifier for a GPU in a peer group.

# headless (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0)

A Boolean value that indicates whether a GPU device doesn’t have a connection to a display.

> Not applicable on Apple Silicon

## Declaration

```objectivec
@property (readonly, getter=isHeadless) BOOL headless;
```

## Mentioned In

- [Finding multiple GPUs on an Intel-based Mac](../finding-multiple-gpus-on-an-intel-based-mac.md)

<a id="discussion"></a>

## Discussion

The value is [true](https://developer.apple.com/documentation/swift/true) when the GPU is *headless*, which means it isn’t connected to any displays.

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
- [peerGroupID](peergroupid.md): Deprecated. The peer group ID the GPU belongs to, if applicable.
- [peerCount](peercount.md): Deprecated. The total number of GPUs in the peer group, if applicable.
- [peerIndex](peerindex.md): Deprecated. The unique identifier for a GPU in a peer group.
