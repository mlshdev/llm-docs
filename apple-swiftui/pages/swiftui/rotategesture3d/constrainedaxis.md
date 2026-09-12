> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/rotategesture3d/constrainedaxis](https://developer.apple.com/documentation/swiftui/rotategesture3d/constrainedaxis)

# constrainedAxis

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

An axis around which the rotation is constrained.

## Declaration

```swift
var constrainedAxis: RotationAxis3D?
```

<a id="discussion"></a>

## Discussion

If the axis is `nil`, the rotation is unconstrained.

## See Also

### Creating the gesture

- [init(constrainedToAxis:minimumAngleDelta:)](init%28constrainedtoaxis_minimumangledelta_%29.md): Creates a rotation gesture with a minimum delta for the gesture to start and axis to constrain measurement of rotation.
- [init(constrainedToAxis:minimumAngleDelta:inputKinds:)](init%28constrainedtoaxis_minimumangledelta_inputkinds_%29.md): Creates a rotation gesture with a minimum delta for the gesture to start, an axis to constrain measurement of rotation, and the input kinds the gesture should recognize.
- [minimumAngleDelta](minimumangledelta.md): The minimum angle delta before the gesture becomes active.
