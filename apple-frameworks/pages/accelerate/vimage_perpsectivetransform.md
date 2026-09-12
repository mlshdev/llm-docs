> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_perpsectivetransform](https://developer.apple.com/documentation/accelerate/vimage_perpsectivetransform)

# vImage_PerpsectiveTransform (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A projective-transformation matrix.

## Declaration

```swift
struct vImage_PerpsectiveTransform
```

## Topics

### Creating a projective-transformation structure

- [init()](vimage_perpsectivetransform/init%28%29.md): Creates a projective-transformation structure.
- [init(a:b:c:d:tx:ty:vx:vy:v:)](vimage_perpsectivetransform/init%28a_b_c_d_tx_ty_vx_vy_v_%29.md): Creates a projective-transformation structure from the specified single-precision values.
- [init(source:destination:)](vimage_perpsectivetransform/init%28source_destination_%29.md): Returns a projective-transformation structure that defines the mapping between a source quadrilateral and a destination quadrilateral.

### Inspecting a projective-transformation structure’s properties

- [a](vimage_perpsectivetransform/a.md): The top-left cell in the 3 x 3 transformation matrix.
- [b](vimage_perpsectivetransform/b.md): The top-middle cell in the 3 x 3 transformation matrix.
- [c](vimage_perpsectivetransform/c.md): The middle-left cell in the 3 x 3 transformation matrix.
- [d](vimage_perpsectivetransform/d.md): The middle-middle cell in the 3 x 3 transformation matrix.
- [tx](vimage_perpsectivetransform/tx.md): The x-coordinate translation.
- [ty](vimage_perpsectivetransform/ty.md): The y-coordinate translation.
- [vx](vimage_perpsectivetransform/vx.md): The x-component of the projective vector.
- [vy](vimage_perpsectivetransform/vy.md): The y-component of the projective vector.
- [v](vimage_perpsectivetransform/v.md): The homogeneous scale factor.

### Type Aliases

- [vImage_PerpsectiveTransform.QuadrilateralPoints](vimage_perpsectivetransform/quadrilateralpoints.md): A tuple of four points that define a quadrilateral.

### Enumerations

- [vImage_PerpsectiveTransform.Interpolation](vimage_perpsectivetransform/interpolation.md): Constants that describe the projective-transformation interpolation method.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Computing a projective transformation from source and destination quadrilaterals

- [Transforming an image in three dimensions](transforming-an-image-in-three-dimensions.md): Create and use a projective transformation to apply a perspective warp to an image.
- [vImageGetPerspectiveWarp(\_:\_:\_:\_:)](vimagegetperspectivewarp%28________%29.md): Returns a projective-transformation structure that defines the mapping between a source quadrilateral and a destination quadrilateral.

# vImage_PerpsectiveTransform (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A projective-transformation matrix.

## Declaration

```objectivec
typedef struct vImage_PerpsectiveTransform { ... } vImage_PerpsectiveTransform;
```

## Topics

### Inspecting a projective-transformation structure’s properties

- [a](vimage_perpsectivetransform/a.md): The top-left cell in the 3 x 3 transformation matrix.
- [b](vimage_perpsectivetransform/b.md): The top-middle cell in the 3 x 3 transformation matrix.
- [c](vimage_perpsectivetransform/c.md): The middle-left cell in the 3 x 3 transformation matrix.
- [d](vimage_perpsectivetransform/d.md): The middle-middle cell in the 3 x 3 transformation matrix.
- [tx](vimage_perpsectivetransform/tx.md): The x-coordinate translation.
- [ty](vimage_perpsectivetransform/ty.md): The y-coordinate translation.
- [vx](vimage_perpsectivetransform/vx.md): The x-component of the projective vector.
- [vy](vimage_perpsectivetransform/vy.md): The y-component of the projective vector.
- [v](vimage_perpsectivetransform/v.md): The homogeneous scale factor.

## See Also

### Computing a projective transformation from source and destination quadrilaterals

- [Transforming an image in three dimensions](transforming-an-image-in-three-dimensions.md): Create and use a projective transformation to apply a perspective warp to an image.
- [vImageGetPerspectiveWarp](vimagegetperspectivewarp%28________%29.md): Returns a projective-transformation structure that defines the mapping between a source quadrilateral and a destination quadrilateral.
