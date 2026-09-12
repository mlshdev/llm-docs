> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/vectorizabledouble](https://developer.apple.com/documentation/accelerate/vdsp/vectorizabledouble)

# vDSP.VectorizableDouble

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

A structure that represents a double-precision real value for biquadratic filtering and discrete Fourier transforms.

## Declaration

```swift
struct VectorizableDouble
```

## Topics

### Default Implementations

- [vDSP_BiquadFunctions Implementations](vectorizabledouble/vdsp_biquadfunctions-implementations.md)
- [vDSP_DFTFunctions Implementations](vectorizabledouble/vdsp_dftfunctions-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [vDSP_BiquadFunctions](../vdsp_biquadfunctions.md)
- [vDSP_DFTFunctions](../vdsp_dftfunctions.md)

## See Also

### Data types

- [vDSP_Length](../vdsp_length.md): An unsigned-integer value that represents the size of vectors and the indices of elements in vectors.
- [vDSP_Stride](../vdsp_stride.md): An integer value that represents the differences between indices of elements, including the lengths of strides.
- [DSPComplex](../dspcomplex.md): A structure that represents a single-precision complex value.
- [COMPLEX_SPLIT](../complex_split.md)
- [DSPDoubleComplex](../dspdoublecomplex.md): A structure that represents a double-precision complex value.
- [DOUBLE_COMPLEX_SPLIT](../double_complex_split.md)
- [DSPSplitComplex](../dspsplitcomplex.md): A structure that represents a single-precision complex vector with the real and imaginary parts stored in separate arrays.
- [DSPDoubleSplitComplex](../dspdoublesplitcomplex.md): A structure that represents a double-precision complex vector with the real and imaginary parts stored in separate arrays.
- [vDSP.VectorizableFloat](vectorizablefloat.md): A structure that represents a single-precision real value for biquadratic filtering and discrete Fourier transforms.
