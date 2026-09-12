> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/coordinatespace3d/transform(from:)-1bvar](https://developer.apple.com/documentation/spatial/coordinatespace3d/transform(from:)-1bvar)

# transform(from:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a transform of this coordinate space from the target coordinate space.

## Declaration

```swift
func transform(from target: Self) throws -> ProjectiveTransform3D
```

<a id="discussion"></a>

## Discussion

This method converts between coordinate spaces of the same type and uses root level conversions.
