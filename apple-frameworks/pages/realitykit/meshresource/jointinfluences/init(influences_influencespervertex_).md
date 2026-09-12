> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/jointinfluences/init(influences:influencespervertex:)](https://developer.apple.com/documentation/realitykit/meshresource/jointinfluences/init(influences:influencespervertex:))

# init(influences:influencesPerVertex:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Associates every vertex in the mesh with a fixed number of influences per vertex.

## Declaration

```swift
init(influences: MeshBuffers.JointInfluences, influencesPerVertex: Int)
```

## Parameters

- `influences`: Buffer of joint influences.
- `influencesPerVertex`: The number of consecutive influences used by each vertex.

<a id="discussion"></a>

## Discussion

> **Note**

> The buffer should contain `vertexCount * influencesPerVertex` elements.
