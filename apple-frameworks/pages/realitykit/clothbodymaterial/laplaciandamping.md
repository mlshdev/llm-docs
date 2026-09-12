> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodymaterial/laplaciandamping](https://developer.apple.com/documentation/realitykit/clothbodymaterial/laplaciandamping)

# laplacianDamping

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Damping applied to the velocities of the particles, based on the velocities of their connecting particles.

## Declaration

```swift
var laplacianDamping: Float { get set }
```

<a id="discussion"></a>

## Discussion

Higher values will make the cloth behave more similar to a “wet cloth”.

The valid range is \[0.0, 1.0\], both included. Values outside the valid range are clamped. The default value is `0.1`.

## See Also

### Configuring stiffness and damping

- [springStiffness](springstiffness.md): The resistance to compressing and stretching between adjacent particles.
- [bendStiffness](bendstiffness.md): The resistance to bending between adjacent triangles.
- [crossTetherStiffness](crosstetherstiffness.md): The resistance to shearing between opposing vertices.
