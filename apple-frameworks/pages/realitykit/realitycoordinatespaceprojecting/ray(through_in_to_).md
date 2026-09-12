> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realitycoordinatespaceprojecting/ray(through:in:to:)](https://developer.apple.com/documentation/realitykit/realitycoordinatespaceprojecting/ray(through:in:to:))

# ray(through:in:to:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

Determines the position and direction of a ray through the given point in the 2D space of the view.

## Declaration

```swift
func ray(through point: CGPoint, in space: some CoordinateSpaceProtocol, to realitySpace: some RealityCoordinateSpace) -> (origin: SIMD3<Float>, direction: SIMD3<Float>)?
```

## Parameters

- `point`: A point in the provided coordinate space.
- `space`: The 2D coordinate space in which to interpret the `point`.
- `realitySpace`: The 3D coordinate space you want the returned ray in.

<a id="return-value"></a>

## Return Value

A 3D ray, expressed in the `realitySpace` coordinate space, which starts at the camera position and passes through the specified `point`.
