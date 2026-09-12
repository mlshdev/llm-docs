> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_bitselect(_:_:_:)-1yj5q](https://developer.apple.com/documentation/simd/simd_bitselect(_:_:_:)-1yj5q)

# simd_bitselect(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```swift
func simd_bitselect(_ x: simd_double8, _ y: simd_double8, _ mask: simd_long8) -> simd_double8
```

## See Also

### Logic Functions

- [simd_select(\_:\_:\_:)](simd_select%28______%29-8wti7.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.

# simd_bitselect (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```objectivec
static simd_double8 simd_bitselect(simd_double8 x, simd_double8 y, simd_long8 mask);
```

## See Also

### Logic Functions

- [simd_select](simd_select%28______%29-8wti7.md): Returns a vector that contains elements from either the first or second parameter, based on the corresponding element’s high-order bit in the mask.
