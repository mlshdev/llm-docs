> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/materialcollection](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/materialcollection)

# ClothSimulationComponent.MaterialCollection

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

A collection of materials.

## Declaration

```swift
struct MaterialCollection
```

## Topics

### Accessing materials

- [subscript(\_:\_:)](materialcollection/subscript%28____%29-49wu.md): Accesses a body material by name, returning `nil` if the name is absent or the material is not a body material.
- [subscript(\_:\_:)](materialcollection/subscript%28____%29-8ncq4.md): Accesses a collider material by name, returning `nil` if the name is absent or the material is not a collider material.

### Removing materials

- [remove(name:)](materialcollection/remove%28name_%29.md)

### Subscripts

- [subscript(\_:)](materialcollection/subscript%28__%29.md): Accesses the material with the given name, returning `nil` if no material with that name exists.
- [subscript(\_:\_:)](materialcollection/subscript%28____%29.md): Accesses a body material by name, returning `nil` if the name is absent or the material is not a body material.

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Assigning materials

- [materials](materials.md): A collection of materials that cloth colliders and cloth bodies can use in this simulation.
- [ClothSimulationComponent.Material](material.md): A material that represents a cloth body or collider material.
