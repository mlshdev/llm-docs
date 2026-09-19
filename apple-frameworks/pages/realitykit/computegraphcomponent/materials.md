> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/computegraphcomponent/materials

# materials

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The material used to render each graph output, keyed by output node identifier.

## Declaration

```swift
var materials: [ComputeNodeGraph.NodeID : any Material] { get set }
```

<a id="discussion"></a>

## Discussion

Assigning a [resource](resource.md) initializes this dictionary from the materials the resource defines for its outputs. Assign a new value to replace them.
