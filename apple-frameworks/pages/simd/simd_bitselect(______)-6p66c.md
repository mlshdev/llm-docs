> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_bitselect(_:_:_:)-6p66c](https://developer.apple.com/documentation/simd/simd_bitselect(_:_:_:)-6p66c)

# simd_bitselect(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```swift
func simd_bitselect(_ x: simd_int2, _ y: simd_int2, _ mask: simd_int2) -> simd_int2
```

## See Also

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-64rh5.md): Returns true if the high-order bit of any element is set; false otherwise.
- [simd_all(\_:)](simd_all%28__%29-1cxjv.md): Returns true if the high-order bit of every element is set; false otherwise.

# simd_bitselect (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```objectivec
static simd_int2 simd_bitselect(simd_int2 x, simd_int2 y, simd_int2 mask);
```

## See Also

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-64rh5.md): Returns true if the high-order bit of any element is set; false otherwise.
- [simd_all](simd_all%28__%29-1cxjv.md): Returns true if the high-order bit of every element is set; false otherwise.
