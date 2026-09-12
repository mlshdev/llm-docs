> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vnextafterf(_:_:)](https://developer.apple.com/documentation/accelerate/vnextafterf(_:_:))

# vnextafterf(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

For each vector element, calculates the next representable value after `x` in the direction of `y`.  If `x` is equal to `y`, then `y` is returned.

## Declaration

```swift
func vnextafterf(_: vFloat, _: vFloat) -> vFloat
```

## See Also

### Floating-Point Arithmetic and Auxiliary Functions (from vfp.h)

- [vceilf(\_:)](vceilf%28__%29.md): Computes the ceiling of values in a vector of floating-point values.
- [vcopysignf(\_:\_:)](vcopysignf%28____%29.md): For each vector element, produces a value with the magnitude of `arg2` and sign `arg1`. Note that the order of the arguments matches the recommendation of the IEEE 754 floating-point standard, which is opposite from the SANE copysign function.
- [vdivf(\_:\_:)](vdivf%28____%29.md): For each vector element, calculates `A`/`B`.
- [vfabf(\_:)](vfabf%28__%29.md): Deprecated. For each vector element, calculates the absolute value of `v`.
- [vfabsf(\_:)](vfabsf%28__%29.md)
- [vfloorf(\_:)](vfloorf%28__%29.md): Computes the floor of values in a vector of floating-point values.
- [vintf(\_:)](vintf%28__%29.md): Deprecated. Truncates the decimal portion of a vector of floating-point values.
- [vnintf(\_:)](vnintf%28__%29.md): Rounds to the nearest integer (nearest even for ties).
- [vrecf(\_:)](vrecf%28__%29.md): Computes the reciprocal of values in a vector.
- [vrsqrtf(\_:)](vrsqrtf%28__%29.md): For each vector element, calculates the inverse of the square root of `X`.
- [vsqrtf(\_:)](vsqrtf%28__%29.md): For each vector element, calculates the square root of `X`.
- [vtablelookup(\_:\_:)](vtablelookup%28____%29.md): For each vector element of `Index_Vect`, returns the corresponding value from `Table`.
- [vtruncf(\_:)](vtruncf%28__%29.md)

# vnextafterf (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

For each vector element, calculates the next representable value after `x` in the direction of `y`.  If `x` is equal to `y`, then `y` is returned.

## Declaration

```objectivec
extern vFloat vnextafterf(vFloat , vFloat );
```

## See Also

### Floating-Point Arithmetic and Auxiliary Functions (from vfp.h)

- [vceilf](vceilf%28__%29.md): Computes the ceiling of values in a vector of floating-point values.
- [vcopysignf](vcopysignf%28____%29.md): For each vector element, produces a value with the magnitude of `arg2` and sign `arg1`. Note that the order of the arguments matches the recommendation of the IEEE 754 floating-point standard, which is opposite from the SANE copysign function.
- [vdivf](vdivf%28____%29.md): For each vector element, calculates `A`/`B`.
- [vfabf](vfabf%28__%29.md): Deprecated. For each vector element, calculates the absolute value of `v`.
- [vfabsf](vfabsf%28__%29.md)
- [vfloorf](vfloorf%28__%29.md): Computes the floor of values in a vector of floating-point values.
- [vintf](vintf%28__%29.md): Deprecated. Truncates the decimal portion of a vector of floating-point values.
- [vnintf](vnintf%28__%29.md): Rounds to the nearest integer (nearest even for ties).
- [vrecf](vrecf%28__%29.md): Computes the reciprocal of values in a vector.
- [vrsqrtf](vrsqrtf%28__%29.md): For each vector element, calculates the inverse of the square root of `X`.
- [vsqrtf](vsqrtf%28__%29.md): For each vector element, calculates the square root of `X`.
- [vtablelookup](vtablelookup%28____%29.md): For each vector element of `Index_Vect`, returns the corresponding value from `Table`.
- [vtruncf](vtruncf%28__%29.md)
