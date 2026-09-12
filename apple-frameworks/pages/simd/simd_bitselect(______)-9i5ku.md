> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_bitselect(_:_:_:)-9i5ku](https://developer.apple.com/documentation/simd/simd_bitselect(_:_:_:)-9i5ku)

# simd_bitselect(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```swift
func simd_bitselect(_ x: simd_uchar16, _ y: simd_uchar16, _ mask: simd_char16) -> simd_uchar16
```

## See Also

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-933sa.md)
- [simd_all(\_:)](simd_all%28__%29-ikbg.md)

# simd_bitselect (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```objectivec
static simd_uchar16 simd_bitselect(simd_uchar16 x, simd_uchar16 y, simd_char16 mask);
```

## See Also

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-933sa.md)
- [simd_all](simd_all%28__%29-ikbg.md)
