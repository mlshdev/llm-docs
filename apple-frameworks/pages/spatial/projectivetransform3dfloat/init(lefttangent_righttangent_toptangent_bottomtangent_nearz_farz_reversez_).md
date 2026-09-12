> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/projectivetransform3dfloat/init(lefttangent:righttangent:toptangent:bottomtangent:nearz:farz:reversez:)](https://developer.apple.com/documentation/spatial/projectivetransform3dfloat/init(lefttangent:righttangent:toptangent:bottomtangent:nearz:farz:reversez:))

# init(leftTangent:rightTangent:topTangent:bottomTangent:nearZ:farZ:reverseZ:) (Swift)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
init(leftTangent: Float, rightTangent: Float, topTangent: Float, bottomTangent: Float, nearZ: Float, farZ: Float, reverseZ: Bool)
```

## Parameters

- `leftTangent`: The left tangent.
- `rightTangent`: The right tangent.
- `topTangent`: The top tangent.
- `bottomTangent`: Bottom left tangent.
- `nearZ`: The near @p z .
- `farZ`: The far @p z .
- `reverseZ`: A Boolean value that specifies whether the matrix should use reverse z.

<a id="return-value"></a>

## Return Value

A projective transform from tangents for each side of its frustum.

<a id="discussion"></a>

## Discussion

Returns a projective transform from tangents for each side of its frustum.

# SPProjectiveTransform3DFloatMakeFromTangents (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPProjectiveTransform3DFloat SPProjectiveTransform3DFloatMakeFromTangents(float leftTangent, float rightTangent, float topTangent, float bottomTangent, float nearZ, float farZ, bool reverseZ);
```

## Parameters

- `leftTangent`: The left tangent.
- `rightTangent`: The right tangent.
- `topTangent`: The top tangent.
- `bottomTangent`: Bottom left tangent.
- `nearZ`: The near @p z .
- `farZ`: The far @p z .
- `reverseZ`: A Boolean value that specifies whether the matrix should use reverse z.

<a id="return-value"></a>

## Return Value

A projective transform from tangents for each side of its frustum.

<a id="discussion"></a>

## Discussion

Returns a projective transform from tangents for each side of its frustum.
