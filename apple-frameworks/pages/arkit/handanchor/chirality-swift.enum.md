> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/handanchor/chirality-swift.enum](https://developer.apple.com/documentation/arkit/handanchor/chirality-swift.enum)

# HandAnchor.Chirality

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** visionOS 1.0+

A value that indicates a left or right hand.

## Declaration

```swift
@frozen enum Chirality
```

## Topics

### Getting hand chirality

- [HandAnchor.Chirality.left](chirality-swift.enum/left.md): A left hand.
- [HandAnchor.Chirality.right](chirality-swift.enum/right.md): A right hand.

### Instance Properties

- [description](chirality-swift.enum/description.md): A textual representation of HandAnchor.Chirality

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting hand information

- [originFromAnchorTransform](originfromanchortransform.md): The location and orientation of a hand in world space.
- [handSkeleton](handskeleton.md): The current position and orientation of joints on a hand.
- [chirality](chirality-swift.property.md): The chirality of this hand.
- [isTracked](istracked.md): A Boolean value that indicates whether ARKit is currently tracking this hand.
- [description](description.md): A textual representation of this anchor.
