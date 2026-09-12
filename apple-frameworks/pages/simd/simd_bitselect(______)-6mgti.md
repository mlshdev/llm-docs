> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_bitselect(_:_:_:)-6mgti](https://developer.apple.com/documentation/simd/simd_bitselect(_:_:_:)-6mgti)

# simd_bitselect(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```swift
func simd_bitselect(_ x: simd_ushort32, _ y: simd_ushort32, _ mask: simd_short32) -> simd_ushort32
```

## See Also

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-3au8l.md)
- [simd_all(\_:)](simd_all%28__%29-1kmnn.md)

# simd_bitselect (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```objectivec
static simd_ushort32 simd_bitselect(simd_ushort32 x, simd_ushort32 y, simd_short32 mask);
```

## See Also

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-3au8l.md)
- [simd_all](simd_all%28__%29-1kmnn.md)
