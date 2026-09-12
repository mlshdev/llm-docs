> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/planeanchor/alignment-swift.enum](https://developer.apple.com/documentation/arkit/planeanchor/alignment-swift.enum)

# PlaneAnchor.Alignment

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** visionOS 1.0+

Values describing possible general orientations of a detected plane with respect to gravity.

## Declaration

```swift
enum Alignment
```

## Topics

### Alignment Values

- [PlaneAnchor.Alignment.horizontal](alignment-swift.enum/horizontal.md): The plane is in a horizontal oriention.
- [PlaneAnchor.Alignment.vertical](alignment-swift.enum/vertical.md): The plane is in a vertical orientation.

### Enumeration Cases

- [PlaneAnchor.Alignment.slanted](alignment-swift.enum/slanted.md): The plane is in a slanted orientation.

### Instance Properties

- [description](alignment-swift.enum/description.md): A textual representation of PlaneAnchor.Alignment

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a plane anchor

- [originFromAnchorTransform](originfromanchortransform.md): The location and orientation of a plane in world space.
- [alignment](alignment-swift.property.md): The general orientation of the detected plane with respect to gravity.
- [classification](classification-swift.property.md): Deprecated. Get the classification of this plane.
- [PlaneAnchor.Classification](classification-swift.enum.md): Deprecated. The kinds of object classification a plane anchor can have.
- [description](description.md): A textual representation of this anchor.
