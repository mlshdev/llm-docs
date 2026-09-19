> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/graph/worldtolocal

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
