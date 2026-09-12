> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/frictionoverrides](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/frictionoverrides)

# frictionOverrides

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

A map to manually override friction values between pairs of materials.

## Declaration

```swift
var frictionOverrides: ClothSimulationComponent.FrictionOverridesCollection
```

<a id="discussion"></a>

## Discussion

Each material has its own friction properties. When two materials come into contact and no override exists for that pair, the effective friction is the product of the two materials’ friction values. When an override is present, it replaces that combined value entirely for both static and kinetic friction. This way, it is possible to customize exactly what friction values should be used between a given pair of materials.

## See Also

### Overriding friction

- [ClothSimulationComponent.FrictionOverridesCollection](frictionoverridescollection.md): A collection of materials pairs whose combined frictions are overridden.
