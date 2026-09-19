> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/coordinatespace3d/transform(from:)-2ezk3

# transform(from:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a transform of this coordinate space from the target coordinate space.

## Declaration

```swift
func transform<Space>(from target: Space) throws -> ProjectiveTransform3D where Space : CoordinateSpace3D
```

## Parameters

- `target`: Another coordinate space.
