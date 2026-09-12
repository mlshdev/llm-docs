> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vlintd](https://developer.apple.com/documentation/accelerate/vdsp_vlintd)

# vDSP_vlintD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the interpolation between the neighboring elements of a double-precision vector using the specified stride.

## Declaration

```objectivec
extern void vDSP_vlintD(const double *__A, const double *__B, vDSP_Stride __IB, double *__C, vDSP_Stride __IC, vDSP_Length __N, vDSP_Length __M);
```

## Parameters

- `__A`: The double-precision input vector.
- `__B`: The vector that controls the interpolation. The integer part of each element in the control vector is the zero-based index of the first element of a pair of adjacent values in the source array. The fractional part defines the linear interpolation between the values at those indices.
- `__IB`: The stride between elements in the vector `__B`.
- `__C`: The double-precision output vector.
- `__IC`: The stride between elements in the vector `__C`.
- `__N`: The number of elements in the output vector.
- `__M`: The number of elements in the input vector.

## Mentioned In

- [Using linear interpolation to construct new data points](using-linear-interpolation-to-construct-new-data-points.md)

<a id="Discussion"></a>

## Discussion

Performs the following operation:

```objc
for (int n = 0; n < N; ++n){
    double b = B[n*IB];
    double index = trunc(b); // The integer part of B.
    double alpha = b - index; // The fractional part of B.
 
    double a0 = A[(int)index]; // The indexed A value.
    double a1 = A[(int)index + 1]; // The next indexed A value.
 
    C[n*IC] = a0 + (alpha * (a1 -a0)); // The interpolated value.
}
```

The function generates vector `C` by interpolating between neighboring values of vector `A` as controlled by vector `B`. The operation treats the integer portion of each element in `B` as the zero-based index of the first element of a pair of adjacent values in vector `A`.

The function uses the fractional part of the value in `B` to calculate the corresponding element of `C` from the two adjacent values.

The calculation doesn’t use the argument `M`. However, the integer parts of the values in `B` must be greater than or equal to zero and less than or equal to `M` \- 2.

## See Also

### Single-Vector Linear Interpolation

- [Using linear interpolation to construct new data points](using-linear-interpolation-to-construct-new-data-points.md): Fill the gaps in arrays of numerical data using linear interpolation.
- [vDSP_vlint](vdsp_vlint.md): Calculates the interpolation between the neighboring elements of a single-precision vector using the specified stride.
