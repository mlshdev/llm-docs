> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/iccameradevice/requestdeletefiles(_:)

# requestDeleteFiles(\_:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Deletes files from the camera.

## Declaration

```swift
func requestDeleteFiles(_ files: [ICCameraItem])
```

## See Also

### Deleting Files

- [isLocked](islocked.md): A Boolean value indicating whether the device is locked, preventing deletion of any asset.
- [ICDeleteResult](../icdeleteresult.md): The result of a deletion request.
- [ICDeleteError](../icdeleteerror.md): An error resulting from a deletion request.
- [requestDeleteFiles(\_:deleteFailed:completion:)](requestdeletefiles%28__deletefailed_completion_%29.md): Deletes files from the camera, with the ability to catch failures and execute a completion block.
- [cancelDelete()](canceldelete%28%29.md): Cancels the current delete operation.

# requestDeleteFiles: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Deletes files from the camera.

## Declaration

```objectivec
- (void) requestDeleteFiles:(NSArray<ICCameraItem *> *) files;
```

## See Also

### Deleting Files

- [locked](islocked.md): A Boolean value indicating whether the device is locked, preventing deletion of any asset.
- [ICDeleteResult](../icdeleteresult.md): The result of a deletion request.
- [ICDeleteError](../icdeleteerror.md): An error resulting from a deletion request.
- [requestDeleteFiles:deleteFailed:completion:](requestdeletefiles%28__deletefailed_completion_%29.md): Deletes files from the camera, with the ability to catch failures and execute a completion block.
- [cancelDelete](canceldelete%28%29.md): Cancels the current delete operation.
