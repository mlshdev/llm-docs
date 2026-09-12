> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/scaledpose3d/isapproximatelyequal(to:tolerance:)](https://developer.apple.com/documentation/spatial/scaledpose3d/isapproximatelyequal(to:tolerance:))

# isApproximatelyEqual(to:tolerance:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

Returns a Boolean value that indicates whether two scaled poses are equal within a specified tolerance.

## Declaration

```swift
func isApproximatelyEqual(to other: ScaledPose3D, tolerance: Double = sqrt(.ulpOfOne)) -> Bool
```

## See Also

### Comparing values

- [==(\_:\_:)](==%28____%29.md): Returns a Boolean value that indicates whether two values are equal.
