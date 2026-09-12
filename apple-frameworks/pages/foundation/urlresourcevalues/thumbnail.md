> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcevalues/thumbnail](https://developer.apple.com/documentation/foundation/urlresourcevalues/thumbnail)

# thumbnail

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 12.0)

A thumbnail image of the URL.

> Use the QuickLookThumbnailing framework and extension point instead

## Declaration

```swift
var thumbnail: NSImage? { get }
```

<a id="Discussion"></a>

## Discussion

The URL populates ths property by retrieving the [thumbnailKey](../urlresourcekey/thumbnailkey.md) from the resource values, and is `nil` if there’s no value for the key.

## See Also

### Thumbnail values

- [thumbnailDictionary](thumbnaildictionary-7jyzz.md): Deprecated. A dictionary of UIKit image objects keyed by size.
- [thumbnailDictionary](thumbnaildictionary-4ztst.md): Deprecated. A dictionary of AppKit image objects keyed by size.
