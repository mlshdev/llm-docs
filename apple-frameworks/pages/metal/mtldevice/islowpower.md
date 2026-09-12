> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/islowpower](https://developer.apple.com/documentation/metal/mtldevice/islowpower)

# isLowPower (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0)

A Boolean value that indicates whether the GPU lowers its performance to conserve energy.

> Not applicable on Apple Silicon

## Declaration

```swift
var isLowPower: Bool { get }
```

## Mentioned In

- [Finding multiple GPUs on an Intel-based Mac](../finding-multiple-gpus-on-an-intel-based-mac.md)

<a id="discussion"></a>

## Discussion

Some systems contain multiple GPUs that run with different performance and energy characteristics. At runtime, choose a GPU that best matches your performance needs while considering the current state of the system. For example, your app may choose a lower-power GPU if it doesn’t need the best possible performance on a MacBook Pro that’s running on battery power. For more information on discovering and selecting GPUs at runtime, see [Multi-GPU systems](../multi-gpu-systems.md).

> **Note**

>  Systems with Apple silicon only have one GPU, which removes the need to choose a GPU.

The property is typically [true](https://developer.apple.com/documentation/swift/true) for integrated GPUs and [false](https://developer.apple.com/documentation/swift/false) for discrete GPUs. However, an Apple silicon GPU on a Mac sets the property to [false](https://developer.apple.com/documentation/swift/false) because it doesn’t need to lower its performance to conserve energy.

## See Also

### Identifying a GPU device

- [name](name.md): The full name of the GPU device.
- [architecture](architecture.md): The architectural details of the GPU device.
- [MTLArchitecture](../mtlarchitecture.md): A class that contains the architectural details of a GPU device.
- [registryID](registryid.md): The GPU device’s registry identifier.
- [location](location.md): Deprecated. The physical location of the GPU relative to the system.
- [MTLDeviceLocation](../mtldevicelocation.md): Deprecated. Indicates the location of the GPU relative to the system it’s connect to.
- [locationNumber](locationnumber.md): Deprecated. A specific GPU position based on its general location.
- [isRemovable](isremovable.md): Deprecated. A Boolean value that indicates whether the GPU is removable.
- [isHeadless](isheadless.md): Deprecated. A Boolean value that indicates whether a GPU device doesn’t have a connection to a display.
- [peerGroupID](peergroupid.md): Deprecated. The peer group ID the GPU belongs to, if applicable.
- [peerCount](peercount.md): Deprecated. The total number of GPUs in the peer group, if applicable.
- [peerIndex](peerindex.md): Deprecated. The unique identifier for a GPU in a peer group.

# lowPower (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0)

A Boolean value that indicates whether the GPU lowers its performance to conserve energy.

> Not applicable on Apple Silicon

## Declaration

```objectivec
@property (readonly, getter=isLowPower) BOOL lowPower;
```

## Mentioned In

- [Finding multiple GPUs on an Intel-based Mac](../finding-multiple-gpus-on-an-intel-based-mac.md)

<a id="discussion"></a>

## Discussion

Some systems contain multiple GPUs that run with different performance and energy characteristics. At runtime, choose a GPU that best matches your performance needs while considering the current state of the system. For example, your app may choose a lower-power GPU if it doesn’t need the best possible performance on a MacBook Pro that’s running on battery power. For more information on discovering and selecting GPUs at runtime, see [Multi-GPU systems](../multi-gpu-systems.md).

> **Note**

>  Systems with Apple silicon only have one GPU, which removes the need to choose a GPU.

The property is typically [true](https://developer.apple.com/documentation/swift/true) for integrated GPUs and [false](https://developer.apple.com/documentation/swift/false) for discrete GPUs. However, an Apple silicon GPU on a Mac sets the property to [false](https://developer.apple.com/documentation/swift/false) because it doesn’t need to lower its performance to conserve energy.

## See Also

### Identifying a GPU device

- [name](name.md): The full name of the GPU device.
- [architecture](architecture.md): The architectural details of the GPU device.
- [MTLArchitecture](../mtlarchitecture.md): A class that contains the architectural details of a GPU device.
- [registryID](registryid.md): The GPU device’s registry identifier.
- [location](location.md): Deprecated. The physical location of the GPU relative to the system.
- [MTLDeviceLocation](../mtldevicelocation.md): Deprecated. Indicates the location of the GPU relative to the system it’s connect to.
- [locationNumber](locationnumber.md): Deprecated. A specific GPU position based on its general location.
- [removable](isremovable.md): Deprecated. A Boolean value that indicates whether the GPU is removable.
- [headless](isheadless.md): Deprecated. A Boolean value that indicates whether a GPU device doesn’t have a connection to a display.
- [peerGroupID](peergroupid.md): Deprecated. The peer group ID the GPU belongs to, if applicable.
- [peerCount](peercount.md): Deprecated. The total number of GPUs in the peer group, if applicable.
- [peerIndex](peerindex.md): Deprecated. The unique identifier for a GPU in a peer group.
