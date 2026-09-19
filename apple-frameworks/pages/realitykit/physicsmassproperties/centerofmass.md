> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/physicsmassproperties/centerofmass

# centerOfMass

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The position of the center of mass and the orientation of the principal axes.

## Declaration

```swift
var centerOfMass: (position: SIMD3<Float>, orientation: simd_quatf)
```

<a id="discussion"></a>

## Discussion

The `position` defines the center of mass with a default value of `(0, 0, 0)`, which means that the local origin of the model is the center of mass.

The `orientation` defines the principal axes, such the inertia matrix is a diagonal.

## See Also

### Getting mass properties

- [mass](mass.md): The mass in kilograms.
- [inertia](inertia.md): The inertia in kilograms per square meter.
