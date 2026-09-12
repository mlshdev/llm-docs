> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcekey/thumbnailkey](https://developer.apple.com/documentation/foundation/urlresourcekey/thumbnailkey)

# thumbnailKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.10+ (deprecated in 12.0)

All thumbnails as a single NSImage (read-write).

> Use the QuickLookThumbnailing framework and extension point instead

## Declaration

```swift
static let thumbnailKey: URLResourceKey
```

## See Also

### Thumbnail keys

- [thumbnailDictionaryKey](thumbnaildictionarykey.md): Deprecated. A dictionary of NSImage/UIImage objects keyed by size (read-write). See [URLThumbnailDictionaryItem](../urlthumbnaildictionaryitem.md) for a list of possible keys.
- [URLThumbnailDictionaryItem](../urlthumbnaildictionaryitem.md): Possible keys for the [thumbnailDictionaryKey](thumbnaildictionarykey.md) dictionary.

# NSURLThumbnailKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.10+ (deprecated in 12.0)

All thumbnails as a single NSImage (read-write).

> Use the QuickLookThumbnailing framework and extension point instead

## Declaration

```objectivec
extern NSURLResourceKey const NSURLThumbnailKey;
```

## See Also

### Thumbnail keys

- [NSURLThumbnailDictionaryKey](thumbnaildictionarykey.md): Deprecated. A dictionary of NSImage/UIImage objects keyed by size (read-write). See [NSURLThumbnailDictionaryItem](../urlthumbnaildictionaryitem.md) for a list of possible keys.
- [NSURLThumbnailDictionaryItem](../urlthumbnaildictionaryitem.md): Possible keys for the [NSURLThumbnailDictionaryKey](thumbnaildictionarykey.md) dictionary.
