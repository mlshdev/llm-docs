> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_bitselect(_:_:_:)-9f5q6](https://developer.apple.com/documentation/simd/simd_bitselect(_:_:_:)-9f5q6)

# simd_bitselect(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```swift
func simd_bitselect(_ x: simd_long4, _ y: simd_long4, _ mask: simd_long4) -> simd_long4
```

## See Also

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-6cnfh.md)
- [simd_all(\_:)](simd_all%28__%29-1jv5n.md)

# simd_bitselect (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```objectivec
static simd_long4 simd_bitselect(simd_long4 x, simd_long4 y, simd_long4 mask);
```

## See Also

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-6cnfh.md)
- [simd_all](simd_all%28__%29-1jv5n.md)
