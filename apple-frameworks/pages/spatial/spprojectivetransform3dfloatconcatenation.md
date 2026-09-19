> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spprojectivetransform3dfloatconcatenation

# SPProjectiveTransform3DFloatConcatenation

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a projective transformation matrix constructed by concatenating two existing Projective transforms.

## Declaration

```objectivec
static SPProjectiveTransform3DFloat SPProjectiveTransform3DFloatConcatenation(SPProjectiveTransform3DFloat t1, SPProjectiveTransform3DFloat t2);
```
