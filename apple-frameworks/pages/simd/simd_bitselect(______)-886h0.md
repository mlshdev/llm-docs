> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_bitselect(_:_:_:)-886h0](https://developer.apple.com/documentation/simd/simd_bitselect(_:_:_:)-886h0)

# simd_bitselect(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```swift
func simd_bitselect(_ x: simd_ulong2, _ y: simd_ulong2, _ mask: simd_long2) -> simd_ulong2
```

## See Also

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-64g1r.md)
- [simd_all(\_:)](simd_all%28__%29-1d8u9.md)

# simd_bitselect (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```objectivec
static simd_ulong2 simd_bitselect(simd_ulong2 x, simd_ulong2 y, simd_long2 mask);
```

## See Also

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-64g1r.md)
- [simd_all](simd_all%28__%29-1d8u9.md)
