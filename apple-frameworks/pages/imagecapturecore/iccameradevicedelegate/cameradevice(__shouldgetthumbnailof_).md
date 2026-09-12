> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:shouldgetthumbnailof:)](https://developer.apple.com/documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:shouldgetthumbnailof:))

# cameraDevice(\_:shouldGetThumbnailOf:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the client when the camera is about to execute queued requests for the thumbnail of a specific item.

## Declaration

```swift
optional func cameraDevice(_ cameraDevice: ICCameraDevice, shouldGetThumbnailOf item: ICCameraItem) -> Bool
```

<a id="Discussion"></a>

## Discussion

If the request is no longer needed—for example, if the item is no longer displayed on the screen—the client can cancel sending a request to the camera, speeding up the execution queue.

## See Also

### Receiving Thumbnails

- [cameraDevice(\_:didReceiveThumbnail:for:error:)](cameradevice%28__didreceivethumbnail_for_error_%29.md): Tells the client when the requested thumbnail is available.
- [cameraDevice(\_:didReceiveThumbnailFor:)](cameradevice%28__didreceivethumbnailfor_%29.md): Deprecated. Tells the client when the requested thumbnail is available.

# cameraDevice:shouldGetThumbnailOfItem: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the client when the camera is about to execute queued requests for the thumbnail of a specific item.

## Declaration

```objectivec
- (BOOL) cameraDevice:(ICCameraDevice *) cameraDevice shouldGetThumbnailOfItem:(ICCameraItem *) item;
```

<a id="Discussion"></a>

## Discussion

If the request is no longer needed—for example, if the item is no longer displayed on the screen—the client can cancel sending a request to the camera, speeding up the execution queue.

## See Also

### Receiving Thumbnails

- [cameraDevice:didReceiveThumbnail:forItem:error:](cameradevice%28__didreceivethumbnail_for_error_%29.md): Tells the client when the requested thumbnail is available.
- [cameraDevice:didReceiveThumbnailForItem:](cameradevice%28__didreceivethumbnailfor_%29.md): Deprecated. Tells the client when the requested thumbnail is available.
