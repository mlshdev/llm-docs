> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/handanchor/handskeleton](https://developer.apple.com/documentation/arkit/handanchor/handskeleton)

# handSkeleton

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The current position and orientation of joints on a hand.

## Declaration

```swift
var handSkeleton: HandSkeleton? { get }
```

## See Also

### Getting hand information

- [originFromAnchorTransform](originfromanchortransform.md): The location and orientation of a hand in world space.
- [chirality](chirality-swift.property.md): The chirality of this hand.
- [HandAnchor.Chirality](chirality-swift.enum.md): A value that indicates a left or right hand.
- [isTracked](istracked.md): A Boolean value that indicates whether ARKit is currently tracking this hand.
- [description](description.md): A textual representation of this anchor.
