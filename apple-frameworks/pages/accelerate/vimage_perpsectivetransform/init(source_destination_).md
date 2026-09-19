> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vimage_perpsectivetransform/init(source:destination:)

# init(source:destination:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Returns a projective-transformation structure that defines the mapping between a source quadrilateral and a destination quadrilateral.

## Declaration

```swift
init?(source: vImage_PerpsectiveTransform.QuadrilateralPoints, destination: vImage_PerpsectiveTransform.QuadrilateralPoints)
```

## Parameters

- `source`: The four source points.
- `destination`: The four destination points.

## See Also

### Creating a projective-transformation structure

- [init()](init%28%29.md): Creates a projective-transformation structure.
- [init(a:b:c:d:tx:ty:vx:vy:v:)](init%28a_b_c_d_tx_ty_vx_vy_v_%29.md): Creates a projective-transformation structure from the specified single-precision values.
