> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/diskimagekit/diskimage/layertype-swift.struct/overlay

# overlay

**Framework:** DiskImageKit  
**Kind:** Type Property  
**Availability:** macOS 27.0+

An overlay layer that inherits its size from the layer beneath it.

## Declaration

```swift
static let overlay: DiskImage.LayerType
```

<a id="discussion"></a>

## Discussion

Overlay layers store all the changed blocks from the layers beneath it in the stack. This variant inherits the size from the layer beneath it. To create overlay layers with a specific block count, use [overlay(blockCount:)](overlay%28blockcount_%29.md) instead.
