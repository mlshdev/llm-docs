> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/projectivetransform3d/init(fovyradians:aspectratio:nearz:farz:reversez:)](https://developer.apple.com/documentation/spatial/projectivetransform3d/init(fovyradians:aspectratio:nearz:farz:reversez:))

# init(fovyRadians:aspectRatio:nearZ:farZ:reverseZ:) (Swift)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Returns a projective transform with right-hand-side perspective and optional reverse-z.

> Use `SPAngle` variant of `SPProjectiveTransform3DMakeWithRightHandPerspective`.

## Declaration

```swift
init(fovyRadians: Double, aspectRatio: Double, nearZ: Double, farZ: Double, reverseZ: Bool)
```

## Parameters

- `fovyRadians`: The field-of-view angle along the y-axis.
- `aspectRatio`: The aspect ratio.
- `nearZ`: The distance to the near clipping plane.
- `farZ`: The distance to the far clipping plane.
- `reverseZ`: A Boolean value that specifies whether the matrix uses reverse z.

## See Also

### Deprecated symbols

- [offset](offset.md): Deprecated. The projective transform’s translation.
- [scale](scale.md): Deprecated. The projective transform’s scale.
- [inverted()](inverted%28%29.md): Deprecated. Returns a new transform that results from inverting an existing projective transform.
- [init(matrix:)](init%28matrix_%29-zfb.md): Deprecated. Creates a projective transform from the specified 4 x 4 single-precision matrix.
- [init(scale:rotation:translation:)](init%28scale_rotation_translation_%29-8qxxq.md): Deprecated. Creates a projective transform from the specified scale, rotate, and translate transforms.
- [init(translation:)](init%28translation_%29.md): Deprecated.
- [init(fovyRadians:aspectRatio:nearZ:farZ:)](init%28fovyradians_aspectratio_nearz_farz_%29.md): Deprecated.

# SPProjectiveTransform3DMakeWithRightHandPerspective (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Returns a projective transform with right-hand-side perspective and optional reverse-z.

> Use `SPAngle` variant of `SPProjectiveTransform3DMakeWithRightHandPerspective`.

## Declaration

```objectivec
static SPProjectiveTransform3D SPProjectiveTransform3DMakeWithRightHandPerspective(double fovyRadians, double aspectRatio, double nearZ, double farZ, bool reverseZ);
```

## Parameters

- `fovyRadians`: The field-of-view angle along the y-axis.
- `aspectRatio`: The aspect ratio.
- `nearZ`: The distance to the near clipping plane.
- `farZ`: The distance to the far clipping plane.
- `reverseZ`: A Boolean value that specifies whether the matrix uses reverse z.

## See Also

### Deprecated symbols

- [SPProjectiveTransform3DMakeWithRightHandPerspective](init%28fovyradians_aspectratio_nearz_farz_%29.md): Deprecated.
- [SPProjectiveTransform3DSetOffset](../spprojectivetransform3dsetoffset.md): Deprecated. Sets the translation of a projective transform.
- [SPProjectiveTransform3DMakeTranslation](../spprojectivetransform3dmaketranslation-5hc37.md): Deprecated. Creates a projective transform from the specified translate transform.
- [SPProjectiveTransform3DMakeWithRHPerspective](../spprojectivetransform3dmakewithrhperspective-97qwp.md): Deprecated. Returns a projective transform with right-hand side perspective.
- [SPProjectiveTransform3DTranslate](../spprojectivetransform3dtranslate-4tynj.md): Deprecated. Returns a transform with an origin that’s offset by the specified size.
- [SPProjectiveTransform3DGetTranslation](../spprojectivetransform3dgettranslation.md): The projective transform’s translation.
