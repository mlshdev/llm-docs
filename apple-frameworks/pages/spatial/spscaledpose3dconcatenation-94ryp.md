> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spscaledpose3dconcatenation-94ryp

# SPScaledPose3DConcatenation

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
static SPScaledPose3D SPScaledPose3DConcatenation(SPPose3D lhs, SPScaledPose3D rhs);
```

## Parameters

- `lhs`: The first pose to multiply.
- `rhs`: The second scaled pose to multiply.

<a id="return-value"></a>

## Return Value

A new pose structure.

<a id="discussion"></a>

## Discussion

Returns a new scaled pose that’s constructed by concatenating a pose and a scaled pose.

## See Also

### Concatenating

- [SPScaledPose3DConcatenation](spscaledpose3dconcatenation-3i5ch.md)
- [SPScaledPose3DConcatenation](spscaledpose3dconcatenation-7ljg6.md): Returns a new scaled pose that’s constructed by concatenating two existing poses.
