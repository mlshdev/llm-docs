> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_bitselect(_:_:_:)-2yxn9](https://developer.apple.com/documentation/simd/simd_bitselect(_:_:_:)-2yxn9)

# simd_bitselect(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```swift
func simd_bitselect(_ x: simd_uchar2, _ y: simd_uchar2, _ mask: simd_char2) -> simd_uchar2
```

## See Also

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-64ekh.md)
- [simd_all(\_:)](simd_all%28__%29-1dafz.md)

# simd_bitselect (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```objectivec
static simd_uchar2 simd_bitselect(simd_uchar2 x, simd_uchar2 y, simd_char2 mask);
```

## See Also

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-64ekh.md)
- [simd_all](simd_all%28__%29-1dafz.md)
