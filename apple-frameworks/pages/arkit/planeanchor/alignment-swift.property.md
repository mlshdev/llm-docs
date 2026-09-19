> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/planeanchor/alignment-swift.property

# alignment

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The general orientation of the detected plane with respect to gravity.

## Declaration

```swift
var alignment: PlaneAnchor.Alignment { get }
```

## See Also

### Inspecting a plane anchor

- [originFromAnchorTransform](originfromanchortransform.md): The location and orientation of a plane in world space.
- [PlaneAnchor.Alignment](alignment-swift.enum.md): Values describing possible general orientations of a detected plane with respect to gravity.
- [classification](classification-swift.property.md): Deprecated. Get the classification of this plane.
- [PlaneAnchor.Classification](classification-swift.enum.md): Deprecated. The kinds of object classification a plane anchor can have.
- [description](description.md): A textual representation of this anchor.
