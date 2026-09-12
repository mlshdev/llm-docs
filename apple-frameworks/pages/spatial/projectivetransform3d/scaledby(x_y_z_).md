> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/projectivetransform3d/scaledby(x:y:z:)](https://developer.apple.com/documentation/spatial/projectivetransform3d/scaledby(x:y:z:))

# scaledBy(x:y:z:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a transform that results from scaling with the specified double-precision values.

## Declaration

```swift
func scaledBy(x: Double, y: Double, z: Double) -> ProjectiveTransform3D
```

## Parameters

- `x`: The double-precision value that specifies the scale along the width dimension.
- `y`: The double-precision value that specifies the scale along the height dimension.
- `z`: The double-precision value that specifies the scale along the depth dimension.

<a id="return-value"></a>

## Return Value

The transform that results from scaling with the specified double-precision values.
