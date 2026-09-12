> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/planeanchor/classification-swift.enum](https://developer.apple.com/documentation/arkit/planeanchor/classification-swift.enum)

# PlaneAnchor.Classification

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** visionOS 1.0+ (deprecated in 26.0)

The kinds of object classification a plane anchor can have.

## Declaration

```swift
enum Classification
```

## Topics

### Getting known classifications

- [PlaneAnchor.Classification.ceiling](classification-swift.enum/ceiling.md): Deprecated. A ceiling.
- [PlaneAnchor.Classification.door](classification-swift.enum/door.md): Deprecated. A door.
- [PlaneAnchor.Classification.floor](classification-swift.enum/floor.md): Deprecated. A floor.
- [PlaneAnchor.Classification.seat](classification-swift.enum/seat.md): Deprecated. A seat.
- [PlaneAnchor.Classification.table](classification-swift.enum/table.md): Deprecated. A table.
- [PlaneAnchor.Classification.wall](classification-swift.enum/wall.md): Deprecated. A wall.
- [PlaneAnchor.Classification.window](classification-swift.enum/window.md): Deprecated. A window.

### Getting unknown classifications

- [PlaneAnchor.Classification.notAvailable](classification-swift.enum/notavailable.md): Deprecated. A plane classification is currently unavailable.
- [PlaneAnchor.Classification.undetermined](classification-swift.enum/undetermined.md): Deprecated. A plane classification hasn’t been determined yet.
- [PlaneAnchor.Classification.unknown](classification-swift.enum/unknown.md): Deprecated. A plane classification isn’t one of the known classes.

### Instance Properties

- [description](classification-swift.enum/description.md): Deprecated. A textual representation of PlaneAnchor.Classification

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
- [PlaneAnchor.Alignment](alignment-swift.enum.md): Values describing possible general orientations of a detected plane with respect to gravity.
- [classification](classification-swift.property.md): Deprecated. Get the classification of this plane.
- [description](description.md): A textual representation of this anchor.
