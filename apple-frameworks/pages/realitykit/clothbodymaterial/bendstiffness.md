> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodymaterial/bendstiffness](https://developer.apple.com/documentation/realitykit/clothbodymaterial/bendstiffness)

# bendStiffness

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The resistance to bending between adjacent triangles.

## Declaration

```swift
var bendStiffness: Float { get set }
```

<a id="discussion"></a>

## Discussion

The valid range is \[0.0, 1.0\], both included. Values outside the valid range are clamped. The default value is `0.0`.

## See Also

### Configuring stiffness and damping

- [springStiffness](springstiffness.md): The resistance to compressing and stretching between adjacent particles.
- [crossTetherStiffness](crosstetherstiffness.md): The resistance to shearing between opposing vertices.
- [laplacianDamping](laplaciandamping.md): Damping applied to the velocities of the particles, based on the velocities of their connecting particles.
