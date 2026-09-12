> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_quatf/*=(_:_:)-pcoc](https://developer.apple.com/documentation/simd/simd_quatf/*=(_:_:)-pcoc)

# \*=(\_:\_:)

**Framework:** simd  
**Kind:** Operator

Multiplies a quaternion and a scalar value, and stores the result in the left-hand-side variable.

## Declaration

```swift
static func *= (lhs: inout simd_quatf, rhs: simd_quatf)
```

<a id="Discussion"></a>

## Discussion

The function returns the left-hand side quaternion rotated by the right-hand side quaternion.
