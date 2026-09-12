> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:didcompletedeletefileswitherror:)](https://developer.apple.com/documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:didcompletedeletefileswitherror:))

# cameraDevice(\_:didCompleteDeleteFilesWithError:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the client when the camera completes a delete operation.

## Declaration

```swift
optional func cameraDevice(_ camera: ICCameraDevice, didCompleteDeleteFilesWithError error: (any Error)?)
```

<a id="Discussion"></a>

## Discussion

Initiate a delete operation using [requestDeleteFiles(\_:)](../iccameradevice/requestdeletefiles%28__%29.md).

## See Also

### Removing Objects

- [cameraDevice(\_:didRemove:)](cameradevice%28__didremove_%29-4m5al.md): Tells the client when objects are removed from the device.
- [cameraDevice(\_:didRemove:)](cameradevice%28__didremove_%29-9rz34.md): Deprecated. Tells the client when an object is removed from the device.

# cameraDevice:didCompleteDeleteFilesWithError: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the client when the camera completes a delete operation.

## Declaration

```objectivec
- (void) cameraDevice:(ICCameraDevice *) camera didCompleteDeleteFilesWithError:(NSError *) error;
```

<a id="Discussion"></a>

## Discussion

Initiate a delete operation using [requestDeleteFiles:](../iccameradevice/requestdeletefiles%28__%29.md).

## See Also

### Removing Objects

- [cameraDevice:didRemoveItems:](cameradevice%28__didremove_%29-4m5al.md): Tells the client when objects are removed from the device.
- [cameraDevice:didRemoveItem:](cameradevice%28__didremove_%29-9rz34.md): Deprecated. Tells the client when an object is removed from the device.
