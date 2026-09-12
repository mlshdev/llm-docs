> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_bitselect(_:_:_:)-600bp](https://developer.apple.com/documentation/simd/simd_bitselect(_:_:_:)-600bp)

# simd_bitselect(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```swift
func simd_bitselect(_ x: simd_ulong3, _ y: simd_ulong3, _ mask: simd_long3) -> simd_ulong3
```

## See Also

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-69ij0.md)
- [simd_all(\_:)](simd_all%28__%29-1adyq.md)

# simd_bitselect (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```objectivec
static simd_ulong3 simd_bitselect(simd_ulong3 x, simd_ulong3 y, simd_long3 mask);
```

## See Also

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-69ij0.md)
- [simd_all](simd_all%28__%29-1adyq.md)
