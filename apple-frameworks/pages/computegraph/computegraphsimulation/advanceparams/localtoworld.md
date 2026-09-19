> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/computegraphsimulation/advanceparams/localtoworld

# localToWorld

**Framework:** Compute Graph  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

The transform from the system’s local space to world space.

## Declaration

```swift
var localToWorld: simd_float4x4
```

<a id="discussion"></a>

## Discussion

How this matrix is applied depends on the graph’s coordinateSpace.
