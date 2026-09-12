> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/dspdoublesplitcomplex](https://developer.apple.com/documentation/accelerate/dspdoublesplitcomplex)

# DSPDoubleSplitComplex (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents a double-precision complex vector with the real and imaginary parts stored in separate arrays.

## Declaration

```swift
struct DSPDoubleSplitComplex
```

## Topics

### Creating a Split Complex Structure

- [init(realp:imagp:)](dspdoublesplitcomplex/init%28realp_imagp_%29.md): Creates a new split complex structure.

### Inspecting a Split Complex Structure’s Data

- [imagp](dspdoublesplitcomplex/imagp.md): An array of imaginary parts of the complex numbers.
- [realp](dspdoublesplitcomplex/realp.md): An array of real parts of the complex numbers.

### Initializers

- [init(fromInputArray:realParts:imaginaryParts:)](dspdoublesplitcomplex/init%28frominputarray_realparts_imaginaryparts_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [vDSP_FourierTransformable](vdsp_fouriertransformable.md)

## See Also

### Data types

- [vDSP_Length](vdsp_length.md): An unsigned-integer value that represents the size of vectors and the indices of elements in vectors.
- [vDSP_Stride](vdsp_stride.md): An integer value that represents the differences between indices of elements, including the lengths of strides.
- [DSPComplex](dspcomplex.md): A structure that represents a single-precision complex value.
- [COMPLEX_SPLIT](complex_split.md)
- [DSPDoubleComplex](dspdoublecomplex.md): A structure that represents a double-precision complex value.
- [DOUBLE_COMPLEX_SPLIT](double_complex_split.md)
- [DSPSplitComplex](dspsplitcomplex.md): A structure that represents a single-precision complex vector with the real and imaginary parts stored in separate arrays.
- [vDSP.VectorizableDouble](vdsp/vectorizabledouble.md): A structure that represents a double-precision real value for biquadratic filtering and discrete Fourier transforms.
- [vDSP.VectorizableFloat](vdsp/vectorizablefloat.md): A structure that represents a single-precision real value for biquadratic filtering and discrete Fourier transforms.

# DSPDoubleSplitComplex (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents a double-precision complex vector with the real and imaginary parts stored in separate arrays.

## Declaration

```objectivec
typedef struct DSPDoubleSplitComplex { ... } DSPDoubleSplitComplex;
```

## Topics

### Inspecting a Split Complex Structure’s Data

- [imagp](dspdoublesplitcomplex/imagp.md): An array of imaginary parts of the complex numbers.
- [realp](dspdoublesplitcomplex/realp.md): An array of real parts of the complex numbers.

## See Also

### Data types

- [vDSP_Length](vdsp_length.md): An unsigned-integer value that represents the size of vectors and the indices of elements in vectors.
- [vDSP_Stride](vdsp_stride.md): An integer value that represents the differences between indices of elements, including the lengths of strides.
- [DSPComplex](dspcomplex.md): A structure that represents a single-precision complex value.
- [COMPLEX_SPLIT](complex_split.md)
- [DSPDoubleComplex](dspdoublecomplex.md): A structure that represents a double-precision complex value.
- [DOUBLE_COMPLEX_SPLIT](double_complex_split.md)
- [DSPSplitComplex](dspsplitcomplex.md): A structure that represents a single-precision complex vector with the real and imaginary parts stored in separate arrays.
