> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/matrix4x4f/transformdirection](https://developer.apple.com/documentation/computegraph/matrix4x4f/transformdirection)

# matrix4x4f::transformDirection

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Transforms a direction vector by a 4x4 matrix, ignoring translation.

## Declaration

```swift
float3 matrix4x4f::transformDirection(float4x4 matrix, float3 vector)
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

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/matrix4x4f__transformDirection.svg)
