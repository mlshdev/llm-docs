> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_bitselect(_:_:_:)-66uzh](https://developer.apple.com/documentation/simd/simd_bitselect(_:_:_:)-66uzh)

# simd_bitselect(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```swift
func simd_bitselect(_ x: simd_float8, _ y: simd_float8, _ mask: simd_int8) -> simd_float8
```

## See Also

### Logic Functions

- [simd_select(\_:\_:\_:)](simd_select%28______%29-5h243.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.

# simd_bitselect (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```objectivec
static simd_float8 simd_bitselect(simd_float8 x, simd_float8 y, simd_int8 mask);
```

## See Also

### Logic Functions

- [simd_select](simd_select%28______%29-5h243.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
