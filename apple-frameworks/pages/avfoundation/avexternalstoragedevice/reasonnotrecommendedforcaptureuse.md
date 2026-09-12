> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalstoragedevice/reasonnotrecommendedforcaptureuse](https://developer.apple.com/documentation/avfoundation/avexternalstoragedevice/reasonnotrecommendedforcaptureuse)

# AVExternalStorageDevice.ReasonNotRecommendedForCaptureUse (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

## Declaration

```swift
struct ReasonNotRecommendedForCaptureUse
```

<a id="overview"></a>

## Overview

Constants indicating the reasons external storage device is not recommended for capturing high data rate videos based on https://support.apple.com/en-us/109041.

## Topics

### Creating a reason

- [init(rawValue:)](reasonnotrecommendedforcaptureuse/init%28rawvalue_%29.md)

### Reasons

- [encrypted](reasonnotrecommendedforcaptureuse/encrypted.md)
- [slowWritingSpeed](reasonnotrecommendedforcaptureuse/slowwritingspeed.md)
- [unknownWritingSpeed](reasonnotrecommendedforcaptureuse/unknownwritingspeed.md)
- [unsupportedFileSystem](reasonnotrecommendedforcaptureuse/unsupportedfilesystem.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a storage device

- [isConnected](isconnected.md): A Boolean value that indicates whether the system has a connection to the external storage device.
- [displayName](displayname.md): The name of an external storage device that’s appropriate for a user interface.
- [uuid](uuid.md): The external storage device’s unique identifier.
- [freeSize](freesize.md): The amount of free storage space, in bytes, that’s available on the external storage device.
- [totalSize](totalsize.md): The total amount of storage space, in bytes, that’s available on the external storage device.
- [isNotRecommendedForCaptureUse](isnotrecommendedforcaptureuse.md): Deprecated. A Boolean value that indicates whether the external storage device is suitable for camera capture.
- [reasonsNotRecommendedForCaptureUse](reasonsnotrecommendedforcaptureuse.md)

# AVExternalStorageDeviceReasonNotRecommendedForCaptureUse (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

## Declaration

```objectivec
typedef NSString * AVExternalStorageDeviceReasonNotRecommendedForCaptureUse;
```

<a id="overview"></a>

## Overview

Constants indicating the reasons external storage device is not recommended for capturing high data rate videos based on https://support.apple.com/en-us/109041.

## Topics

### Reasons

- [AVExternalStorageDeviceReasonNotRecommendedForCaptureUseEncrypted](reasonnotrecommendedforcaptureuse/encrypted.md)
- [AVExternalStorageDeviceReasonNotRecommendedForCaptureUseSlowWritingSpeed](reasonnotrecommendedforcaptureuse/slowwritingspeed.md)
- [AVExternalStorageDeviceReasonNotRecommendedForCaptureUseUnknownWritingSpeed](reasonnotrecommendedforcaptureuse/unknownwritingspeed.md)
- [AVExternalStorageDeviceReasonNotRecommendedForCaptureUseUnsupportedFileSystem](reasonnotrecommendedforcaptureuse/unsupportedfilesystem.md)

## See Also

### Inspecting a storage device

- [connected](isconnected.md): A Boolean value that indicates whether the system has a connection to the external storage device.
- [displayName](displayname.md): The name of an external storage device that’s appropriate for a user interface.
- [uuid](uuid.md): The external storage device’s unique identifier.
- [freeSize](freesize.md): The amount of free storage space, in bytes, that’s available on the external storage device.
- [totalSize](totalsize.md): The total amount of storage space, in bytes, that’s available on the external storage device.
- [notRecommendedForCaptureUse](isnotrecommendedforcaptureuse.md): Deprecated. A Boolean value that indicates whether the external storage device is suitable for camera capture.
- [reasonsNotRecommendedForCaptureUse](reasonsnotrecommendedforcaptureuse.md)
