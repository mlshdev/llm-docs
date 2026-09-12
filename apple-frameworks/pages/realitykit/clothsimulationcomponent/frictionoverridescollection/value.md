> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/frictionoverridescollection/value](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/frictionoverridescollection/value)

# ClothSimulationComponent.FrictionOverridesCollection.Value

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The combined frictions that override the frictions used between a pair of materials.

## Declaration

```swift
struct Value
```

## Topics

### Creating a friction value

- [init(kineticFriction:staticFriction:)](value/init%28kineticfriction_staticfriction_%29.md): Creates a friction override value with the given friction coefficients.

### Accessing friction values

- [staticFriction](value/staticfriction.md): The static friction to use between the material pair.
- [kineticFriction](value/kineticfriction.md): The kinetic friction to use between the material pair.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying overrides

- [ClothSimulationComponent.FrictionOverridesCollection.Key](key.md): The pair of materials whose combined frictions are overridden.
