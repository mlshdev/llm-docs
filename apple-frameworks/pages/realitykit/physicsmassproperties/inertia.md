> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsmassproperties/inertia](https://developer.apple.com/documentation/realitykit/physicsmassproperties/inertia)

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
