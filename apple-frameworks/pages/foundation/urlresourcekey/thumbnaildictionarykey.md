> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcekey/thumbnaildictionarykey](https://developer.apple.com/documentation/foundation/urlresourcekey/thumbnaildictionarykey)

# thumbnailDictionaryKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 15.0) · iPadOS 8.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.10+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 8.0)

A dictionary of NSImage/UIImage objects keyed by size (read-write). See [URLThumbnailDictionaryItem](../urlthumbnaildictionaryitem.md) for a list of possible keys.

> Use the QuickLookThumbnailing framework and extension point instead

## Declaration

```swift
static let thumbnailDictionaryKey: URLResourceKey
```

## See Also

### Thumbnail keys

- [thumbnailKey](thumbnailkey.md): Deprecated. All thumbnails as a single NSImage (read-write).
- [URLThumbnailDictionaryItem](../urlthumbnaildictionaryitem.md): Possible keys for the [thumbnailDictionaryKey](thumbnaildictionarykey.md) dictionary.

# NSURLThumbnailDictionaryKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ (deprecated in 15.0) · iPadOS 8.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.10+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 8.0)

A dictionary of NSImage/UIImage objects keyed by size (read-write). See [NSURLThumbnailDictionaryItem](../urlthumbnaildictionaryitem.md) for a list of possible keys.

> Use the QuickLookThumbnailing framework and extension point instead

## Declaration

```objectivec
extern NSURLResourceKey const NSURLThumbnailDictionaryKey;
```

## See Also

### Thumbnail keys

- [NSURLThumbnailKey](thumbnailkey.md): Deprecated. All thumbnails as a single NSImage (read-write).
- [NSURLThumbnailDictionaryItem](../urlthumbnaildictionaryitem.md): Possible keys for the [NSURLThumbnailDictionaryKey](thumbnaildictionarykey.md) dictionary.
