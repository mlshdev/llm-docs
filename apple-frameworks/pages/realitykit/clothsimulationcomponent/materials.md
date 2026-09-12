> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/materials](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/materials)

# materials

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

A collection of materials that cloth colliders and cloth bodies can use in this simulation.

## Declaration

```swift
var materials: ClothSimulationComponent.MaterialCollection
```

<a id="discussion"></a>

## Discussion

Cloth bodies and colliders can refer to these materials by specifying the material name via [materialNames](../clothbodycomponent/materialnames.md) and [materialNames](../clothcollidercomponent/materialnames.md).

## See Also

### Assigning materials

- [ClothSimulationComponent.MaterialCollection](materialcollection.md): A collection of materials.
- [ClothSimulationComponent.Material](material.md): A material that represents a cloth body or collider material.
