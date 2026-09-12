> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_bitselect(_:_:_:)-78l7a](https://developer.apple.com/documentation/simd/simd_bitselect(_:_:_:)-78l7a)

# simd_bitselect(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```swift
func simd_bitselect(_ x: simd_int3, _ y: simd_int3, _ mask: simd_int3) -> simd_int3
```

## See Also

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-69748.md): Returns true if the high-order bit of any element is set; false otherwise.
- [simd_all(\_:)](simd_all%28__%29-1apey.md): Returns true if the high-order bit of every element is set; false otherwise.

# simd_bitselect (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```objectivec
static simd_int3 simd_bitselect(simd_int3 x, simd_int3 y, simd_int3 mask);
```

## See Also

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-69748.md): Returns true if the high-order bit of any element is set; false otherwise.
- [simd_all](simd_all%28__%29-1apey.md): Returns true if the high-order bit of every element is set; false otherwise.
