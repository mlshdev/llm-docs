> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/shadergraph/edge/outputport

# outputPort

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The name of the output port on the source node.

## Declaration

```swift
var outputPort: String?
```

<a id="discussion"></a>

## Discussion

Output ports represent values produced by a node that can be connected to inputs of other nodes. When `nil`, refers to the first output of a node.
