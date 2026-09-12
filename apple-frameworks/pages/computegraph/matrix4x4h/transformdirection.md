> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/matrix4x4h/transformdirection](https://developer.apple.com/documentation/computegraph/matrix4x4h/transformdirection)

# matrix4x4h::transformDirection

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Transforms a half-precision direction vector by a 4x4 matrix, ignoring translation.

## Declaration

```swift
half3 matrix4x4h::transformDirection(half4x4 matrix, half3 vector)
```

## Parameters

- `matrix`: The 4x4 transformation matrix to apply.
- `vector`: The 3D direction vector to transform.

<a id="return-value"></a>

## Return Value

The transformed 3D direction vector.

<a id="discussion"></a>

## Discussion

Multiplies the vector by the matrix with a `w` component of `0.0`, so only rotation and scale are applied. This is appropriate for normals, tangents, and other direction vectors that should not be affected by the matrix’s translational component.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/matrix4x4h__transformDirection.svg)
