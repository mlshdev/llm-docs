> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/targetshape](https://developer.apple.com/documentation/realitykit/clothbodycomponent/targetshape)

# ClothBodyComponent.TargetShape

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Pulls particles of a cloth body toward positions in either local or simulation space.

## Declaration

```swift
struct TargetShape
```

## Topics

### Creating a target shape

- [init(for:)](targetshape/init%28for_%29.md): Creates a target shape that is compatible with the given [ClothBodyComponent](../clothbodycomponent.md).

### Constraining vertex positions

- [constraints](targetshape/constraints.md): The position constraints that pull the individual particles towards the target shape.
- [ClothBodyComponent.TargetShape.PositionConstraint](targetshape/positionconstraint.md): A constraint that pulls a particle towards a certain position.

### Configuring the target shape

- [weight](targetshape/weight.md): The weight by which the body will be pulled towards this target shape.
- [space](targetshape/space.md): The space in which the position constraints are defined.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining target shapes

- [targetShapes](targetshapes.md): The target shapes associated with the body.
