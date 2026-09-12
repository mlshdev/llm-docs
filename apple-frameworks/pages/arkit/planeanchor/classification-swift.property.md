> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/planeanchor/classification-swift.property](https://developer.apple.com/documentation/arkit/planeanchor/classification-swift.property)

# classification

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+ (deprecated in 26.0)

Get the classification of this plane.

## Declaration

```swift
var classification: PlaneAnchor.Classification { get }
```

## See Also

### Inspecting a plane anchor

- [originFromAnchorTransform](originfromanchortransform.md): The location and orientation of a plane in world space.
- [alignment](alignment-swift.property.md): The general orientation of the detected plane with respect to gravity.
- [PlaneAnchor.Alignment](alignment-swift.enum.md): Values describing possible general orientations of a detected plane with respect to gravity.
- [PlaneAnchor.Classification](classification-swift.enum.md): Deprecated. The kinds of object classification a plane anchor can have.
- [description](description.md): A textual representation of this anchor.
