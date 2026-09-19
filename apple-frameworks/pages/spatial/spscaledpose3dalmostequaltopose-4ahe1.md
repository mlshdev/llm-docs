> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spscaledpose3dalmostequaltopose-4ahe1

# SPScaledPose3DAlmostEqualToPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a Boolean value that indicates whether the two scaled poses are equal within the specified absolute tolerance.

## Declaration

```objectivec
static bool SPScaledPose3DAlmostEqualToPose(SPScaledPose3D p1, SPScaledPose3D p2, double tolerance);
```

## See Also

### Comparing values

- [SPScaledPose3DAlmostEqualToPose](spscaledpose3dalmostequaltopose-1qgpl.md)
- [SPScaledPose3DEqualToPose](spscaledpose3dequaltopose.md): Returns a Boolean value that indicates whether two values are equal.
