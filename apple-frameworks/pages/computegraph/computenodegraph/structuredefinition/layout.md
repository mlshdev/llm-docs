> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/computenodegraph/structuredefinition/layout

# layout

**Framework:** Compute Graph  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

The in-memory layout of the structure’s members.

## Declaration

```swift
var layout: ComputeNodeGraph.StructureLayout
```

<a id="discussion"></a>

## Discussion

The layout describes each member’s name, byte offset, and type, along with the structure’s size and stride. See [ComputeNodeGraph.StructureLayout](../structurelayout.md).
