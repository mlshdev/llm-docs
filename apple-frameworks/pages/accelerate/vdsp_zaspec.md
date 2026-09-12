> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_zaspec](https://developer.apple.com/documentation/accelerate/vdsp_zaspec)

# vDSP_zaspec

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Computes the autospectrum of a complex single-precision vector.

## Declaration

```objectivec
extern void vDSP_zaspec(const DSPSplitComplex *__A, float *__C, vDSP_Length __N);
```

## Parameters

- `__A`: A single-precision vector that contains the complex input values.
- `__C`: A single-precision vector that accumulates the real output values.
- `__N`: The number of elements.

## Mentioned In

- [Finding the component frequencies in a composite sine wave](finding-the-component-frequencies-in-a-composite-sine-wave.md)

<a id="Discussion"></a>

## Discussion

This function computes the autospectrum of the complex input vector and adds the result to the existing real values in the output vector. The function returns the product of each input element and its complex conjugate. Each element-wise product is a real value that’s the sum of the squares of the real and imaginary parts.

Because the function adds its result to the existing values in the output vector, the output vector must be initialized with known values or contain valid data from a previous operation.

The input and output vectors must have a stride of `1`.

## See Also

### Related Documentation

- [Finding the component frequencies in a composite sine wave](finding-the-component-frequencies-in-a-composite-sine-wave.md): Use 1D fast Fourier transform to compute the frequency components of a signal.

### Vector-to-Vector Spectra Computation

- [vDSP_zaspecD](vdsp_zaspecd.md): Computes the autospectrum of a complex double-precision vector.
