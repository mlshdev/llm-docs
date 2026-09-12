> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameraitemthumbnailoption](https://developer.apple.com/documentation/imagecapturecore/iccameraitemthumbnailoption)

# ICCameraItemThumbnailOption (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An option for the item’s thumbnail.

## Declaration

```swift
struct ICCameraItemThumbnailOption
```

## Topics

### Initializers

- [init(rawValue:)](iccameraitemthumbnailoption/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting Thumbnails

- [requestThumbnail()](iccameraitem/requestthumbnail%28%29.md): Requests a thumbnail for the item.
- [thumbnail](iccameraitem/thumbnail.md): The item’s thumbnail.
- [thumbnailIfAvailable](iccameraitem/thumbnailifavailable.md): Deprecated. The item’s thumbnail if it is readily available.
- [largeThumbnailIfAvailable](iccameraitem/largethumbnailifavailable.md): Deprecated. A large thumbnail for the item if one is readily available.
- [flushThumbnailCache()](iccameraitem/flushthumbnailcache%28%29.md): Deletes the item’s cached thumbnail.

# ICCameraItemThumbnailOption (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An option for the item’s thumbnail.

## Declaration

```objectivec
typedef NSString * ICCameraItemThumbnailOption;
```

## See Also

### Requesting Thumbnails

- [requestThumbnail](iccameraitem/requestthumbnail%28%29.md): Requests a thumbnail for the item.
- [thumbnail](iccameraitem/thumbnail.md): The item’s thumbnail.
- [thumbnailIfAvailable](iccameraitem/thumbnailifavailable.md): Deprecated. The item’s thumbnail if it is readily available.
- [largeThumbnailIfAvailable](iccameraitem/largethumbnailifavailable.md): Deprecated. A large thumbnail for the item if one is readily available.
- [flushThumbnailCache](iccameraitem/flushthumbnailcache%28%29.md): Deletes the item’s cached thumbnail.
