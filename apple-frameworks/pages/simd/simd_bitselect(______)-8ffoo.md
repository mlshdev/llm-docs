> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_bitselect(_:_:_:)-8ffoo](https://developer.apple.com/documentation/simd/simd_bitselect(_:_:_:)-8ffoo)

# simd_bitselect(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```swift
func simd_bitselect(_ x: simd_long2, _ y: simd_long2, _ mask: simd_long2) -> simd_long2
```

## See Also

### Logic and Bitwise Functions

- [simd_any(\_:)](simd_any%28__%29-64pz3.md)
- [simd_all(\_:)](simd_all%28__%29-1cyyp.md)

# simd_bitselect (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a vector that contains elements from either the first or second parameter, based on the corresponding element in the third parameter.

## Declaration

```objectivec
static simd_long2 simd_bitselect(simd_long2 x, simd_long2 y, simd_long2 mask);
```

## See Also

### Logic and Bitwise Functions

- [simd_any](simd_any%28__%29-64pz3.md)
- [simd_all](simd_all%28__%29-1cyyp.md)
