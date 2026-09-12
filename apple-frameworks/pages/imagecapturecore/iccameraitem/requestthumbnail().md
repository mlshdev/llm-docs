> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameraitem/requestthumbnail()](https://developer.apple.com/documentation/imagecapturecore/iccameraitem/requestthumbnail())

# requestThumbnail() (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Requests a thumbnail for the item.

## Declaration

```swift
func requestThumbnail()
```

<a id="Discussion"></a>

## Discussion

If a thumbnail is not readily available, accessing this property will send a message to the device requesting a thumbnail for the file. The delegate of the device will be notified via method [cameraDevice(\_:didReceiveThumbnail:for:error:)](../iccameradevicedelegate/cameradevice%28__didreceivethumbnail_for_error_%29.md), if this method is implemented by the delegate. Execution of the delegate callback will occur on the main thread.

## See Also

### Requesting Thumbnails

- [thumbnail](thumbnail.md): The item’s thumbnail.
- [thumbnailIfAvailable](thumbnailifavailable.md): Deprecated. The item’s thumbnail if it is readily available.
- [largeThumbnailIfAvailable](largethumbnailifavailable.md): Deprecated. A large thumbnail for the item if one is readily available.
- [flushThumbnailCache()](flushthumbnailcache%28%29.md): Deletes the item’s cached thumbnail.
- [ICCameraItemThumbnailOption](../iccameraitemthumbnailoption.md): An option for the item’s thumbnail.

# requestThumbnail (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Requests a thumbnail for the item.

## Declaration

```objectivec
- (void) requestThumbnail;
```

<a id="Discussion"></a>

## Discussion

If a thumbnail is not readily available, accessing this property will send a message to the device requesting a thumbnail for the file. The delegate of the device will be notified via method [cameraDevice:didReceiveThumbnail:forItem:error:](../iccameradevicedelegate/cameradevice%28__didreceivethumbnail_for_error_%29.md), if this method is implemented by the delegate. Execution of the delegate callback will occur on the main thread.

## See Also

### Requesting Thumbnails

- [thumbnail](thumbnail.md): The item’s thumbnail.
- [thumbnailIfAvailable](thumbnailifavailable.md): Deprecated. The item’s thumbnail if it is readily available.
- [largeThumbnailIfAvailable](largethumbnailifavailable.md): Deprecated. A large thumbnail for the item if one is readily available.
- [flushThumbnailCache](flushthumbnailcache%28%29.md): Deletes the item’s cached thumbnail.
- [ICCameraItemThumbnailOption](../iccameraitemthumbnailoption.md): An option for the item’s thumbnail.
