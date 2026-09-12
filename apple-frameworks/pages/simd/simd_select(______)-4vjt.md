> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_select(_:_:_:)-4vjt](https://developer.apple.com/documentation/simd/simd_select(_:_:_:)-4vjt)

# simd_select(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.

## Declaration

```swift
func simd_select(_ x: simd_half4, _ y: simd_half4, _ mask: simd_short4) -> simd_half4
```

## See Also

### Logic functions

- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-6gy8u.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

# simd_select (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.

## Declaration

```objectivec
static simd_half4 simd_select(simd_half4 x, simd_half4 y, simd_short4 mask);
```

## See Also

### Logic functions

- [simd_bitselect](simd_bitselect%28______%29-6gy8u.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.
