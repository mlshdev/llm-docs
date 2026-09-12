> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/planeanchor/originfromanchortransform](https://developer.apple.com/documentation/arkit/planeanchor/originfromanchortransform)

# originFromAnchorTransform

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The location and orientation of a plane in world space.

## Declaration

```swift
var originFromAnchorTransform: simd_float4x4 { get }
```

## See Also

### Inspecting a plane anchor

- [alignment](alignment-swift.property.md): The general orientation of the detected plane with respect to gravity.
- [PlaneAnchor.Alignment](alignment-swift.enum.md): Values describing possible general orientations of a detected plane with respect to gravity.
- [classification](classification-swift.property.md): Deprecated. Get the classification of this plane.
- [PlaneAnchor.Classification](classification-swift.enum.md): Deprecated. The kinds of object classification a plane anchor can have.
- [description](description.md): A textual representation of this anchor.
