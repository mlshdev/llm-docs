> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vvdiv(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vvdiv(_:_:_:_:))

# vvdiv(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Divides each element in an array by the corresponding value in a second array of double-precision values.

## Declaration

```swift
func vvdiv(_: UnsafeMutablePointer<Double>, _: UnsafePointer<Double>, _: UnsafePointer<Double>, _: UnsafePointer<Int32>)
```

<a id="Discussion"></a>

## Discussion

<a id="Parameters"></a>

### Parameters:

- **parameter 1**: The output array, *z*.
- **parameter 2**: The numerators input array, *y*.
- **parameter 3**: The denominators input array, *x*.
- **parameter 4**: The number of elements in the arrays.

The following code shows an example of using [vvdiv(\_:\_:\_:\_:)](vvdiv%28________%29.md):

**Swift**

```swift
var x: [Double] = [1, 2, 2, 4]
var y: [Double] = [1, 1, 10, 30]
var z = [Double](repeating: 0, count: x.count)
var n = Int32(x.count)
 
vvdiv(&z, &y, &x, &n)
 
print(z) // [1.0, 0.5, 5.0, 7.5]
```

**Objective-C**

```objc
double x[] = {1, 2, 2, 4};
double y[] = {1, 1, 10, 30};
double z[4];
int n = 4;
 
vvdiv(z, y, x, &n);
 
NSLog(@"z: [%lf, %lf, %lf, %lf]", z[0], z[1], z[2], z[3]);
```

## See Also

### Array-Oriented Arithmetic and Auxiliary Functions

- [ceil(\_:)](vforce/ceil%28__%29-9dsdt.md): Returns the ceiling of each element in a vector of double-precision values.
- [ceil(\_:)](vforce/ceil%28__%29-57grr.md): Returns the ceiling of each element in a vector of single-precision values.
- [ceil(\_:result:)](vforce/ceil%28__result_%29-4wev4.md): Calculates the ceiling of each element in a vector of double-precision values.
- [ceil(\_:result:)](vforce/ceil%28__result_%29-6zm3u.md): Calculates the ceiling of each element in a vector of single-precision values.
- [copysign(magnitudes:signs:)](vforce/copysign%28magnitudes_signs_%29-s0r3.md): Returns each single-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.
- [copysign(magnitudes:signs:)](vforce/copysign%28magnitudes_signs_%29-3jhf0.md): Returns each single-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.
- [copysign(magnitudes:signs:result:)](vforce/copysign%28magnitudes_signs_result_%29-3zoya.md): Calculates each double-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.
- [copysign(magnitudes:signs:result:)](vforce/copysign%28magnitudes_signs_result_%29-5umya.md): Calculates each single-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.
- [floor(\_:)](vforce/floor%28__%29-64hyu.md): Returns the floor of each element in a vector of double-precision values.
- [floor(\_:)](vforce/floor%28__%29-5awna.md): Returns the floor of each element in a vector of single-precision values.
- [floor(\_:result:)](vforce/floor%28__result_%29-61veb.md): Calculates the floor of each element in a vector of double-precision values.
- [floor(\_:result:)](vforce/floor%28__result_%29-4mf4q.md): Calculates the floor of each element in a vector of single-precision values.
- [nearestInteger(\_:)](vforce/nearestinteger%28__%29-5mppu.md): Returns the nearest integer to each element in a vector of double-precision values.
- [nearestInteger(\_:)](vforce/nearestinteger%28__%29-386dx.md): Returns the nearest integer to each element in a vector of single-precision values.
- [nearestInteger(\_:result:)](vforce/nearestinteger%28__result_%29-bbtt.md): Calculates the nearest integer to each element in a vector of double-precision values.

# vvdiv (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Divides each element in an array by the corresponding value in a second array of double-precision values.

## Declaration

```objectivec
void vvdiv(double *, const double *, const double *, const int *);
```

<a id="Discussion"></a>

## Discussion

<a id="Parameters"></a>

### Parameters:

- **parameter 1**: The output array, *z*.
- **parameter 2**: The numerators input array, *y*.
- **parameter 3**: The denominators input array, *x*.
- **parameter 4**: The number of elements in the arrays.

The following code shows an example of using [vvdiv](vvdiv%28________%29.md):

**Swift**

```swift
var x: [Double] = [1, 2, 2, 4]
var y: [Double] = [1, 1, 10, 30]
var z = [Double](repeating: 0, count: x.count)
var n = Int32(x.count)
 
vvdiv(&z, &y, &x, &n)
 
print(z) // [1.0, 0.5, 5.0, 7.5]
```

**Objective-C**

```objc
double x[] = {1, 2, 2, 4};
double y[] = {1, 1, 10, 30};
double z[4];
int n = 4;
 
vvdiv(z, y, x, &n);
 
NSLog(@"z: [%lf, %lf, %lf, %lf]", z[0], z[1], z[2], z[3]);
```

## See Also

### Array-Oriented Arithmetic and Auxiliary Functions

- [vvceil](vvceil%28______%29.md): Calculates the ceiling of each element in an array of double-precision values.
- [vvceilf](vvceilf%28______%29.md): Calculates the ceiling of each element in an array of single-precision values.
- [vvfloor](vvfloor%28______%29.md): Calculates the floor of each element in an array of double-precision values.
- [vvfloorf](vvfloorf%28______%29.md): Calculates the floor of each element in an array of single-precision values.
- [vvcopysign](vvcopysign%28________%29.md): Copies an array, setting the sign of each element based on a second array of double-precision values.
- [vvcopysignf](vvcopysignf%28________%29.md): Copies an array, setting the sign of each element based on a second array of single-precision values.
- [vvdivf](vvdivf%28________%29.md): Divides each element in an array by the corresponding value in a second array of single-precision values.
- [vvfabs](vvfabs%28______%29.md): Calculates the absolute value for each element in an array of double-precision values.
- [vvfabsf](vvfabsf%28______%29.md): Calculates the absolute value for each element in an array of single-precision values.
- [vvfmod](vvfmod%28________%29.md): Calculates the modulus after dividing each element in an array by the corresponding element in a second array of double-precision values.
- [vvfmodf](vvfmodf%28________%29.md): Calculates the modulus after dividing each element in an array by the corresponding element in a second array of single-precision values.
- [vvremainder](vvremainder%28________%29.md): Calculates the remainder after dividing each element in an array by the corresponding element in a second array of double-precision values.
- [vvremainderf](vvremainderf%28________%29.md): Calculates the remainder after dividing each element in an array by the corresponding element in a second array of single-precision values.
- [vvint](vvint%28______%29.md): Calculates the integer truncation for each element in an array of double-precision values.
- [vvintf](vvintf%28______%29.md): Calculates the integer truncation for each element in an array of single-precision values.
