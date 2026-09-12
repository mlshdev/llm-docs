> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:didreceivethumbnailfor:)](https://developer.apple.com/documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:didreceivethumbnailfor:))

# cameraDevice(\_:didReceiveThumbnailFor:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.15) · visionOS 1.0+

Tells the client when the requested thumbnail is available.

## Declaration

```swift
optional func cameraDevice(_ camera: ICCameraDevice, didReceiveThumbnailFor item: ICCameraItem)
```

<a id="Discussion"></a>

## Discussion

This method is deprecated. Use [cameraDevice(\_:didReceiveThumbnail:for:error:)](cameradevice%28__didreceivethumbnail_for_error_%29.md) instead.

## See Also

### Receiving Thumbnails

- [cameraDevice(\_:didReceiveThumbnail:for:error:)](cameradevice%28__didreceivethumbnail_for_error_%29.md): Tells the client when the requested thumbnail is available.
- [cameraDevice(\_:shouldGetThumbnailOf:)](cameradevice%28__shouldgetthumbnailof_%29.md): Tells the client when the camera is about to execute queued requests for the thumbnail of a specific item.

# cameraDevice:didReceiveThumbnailForItem: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.15) · visionOS

Tells the client when the requested thumbnail is available.

## Declaration

```objectivec
- (void) cameraDevice:(ICCameraDevice *) camera didReceiveThumbnailForItem:(ICCameraItem *) item;
```

<a id="Discussion"></a>

## Discussion

This method is deprecated. Use [cameraDevice:didReceiveThumbnail:forItem:error:](cameradevice%28__didreceivethumbnail_for_error_%29.md) instead.

## See Also

### Receiving Thumbnails

- [cameraDevice:didReceiveThumbnail:forItem:error:](cameradevice%28__didreceivethumbnail_for_error_%29.md): Tells the client when the requested thumbnail is available.
- [cameraDevice:shouldGetThumbnailOfItem:](cameradevice%28__shouldgetthumbnailof_%29.md): Tells the client when the camera is about to execute queued requests for the thumbnail of a specific item.
