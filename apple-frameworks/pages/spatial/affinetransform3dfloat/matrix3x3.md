> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3dfloat/matrix3x3](https://developer.apple.com/documentation/spatial/affinetransform3dfloat/matrix3x3)

# matrix3x3 (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
var matrix3x3: simd_float3x3 { get }
```

<a id="discussion"></a>

## Discussion

Returns the first three columns of an affine transform’s underlying matrix.

# SPAffineTransform3DFloatGet3x3Matrix (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static simd_float3x3 SPAffineTransform3DFloatGet3x3Matrix(SPAffineTransform3DFloat transform);
```

## Parameters

- `transform`: The source transform.

<a id="return-value"></a>

## Return Value

A 3 x 3 matrix that’s constructed from the first three columns of an affine transform’s underlying matrix.

<a id="discussion"></a>

## Discussion

Returns the first three columns of an affine transform’s underlying matrix.
