> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameraitem/thumbnail](https://developer.apple.com/documentation/imagecapturecore/iccameraitem/thumbnail)

# thumbnail (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The item’s thumbnail.

## Declaration

```swift
var thumbnail: CGImage? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` until you call [requestThumbnail()](requestthumbnail%28%29.md).

## See Also

### Requesting Thumbnails

- [requestThumbnail()](requestthumbnail%28%29.md): Requests a thumbnail for the item.
- [thumbnailIfAvailable](thumbnailifavailable.md): Deprecated. The item’s thumbnail if it is readily available.
- [largeThumbnailIfAvailable](largethumbnailifavailable.md): Deprecated. A large thumbnail for the item if one is readily available.
- [flushThumbnailCache()](flushthumbnailcache%28%29.md): Deletes the item’s cached thumbnail.
- [ICCameraItemThumbnailOption](../iccameraitemthumbnailoption.md): An option for the item’s thumbnail.

# thumbnail (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The item’s thumbnail.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CGImageRef thumbnail;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` until you call [requestThumbnail](requestthumbnail%28%29.md).

## See Also

### Requesting Thumbnails

- [requestThumbnail](requestthumbnail%28%29.md): Requests a thumbnail for the item.
- [thumbnailIfAvailable](thumbnailifavailable.md): Deprecated. The item’s thumbnail if it is readily available.
- [largeThumbnailIfAvailable](largethumbnailifavailable.md): Deprecated. A large thumbnail for the item if one is readily available.
- [flushThumbnailCache](flushthumbnailcache%28%29.md): Deletes the item’s cached thumbnail.
- [ICCameraItemThumbnailOption](../iccameraitemthumbnailoption.md): An option for the item’s thumbnail.
