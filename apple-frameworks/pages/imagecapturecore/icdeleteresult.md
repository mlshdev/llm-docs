> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdeleteresult](https://developer.apple.com/documentation/imagecapturecore/icdeleteresult)

# ICDeleteResult (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The result of a deletion request.

## Declaration

```swift
struct ICDeleteResult
```

## Topics

### Creating a Deletion Result

- [init(rawValue:)](icdeleteresult/init%28rawvalue_%29.md)

### Reading a Deletion Result

- [canceled](icdeleteresult/canceled.md): The deletion was canceled.
- [failed](icdeleteresult/failed.md): The deletion failed.
- [successful](icdeleteresult/successful.md): The deletion succeeded.

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
- [ICDeleteError](icdeleteerror.md): An error resulting from a deletion request.
- [requestDeleteFiles(\_:)](iccameradevice/requestdeletefiles%28__%29.md): Deletes files from the camera.
- [requestDeleteFiles(\_:deleteFailed:completion:)](iccameradevice/requestdeletefiles%28__deletefailed_completion_%29.md): Deletes files from the camera, with the ability to catch failures and execute a completion block.
- [cancelDelete()](iccameradevice/canceldelete%28%29.md): Cancels the current delete operation.

# ICDeleteResult (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The result of a deletion request.

## Declaration

```objectivec
typedef NSString * ICDeleteResult;
```

## Topics

### Reading a Deletion Result

- [ICDeleteCanceled](icdeleteresult/canceled.md): The deletion was canceled.
- [ICDeleteFailed](icdeleteresult/failed.md): The deletion failed.
- [ICDeleteSuccessful](icdeleteresult/successful.md): The deletion succeeded.

## See Also

### Deleting Files

- [locked](iccameradevice/islocked.md): A Boolean value indicating whether the device is locked, preventing deletion of any asset.
- [ICDeleteError](icdeleteerror.md): An error resulting from a deletion request.
- [requestDeleteFiles:](iccameradevice/requestdeletefiles%28__%29.md): Deletes files from the camera.
- [requestDeleteFiles:deleteFailed:completion:](iccameradevice/requestdeletefiles%28__deletefailed_completion_%29.md): Deletes files from the camera, with the ability to catch failures and execute a completion block.
- [cancelDelete](iccameradevice/canceldelete%28%29.md): Cancels the current delete operation.
