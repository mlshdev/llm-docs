> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4updatesparsetexturemappingoperation/mode](https://developer.apple.com/documentation/metal/mtl4updatesparsetexturemappingoperation/mode)

# mode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The mode of the mapping operation to perform.

## Declaration

```swift
var mode: MTLSparseTextureMappingMode
```

<a id="discussion"></a>

## Discussion

When mode is [MTLSparseTextureMappingMode.map](../mtlsparsetexturemappingmode/map.md), Metal walks the tiles in the region in X, Y, then Z order, assigning the next tile from the heap in increasing order, starting at [heapOffset](heapoffset.md).

When mode is [MTLSparseTextureMappingMode.unmap](../mtlsparsetexturemappingmode/unmap.md), Metal unmaps the tiles in the region, ignoring the contents of member [heapOffset](heapoffset.md).

# mode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The mode of the mapping operation to perform.

## Declaration

```objectivec
MTLSparseTextureMappingMode mode;
```

<a id="discussion"></a>

## Discussion

When mode is [MTLSparseTextureMappingModeMap](../mtlsparsetexturemappingmode/map.md), Metal walks the tiles in the region in X, Y, then Z order, assigning the next tile from the heap in increasing order, starting at [heapOffset](heapoffset.md).

When mode is [MTLSparseTextureMappingModeUnmap](../mtlsparsetexturemappingmode/unmap.md), Metal unmaps the tiles in the region, ignoring the contents of member [heapOffset](heapoffset.md).
