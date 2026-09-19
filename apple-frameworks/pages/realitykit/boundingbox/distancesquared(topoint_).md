> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/boundingbox/distancesquared(topoint:)

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
