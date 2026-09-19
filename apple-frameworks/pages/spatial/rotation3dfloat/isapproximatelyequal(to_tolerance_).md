> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/rotation3dfloat/isapproximatelyequal(to:tolerance:)

# isApproximatelyEqual(to:tolerance:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a Boolean value that indicates whether two rotations are equal within a specified tolerance.

## Declaration

```swift
func isApproximatelyEqual(to other: Rotation3DFloat, tolerance: Float = sqrt(.ulpOfOne)) -> Bool
```

## Parameters

- `other`: The second rotation.
- `tolerance`: The tolerance of the comparison.
