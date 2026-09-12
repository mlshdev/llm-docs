> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/matrix4x4h/transformposition](https://developer.apple.com/documentation/computegraph/matrix4x4h/transformposition)

# matrix4x4h::transformPosition

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Transforms a half-precision position by a 4x4 matrix, including translation.

## Declaration

```swift
half3 matrix4x4h::transformPosition(half4x4 matrix, half3 position)
```

## Parameters

- `matrix`: The 4x4 transformation matrix to apply.
- `position`: The 3D position to transform.

<a id="return-value"></a>

## Return Value

The transformed 3D position.

<a id="discussion"></a>

## Discussion

Multiplies the position by the matrix with a `w` component of `1.0`, so rotation, scale, and translation are all applied. This is appropriate for points in space that should be fully transformed by the matrix.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/matrix4x4h__transformPosition.svg)
