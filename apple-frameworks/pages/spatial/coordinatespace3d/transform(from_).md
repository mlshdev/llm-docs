> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/coordinatespace3d/transform(from:)](https://developer.apple.com/documentation/spatial/coordinatespace3d/transform(from:))

# transform(from:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a transform of this coordinate space from the target coordinate space.

## Declaration

```swift
func transform(from targetCoordinateSpace: Self) throws -> ProjectiveTransform3D
```

## Parameters

- `targetCoordinateSpace`: Another coordinate space.

<a id="discussion"></a>

## Discussion

This method is dedicated for converting between coordinate spaces of the same type. Implementations may be more efficient than the general purpose convert functions, but results should be the same. A default implementation is provided which uses root level conversions.

## Default Implementations

### CoordinateSpace3D Implementations

- [transform(from:)](transform%28from_%29-1bvar.md): Returns a transform of this coordinate space from the target coordinate space.
- [transform(from:)](transform%28from_%29-2ezk3.md): Returns a transform of this coordinate space from the target coordinate space.
- [transform(from:)](transform%28from_%29-9f42p.md): Returns a transform of this coordinate space from the target coordinate space.
