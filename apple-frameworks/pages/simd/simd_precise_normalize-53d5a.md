> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_precise_normalize-53d5a](https://developer.apple.com/documentation/simd/simd_precise_normalize-53d5a)

# simd_precise_normalize

**Interface language:** Objective-C

**Framework:** simd  
**Kind:** Function

Returns the precise normalized vector.

## Declaration

```objectivec
static simd_half16 simd_precise_normalize(simd_half16 __x);
```

## Parameters

- `__x`: The vector to normalize.

<a id="return-value"></a>

## Return Value

The normalized vector.

<a id="Discussion"></a>

## Discussion

This function returns an undefined value if the supplied vector has zero length or is poorly scaled such that an intermediate computation overflows or underflows.

## See Also

### Geometry functions

- [simd_dot](simd_dot-8gymo.md): Returns the dot product of two vectors.
- [simd_normalize](simd_normalize-3r6p1.md): Returns a vector pointing in the same direction of the supplied vector, with a length of 1.
- [simd_fast_normalize](simd_fast_normalize-fo8a.md): Returns the fast normalized vector.
- [simd_project](simd_project-4n2u6.md): Returns the first vector projected onto the second vector.
- [simd_precise_project](simd_precise_project-7slej.md): Returns the precise projected vector.
- [simd_fast_project](simd_fast_project-95iib.md): Returns the fast projected vector.
