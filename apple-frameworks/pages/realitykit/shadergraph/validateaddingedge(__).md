> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/shadergraph/validateaddingedge(_:)

# validateAddingEdge(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Validates that an edge can be added to the graph without adding it, throwing a descriptive error if not.

## Declaration

```swift
final func validateAddingEdge(_ edge: ShaderGraph.Edge) throws
```

<a id="discussion"></a>

## Discussion

Use [canAddEdge(\_:)](canaddedge%28__%29.md) instead when only a yes/no answer is needed.
