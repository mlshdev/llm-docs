> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/rotategesture3d/init(constrainedtoaxis:minimumangledelta:)](https://developer.apple.com/documentation/swiftui/rotategesture3d/init(constrainedtoaxis:minimumangledelta:))

# init(constrainedToAxis:minimumAngleDelta:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Creates a rotation gesture with a minimum delta for the gesture to start and axis to constrain measurement of rotation.

## Declaration

```swift
nonisolated init(constrainedToAxis: RotationAxis3D? = nil, minimumAngleDelta: Angle = .degrees(1))
```

## Parameters

- `constrainedToAxis`: The 3D axis about which rotation is measured.
- `minimumAngleDelta`: The minimum delta required before the gesture starts. The default value is a one-degree angle.

<a id="discussion"></a>

## Discussion

If the constrained axis is `nil`, the gesture measures unconstrained 3D rotation.

## See Also

### Creating the gesture

- [init(constrainedToAxis:minimumAngleDelta:inputKinds:)](init%28constrainedtoaxis_minimumangledelta_inputkinds_%29.md): Creates a rotation gesture with a minimum delta for the gesture to start, an axis to constrain measurement of rotation, and the input kinds the gesture should recognize.
- [minimumAngleDelta](minimumangledelta.md): The minimum angle delta before the gesture becomes active.
- [constrainedAxis](constrainedaxis.md): An axis around which the rotation is constrained.
