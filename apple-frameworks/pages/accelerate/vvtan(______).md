> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vvtan(_:_:_:)](https://developer.apple.com/documentation/accelerate/vvtan(_:_:_:))

# vvtan(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the tangent of each element in an array of double-precision values.

## Declaration

```swift
func vvtan(_: UnsafeMutablePointer<Double>, _: UnsafePointer<Double>, _: UnsafePointer<Int32>)
```

<a id="Discussion"></a>

## Discussion

<a id="Parameters"></a>

### Parameters:

- **parameter 1**: The output array, *y*.
- **parameter 2**: The input array, *x*.
- **parameter 3**: The number of elements in the arrays.

If `x` is `+/-0`, the result preserves the signed zero.

If `x` is `+/-inf`, the result is `NaN`.

## See Also

### Array-Oriented Trigonometric Functions

- [acos(\_:)](vforce/acos%28__%29-8srk.md): Returns the arccosine of each element in a vector of double-precision values.
- [acos(\_:)](vforce/acos%28__%29-3hl5t.md): Returns the arccosine of each element in a vector of single-precision values.
- [acos(\_:result:)](vforce/acos%28__result_%29-3c9qz.md): Calculates the arccosine of each element in a vector of double-precision values.
- [acos(\_:result:)](vforce/acos%28__result_%29-6rc2f.md): Calculates the arccosine of each element in a vector of single-precision values.
- [asin(\_:)](vforce/asin%28__%29-454ds.md): Returns the arcsine of each element in a vector of double-precision values.
- [asin(\_:)](vforce/asin%28__%29-8vvt1.md): Returns the arcsine of each element in a vector of single-precision values.
- [asin(\_:result:)](vforce/asin%28__result_%29-94jmy.md): Calculates the arcsine of each element in a vector of double-precision values.
- [asin(\_:result:)](vforce/asin%28__result_%29-ooti.md): Calculates the arcsine of each element in a vector of single-precision values.
- [atan(\_:)](vforce/atan%28__%29-1ghr3.md): Returns the arctangent of each element in a vector of double-precision values.
- [atan(\_:)](vforce/atan%28__%29-5ejvk.md): Returns the arctangent of each element in a vector of single-precision values.
- [atan(\_:result:)](vforce/atan%28__result_%29-691jp.md): Calculates the arctangent of each element in a vector of double-precision values.
- [atan(\_:result:)](vforce/atan%28__result_%29-6bb8n.md): Calculates the arctangent of each element in a vector of single-precision values.
- [atan2(x:y:)](vforce/atan2%28x_y_%29-h54u.md): Returns the arctangent of each pair of elements in two vectors of double-precision values.
- [atan2(x:y:)](vforce/atan2%28x_y_%29-3lku3.md): Returns the arctangent of each pair of elements in two vectors of single-precision values.
- [atan2(x:y:result:)](vforce/atan2%28x_y_result_%29-184b6.md): Calculates the arctangent of each pair of elements in two vectors of double-precision values.

# vvtan (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the tangent of each element in an array of double-precision values.

## Declaration

```objectivec
void vvtan(double *, const double *, const int *);
```

<a id="Discussion"></a>

## Discussion

<a id="Parameters"></a>

### Parameters:

- **parameter 1**: The output array, *y*.
- **parameter 2**: The input array, *x*.
- **parameter 3**: The number of elements in the arrays.

If `x` is `+/-0`, the result preserves the signed zero.

If `x` is `+/-inf`, the result is `NaN`.

## See Also

### Array-Oriented Trigonometric Functions

- [vvsin](vvsin%28______%29.md): Calculates the sine of each element in an array of double-precision values.
- [vvsinf](vvsinf%28______%29.md): Calculates the sine of each element in an array of single-precision values.
- [vvsinpi](vvsinpi%28______%29.md): Calculates the sine of pi multiplied by each element in an array of double-precision values.
- [vvsinpif](vvsinpif%28______%29.md): Calculates the sine of pi multiplied by each element in an array of single-precision values.
- [vvcos](vvcos%28______%29.md): Calculates the cosine of each element in an array of double-precision values.
- [vvcosf](vvcosf%28______%29.md): Calculates the cosine of each element in an array of single-precision values.
- [vvcospi](vvcospi%28______%29.md): Calculates the cosine of pi multiplied by each element in an array of double-precision values.
- [vvcospif](vvcospif%28______%29.md): Calculates the cosine of pi multiplied by each element in an array of single-precision values.
- [vvcosisin](vvcosisin%28______%29.md): Calculates the cosine and sine of each element in an array of double-precision values.
- [vvcosisinf](vvcosisinf%28______%29.md): Calculates the cosine and sine of each element in an array of single-precision values.
- [vvsincos](vvsincos%28________%29.md): Calculates the cosine and sine of each element in an array of double-precision values.
- [vvsincosf](vvsincosf%28________%29.md): Calculates the cosine and sine of each element in an array of single-precision values.
- [vvtanf](vvtanf%28______%29.md): Calculates the tangent of each element in an array of single-precision values.
- [vvtanpi](vvtanpi%28______%29.md): Calculates the tangent of pi multiplied by each element in an array of double-precision values.
- [vvtanpif](vvtanpif%28______%29.md): Calculates the tangent of pi multiplied by each element in an array of single-precision values.
