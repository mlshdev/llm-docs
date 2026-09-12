> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/materialcollection/subscript(_:_:)-49wu](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/materialcollection/subscript(_:_:)-49wu)

# subscript(\_:\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Accesses a body material by name, returning `nil` if the name is absent or the material is not a body material.

## Declaration

```swift
subscript(name: String, type: ClothBodyMaterial.Type) -> ClothBodyMaterial? { get set }
```

## See Also

### Accessing materials

- [subscript(\_:\_:)](subscript%28____%29-8ncq4.md): Accesses a collider material by name, returning `nil` if the name is absent or the material is not a collider material.
