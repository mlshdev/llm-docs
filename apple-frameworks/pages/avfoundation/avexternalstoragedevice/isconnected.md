> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalstoragedevice/isconnected](https://developer.apple.com/documentation/avfoundation/avexternalstoragedevice/isconnected)

# isConnected (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the system has a connection to the external storage device.

## Declaration

```swift
var isConnected: Bool { get }
```

## See Also

### Inspecting a storage device

- [displayName](displayname.md): The name of an external storage device that’s appropriate for a user interface.
- [uuid](uuid.md): The external storage device’s unique identifier.
- [freeSize](freesize.md): The amount of free storage space, in bytes, that’s available on the external storage device.
- [totalSize](totalsize.md): The total amount of storage space, in bytes, that’s available on the external storage device.
- [isNotRecommendedForCaptureUse](isnotrecommendedforcaptureuse.md): Deprecated. A Boolean value that indicates whether the external storage device is suitable for camera capture.
- [reasonsNotRecommendedForCaptureUse](reasonsnotrecommendedforcaptureuse.md)
- [AVExternalStorageDevice.ReasonNotRecommendedForCaptureUse](reasonnotrecommendedforcaptureuse.md)

# connected (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the system has a connection to the external storage device.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isConnected) BOOL connected;
```

## See Also

### Inspecting a storage device

- [displayName](displayname.md): The name of an external storage device that’s appropriate for a user interface.
- [uuid](uuid.md): The external storage device’s unique identifier.
- [freeSize](freesize.md): The amount of free storage space, in bytes, that’s available on the external storage device.
- [totalSize](totalsize.md): The total amount of storage space, in bytes, that’s available on the external storage device.
- [notRecommendedForCaptureUse](isnotrecommendedforcaptureuse.md): Deprecated. A Boolean value that indicates whether the external storage device is suitable for camera capture.
- [reasonsNotRecommendedForCaptureUse](reasonsnotrecommendedforcaptureuse.md)
- [AVExternalStorageDeviceReasonNotRecommendedForCaptureUse](reasonnotrecommendedforcaptureuse.md)
