> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/boundingbox/distancesquared(topoint:)](https://developer.apple.com/documentation/realitykit/boundingbox/distancesquared(topoint:))

# distanceSquared(toPoint:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Calculates the distance from a point to the bounding box.

## Declaration

```swift
func distanceSquared(toPoint: SIMD3<Float>) -> Float
```

## Parameters

- `toPoint`: The point.

<a id="return-value"></a>

## Return Value

The square of the distance, in meters, from the point to the box.
