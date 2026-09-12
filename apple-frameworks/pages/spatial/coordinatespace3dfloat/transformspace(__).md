> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/coordinatespace3dfloat/transformspace(_:)](https://developer.apple.com/documentation/spatial/coordinatespace3dfloat/transformspace(_:))

# transformSpace(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a modified version of the coordinate space.

## Declaration

```swift
func transformSpace(_ baseFromMapTransform: @escaping (Self) -> ProjectiveTransform3DFloat) -> some CoordinateSpace3DFloat

```

## Parameters

- `baseFromMapTransform`: A closure which takes in the base coordinate space and returns a transform that represents the modification to that space.
