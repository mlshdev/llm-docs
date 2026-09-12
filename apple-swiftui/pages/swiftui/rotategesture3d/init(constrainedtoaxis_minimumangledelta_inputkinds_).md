> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/rotategesture3d/init(constrainedtoaxis:minimumangledelta:inputkinds:)](https://developer.apple.com/documentation/swiftui/rotategesture3d/init(constrainedtoaxis:minimumangledelta:inputkinds:))

# init(constrainedToAxis:minimumAngleDelta:inputKinds:)

**Framework:** SwiftUI  
**Kind:** Initializer

Creates a rotation gesture with a minimum delta for the gesture to start, an axis to constrain measurement of rotation, and the input kinds the gesture should recognize.

## Declaration

```swift
nonisolated init(constrainedToAxis: RotationAxis3D? = nil, minimumAngleDelta: Angle = .degrees(1), inputKinds: GestureInputKinds = .all)
```

## Parameters

- `constrainedToAxis`: The 3D axis about which rotation is measured.
- `minimumAngleDelta`: The minimum delta required before the gesture starts. The default value is a one-degree angle.
- `inputKinds`: A set of input kinds that this gesture recognizes. If not specified, the gesture will recognize all applicable input kinds that a person can use to perform it.

<a id="discussion"></a>

## Discussion

If the constrained axis is `nil`, the gesture measures unconstrained 3D rotation.

## See Also

### Creating the gesture

- [init(constrainedToAxis:minimumAngleDelta:)](init%28constrainedtoaxis_minimumangledelta_%29.md): Creates a rotation gesture with a minimum delta for the gesture to start and axis to constrain measurement of rotation.
- [minimumAngleDelta](minimumangledelta.md): The minimum angle delta before the gesture becomes active.
- [constrainedAxis](constrainedaxis.md): An axis around which the rotation is constrained.
