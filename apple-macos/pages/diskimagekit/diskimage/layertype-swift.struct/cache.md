> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/diskimagekit/diskimage/layertype-swift.struct/cache

# cache

**Framework:** DiskImageKit  
**Kind:** Type Property  
**Availability:** macOS 27.0+

A cache layer.

## Declaration

```swift
static let cache: DiskImage.LayerType
```

<a id="discussion"></a>

## Discussion

Cache layers store all the blocks read from the layers beneath it in the stack. A cache layer is useful when the base image is on a network mount, for example.
