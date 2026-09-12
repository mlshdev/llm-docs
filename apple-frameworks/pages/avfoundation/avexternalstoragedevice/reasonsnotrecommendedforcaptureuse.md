> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalstoragedevice/reasonsnotrecommendedforcaptureuse](https://developer.apple.com/documentation/avfoundation/avexternalstoragedevice/reasonsnotrecommendedforcaptureuse)

# reasonsNotRecommendedForCaptureUse (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

## Declaration

```swift
var reasonsNotRecommendedForCaptureUse: Set<AVExternalStorageDevice.ReasonNotRecommendedForCaptureUse> { get }
```

<a id="discussion"></a>

## Discussion

A set of reasons why the storage device is not recommended for capture.

Contains one or more AVExternalStorageDeviceReasonNotRecommendedForCaptureUse values indicating the issues with the device. Returns an empty set if there are no known issues.

## See Also

### Inspecting a storage device

- [isConnected](isconnected.md): A Boolean value that indicates whether the system has a connection to the external storage device.
- [displayName](displayname.md): The name of an external storage device that’s appropriate for a user interface.
- [uuid](uuid.md): The external storage device’s unique identifier.
- [freeSize](freesize.md): The amount of free storage space, in bytes, that’s available on the external storage device.
- [totalSize](totalsize.md): The total amount of storage space, in bytes, that’s available on the external storage device.
- [isNotRecommendedForCaptureUse](isnotrecommendedforcaptureuse.md): Deprecated. A Boolean value that indicates whether the external storage device is suitable for camera capture.
- [AVExternalStorageDevice.ReasonNotRecommendedForCaptureUse](reasonnotrecommendedforcaptureuse.md)

# reasonsNotRecommendedForCaptureUse (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

## Declaration

```objectivec
@property (nonatomic, readonly) NSSet<NSString *> * reasonsNotRecommendedForCaptureUse;
```

<a id="discussion"></a>

## Discussion

A set of reasons why the storage device is not recommended for capture.

Contains one or more AVExternalStorageDeviceReasonNotRecommendedForCaptureUse values indicating the issues with the device. Returns an empty set if there are no known issues.

## See Also

### Inspecting a storage device

- [connected](isconnected.md): A Boolean value that indicates whether the system has a connection to the external storage device.
- [displayName](displayname.md): The name of an external storage device that’s appropriate for a user interface.
- [uuid](uuid.md): The external storage device’s unique identifier.
- [freeSize](freesize.md): The amount of free storage space, in bytes, that’s available on the external storage device.
- [totalSize](totalsize.md): The total amount of storage space, in bytes, that’s available on the external storage device.
- [notRecommendedForCaptureUse](isnotrecommendedforcaptureuse.md): Deprecated. A Boolean value that indicates whether the external storage device is suitable for camera capture.
- [AVExternalStorageDeviceReasonNotRecommendedForCaptureUse](reasonnotrecommendedforcaptureuse.md)
