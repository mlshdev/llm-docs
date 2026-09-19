> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/physicsmassproperties/inertia

# inertia

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The inertia in kilograms per square meter.

## Declaration

```swift
var inertia: SIMD3<Float>
```

<a id="discussion"></a>

## Discussion

The vector contains the diagonal elements of the diagonalized inertia matrix.

## See Also

### Getting mass properties

- [mass](mass.md): The mass in kilograms.
- [centerOfMass](centerofmass.md): The position of the center of mass and the orientation of the principal axes.
