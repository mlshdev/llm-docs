> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepath-swift.struct/interpolatedpoints(in:by:)](https://developer.apple.com/documentation/pencilkit/pkstrokepath-swift.struct/interpolatedpoints(in:by:))

# interpolatedPoints(in:by:)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Returns the slice on-curve points using the floating point range and stride that you specify.

## Declaration

```swift
func interpolatedPoints(in range: ClosedRange<CGFloat>? = nil, by stride: PKStrokePath.InterpolatedSlice.Stride) -> PKStrokePath.InterpolatedSlice
```

## Parameters

- `range`: The floating point range for the points of interest.
- `stride`: The stride component of the current slice.

<a id="return-value"></a>

## Return Value

An interpolated slice whose points are within the specified `range`.

## See Also

### Accessing and interpolating points

- [interpolatedLocation(at:)](interpolatedlocation%28at_%29.md): Returns the on-curve point for the floating point parametric value.
- [interpolatedPoint(at:)](interpolatedpoint%28at_%29.md): Returns the on-curve point for the provided floating point parameter.
- [parametricValue(\_:offsetBy:)](parametricvalue%28__offsetby_%29.md)
