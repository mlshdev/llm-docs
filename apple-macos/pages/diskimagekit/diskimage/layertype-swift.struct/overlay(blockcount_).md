> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/diskimage/layertype-swift.struct/overlay(blockcount:)](https://developer.apple.com/documentation/diskimagekit/diskimage/layertype-swift.struct/overlay(blockcount:))

# overlay(blockCount:)

**Framework:** DiskImageKit  
**Kind:** Type Method  
**Availability:** macOS 27.0+

An overlay layer with a specific block count.

## Declaration

```swift
static func overlay(blockCount: Int) -> DiskImage.LayerType
```

## Parameters

- `blockCount`: The number of blocks for the overlay layer, which changes the effective size of the entire stack. `blockCount` must be greater than zero.

<a id="discussion"></a>

## Discussion

Overlay layers store all the changed blocks from the layers beneath it in the stack. This variant resizes the stacked disk image since the size is determined by the top-most layer.
