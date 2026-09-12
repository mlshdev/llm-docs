> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/targetshape/positionconstraint](https://developer.apple.com/documentation/realitykit/clothbodycomponent/targetshape/positionconstraint)

# ClothBodyComponent.TargetShape.PositionConstraint

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

A constraint that pulls a particle towards a certain position.

## Declaration

```swift
struct PositionConstraint
```

## Topics

### Creating a constraint

- [init(position:stiffness:)](positionconstraint/init%28position_stiffness_%29.md): Creates a position constraint with the given target position and stiffness.

### Configuring the constraint

- [stiffness](positionconstraint/stiffness.md): The stiffness by which the particle is pulled towards the position.

### Instance Properties

- [position](positionconstraint/position.md): The target position.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constraining vertex positions

- [constraints](constraints.md): The position constraints that pull the individual particles towards the target shape.
