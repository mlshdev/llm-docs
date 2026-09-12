> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/dspdoublecomplex](https://developer.apple.com/documentation/accelerate/dspdoublecomplex)

# DSPDoubleComplex (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents a double-precision complex value.

## Declaration

```swift
struct DSPDoubleComplex
```

## Mentioned In

- [Performing Fourier transforms on interleaved-complex data](performing-fourier-transforms-on-interleaved-complex-data.md)

<a id="overview"></a>

## Overview

Double complex data are stored as ordered pairs of double-precision floating-point numbers. Because they are stored as ordered pairs, complex vectors require address strides that are multiples of two.

## Topics

### Initializers

- [init()](dspdoublecomplex/init%28%29.md)
- [init(real:imag:)](dspdoublecomplex/init%28real_imag_%29.md)

### Instance Properties

- [imag](dspdoublecomplex/imag.md): The imaginary part of the value.
- [real](dspdoublecomplex/real.md): The real part of the value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [vDSP_DiscreteFourierTransformable](vdsp_discretefouriertransformable.md)

## See Also

### Data types

- [vDSP_Length](vdsp_length.md): An unsigned-integer value that represents the size of vectors and the indices of elements in vectors.
- [vDSP_Stride](vdsp_stride.md): An integer value that represents the differences between indices of elements, including the lengths of strides.
- [DSPComplex](dspcomplex.md): A structure that represents a single-precision complex value.
- [COMPLEX_SPLIT](complex_split.md)
- [DOUBLE_COMPLEX_SPLIT](double_complex_split.md)
- [DSPSplitComplex](dspsplitcomplex.md): A structure that represents a single-precision complex vector with the real and imaginary parts stored in separate arrays.
- [DSPDoubleSplitComplex](dspdoublesplitcomplex.md): A structure that represents a double-precision complex vector with the real and imaginary parts stored in separate arrays.
- [vDSP.VectorizableDouble](vdsp/vectorizabledouble.md): A structure that represents a double-precision real value for biquadratic filtering and discrete Fourier transforms.
- [vDSP.VectorizableFloat](vdsp/vectorizablefloat.md): A structure that represents a single-precision real value for biquadratic filtering and discrete Fourier transforms.

# DSPDoubleComplex (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents a double-precision complex value.

## Declaration

```objectivec
typedef struct DSPDoubleComplex { ... } DSPDoubleComplex;
```

## Mentioned In

- [Performing Fourier transforms on interleaved-complex data](performing-fourier-transforms-on-interleaved-complex-data.md)

<a id="overview"></a>

## Overview

Double complex data are stored as ordered pairs of double-precision floating-point numbers. Because they are stored as ordered pairs, complex vectors require address strides that are multiples of two.

## Topics

### Instance Properties

- [imag](dspdoublecomplex/imag.md): The imaginary part of the value.
- [real](dspdoublecomplex/real.md): The real part of the value.

## See Also

### Data types

- [vDSP_Length](vdsp_length.md): An unsigned-integer value that represents the size of vectors and the indices of elements in vectors.
- [vDSP_Stride](vdsp_stride.md): An integer value that represents the differences between indices of elements, including the lengths of strides.
- [DSPComplex](dspcomplex.md): A structure that represents a single-precision complex value.
- [COMPLEX_SPLIT](complex_split.md)
- [DOUBLE_COMPLEX_SPLIT](double_complex_split.md)
- [DSPSplitComplex](dspsplitcomplex.md): A structure that represents a single-precision complex vector with the real and imaginary parts stored in separate arrays.
- [DSPDoubleSplitComplex](dspdoublesplitcomplex.md): A structure that represents a double-precision complex vector with the real and imaginary parts stored in separate arrays.
