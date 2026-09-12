> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vvfmodf(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vvfmodf(_:_:_:_:))

# vvfmodf(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the modulus after dividing each element in an array by the corresponding element in a second array of single-precision values.

## Declaration

```swift
func vvfmodf(_: UnsafeMutablePointer<Float>, _: UnsafePointer<Float>, _: UnsafePointer<Float>, _: UnsafePointer<Int32>)
```

<a id="Discussion"></a>

## Discussion

<a id="Parameters"></a>

### Parameters:

- **parameter 1**: The output array, *z*.
- **parameter 2**: The numerators input array, *y*.
- **parameter 3**: The denominators input array, *x*.
- **parameter 4**: The number of elements in the arrays.

The following code shows an example of using [vvfmodf(\_:\_:\_:\_:)](vvfmodf%28________%29.md):

**Swift**

```swift
var x: [Float] = [7, 4, 3, 4]
var y: [Float] = [2, 5, 10, 30]
var z = [Float](repeating: 0, count: x.count)
var n = Int32(x.count)
 
vvfmodf(&z, &y, &x, &n)
 
print(z) // [2.0, 1.0, 1.0, 2.0]
```

**Objective-C**

```objc
float x[] = {7, 4, 3, 4};
float y[] = {2, 5, 10, 30};
float z[4];
int n = 4;
 
vvfmodf(z, y, x, &n);
 
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

# vvfmodf (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the modulus after dividing each element in an array by the corresponding element in a second array of single-precision values.

## Declaration

```objectivec
void vvfmodf(float *, const float *, const float *, const int *);
```

<a id="Discussion"></a>

## Discussion

<a id="Parameters"></a>

### Parameters:

- **parameter 1**: The output array, *z*.
- **parameter 2**: The numerators input array, *y*.
- **parameter 3**: The denominators input array, *x*.
- **parameter 4**: The number of elements in the arrays.

The following code shows an example of using [vvfmodf](vvfmodf%28________%29.md):

**Swift**

```swift
var x: [Float] = [7, 4, 3, 4]
var y: [Float] = [2, 5, 10, 30]
var z = [Float](repeating: 0, count: x.count)
var n = Int32(x.count)
 
vvfmodf(&z, &y, &x, &n)
 
print(z) // [2.0, 1.0, 1.0, 2.0]
```

**Objective-C**

```objc
float x[] = {7, 4, 3, 4};
float y[] = {2, 5, 10, 30};
float z[4];
int n = 4;
 
vvfmodf(z, y, x, &n);
 
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
- [vvdiv](vvdiv%28________%29.md): Divides each element in an array by the corresponding value in a second array of double-precision values.
- [vvdivf](vvdivf%28________%29.md): Divides each element in an array by the corresponding value in a second array of single-precision values.
- [vvfabs](vvfabs%28______%29.md): Calculates the absolute value for each element in an array of double-precision values.
- [vvfabsf](vvfabsf%28______%29.md): Calculates the absolute value for each element in an array of single-precision values.
- [vvfmod](vvfmod%28________%29.md): Calculates the modulus after dividing each element in an array by the corresponding element in a second array of double-precision values.
- [vvremainder](vvremainder%28________%29.md): Calculates the remainder after dividing each element in an array by the corresponding element in a second array of double-precision values.
- [vvremainderf](vvremainderf%28________%29.md): Calculates the remainder after dividing each element in an array by the corresponding element in a second array of single-precision values.
- [vvint](vvint%28______%29.md): Calculates the integer truncation for each element in an array of double-precision values.
- [vvintf](vvintf%28______%29.md): Calculates the integer truncation for each element in an array of single-precision values.
