> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/scaledpose3dfloat/isapproximatelyequal(to:tolerance:)](https://developer.apple.com/documentation/spatial/scaledpose3dfloat/isapproximatelyequal(to:tolerance:))

# isApproximatelyEqual(to:tolerance:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a Boolean value that indicates whether two scaled poses are equal within a specified tolerance.

## Declaration

```swift
func isApproximatelyEqual(to other: ScaledPose3DFloat, tolerance: Float = sqrt(.ulpOfOne)) -> Bool
```

## Parameters

- `other`: The second  scaled pose.
- `tolerance`: The tolerance of the comparison.
