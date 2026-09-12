> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vvlog10(_:_:_:)](https://developer.apple.com/documentation/accelerate/vvlog10(_:_:_:))

# vvlog10(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the base 10 logarithm of each element in an array of double-precision values.

## Declaration

```swift
func vvlog10(_: UnsafeMutablePointer<Double>, _: UnsafePointer<Double>, _: UnsafePointer<Int32>)
```

<a id="Parameters"></a>

### Parameters:

- **parameter 1**: The output array, *y*.
- **parameter 2**: The input array, *x*.
- **parameter 3**: The number of elements in the arrays.

## See Also

### Array-Oriented Exponential and Logarithmic Functions

- [exp(\_:)](vforce/exp%28__%29-76nrd.md): Returns the *e*, raised to the power of each element in a vector of double-precision values.
- [exp(\_:)](vforce/exp%28__%29-5iaun.md): Returns the *e*, raised to the power of each element in a vector of single-precision values.
- [exp(\_:result:)](vforce/exp%28__result_%29-34nxw.md): Calculates the *e*, raised to the power of each element in a vector of double-precision values.
- [exp(\_:result:)](vforce/exp%28__result_%29-4k85n.md): Calculates the *e*, raised to the power of each element in a vector of single-precision values.
- [exp2(\_:)](vforce/exp2%28__%29-2m5q.md): Returns the 2, raised to the power of each element in a vector of double-precision values.
- [exp2(\_:)](vforce/exp2%28__%29-4mm9y.md): Returns the 2, raised to the power of each element in a vector of single-precision values.
- [exp2(\_:result:)](vforce/exp2%28__result_%29-6ru6m.md): Calculates the 2, raised to the power of each element in a vector of double-precision values.
- [exp2(\_:result:)](vforce/exp2%28__result_%29-8m564.md): Calculates the 2, raised to the power of each element in a vector of single-precision values.
- [expm1(\_:)](vforce/expm1%28__%29-xkzx.md): Returns the *eˣ-1* for each element in a vector of double-precision values.
- [expm1(\_:)](vforce/expm1%28__%29-mfq5.md): Returns the *eˣ-1* for each element in a vector of single-precision values.
- [expm1(\_:result:)](vforce/expm1%28__result_%29-4dpl4.md): Calculates the *eˣ-1* for each element in a vector of double-precision values.
- [expm1(\_:result:)](vforce/expm1%28__result_%29-2yhs3.md): Calculates the *eˣ-1* for each element in a vector of single-precision values.
- [log10(\_:)](vforce/log10%28__%29-9wr68.md): Returns the base 10 logarithm of each element in a vector of double-precision values.
- [log(\_:)](vforce/log%28__%29-2gh9a.md): Returns the natural logarithm for each element in a vector of double-precision values.
- [log(\_:)](vforce/log%28__%29-5ffby.md): Returns the natural logarithm for each element in a vector of single-precision values.

# vvlog10 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the base 10 logarithm of each element in an array of double-precision values.

## Declaration

```objectivec
void vvlog10(double *, const double *, const int *);
```

<a id="Parameters"></a>

### Parameters:

- **parameter 1**: The output array, *y*.
- **parameter 2**: The input array, *x*.
- **parameter 3**: The number of elements in the arrays.

## See Also

### Array-Oriented Exponential and Logarithmic Functions

- [vvexp](vvexp%28______%29.md): Calculates *e* raised to the power of each element in an array of double-precision values.
- [vvexpf](vvexpf%28______%29.md): Calculates *e* raised to the power of each element in an array of single-precision values.
- [vvexp2](vvexp2%28______%29.md): Calculates 2 raised to the power of each element in an array of double-precision values.
- [vvexp2f](vvexp2f%28______%29.md): Calculates 2 raised to the power of each element in an array of single-precision values.
- [vvexpm1](vvexpm1%28______%29.md): Calculates *eˣ-1* for each element in an array of double-precision values.
- [vvexpm1f](vvexpm1f%28______%29.md): Calculates *eˣ-1* for each element in an array of single-precision values.
- [vvlog](vvlog%28______%29.md): Calculates the natural logarithm for each element in an array of double-precision values.
- [vvlogf](vvlogf%28______%29.md): Calculates the natural logarithm for each element in an array of single-precision values.
- [vvlog1p](vvlog1p%28______%29.md): Calculates *log(1+x)* for each element in an array of double-precision values.
- [vvlog1pf](vvlog1pf%28______%29.md): Calculates *log(1+x)* for each element in an array of single-precision values.
- [vvlog2](vvlog2%28______%29.md): Calculates the base 2 logarithm of each element in an array of double-precision values.
- [vvlog2f](vvlog2f%28______%29.md): Calculates the base 2 logarithm of each element in an array of single-precision values.
- [vvlog10f](vvlog10f%28______%29.md): Calculates the base 10 logarithm of each element in an array of single-precision values.
- [vvlogb](vvlogb%28______%29.md): Calculates the unbiased exponent of each element in an array of double-precision values.
- [vvlogbf](vvlogbf%28______%29.md): Calculates the unbiased exponent of each element in an array of single-precision values.
