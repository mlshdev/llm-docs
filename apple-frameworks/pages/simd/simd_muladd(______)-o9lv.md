> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_muladd(_:_:_:)-o9lv](https://developer.apple.com/documentation/simd/simd_muladd(_:_:_:)-o9lv)

# simd_muladd(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns the multiply-add result for corresponding elements in three vectors.

## Declaration

```swift
func simd_muladd(_ x: simd_double2, _ y: simd_double2, _ z: simd_double2) -> simd_double2
```

## Parameters

- `x`: The *x* in `x*y + z`.
- `y`: The *y* in `x*y + z`.
- `z`: The *z* in `x*y + z`.

<a id="return-value"></a>

## Return Value

The result of `x*y + z`.

## See Also

### Math Functions

- [cbrt(\_:)](cbrt%28__%29-75bqn.md): Returns the cube root of each element in a vector.
- [ceil(\_:)](ceil%28__%29-cu6z.md): Returns the ceiling of each element in a vector.
- [erf(\_:)](erf%28__%29-7tfrz.md): Returns the error function for each element in a vector.
- [erfc(\_:)](erfc%28__%29-8i2r6.md): Returns the complementary error function for each element in a vector.
- [floor(\_:)](floor%28__%29-21h1y.md)
- [fma(\_:\_:\_:)](fma%28______%29-4fxau.md): Returns the multiply-add result for corresponding elements in three vectors.
- [fmod(\_:\_:)](fmod%28____%29-81hr1.md): Returns the modulus after dividing each element in a vector by the corresponding element in a second vector.
- [hypot(\_:\_:)](hypot%28____%29-9ecpz.md): Returns the hypotenuse of a right-angled triangle with the sides that are adjacent to the right angle that two vectors define.
- [lgamma(\_:)](lgamma%28__%29-697vf.md): Returns the natural logarithm of the absolute value of the gamma function of each element in a vector.
- [nextafter(\_:\_:)](nextafter%28____%29-6qeuz.md): Returns the next representable value of each element in a vector in the direction of the corresponding element in a second vector.
- [pow(\_:\_:)](pow%28____%29-2ov0n.md): Returns each element in a vector raised to the power of the corresponding element in a second vector.
- [remainder(\_:\_:)](remainder%28____%29-1l80m.md): Returns the remainder after dividing each element in an array by the corresponding element in a second array of double-precision values.
- [round(\_:)](round%28__%29-1ith.md): Returns each element in a vector rounded to the nearest integer.
- [tgamma(\_:)](tgamma%28__%29-3id8t.md): Returns the gamma function for each element in a vector.
- [trunc(\_:)](trunc%28__%29-1xvcu.md): Returns each element in a vector rounded toward zero to the nearest integer.

# simd_muladd (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns the multiply-add result for corresponding elements in three vectors.

## Declaration

```objectivec
static simd_double2 simd_muladd(simd_double2 x, simd_double2 y, simd_double2 z);
```

## Parameters

- `x`: The *x* in `x*y + z`.
- `y`: The *y* in `x*y + z`.
- `z`: The *z* in `x*y + z`.

<a id="return-value"></a>

## Return Value

The result of `x*y + z`.

## See Also

### Math Functions

- [cbrt](cbrt.md): Returns the cube root of each element in a vector.
- [copysign](copysign.md): Returns each element of a vector, with the sign of the corresponding element in a second vector.
- [erf](erf.md): Returns the error function for each element in a vector.
- [erfc](erfc.md): Returns the complementary error function for each element in a vector.
- [fabs](fabs.md): Returns the absolute value of each element in a vector.
- [fdim](fdim.md): Returns the positive difference between corresponding elements in two vectors.
- [fma](fma.md): Returns the multiply-add result for corresponding elements in three vectors.
- [fmod](fmod.md): Returns the modulus after dividing each element in a vector by the corresponding element in a second vector.
- [hypot](hypot.md): Returns the hypotenuse of a right-angled triangle with the sides that are adjacent to the right angle that two vectors define.
- [nextafter](nextafter.md): Returns the next representable value of each element in a vector in the direction of the corresponding element in a second vector.
- [pow](pow.md): Returns each element in a vector raised to the power of the corresponding element in a second vector.
- [remainder](remainder.md): Returns the remainder after dividing each element in an array by the corresponding element in a second array of double-precision values.
- [rint](rint.md): Returns each element in a vector rounded to the nearest integer in the specified direction.
- [round](round.md): Returns each element in a vector rounded to the nearest integer.
- [sqrt](sqrt.md): Returns the square root of each element in a vector.
