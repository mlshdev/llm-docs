> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodymaterial/springstiffness](https://developer.apple.com/documentation/realitykit/clothbodymaterial/springstiffness)

# springStiffness

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The resistance to compressing and stretching between adjacent particles.

## Declaration

```swift
var springStiffness: Float { get set }
```

<a id="discussion"></a>

## Discussion

The valid range is \[0.0, 1.0\], both included. Values outside the valid range are clamped. The default value is `1.0`.

## See Also

### Configuring stiffness and damping

- [bendStiffness](bendstiffness.md): The resistance to bending between adjacent triangles.
- [crossTetherStiffness](crosstetherstiffness.md): The resistance to shearing between opposing vertices.
- [laplacianDamping](laplaciandamping.md): Damping applied to the velocities of the particles, based on the velocities of their connecting particles.
