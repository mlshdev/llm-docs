> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:didremove:)-9rz34](https://developer.apple.com/documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:didremove:)-9rz34)

# cameraDevice(\_:didRemove:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.15) · visionOS 1.0+

Tells the client when an object is removed from the device.

## Declaration

```swift
optional func cameraDevice(_ camera: ICCameraDevice, didRemove item: ICCameraItem)
```

## See Also

### Removing Objects

- [cameraDevice(\_:didRemove:)](cameradevice%28__didremove_%29-4m5al.md): Tells the client when objects are removed from the device.
- [cameraDevice(\_:didCompleteDeleteFilesWithError:)](cameradevice%28__didcompletedeletefileswitherror_%29.md): Tells the client when the camera completes a delete operation.

# cameraDevice:didRemoveItem: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.15) · visionOS

Tells the client when an object is removed from the device.

## Declaration

```objectivec
- (void) cameraDevice:(ICCameraDevice *) camera didRemoveItem:(ICCameraItem *) item;
```

## See Also

### Removing Objects

- [cameraDevice:didRemoveItems:](cameradevice%28__didremove_%29-4m5al.md): Tells the client when objects are removed from the device.
- [cameraDevice:didCompleteDeleteFilesWithError:](cameradevice%28__didcompletedeletefileswitherror_%29.md): Tells the client when the camera completes a delete operation.
