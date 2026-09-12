> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vvsinh(_:_:_:)](https://developer.apple.com/documentation/accelerate/vvsinh(_:_:_:))

# vvsinh(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the hyperbolic sine of each element in an array of double-precision values.

## Declaration

```swift
func vvsinh(_: UnsafeMutablePointer<Double>, _: UnsafePointer<Double>, _: UnsafePointer<Int32>)
```

<a id="Discussion"></a>

## Discussion

<a id="Parameters"></a>

### Parameters:

- **parameter 1**: The output array, *y*.
- **parameter 2**: The input array, *x*.
- **parameter 3**: The number of elements in the arrays.

If `x` is `+/-0`, the result preserves the signed zero.

If `x` is `+/-inf`, the result is `+/-inf`.

## See Also

### Array-Oriented Hyperbolic Functions

- [acosh(\_:)](vforce/acosh%28__%29-1j3qt.md): Returns the inverse hyperbolic cosine of each element in a vector of double-precision values.
- [acosh(\_:)](vforce/acosh%28__%29-8zjay.md): Returns the inverse hyperbolic cosine of each element in a vector of single-precision values.
- [acosh(\_:result:)](vforce/acosh%28__result_%29-4cip0.md): Calculates the inverse hyperbolic cosine of each element in a vector of double-precision values.
- [acosh(\_:result:)](vforce/acosh%28__result_%29-2r23w.md): Calculates the inverse hyperbolic cosine of each element in a vector of single-precision values.
- [asinh(\_:)](vforce/asinh%28__%29-ue6b.md): Returns the inverse hyperbolic sine of each element in a vector of double-precision values.
- [asinh(\_:)](vforce/asinh%28__%29-284n7.md): Returns the inverse hyperbolic sine of each element in a vector of single-precision values.
- [asinh(\_:result:)](vforce/asinh%28__result_%29-7wn57.md): Calculates the inverse hyperbolic sine of each element in a vector of double-precision values.
- [asinh(\_:result:)](vforce/asinh%28__result_%29-17vv4.md): Calculates the inverse hyperbolic sine of each element in a vector of single-precision values.
- [atanh(\_:)](vforce/atanh%28__%29-922d.md): Returns the inverse hyperbolic tangent of each element in a vector of double-precision values.
- [atanh(\_:)](vforce/atanh%28__%29-2t372.md): Returns the inverse hyperbolic tangent of each element in a vector of single-precision values.
- [atanh(\_:result:)](vforce/atanh%28__result_%29-6waj3.md): Calculates the inverse hyperbolic tangent of each element in a vector of double-precision values.
- [atanh(\_:result:)](vforce/atanh%28__result_%29-596wg.md): Calculates the inverse hyperbolic tangent of each element in a vector of single-precision values.
- [cosh(\_:)](vforce/cosh%28__%29-4dmhm.md): Returns the hyperbolic cosine of each element in a vector of double-precision values.
- [cosh(\_:)](vforce/cosh%28__%29-5ax3f.md): Returns the hyperbolic cosine of each element in a vector of single-precision values.
- [cosh(\_:result:)](vforce/cosh%28__result_%29-4f7in.md): Calculates the hyperbolic cosine of each element in a vector of double-precision values.

# vvsinh (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the hyperbolic sine of each element in an array of double-precision values.

## Declaration

```objectivec
void vvsinh(double *, const double *, const int *);
```

<a id="Discussion"></a>

## Discussion

<a id="Parameters"></a>

### Parameters:

- **parameter 1**: The output array, *y*.
- **parameter 2**: The input array, *x*.
- **parameter 3**: The number of elements in the arrays.

If `x` is `+/-0`, the result preserves the signed zero.

If `x` is `+/-inf`, the result is `+/-inf`.

## See Also

### Array-Oriented Hyperbolic Functions

- [vvsinhf](vvsinhf%28______%29.md): Calculates the hyperbolic sine of each element in an array of single-precision values.
- [vvcosh](vvcosh%28______%29.md): Calculates the hyperbolic cosine of each element in an array of double-precision values.
- [vvcoshf](vvcoshf%28______%29.md): Calculates the hyperbolic cosine of each element in an array of single-precision values.
- [vvtanh](vvtanh%28______%29.md): Calculates the hyperbolic tangent of each element in an array of double-precision values.
- [vvtanhf](vvtanhf%28______%29.md): Calculates the hyperbolic tangent of each element in an array of single-precision values.
- [vvasinh](vvasinh%28______%29.md): Calculates the inverse hyperbolic sine of each element in an array of double-precision values.
- [vvasinhf](vvasinhf%28______%29.md): Calculates the inverse hyperbolic sine of each element in an array of single-precision values.
- [vvacosh](vvacosh%28______%29.md): Calculates the inverse hyperbolic cosine of each element in an array of double-precision values.
- [vvacoshf](vvacoshf%28______%29.md): Calculates the inverse hyperbolic cosine of each element in an array of single-precision values.
- [vvatanh](vvatanh%28______%29.md): Calculates the inverse hyperbolic tangent of each element in an array of double-precision values.
- [vvatanhf](vvatanhf%28______%29.md): Calculates the inverse hyperbolic tangent of each element in an array of single-precision values.
