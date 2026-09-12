> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdeleteerror](https://developer.apple.com/documentation/imagecapturecore/icdeleteerror)

# ICDeleteError (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An error resulting from a deletion request.

## Declaration

```swift
struct ICDeleteError
```

## Topics

### Creating a Deletion Error

- [init(rawValue:)](icdeleteerror/init%28rawvalue_%29.md)

### Reading a Deletion Error

- [canceled](icdeleteerror/canceled.md): The deletion was canceled.
- [deviceMissing](icdeleteerror/devicemissing.md): The deletion failed because the device could not be found.
- [fileMissing](icdeleteerror/filemissing.md): The deletion failed because the file could not be found.
- [readOnly](icdeleteerror/readonly.md): The deletion failed because the file had read-only permissions.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deleting Files

- [isLocked](iccameradevice/islocked.md): A Boolean value indicating whether the device is locked, preventing deletion of any asset.
- [ICDeleteResult](icdeleteresult.md): The result of a deletion request.
- [requestDeleteFiles(\_:)](iccameradevice/requestdeletefiles%28__%29.md): Deletes files from the camera.
- [requestDeleteFiles(\_:deleteFailed:completion:)](iccameradevice/requestdeletefiles%28__deletefailed_completion_%29.md): Deletes files from the camera, with the ability to catch failures and execute a completion block.
- [cancelDelete()](iccameradevice/canceldelete%28%29.md): Cancels the current delete operation.

# ICDeleteError (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An error resulting from a deletion request.

## Declaration

```objectivec
typedef NSString * ICDeleteError;
```

## Topics

### Reading a Deletion Error

- [ICDeleteErrorCanceled](icdeleteerror/canceled.md): The deletion was canceled.
- [ICDeleteErrorDeviceMissing](icdeleteerror/devicemissing.md): The deletion failed because the device could not be found.
- [ICDeleteErrorFileMissing](icdeleteerror/filemissing.md): The deletion failed because the file could not be found.
- [ICDeleteErrorReadOnly](icdeleteerror/readonly.md): The deletion failed because the file had read-only permissions.

## See Also

### Deleting Files

- [locked](iccameradevice/islocked.md): A Boolean value indicating whether the device is locked, preventing deletion of any asset.
- [ICDeleteResult](icdeleteresult.md): The result of a deletion request.
- [requestDeleteFiles:](iccameradevice/requestdeletefiles%28__%29.md): Deletes files from the camera.
- [requestDeleteFiles:deleteFailed:completion:](iccameradevice/requestdeletefiles%28__deletefailed_completion_%29.md): Deletes files from the camera, with the ability to catch failures and execute a completion block.
- [cancelDelete](iccameradevice/canceldelete%28%29.md): Cancels the current delete operation.
