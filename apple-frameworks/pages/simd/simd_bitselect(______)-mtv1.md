> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_bitselect(_:_:_:)-mtv1](https://developer.apple.com/documentation/simd/simd_bitselect(_:_:_:)-mtv1)

# simd_bitselect(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```swift
func simd_bitselect(_ x: simd_double3, _ y: simd_double3, _ mask: simd_long3) -> simd_double3
```

## See Also

### Logic Functions

- [simd_select(\_:\_:\_:)](simd_select%28______%29-1aiih.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.

# simd_bitselect (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```objectivec
static simd_double3 simd_bitselect(simd_double3 x, simd_double3 y, simd_long3 mask);
```

## See Also

### Logic Functions

- [simd_select](simd_select%28______%29-1aiih.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
