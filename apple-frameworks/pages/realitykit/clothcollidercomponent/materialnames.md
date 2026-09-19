> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothcollidercomponent/materialnames

# materialNames

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The names of the collider materials used by this collider.

## Declaration

```swift
var materialNames: [String]
```

<a id="discussion"></a>

## Discussion

The default material is used if no matching material name is present in [ClothSimulationComponent](../clothsimulationcomponent.md).

The material of the collider determines various physical properties of the collider, such as friction.

Note, only the first material name is used.

## See Also

### Configuring the collider shape

- [shape](shape.md): The (simulation) shape of the collider.
