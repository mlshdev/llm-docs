> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshinstance/bounds](https://developer.apple.com/documentation/realitykit/lowlevelmeshinstance/bounds)

# bounds

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The bounds of this mesh instance, in model space, or `nil` to derive bounds from the mesh part.

## Declaration

```swift
final var bounds: BoundingSphereBox? { get set }
```

<a id="discussion"></a>

## Discussion

Assign a value to override the mesh part’s bounds — for example, when using instancing to place instances across a wider area than the base mesh part covers, or when a geometry modifier displaces vertices beyond the mesh part’s recorded bounds.
