> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vforce/sinh(_:)-fwj2](https://developer.apple.com/documentation/accelerate/vforce/sinh(_:)-fwj2)

# sinh(\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the hyperbolic sine of each element in a vector of single-precision values.

## Declaration

```swift
static func sinh<U>(_ vector: U) -> [Float] where U : AccelerateBuffer, U.Element == Float
```

## See Also

### Array-Oriented Hyperbolic Functions

- [acosh(\_:)](acosh%28__%29-1j3qt.md): Returns the inverse hyperbolic cosine of each element in a vector of double-precision values.
- [acosh(\_:)](acosh%28__%29-8zjay.md): Returns the inverse hyperbolic cosine of each element in a vector of single-precision values.
- [acosh(\_:result:)](acosh%28__result_%29-4cip0.md): Calculates the inverse hyperbolic cosine of each element in a vector of double-precision values.
- [acosh(\_:result:)](acosh%28__result_%29-2r23w.md): Calculates the inverse hyperbolic cosine of each element in a vector of single-precision values.
- [asinh(\_:)](asinh%28__%29-ue6b.md): Returns the inverse hyperbolic sine of each element in a vector of double-precision values.
- [asinh(\_:)](asinh%28__%29-284n7.md): Returns the inverse hyperbolic sine of each element in a vector of single-precision values.
- [asinh(\_:result:)](asinh%28__result_%29-7wn57.md): Calculates the inverse hyperbolic sine of each element in a vector of double-precision values.
- [asinh(\_:result:)](asinh%28__result_%29-17vv4.md): Calculates the inverse hyperbolic sine of each element in a vector of single-precision values.
- [atanh(\_:)](atanh%28__%29-922d.md): Returns the inverse hyperbolic tangent of each element in a vector of double-precision values.
- [atanh(\_:)](atanh%28__%29-2t372.md): Returns the inverse hyperbolic tangent of each element in a vector of single-precision values.
- [atanh(\_:result:)](atanh%28__result_%29-6waj3.md): Calculates the inverse hyperbolic tangent of each element in a vector of double-precision values.
- [atanh(\_:result:)](atanh%28__result_%29-596wg.md): Calculates the inverse hyperbolic tangent of each element in a vector of single-precision values.
- [cosh(\_:)](cosh%28__%29-4dmhm.md): Returns the hyperbolic cosine of each element in a vector of double-precision values.
- [cosh(\_:)](cosh%28__%29-5ax3f.md): Returns the hyperbolic cosine of each element in a vector of single-precision values.
- [cosh(\_:result:)](cosh%28__result_%29-4f7in.md): Calculates the hyperbolic cosine of each element in a vector of double-precision values.
