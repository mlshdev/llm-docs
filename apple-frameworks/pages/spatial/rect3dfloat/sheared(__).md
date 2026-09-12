> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3dfloat/sheared(_:)](https://developer.apple.com/documentation/spatial/rect3dfloat/sheared(_:))

# sheared(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a sheared rectangle.

## Declaration

```swift
func sheared(_ shear: AxisWithFactors) -> Rect3DFloat
```

## Parameters

- `shear`: The axis and shear factors.

<a id="discussion"></a>

## Discussion

- Returns The sheared rectangle.

Because affine transforms do not preserve rectangles in general, this function returns the smallest rectangle that contains the transformed corner points of the rect parameter.
