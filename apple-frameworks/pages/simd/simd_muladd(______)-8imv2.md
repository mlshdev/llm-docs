> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_muladd(_:_:_:)-8imv2](https://developer.apple.com/documentation/simd/simd_muladd(_:_:_:)-8imv2)

# simd_muladd(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns the multiply-add result for corresponding elements in three vectors.

## Declaration

```swift
func simd_muladd(_ x: simd_float16, _ y: simd_float16, _ z: simd_float16) -> simd_float16
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

- [cbrt(\_:)](cbrt%28__%29-3cnri.md): Returns the cube root of each element in a vector.
- [erf(\_:)](erf%28__%29-7wkg3.md): Returns the error function for each element in a vector.
- [erfc(\_:)](erfc%28__%29-20vsh.md): Returns the complementary error function for each element in a vector.
- [fma(\_:\_:\_:)](fma%28______%29-503dp.md): Returns the multiply-add result for corresponding elements in three vectors.
- [fmod(\_:\_:)](fmod%28____%29-2bys0.md): Returns the modulus after dividing each element in a vector by the corresponding element in a second vector.
- [hypot(\_:\_:)](hypot%28____%29-265pt.md): Returns the hypotenuse of a right-angled triangle with the sides that are adjacent to the right angle that two vectors define.
- [lgamma(\_:)](lgamma%28__%29-1onkc.md): Returns the natural logarithm of the absolute value of the gamma function of each element in a vector.
- [nextafter(\_:\_:)](nextafter%28____%29-9kvo8.md): Returns the next representable value of each element in a vector in the direction of the corresponding element in a second vector.
- [pow(\_:\_:)](pow%28____%29-7mpyc.md): Returns each element in a vector raised to the power of the corresponding element in a second vector.
- [remainder(\_:\_:)](remainder%28____%29-5dxqm.md): Returns the remainder after dividing each element in an array by the corresponding element in a second array of double-precision values.
- [round(\_:)](round%28__%29-74w3c.md): Returns each element in a vector rounded to the nearest integer.
- [tgamma(\_:)](tgamma%28__%29-9r61k.md): Returns the gamma function for each element in a vector.

# simd_muladd (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns the multiply-add result for corresponding elements in three vectors.

## Declaration

```objectivec
static simd_float16 simd_muladd(simd_float16 x, simd_float16 y, simd_float16 z);
```

## Parameters

- `x`: The *x* in `x*y + z`.
- `y`: The *y* in `x*y + z`.
- `z`: The *z* in `x*y + z`.

<a id="return-value"></a>

## Return Value

The result of `x*y + z`.
