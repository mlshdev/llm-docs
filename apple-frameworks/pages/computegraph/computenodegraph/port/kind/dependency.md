> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/port/kind/dependency](https://developer.apple.com/documentation/computegraph/computenodegraph/port/kind/dependency)

# ComputeNodeGraph.Port.Kind.dependency

**Framework:** Compute Graph  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Pure “happens-after” edge. No runtime payload, no type lineage, no type compatibility check. The destination is ordered after the source but does not consume its output. Use this to splice a node (e.g. a compute stage) into execution order between two unrelated nodes.

## Declaration

```swift
case dependency
```
