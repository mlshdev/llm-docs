> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/realitycoordinatespaceprojecting/project(point:to:)

# project(point:to:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

Projects a point from the 3D world coordinate system of the scene to the 2D pixel coordinate system of the reality view.

## Declaration

```swift
func project(point: SIMD3<Float>, to space: some CoordinateSpaceProtocol) -> CGPoint?
```

## Parameters

- `point`: The point in 3D world coordinates.
- `space`: The 2D coordinate space in which this function returns the point.

<a id="return-value"></a>

## Return Value

A point in the provided coordinate space.
