> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vvpow(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vvpow(_:_:_:_:))

# vvpow(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Raises each element in an array to the power of the corresponding element in a second array of double-precision values.

## Declaration

```swift
func vvpow(_: UnsafeMutablePointer<Double>, _: UnsafePointer<Double>, _: UnsafePointer<Double>, _: UnsafePointer<Int32>)
```

<a id="Discussion"></a>

## Discussion

<a id="Parameters"></a>

### Parameters:

- **parameter 1**: The output array, *z*.
- **parameter 2**: The exponent input array, *y*.
- **parameter 3**: The base input array, *x*.
- **parameter 4**: The number of elements in the arrays.

The following code shows an example of using [vvpow(\_:\_:\_:\_:)](vvpow%28________%29.md):

**Swift**

```swift
var x: [Double] = [3, 2, 10, 6]
var y: [Double] = [2, 4, 3, 2]
var z = [Double](repeating: 0, count: x.count)
var n = Int32(x.count)
 
vvpow(&z, &y, &x, &n)
 
print(z) // [9.0, 16.0, 1000.0, 36.0]
```

**Objective-C**

```objc
double x[] = {3, 2, 10, 6};
double y[] = {2, 4, 3, 2};
double z[4];
int n = 4;
 
vvpow(z, y, x, &n);
 
NSLog(@"z: [%lf, %lf, %lf, %lf]", z[0], z[1], z[2], z[3]);
```

The following special values of `x` and `y` produce the given value of `z`:

| x (base) | y (exponent) | z (result) |
| --- | --- | --- |
| `odd integer, <0` | `+/-0` | `+/-inf` |
| `odd integer, >0` | `+/-0` | `+/-0` |
| `otherwise, <0` | `+/-0` | `+inf` |
| `otherwise, >0` | `+/-0` | `+0` |
| `+/-inf` | `-1` | `1` |
| `NaN` | `+1` | `1` |
| `+/-0` | `NaN` | `1` |
| `-inf` | `\|x\|<1` | `+inf` |
| `-inf` | `\|x\|>1` | `+0` |
| `+inf` | `\|x\|<1` | `+0` |
| `+inf` | `\|x\|>1` | `+inf` |
| `odd integer, <0` | `-inf` | `-0` |
| `odd integer, >0` | `-inf` | `-inf` |
| `otherwise, <0` | `-inf` | `+0` |
| `otherwise, >0` | `-inf` | `+inf` |
| `<0` | `+inf` | `+0` |
| `>0` | `+inf` | `+inf` |
| `non-integer` | `<0` | `NaN` |

## See Also

### Array-Oriented Power Functions

- [pow(bases:exponents:)](vforce/pow%28bases_exponents_%29-94dha.md): Returns each double-precision element in the bases vector, raised to the power of the corresponding element in the exponents vector.
- [pow(bases:exponents:)](vforce/pow%28bases_exponents_%29-3gl7v.md): Returns each single-precision element in the bases vector, raised to the power of the corresponding element in the exponents vector.
- [pow(bases:exponents:result:)](vforce/pow%28bases_exponents_result_%29-4bso.md): Calculates each double-precision element in the bases vector, raised to the power of the corresponding element in the exponents vector.
- [pow(bases:exponents:result:)](vforce/pow%28bases_exponents_result_%29-6pffz.md): Calculates each single-precision element in the bases vector, raised to the power of the corresponding element in the exponents vector.
- [vvpowf(\_:\_:\_:\_:)](vvpowf%28________%29.md): Raises each element in an array to the power of the corresponding element in a second array of single-precision values.

# vvpow (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Raises each element in an array to the power of the corresponding element in a second array of double-precision values.

## Declaration

```objectivec
void vvpow(double *, const double *, const double *, const int *);
```

<a id="Discussion"></a>

## Discussion

<a id="Parameters"></a>

### Parameters:

- **parameter 1**: The output array, *z*.
- **parameter 2**: The exponent input array, *y*.
- **parameter 3**: The base input array, *x*.
- **parameter 4**: The number of elements in the arrays.

The following code shows an example of using [vvpow](vvpow%28________%29.md):

**Swift**

```swift
var x: [Double] = [3, 2, 10, 6]
var y: [Double] = [2, 4, 3, 2]
var z = [Double](repeating: 0, count: x.count)
var n = Int32(x.count)
 
vvpow(&z, &y, &x, &n)
 
print(z) // [9.0, 16.0, 1000.0, 36.0]
```

**Objective-C**

```objc
double x[] = {3, 2, 10, 6};
double y[] = {2, 4, 3, 2};
double z[4];
int n = 4;
 
vvpow(z, y, x, &n);
 
NSLog(@"z: [%lf, %lf, %lf, %lf]", z[0], z[1], z[2], z[3]);
```

The following special values of `x` and `y` produce the given value of `z`:

| x (base) | y (exponent) | z (result) |
| --- | --- | --- |
| `odd integer, <0` | `+/-0` | `+/-inf` |
| `odd integer, >0` | `+/-0` | `+/-0` |
| `otherwise, <0` | `+/-0` | `+inf` |
| `otherwise, >0` | `+/-0` | `+0` |
| `+/-inf` | `-1` | `1` |
| `NaN` | `+1` | `1` |
| `+/-0` | `NaN` | `1` |
| `-inf` | `\|x\|<1` | `+inf` |
| `-inf` | `\|x\|>1` | `+0` |
| `+inf` | `\|x\|<1` | `+0` |
| `+inf` | `\|x\|>1` | `+inf` |
| `odd integer, <0` | `-inf` | `-0` |
| `odd integer, >0` | `-inf` | `-inf` |
| `otherwise, <0` | `-inf` | `+0` |
| `otherwise, >0` | `-inf` | `+inf` |
| `<0` | `+inf` | `+0` |
| `>0` | `+inf` | `+inf` |
| `non-integer` | `<0` | `NaN` |

## See Also

### Array-Oriented Power Functions

- [vvpowf](vvpowf%28________%29.md): Raises each element in an array to the power of the corresponding element in a second array of single-precision values.
