> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameraitem/largethumbnailifavailable](https://developer.apple.com/documentation/imagecapturecore/iccameraitem/largethumbnailifavailable)

# largeThumbnailIfAvailable (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.15) · visionOS 1.0+

A large thumbnail for the item if one is readily available.

## Declaration

```swift
var largeThumbnailIfAvailable: CGImage? { get }
```

<a id="Discussion"></a>

## Discussion

If a large thumbnail is not readily available, accessing this property requests it from the device.

When the thumbnail is received, [cameraDevice(\_:didReceiveThumbnailFor:)](../iccameradevicedelegate/cameradevice%28__didreceivethumbnailfor_%29.md) is called on the the device’s [delegate](../icdevice/delegate.md).

Execution of the delegate callback occurs on the main thread.

## See Also

### Requesting Thumbnails

- [requestThumbnail()](requestthumbnail%28%29.md): Requests a thumbnail for the item.
- [thumbnail](thumbnail.md): The item’s thumbnail.
- [thumbnailIfAvailable](thumbnailifavailable.md): Deprecated. The item’s thumbnail if it is readily available.
- [flushThumbnailCache()](flushthumbnailcache%28%29.md): Deletes the item’s cached thumbnail.
- [ICCameraItemThumbnailOption](../iccameraitemthumbnailoption.md): An option for the item’s thumbnail.

# largeThumbnailIfAvailable (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.15) · visionOS 1.0+

A large thumbnail for the item if one is readily available.

## Declaration

```objectivec
@property (readonly, nullable) CGImageRef largeThumbnailIfAvailable;
```

<a id="Discussion"></a>

## Discussion

If a large thumbnail is not readily available, accessing this property requests it from the device.

When the thumbnail is received, [cameraDevice:didReceiveThumbnailForItem:](../iccameradevicedelegate/cameradevice%28__didreceivethumbnailfor_%29.md) is called on the the device’s [delegate](../icdevice/delegate.md).

Execution of the delegate callback occurs on the main thread.

## See Also

### Requesting Thumbnails

- [requestThumbnail](requestthumbnail%28%29.md): Requests a thumbnail for the item.
- [thumbnail](thumbnail.md): The item’s thumbnail.
- [thumbnailIfAvailable](thumbnailifavailable.md): Deprecated. The item’s thumbnail if it is readily available.
- [flushThumbnailCache](flushthumbnailcache%28%29.md): Deletes the item’s cached thumbnail.
- [ICCameraItemThumbnailOption](../iccameraitemthumbnailoption.md): An option for the item’s thumbnail.
