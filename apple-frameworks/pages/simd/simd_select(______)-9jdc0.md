> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_select(_:_:_:)-9jdc0](https://developer.apple.com/documentation/simd/simd_select(_:_:_:)-9jdc0)

# simd_select(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.

## Declaration

```swift
func simd_select(_ x: simd_float2, _ y: simd_float2, _ mask: simd_int2) -> simd_float2
```

## See Also

### Logic Functions

- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-5g70k.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

# simd_select (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.

## Declaration

```objectivec
static simd_float2 simd_select(simd_float2 x, simd_float2 y, simd_int2 mask);
```

## See Also

### Logic Functions

- [simd_bitselect](simd_bitselect%28______%29-5g70k.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.
