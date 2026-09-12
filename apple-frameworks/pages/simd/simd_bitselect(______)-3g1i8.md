> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_bitselect(_:_:_:)-3g1i8](https://developer.apple.com/documentation/simd/simd_bitselect(_:_:_:)-3g1i8)

# simd_bitselect(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```swift
func simd_bitselect(_ x: simd_half2, _ y: simd_half2, _ mask: simd_short2) -> simd_half2
```

## See Also

### Logic functions

- [simd_select(\_:\_:\_:)](simd_select%28______%29-472ze.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.

# simd_bitselect (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```objectivec
static simd_half2 simd_bitselect(simd_half2 x, simd_half2 y, simd_short2 mask);
```

## See Also

### Logic functions

- [simd_select](simd_select%28______%29-472ze.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
