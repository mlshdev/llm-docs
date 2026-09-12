> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevice/requestdeletefiles(_:deletefailed:completion:)](https://developer.apple.com/documentation/imagecapturecore/iccameradevice/requestdeletefiles(_:deletefailed:completion:))

# requestDeleteFiles(\_:deleteFailed:completion:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Deletes files from the camera, with the ability to catch failures and execute a completion block.

## Declaration

```swift
func requestDeleteFiles(_ files: [ICCameraItem], deleteFailed: @escaping ([ICDeleteError : ICCameraItem]) -> Void, completion: @escaping ([ICDeleteResult : [ICCameraItem]], (any Error)?) -> Void) -> Progress?
```

## See Also

### Deleting Files

- [isLocked](islocked.md): A Boolean value indicating whether the device is locked, preventing deletion of any asset.
- [ICDeleteResult](../icdeleteresult.md): The result of a deletion request.
- [ICDeleteError](../icdeleteerror.md): An error resulting from a deletion request.
- [requestDeleteFiles(\_:)](requestdeletefiles%28__%29.md): Deletes files from the camera.
- [cancelDelete()](canceldelete%28%29.md): Cancels the current delete operation.

# requestDeleteFiles:deleteFailed:completion: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Deletes files from the camera, with the ability to catch failures and execute a completion block.

## Declaration

```objectivec
- (NSProgress *) requestDeleteFiles:(NSArray<ICCameraItem *> *) files deleteFailed:(void (^)(NSDictionary<NSString *,ICCameraItem *> *)) deleteFailed completion:(void (^)(NSDictionary<NSString *,NSArray<ICCameraItem *> *> *result, NSError *error)) completion;
```

## See Also

### Deleting Files

- [locked](islocked.md): A Boolean value indicating whether the device is locked, preventing deletion of any asset.
- [ICDeleteResult](../icdeleteresult.md): The result of a deletion request.
- [ICDeleteError](../icdeleteerror.md): An error resulting from a deletion request.
- [requestDeleteFiles:](requestdeletefiles%28__%29.md): Deletes files from the camera.
- [cancelDelete](canceldelete%28%29.md): Cancels the current delete operation.
