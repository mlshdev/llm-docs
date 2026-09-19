> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spprojectivetransform3dconcatenation

# SPProjectiveTransform3DConcatenation

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a projective transformation matrix constructed by concatenating two existing Projective transforms.

## Declaration

```objectivec
static SPProjectiveTransform3D SPProjectiveTransform3DConcatenation(SPProjectiveTransform3D t1, SPProjectiveTransform3D t2);
```
