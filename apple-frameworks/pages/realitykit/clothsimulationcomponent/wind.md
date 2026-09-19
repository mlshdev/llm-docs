> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/wind

# wind

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The wind force affecting all the cloth bodies in the simulation, in Newtons.

## Declaration

```swift
var wind: SIMD3<Float>
```

<a id="discussion"></a>

## Discussion

The magnitude of the force applied to each particle depends on the angle between the wind direction and the particle’s normal. Full force is applied when the wind is aligned with the normal, and no force is applied when the wind is perpendicular to the normal.

Expressed in the simulation root entity’s local coordinate space. The default value is (0, 0, 0).

## See Also

### Applying forces

- [gravity](gravity.md): The gravitational acceleration for the bodies in the simulation, in m/s².
- [dampingFactor](dampingfactor.md): The damping factor affecting all the cloth bodies in the simulation. The expected range is between 0 and 1 (included).
