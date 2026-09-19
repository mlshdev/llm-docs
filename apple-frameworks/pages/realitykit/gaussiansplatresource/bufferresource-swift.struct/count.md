> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/gaussiansplatresource/bufferresource-swift.struct/count

# count

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The number of splats the resource renders.

## Declaration

```swift
let count: Int
```

<a id="discussion"></a>

## Discussion

The framework may render fewer than the buffers contain to meet shared-space rendering constraints.
