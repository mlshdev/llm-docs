> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/projectivetransform3d/isapproximatelyequal(to:tolerance:)

# isApproximatelyEqual(to:tolerance:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a Boolean value that indicates whether two transforms are equal within a specified tolerance.

## Declaration

```swift
func isApproximatelyEqual(to other: ProjectiveTransform3D, tolerance: Double = sqrt(.ulpOfOne)) -> Bool
```

## Parameters

- `other`: The right-hand side value.
- `tolerance`: A double-precision value that specifies the tolerance.
