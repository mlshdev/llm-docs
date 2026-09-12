> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_select(_:_:_:)-7vjx6](https://developer.apple.com/documentation/simd/simd_select(_:_:_:)-7vjx6)

# simd_select(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.

## Declaration

```swift
func simd_select(_ x: simd_float4, _ y: simd_float4, _ mask: simd_int4) -> simd_float4
```

## See Also

### Logic Functions

- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-7g1os.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

# simd_select (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.

## Declaration

```objectivec
static simd_float4 simd_select(simd_float4 x, simd_float4 y, simd_int4 mask);
```

## See Also

### Logic Functions

- [simd_bitselect](simd_bitselect%28______%29-7g1os.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.
