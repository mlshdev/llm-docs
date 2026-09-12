> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/graph/worldtolocal](https://developer.apple.com/documentation/computegraph/graph/worldtolocal)

# graph::worldToLocal

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Returns the transformation matrix from world space to local space.

## Declaration

```swift
float4x4 graph::worldToLocal()
```

<a id="return-value"></a>

## Return Value

A 4x4 transformation matrix for world-to-local conversion.

<a id="discussion"></a>

## Discussion

This matrix transforms coordinates from the scene’s coordinate system to the graph’s local coordinate system. It is the inverse of the local-to-world matrix.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/graph__worldToLocal.svg)
