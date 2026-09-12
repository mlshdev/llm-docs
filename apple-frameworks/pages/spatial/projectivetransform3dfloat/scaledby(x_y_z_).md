> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/projectivetransform3dfloat/scaledby(x:y:z:)](https://developer.apple.com/documentation/spatial/projectivetransform3dfloat/scaledby(x:y:z:))

# scaledBy(x:y:z:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the transform scaled by the specified values.

## Declaration

```swift
func scaledBy(x: Float, y: Float, z: Float) -> ProjectiveTransform3DFloat
```

## Parameters

- `x`: The scale factor on the `x` dimension.
- `y`: The scale factor on the `y` dimension.
- `z`: The scale factor on the `z` dimension.

<a id="discussion"></a>

## Discussion

- Returns The scaled transform.
