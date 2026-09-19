> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spaffinetransform3dmaketranslation-2y1t6

# SPAffineTransform3DMakeTranslation

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 16.0) · iPadOS 16.0+ (deprecated in 16.0) · Mac Catalyst 16.0+ (deprecated in 16.0) · macOS 13.0+ (deprecated in 13.0) · tvOS 16.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.0+ (deprecated in 9.0)

Creates an affine transform from the specified translate transform.

## Declaration

```objectivec
static SPAffineTransform3D SPAffineTransform3DMakeTranslation(SPSize3D translation);
```

## Parameters

- `translation`: A size structure that specifies the translation.

## See Also

### Deprecated symbols

- [SPAffineTransform3DGetTranslation](spaffinetransform3dgettranslation.md): The affine transform’s translation.
- [SPAffineTransform3DSetOffset](spaffinetransform3dsetoffset.md): Deprecated. Sets the translation of an affine transform.
- [SPAffineTransform3DTranslate](spaffinetransform3dtranslate-5pm5m.md): Deprecated. Returns a transform with an origin that’s offset by the specified size.
