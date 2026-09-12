> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphcomponent/materials](https://developer.apple.com/documentation/realitykit/computegraphcomponent/materials)

# materials

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Per-output material overrides, keyed by output node identifier.

## Declaration

```swift
var materials: [ComputeNodeGraph.NodeID : any Material] { get set }
```

<a id="discussion"></a>

## Discussion

When non-`nil`, these materials replace the corresponding materials defined in [resource](resource.md). Set to `[:]` to restore resource-defined materials.
