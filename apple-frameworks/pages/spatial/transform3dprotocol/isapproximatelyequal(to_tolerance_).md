> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/transform3dprotocol/isapproximatelyequal(to:tolerance:)](https://developer.apple.com/documentation/spatial/transform3dprotocol/isapproximatelyequal(to:tolerance:))

# isApproximatelyEqual(to:tolerance:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a Boolean value that indicates whether two transforms are equal within a specified tolerance.

## Declaration

```swift
func isApproximatelyEqual(to other: Self, tolerance: Self.Scalar) -> Bool
```

## Parameters

- `tolerance`: The tolerance of the comparison.
