> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_select(_:_:_:)-2ljkl](https://developer.apple.com/documentation/simd/simd_select(_:_:_:)-2ljkl)

# simd_select(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.

## Declaration

```swift
func simd_select(_ x: simd_half3, _ y: simd_half3, _ mask: simd_short3) -> simd_half3
```

## See Also

### Logic functions

- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-6ne9u.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

# simd_select (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.

## Declaration

```objectivec
static simd_half3 simd_select(simd_half3 x, simd_half3 y, simd_short3 mask);
```

## See Also

### Logic functions

- [simd_bitselect](simd_bitselect%28______%29-6ne9u.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.
