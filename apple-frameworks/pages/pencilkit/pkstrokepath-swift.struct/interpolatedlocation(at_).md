> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepath-swift.struct/interpolatedlocation(at:)](https://developer.apple.com/documentation/pencilkit/pkstrokepath-swift.struct/interpolatedlocation(at:))

# interpolatedLocation(at:)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Returns the on-curve point for the floating point parametric value.

## Declaration

```swift
func interpolatedLocation(at parametricValue: CGFloat) -> CGPoint
```

## Parameters

- `parametricValue`: The on-curve location `[0, count-1]` where interpolation occurs.

<a id="return-value"></a>

## Return Value

A [CGPoint](../../corefoundation/cgpoint.md) interpolated from the supplied `parametricValue`.

## See Also

### Accessing and interpolating points

- [interpolatedPoints(in:by:)](interpolatedpoints%28in_by_%29.md): Returns the slice on-curve points using the floating point range and stride that you specify.
- [interpolatedPoint(at:)](interpolatedpoint%28at_%29.md): Returns the on-curve point for the provided floating point parameter.
- [parametricValue(\_:offsetBy:)](parametricvalue%28__offsetby_%29.md)
