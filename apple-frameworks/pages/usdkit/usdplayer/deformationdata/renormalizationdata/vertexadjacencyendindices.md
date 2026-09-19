> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdplayer/deformationdata/renormalizationdata/vertexadjacencyendindices

# vertexAdjacencyEndIndices

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Cumulative end indices into `vertexAdjacencies`, one per vertex.

## Declaration

```swift
let vertexAdjacencyEndIndices: [UInt32]
```

<a id="discussion"></a>

## Discussion

`vertexAdjacencyEndIndices[i]` marks where vertex `i`’s adjacency data ends.
