> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/handanchor/originfromanchortransform](https://developer.apple.com/documentation/arkit/handanchor/originfromanchortransform)

# originFromAnchorTransform

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The location and orientation of a hand in world space.

## Declaration

```swift
var originFromAnchorTransform: simd_float4x4 { get }
```

<a id="Discussion"></a>

## Discussion

The transform of a hand anchor is positioned at the base of the wrist. ARKit provides transforms of other joints on the hand relative to this root transform.

## See Also

### Getting hand information

- [handSkeleton](handskeleton.md): The current position and orientation of joints on a hand.
- [chirality](chirality-swift.property.md): The chirality of this hand.
- [HandAnchor.Chirality](chirality-swift.enum.md): A value that indicates a left or right hand.
- [isTracked](istracked.md): A Boolean value that indicates whether ARKit is currently tracking this hand.
- [description](description.md): A textual representation of this anchor.
