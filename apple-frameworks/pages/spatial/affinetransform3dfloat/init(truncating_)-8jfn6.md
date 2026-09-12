> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3dfloat/init(truncating:)-8jfn6](https://developer.apple.com/documentation/spatial/affinetransform3dfloat/init(truncating:)-8jfn6)

# init(truncating:) (Swift)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
init(truncating matrix: simd_float4x4)
```

## Parameters

- `matrix`: The source matrix.

<a id="return-value"></a>

## Return Value

A new affine transform structure.

<a id="discussion"></a>

## Discussion

Returns a new affine transform structure from the specified 4 x 4 matrix truncated to a  4 x 3 matrix.

# SPAffineTransform3DFloatMakeWithTruncated4x4Matrix (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPAffineTransform3DFloat SPAffineTransform3DFloatMakeWithTruncated4x4Matrix(simd_float4x4 matrix);
```

## Parameters

- `matrix`: The source matrix.

<a id="return-value"></a>

## Return Value

A new affine transform structure.

<a id="discussion"></a>

## Discussion

Returns a new affine transform structure from the specified 4 x 4 matrix truncated to a  4 x 3 matrix.
