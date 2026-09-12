> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/frictionoverridescollection](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/frictionoverridescollection)

# ClothSimulationComponent.FrictionOverridesCollection

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

A collection of materials pairs whose combined frictions are overridden.

## Declaration

```swift
struct FrictionOverridesCollection
```

## Topics

### Identifying overrides

- [ClothSimulationComponent.FrictionOverridesCollection.Key](frictionoverridescollection/key.md): The pair of materials whose combined frictions are overridden.
- [ClothSimulationComponent.FrictionOverridesCollection.Value](frictionoverridescollection/value.md): The combined frictions that override the frictions used between a pair of materials.

### Removing overrides

- [removeOverride(forKey:)](frictionoverridescollection/removeoverride%28forkey_%29.md)

### Subscripts

- [subscript(\_:)](frictionoverridescollection/subscript%28__%29.md): Accesses the friction override for the given material pair, returning `nil` if no override exists.

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Overriding friction

- [frictionOverrides](frictionoverrides.md): A map to manually override friction values between pairs of materials.
