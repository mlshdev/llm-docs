> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/isremovable](https://developer.apple.com/documentation/metal/mtldevice/isremovable)

# isRemovable (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0)

A Boolean value that indicates whether the GPU is removable.

> Not applicable on Apple Silicon

## Declaration

```swift
var isRemovable: Bool { get }
```

## Mentioned In

- [Finding multiple GPUs on an Intel-based Mac](../finding-multiple-gpus-on-an-intel-based-mac.md)

<a id="discussion"></a>

## Discussion

You can respond to GPU removal notifications by registering with the [MTLCopyAllDevicesWithObserver(handler:)](../mtlcopyalldeviceswithobserver%28handler_%29.md) function in Swift, or the [MTLCopyAllDevicesWithObserver](../mtlcopyalldeviceswithobserver.md) function in Objective-C, and responding to the [removalRequested](../mtldevicenotificationname/removalrequested.md) and [wasRemoved](../mtldevicenotificationname/wasremoved.md) device notification names.

> **Important**

>  If a person removes a GPU without warning, [MTLDevice](../mtldevice.md) APIs may fail even before your app receives a [wasRemoved](../mtldevicenotificationname/wasremoved.md) notification.

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
- [isHeadless](isheadless.md): Deprecated. A Boolean value that indicates whether a GPU device doesn’t have a connection to a display.
- [peerGroupID](peergroupid.md): Deprecated. The peer group ID the GPU belongs to, if applicable.
- [peerCount](peercount.md): Deprecated. The total number of GPUs in the peer group, if applicable.
- [peerIndex](peerindex.md): Deprecated. The unique identifier for a GPU in a peer group.

# removable (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0)

A Boolean value that indicates whether the GPU is removable.

> Not applicable on Apple Silicon

## Declaration

```objectivec
@property (readonly, getter=isRemovable) BOOL removable;
```

## Mentioned In

- [Finding multiple GPUs on an Intel-based Mac](../finding-multiple-gpus-on-an-intel-based-mac.md)

<a id="discussion"></a>

## Discussion

You can respond to GPU removal notifications by registering with the [MTLCopyAllDevicesWithObserver(handler:)](../mtlcopyalldeviceswithobserver%28handler_%29.md) function in Swift, or the [MTLCopyAllDevicesWithObserver](../mtlcopyalldeviceswithobserver.md) function in Objective-C, and responding to the [MTLDeviceRemovalRequestedNotification](../mtldevicenotificationname/removalrequested.md) and [MTLDeviceWasRemovedNotification](../mtldevicenotificationname/wasremoved.md) device notification names.

> **Important**

>  If a person removes a GPU without warning, [MTLDevice](../mtldevice.md) APIs may fail even before your app receives a [MTLDeviceWasRemovedNotification](../mtldevicenotificationname/wasremoved.md) notification.

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
- [headless](isheadless.md): Deprecated. A Boolean value that indicates whether a GPU device doesn’t have a connection to a display.
- [peerGroupID](peergroupid.md): Deprecated. The peer group ID the GPU belongs to, if applicable.
- [peerCount](peercount.md): Deprecated. The total number of GPUs in the peer group, if applicable.
- [peerIndex](peerindex.md): Deprecated. The unique identifier for a GPU in a peer group.
