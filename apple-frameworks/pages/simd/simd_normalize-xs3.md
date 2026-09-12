> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_normalize-xs3](https://developer.apple.com/documentation/simd/simd_normalize-xs3)

# simd_normalize

**Interface language:** Objective-C

**Framework:** simd  
**Kind:** Function

Returns a vector pointing in the same direction of the supplied vector, with a length of 1.

## Declaration

```objectivec
static simd_float8 simd_normalize(simd_float8 __x);
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

### Geometry Functions

- [simd_dot](simd_dot-7390g.md): Returns the dot product of two vectors.
- [simd_project](simd_project-8htqe.md): Returns the first vector projected onto the second vector.
- [simd_fast_project](simd_fast_project-98hyq.md): Returns the fast projected vector.
- [simd_precise_project](simd_precise_project-33evf.md): Returns the precise projected vector.
- [simd_fast_normalize](simd_fast_normalize-8x4o0.md): Returns the fast normalized vector.
- [simd_precise_normalize](simd_precise_normalize-623uc.md): Returns the precise normalized vector.
