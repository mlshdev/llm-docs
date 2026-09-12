> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_bitselect(_:_:_:)-5dqwa](https://developer.apple.com/documentation/simd/simd_bitselect(_:_:_:)-5dqwa)

# simd_bitselect(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```swift
func simd_bitselect(_ x: simd_uint2, _ y: simd_uint2, _ mask: simd_int2) -> simd_uint2
```

## See Also

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-64hll.md): Returns true if the high-order bit of any element is set; false otherwise.
- [simd_all(\_:)](simd_all%28__%29-1d7bv.md): Returns true if the high-order bit of every element is set; false otherwise.

# simd_bitselect (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```objectivec
static simd_uint2 simd_bitselect(simd_uint2 x, simd_uint2 y, simd_int2 mask);
```

## See Also

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-64hll.md): Returns true if the high-order bit of any element is set; false otherwise.
- [simd_all](simd_all%28__%29-1d7bv.md): Returns true if the high-order bit of every element is set; false otherwise.
