> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3dfloat/matrix4x4](https://developer.apple.com/documentation/spatial/affinetransform3dfloat/matrix4x4)

# matrix4x4 (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
var matrix4x4: simd_float4x4 { get }
```

<a id="discussion"></a>

## Discussion

Returns a 4 x 4 matrix constructed from the affine transform’s underlying matrix.

# SPAffineTransform3DFloatGet4x4Matrix (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static simd_float4x4 SPAffineTransform3DFloatGet4x4Matrix(SPAffineTransform3DFloat transform);
```

## Parameters

- `transform`: The source transform.

<a id="return-value"></a>

## Return Value

A 4 x 4 matrix that’s constructed from the affine transform’s underlying 4 x 3 matrix with an additional row that contains the values @p \[0,0,0,1\] .

<a id="discussion"></a>

## Discussion

Returns a 4 x 4 matrix constructed from the affine transform’s underlying matrix.
