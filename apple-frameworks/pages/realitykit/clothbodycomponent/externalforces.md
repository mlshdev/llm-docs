> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothbodycomponent/externalforces

# externalForces

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The external forces applied to the particles in the body (in Newtons).

## Declaration

```swift
var externalForces: PerClothVertexData<ClothBodyComponent.ExternalForce>
```

<a id="discussion"></a>

## Discussion

By default, the external forces are set to the zero vector.

## See Also

### Applying external forces

- [ClothBodyComponent.ExternalForce](externalforce.md): An external force applied to a single particle, in Newtons.
- [inflationConstraint](inflationconstraint-swift.property.md): An optional inflation constraint for representing inflatable bodies (must be watertight).
- [ClothBodyComponent.InflationConstraint](inflationconstraint-swift.struct.md): Configuration for an inflatable cloth body.
