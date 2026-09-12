> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computegraphsimulation/advanceparams/worldtolocal](https://developer.apple.com/documentation/computegraph/computegraphsimulation/advanceparams/worldtolocal)

# worldToLocal

**Framework:** Compute Graph  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

The transform from world space to the system’s local space.

## Declaration

```swift
var worldToLocal: simd_float4x4
```

<a id="discussion"></a>

## Discussion

How this matrix is applied depends on the graph’s coordinateSpace.
