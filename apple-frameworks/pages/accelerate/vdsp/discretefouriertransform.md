> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/discretefouriertransform](https://developer.apple.com/documentation/accelerate/vdsp/discretefouriertransform)

# vDSP.DiscreteFourierTransform

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

An object that provides forward and inverse discrete Fourier transforms on single- or double-precision collections of interleaved or split-complex data.

## Declaration

```swift
class DiscreteFourierTransform<T> where T : vDSP_DiscreteFourierTransformable
```

<a id="overview"></a>

## Overview

Use a [vDSP.DiscreteFourierTransform](discretefouriertransform.md) to perform discrete Fourier transforms (DFTs) on split-complex or interleaved data. To learn more about working with split-complex and interleaved data, see [Performing Fourier transforms on interleaved-complex data](../performing-fourier-transforms-on-interleaved-complex-data.md).

To create a [vDSP.DiscreteFourierTransform](discretefouriertransform.md) instance to work with interleaved data, pass either [DSPComplex](../dspcomplex.md) or [DSPDoubleComplex](../dspdoublecomplex.md) to [init(previous:count:direction:transformType:ofType:)](discretefouriertransform/init%28previous_count_direction_transformtype_oftype_%29.md). The following code shows how to perform a forward complex-to-complex DFT on the interleaved single-precision values in the `interleavedInput` array:

```swift
// The `interleavedInput` array contains `complexValuesCount` `DSPComplex` elements.
let interleavedInput: [DSPComplex] = [ ... ]

let interleavedDFT = try? vDSP.DiscreteFourierTransform(previous: nil,
                                                        count: complexValuesCount,
                                                        direction: .forward,
                                                        transformType: .complexComplex,
                                                        ofType: DSPComplex.self)

// On return, the `interleavedOutput` array contains an array of `DSPComplex`
// structures.
let interleavedOutput = interleavedDFT?.transform(input: interleavedInput)
```

To create a [vDSP.DiscreteFourierTransform](discretefouriertransform.md) instance to work with split-complex data, pass either [Float](https://developer.apple.com/documentation/swift/float) or [Double](https://developer.apple.com/documentation/swift/double) to [init(previous:count:direction:transformType:ofType:)](discretefouriertransform/init%28previous_count_direction_transformtype_oftype_%29.md). Split-complex data stores the real and imaginary parts of each complex value in separate arrays. The following code shows how to perform forward complex-to-complex DFT on the split-complex single-precision values in the `splitComplexRealInput` and `splitComplexImaginaryInput` arrays:

```swift
var splitComplexRealInput: [Float] = [ ... ]
var splitComplexImaginaryInput: [Float] = [ ... ]

let splitComplexDFT = try? vDSP.DiscreteFourierTransform(previous: nil,
                                                         count: complexValuesCount,
                                                         direction: .forward,
                                                         transformType: .complexComplex,
                                                         ofType: Float.self)

// The `splitComplexOutput` tuple contains two arrays that represent the
// real and imaginary parts of the output.
let splitComplexOutput = splitComplexDFT?.transform(real: splitComplexRealInput,
                                                    imaginary: splitComplexImaginaryInput)
```

If the underlying data in both the `interleavedInput` array and the split-complex input arrays is the same, for each `i` in `0 ..< complexValuesCount`, the following is true`:`

```c
interleavedOutput[i].real ≈ splitComplexOutput.real[i]
interleavedOutput[i].imag ≈ splitComplexOutput.imaginary[i]
```

\`\`

## Topics

### Creating a Discrete Fourier Transform Instance

- [init(previous:count:direction:transformType:ofType:)](discretefouriertransform/init%28previous_count_direction_transformtype_oftype_%29.md): Returns a new discrete Fourier transform instance.

### Performing Split-Complex Discrete Fourier Transforms

- [transform(real:imaginary:)](discretefouriertransform/transform%28real_imaginary_%29-4nwy9.md): Conforms when `T` is `Float`. Returns the result of a single-precision discrete Fourier transform.
- [transform(real:imaginary:)](discretefouriertransform/transform%28real_imaginary_%29-82jag.md): Conforms when `T` is `Double`. Returns the result of a double-precision discrete Fourier transform.
- [transform(inputReal:inputImaginary:outputReal:outputImaginary:)](discretefouriertransform/transform%28inputreal_inputimaginary_outputreal_outputimaginary_%29-sihh.md): Conforms when `T` is `Float`. Computes a single-precision discrete Fourier transform.
- [transform(inputReal:inputImaginary:outputReal:outputImaginary:)](discretefouriertransform/transform%28inputreal_inputimaginary_outputreal_outputimaginary_%29-7115x.md): Conforms when `T` is `Double`. Computes a double-precision discrete Fourier transform.

### Performing Interleaved Discrete Fourier Transforms

- [transform(input:)](discretefouriertransform/transform%28input_%29-92b3l.md): Conforms when `T` is `DSPComplex`. Returns the result of a single-precision discrete Fourier transform.
- [transform(input:)](discretefouriertransform/transform%28input_%29-5si4h.md): Conforms when `T` is `DSPDoubleComplex`. Returns the result of a double-precision discrete Fourier transform.
- [transform(input:output:)](discretefouriertransform/transform%28input_output_%29-1k3hd.md): Conforms when `T` is `DSPComplex`. Computes a single-precision discrete Fourier transform.
- [transform(input:output:)](discretefouriertransform/transform%28input_output_%29-1tsod.md): Conforms when `T` is `DSPDoubleComplex`. Computes a double-precision discrete Fourier transform.

### Initializers

- [init(previousDFT:count:direction:transformType:ofType:)](discretefouriertransform/init%28previousdft_count_direction_transformtype_oftype_%29.md): Initializes a new discrete Fourier transform structure.

## See Also

### Objects that simplify discrete Fourier transforms

- [vDSP.DFTTransformType](dfttransformtype.md): Discrete Fourier transform types.
- [vDSP.DFT](dft.md): Deprecated. A single- and double-precision discrete Fourier transform.
