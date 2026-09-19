> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spprojectivetransform3dgetoffset

# SPProjectiveTransform3DGetOffset

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 16.0) · iPadOS 16.0+ (deprecated in 16.0) · Mac Catalyst 16.0+ (deprecated in 16.0) · macOS 13.0+ (deprecated in 13.0) · tvOS 16.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.0+ (deprecated in 9.0)

The projective transform’s translation.

## Declaration

```objectivec
static SPVector3D SPProjectiveTransform3DGetOffset(SPProjectiveTransform3D transform);
```

## See Also

### Decomposing a 3D projective transform

- [SPProjectiveTransform3DGetRotation](spprojectivetransform3dgetrotation.md): The projective transform’s rotation.
- [SPProjectiveTransform3DGetScale](spprojectivetransform3dgetscale.md): The projective transform’s scale.
