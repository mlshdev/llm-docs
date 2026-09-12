> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/ray3d/intersects(_:)](https://developer.apple.com/documentation/spatial/ray3d/intersects(_:))

# intersects(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a Boolean value that indicates whether a ray intersects a rectangle.

## Declaration

```swift
func intersects(_ rect: Rect3D) -> Bool
```

## Parameters

- `rect`: The rectangle that the function compares against.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the ray intersects the rectangle.

## See Also

### Checking characteristics

- [isFinite](isfinite.md): A Boolean value that indicates whether all of the values of the ray are finite.
- [isNaN](isnan.md): A Boolean value that indicates whether the ray contains any NaN values.
- [isZero](iszero.md): A Boolean value that indicates whether all of the values of the ray are zero.
- [intersects(sphereOrigin:sphereRadius:)](intersects%28sphereorigin_sphereradius_%29.md): Returns a Boolean value that indicates whether the ray intersects a specified sphere.
