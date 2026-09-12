> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/diskimage/layertype-swift.property](https://developer.apple.com/documentation/diskimagekit/diskimage/layertype-swift.property)

# layerType

**Framework:** DiskImageKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The layer type of the disk image.

## Declaration

```swift
var layerType: DiskImage.LayerType? { get }
```

<a id="discussion"></a>

## Discussion

Returns [cache](layertype-swift.struct/cache.md) for cache layers and [overlay](layertype-swift.struct/overlay.md) for overlay layers that are part of a stacked disk image. Returns `nil` for standalone images, for the base layer of a stack and for the stacked image itself.
