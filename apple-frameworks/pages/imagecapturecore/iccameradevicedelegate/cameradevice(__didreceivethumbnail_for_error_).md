> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:didreceivethumbnail:for:error:)](https://developer.apple.com/documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:didreceivethumbnail:for:error:))

# cameraDevice(\_:didReceiveThumbnail:for:error:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Tells the client when the requested thumbnail is available.

## Declaration

```swift
func cameraDevice(_ camera: ICCameraDevice, didReceiveThumbnail thumbnail: CGImage?, for item: ICCameraItem, error: (any Error)?)
```

## See Also

### Receiving Thumbnails

- [cameraDevice(\_:didReceiveThumbnailFor:)](cameradevice%28__didreceivethumbnailfor_%29.md): Deprecated. Tells the client when the requested thumbnail is available.
- [cameraDevice(\_:shouldGetThumbnailOf:)](cameradevice%28__shouldgetthumbnailof_%29.md): Tells the client when the camera is about to execute queued requests for the thumbnail of a specific item.

# cameraDevice:didReceiveThumbnail:forItem:error: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Tells the client when the requested thumbnail is available.

## Declaration

```objectivec
- (void) cameraDevice:(ICCameraDevice *) camera didReceiveThumbnail:(CGImageRef) thumbnail forItem:(ICCameraItem *) item error:(NSError *) error;
```

## See Also

### Receiving Thumbnails

- [cameraDevice:didReceiveThumbnailForItem:](cameradevice%28__didreceivethumbnailfor_%29.md): Deprecated. Tells the client when the requested thumbnail is available.
- [cameraDevice:shouldGetThumbnailOfItem:](cameradevice%28__shouldgetthumbnailof_%29.md): Tells the client when the camera is about to execute queued requests for the thumbnail of a specific item.
