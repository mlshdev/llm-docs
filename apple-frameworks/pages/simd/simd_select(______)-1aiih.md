> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_select(_:_:_:)-1aiih](https://developer.apple.com/documentation/simd/simd_select(_:_:_:)-1aiih)

# simd_select(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.

## Declaration

```swift
func simd_select(_ x: simd_double3, _ y: simd_double3, _ mask: simd_long3) -> simd_double3
```

## See Also

### Logic Functions

- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-mtv1.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

# simd_select (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.

## Declaration

```objectivec
static simd_double3 simd_select(simd_double3 x, simd_double3 y, simd_long3 mask);
```

## See Also

### Logic Functions

- [simd_bitselect](simd_bitselect%28______%29-mtv1.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.
