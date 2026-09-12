> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spprojectivetransform3dsetoffset](https://developer.apple.com/documentation/spatial/spprojectivetransform3dsetoffset)

# SPProjectiveTransform3DSetOffset

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 16.0) · iPadOS 16.0+ (deprecated in 16.0) · Mac Catalyst 16.0+ (deprecated in 16.0) · macOS 13.0+ (deprecated in 13.0) · tvOS 16.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.0+ (deprecated in 9.0)

Sets the translation of a projective transform.

## Declaration

```objectivec
static void SPProjectiveTransform3DSetOffset(SPProjectiveTransform3D *transform, SPVector3D offset);
```

## See Also

### Deprecated symbols

- [SPProjectiveTransform3DMakeWithRightHandPerspective](projectivetransform3d/init%28fovyradians_aspectratio_nearz_farz_reversez_%29.md): Deprecated. Returns a projective transform with right-hand-side perspective and optional reverse-z.
- [SPProjectiveTransform3DMakeWithRightHandPerspective](projectivetransform3d/init%28fovyradians_aspectratio_nearz_farz_%29.md): Deprecated.
- [SPProjectiveTransform3DMakeTranslation](spprojectivetransform3dmaketranslation-5hc37.md): Deprecated. Creates a projective transform from the specified translate transform.
- [SPProjectiveTransform3DMakeWithRHPerspective](spprojectivetransform3dmakewithrhperspective-97qwp.md): Deprecated. Returns a projective transform with right-hand side perspective.
- [SPProjectiveTransform3DTranslate](spprojectivetransform3dtranslate-4tynj.md): Deprecated. Returns a transform with an origin that’s offset by the specified size.
- [SPProjectiveTransform3DGetTranslation](spprojectivetransform3dgettranslation.md): The projective transform’s translation.
