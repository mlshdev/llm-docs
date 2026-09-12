> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3dfloat/init(truncating:)-1jfno](https://developer.apple.com/documentation/spatial/affinetransform3dfloat/init(truncating:)-1jfno)

# init(truncating:) (Swift)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
init(truncating transform: ProjectiveTransform3DFloat)
```

## Parameters

- `transform`: The source transform.

<a id="return-value"></a>

## Return Value

A new affine transform structure.

<a id="discussion"></a>

## Discussion

Returns a new affine transform structure from the first three rows of the specified projective transform.

> **Note**

> This function is similar to @p SPAffineTransform3DFloatMakeWithProjective, but it ignores the last row of the matrix.

# SPAffineTransform3DFloatMakeWithTruncatedProjective (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPAffineTransform3DFloat SPAffineTransform3DFloatMakeWithTruncatedProjective(SPProjectiveTransform3DFloat transform);
```

## Parameters

- `transform`: The source transform.

<a id="return-value"></a>

## Return Value

A new affine transform structure.

<a id="discussion"></a>

## Discussion

Returns a new affine transform structure from the first three rows of the specified projective transform.

> **Note**

> This function is similar to @p SPAffineTransform3DFloatMakeWithProjective, but it ignores the last row of the matrix.
