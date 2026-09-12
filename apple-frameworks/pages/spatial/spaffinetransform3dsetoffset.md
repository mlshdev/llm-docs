> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spaffinetransform3dsetoffset](https://developer.apple.com/documentation/spatial/spaffinetransform3dsetoffset)

# SPAffineTransform3DSetOffset

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 16.0) · iPadOS 16.0+ (deprecated in 16.0) · Mac Catalyst 16.0+ (deprecated in 16.0) · macOS 13.0+ (deprecated in 13.0) · tvOS 16.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.0+ (deprecated in 9.0)

Sets the translation of an affine transform.

## Declaration

```objectivec
static void SPAffineTransform3DSetOffset(SPAffineTransform3D *transform, SPVector3D offset);
```

## See Also

### Deprecated symbols

- [SPAffineTransform3DGetTranslation](spaffinetransform3dgettranslation.md): The affine transform’s translation.
- [SPAffineTransform3DMakeTranslation](spaffinetransform3dmaketranslation-2y1t6.md): Deprecated. Creates an affine transform from the specified translate transform.
- [SPAffineTransform3DTranslate](spaffinetransform3dtranslate-5pm5m.md): Deprecated. Returns a transform with an origin that’s offset by the specified size.
