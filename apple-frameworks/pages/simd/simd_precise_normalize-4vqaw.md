> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_precise_normalize-4vqaw](https://developer.apple.com/documentation/simd/simd_precise_normalize-4vqaw)

# simd_precise_normalize

**Interface language:** Objective-C

**Framework:** simd  
**Kind:** Function

Returns the precise normalized vector.

## Declaration

```objectivec
static simd_half4 simd_precise_normalize(simd_half4 __x);
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

- [simd_dot](simd_dot-87ssc.md): Returns the dot product of two vectors.
- [simd_normalize](simd_normalize-9o6iq.md): Returns a vector pointing in the same direction of the supplied vector, with a length of 1.
- [simd_fast_normalize](simd_fast_normalize-3vaz.md): Returns the fast normalized vector.
- [simd_project](simd_project-24ld6.md): Returns the first vector projected onto the second vector.
- [simd_precise_project](simd_precise_project-1cw2i.md): Returns the precise projected vector.
- [simd_fast_project](simd_fast_project-6ymj6.md): Returns the fast projected vector.
- [simd_reflect](simd_reflect-9r760.md): Returns the reflection direction of an incident vector and a unit normal vector.
- [simd_refract](simd_refract-6q75f.md): Returns the refraction direction of an incident vector, a unit normal vector, and an index of refraction eta.
