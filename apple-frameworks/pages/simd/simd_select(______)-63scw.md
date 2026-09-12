> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_select(_:_:_:)-63scw](https://developer.apple.com/documentation/simd/simd_select(_:_:_:)-63scw)

# simd_select(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.

## Declaration

```swift
func simd_select(_ x: simd_half32, _ y: simd_half32, _ mask: simd_short32) -> simd_half32
```

## See Also

### Logic functions

- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-81xk8.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

# simd_select (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.

## Declaration

```objectivec
static simd_half32 simd_select(simd_half32 x, simd_half32 y, simd_short32 mask);
```

## See Also

### Logic functions

- [simd_bitselect](simd_bitselect%28______%29-81xk8.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.
