> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_project-472vy](https://developer.apple.com/documentation/simd/simd_project-472vy)

# simd_project

**Interface language:** Objective-C

**Framework:** simd  
**Kind:** Function

Returns the first vector projected onto the second vector.

## Declaration

```objectivec
static simd_half8 simd_project(simd_half8 __x, simd_half8 __y);
```

## See Also

### Geometry functions

- [simd_dot](simd_dot-16ezc.md): Returns the dot product of two vectors.
- [simd_normalize](simd_normalize-us7.md): Returns a vector pointing in the same direction of the supplied vector, with a length of 1.
- [simd_fast_normalize](simd_fast_normalize-8x56w.md): Returns the fast normalized vector.
- [simd_precise_normalize](simd_precise_normalize-621rw.md): Returns the precise normalized vector.
- [simd_precise_project](simd_precise_project-8kipf.md): Returns the precise projected vector.
- [simd_fast_project](simd_fast_project-2k6sp.md): Returns the fast projected vector.
