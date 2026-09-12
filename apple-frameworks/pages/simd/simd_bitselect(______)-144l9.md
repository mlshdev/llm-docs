> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_bitselect(_:_:_:)-144l9](https://developer.apple.com/documentation/simd/simd_bitselect(_:_:_:)-144l9)

# simd_bitselect(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```swift
func simd_bitselect(_ x: simd_ushort16, _ y: simd_ushort16, _ mask: simd_short16) -> simd_ushort16
```

## See Also

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-938p6.md)
- [simd_all(\_:)](simd_all%28__%29-iffg.md)

# simd_bitselect (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```objectivec
static simd_ushort16 simd_bitselect(simd_ushort16 x, simd_ushort16 y, simd_short16 mask);
```

## See Also

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-938p6.md)
- [simd_all](simd_all%28__%29-iffg.md)
