> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:didremove:)-4m5al](https://developer.apple.com/documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:didremove:)-4m5al)

# cameraDevice(\_:didRemove:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the client when objects are removed from the device.

## Declaration

```swift
func cameraDevice(_ camera: ICCameraDevice, didRemove items: [ICCameraItem])
```

<a id="Discussion"></a>

## Discussion

The objects in items are instances of the ICCameraFile class.

## See Also

### Removing Objects

- [cameraDevice(\_:didCompleteDeleteFilesWithError:)](cameradevice%28__didcompletedeletefileswitherror_%29.md): Tells the client when the camera completes a delete operation.
- [cameraDevice(\_:didRemove:)](cameradevice%28__didremove_%29-9rz34.md): Deprecated. Tells the client when an object is removed from the device.

# cameraDevice:didRemoveItems: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the client when objects are removed from the device.

## Declaration

```objectivec
- (void) cameraDevice:(ICCameraDevice *) camera didRemoveItems:(NSArray<ICCameraItem *> *) items;
```

<a id="Discussion"></a>

## Discussion

The objects in items are instances of the ICCameraFile class.

## See Also

### Removing Objects

- [cameraDevice:didCompleteDeleteFilesWithError:](cameradevice%28__didcompletedeletefileswitherror_%29.md): Tells the client when the camera completes a delete operation.
- [cameraDevice:didRemoveItem:](cameradevice%28__didremove_%29-9rz34.md): Deprecated. Tells the client when an object is removed from the device.
