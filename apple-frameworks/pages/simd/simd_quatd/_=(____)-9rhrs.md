> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_quatd/*=(_:_:)-9rhrs](https://developer.apple.com/documentation/simd/simd_quatd/*=(_:_:)-9rhrs)

# \*=(\_:\_:)

**Framework:** simd  
**Kind:** Operator

Multiplies two quaternions and stores the result in the left-hand-side variable.

## Declaration

```swift
static func *= (lhs: inout simd_quatd, rhs: simd_quatd)
```

<a id="Discussion"></a>

## Discussion

The function returns the left-hand side quaternion rotated by the right-hand side quaternion.
