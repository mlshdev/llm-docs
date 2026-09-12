> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_select(_:_:_:)-tq6k](https://developer.apple.com/documentation/simd/simd_select(_:_:_:)-tq6k)

# simd_select(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.

## Declaration

```swift
func simd_select(_ x: simd_double4, _ y: simd_double4, _ mask: simd_long4) -> simd_double4
```

## See Also

### Logic Functions

- [simd_bitselect(\_:\_:\_:)](simd_bitselect%28______%29-1mn6g.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

# simd_select (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.

## Declaration

```objectivec
static simd_double4 simd_select(simd_double4 x, simd_double4 y, simd_long4 mask);
```

## See Also

### Logic Functions

- [simd_bitselect](simd_bitselect%28______%29-1mn6g.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.
