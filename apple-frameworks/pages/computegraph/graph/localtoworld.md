> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/graph/localtoworld](https://developer.apple.com/documentation/computegraph/graph/localtoworld)

# graph::localToWorld

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Returns the transformation matrix from local space to world space.

## Declaration

```swift
float4x4 graph::localToWorld()
```

<a id="return-value"></a>

## Return Value

A 4x4 transformation matrix for local-to-world conversion.

<a id="discussion"></a>

## Discussion

This matrix transforms coordinates from the graph’s local coordinate system to the scene’s coordinate system, incorporating all parent transformations.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/graph__localToWorld.svg)
