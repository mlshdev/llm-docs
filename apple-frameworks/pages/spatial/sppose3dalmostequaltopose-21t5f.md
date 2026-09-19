> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/sppose3dalmostequaltopose-21t5f

# SPPose3DAlmostEqualToPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value that indicates whether two poses are equal within a specified tolerance.

## Declaration

```objectivec
static bool SPPose3DAlmostEqualToPose(SPPose3D p1, SPPose3D p2, double tolerance);
```

## See Also

### Comparing values

- [SPPose3DEqualToPose](sppose3dequaltopose.md): Returns a Boolean value that indicates whether two values are equal.
- [SPPose3DAlmostEqualToPose](sppose3dalmostequaltopose-9hr1m.md)
