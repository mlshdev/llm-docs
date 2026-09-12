> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevice/islocked](https://developer.apple.com/documentation/imagecapturecore/iccameradevice/islocked)

# isLocked (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A Boolean value indicating whether the device is locked, preventing deletion of any asset.

## Declaration

```swift
var isLocked: Bool { get }
```

## See Also

### Deleting Files

- [ICDeleteResult](../icdeleteresult.md): The result of a deletion request.
- [ICDeleteError](../icdeleteerror.md): An error resulting from a deletion request.
- [requestDeleteFiles(\_:)](requestdeletefiles%28__%29.md): Deletes files from the camera.
- [requestDeleteFiles(\_:deleteFailed:completion:)](requestdeletefiles%28__deletefailed_completion_%29.md): Deletes files from the camera, with the ability to catch failures and execute a completion block.
- [cancelDelete()](canceldelete%28%29.md): Cancels the current delete operation.

# locked (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A Boolean value indicating whether the device is locked, preventing deletion of any asset.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isLocked) BOOL locked;
```

## See Also

### Deleting Files

- [ICDeleteResult](../icdeleteresult.md): The result of a deletion request.
- [ICDeleteError](../icdeleteerror.md): An error resulting from a deletion request.
- [requestDeleteFiles:](requestdeletefiles%28__%29.md): Deletes files from the camera.
- [requestDeleteFiles:deleteFailed:completion:](requestdeletefiles%28__deletefailed_completion_%29.md): Deletes files from the camera, with the ability to catch failures and execute a completion block.
- [cancelDelete](canceldelete%28%29.md): Cancels the current delete operation.
