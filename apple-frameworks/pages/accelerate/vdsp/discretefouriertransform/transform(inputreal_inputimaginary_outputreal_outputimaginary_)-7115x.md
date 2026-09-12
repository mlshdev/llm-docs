> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/discretefouriertransform/transform(inputreal:inputimaginary:outputreal:outputimaginary:)-7115x](https://developer.apple.com/documentation/accelerate/vdsp/discretefouriertransform/transform(inputreal:inputimaginary:outputreal:outputimaginary:)-7115x)

# transform(inputReal:inputImaginary:outputReal:outputImaginary:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Computes a double-precision discrete Fourier transform.

## Declaration

```swift
func transform<U, V>(inputReal: U, inputImaginary: U, outputReal: inout V, outputImaginary: inout V) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Double, V.Element == Double
```

## Parameters

- `inputReal`: An array that contains the real parts of the input.
- `inputImaginary`: An array that contains the imaginary parts of the input.
- `outputReal`: An array that contains the real parts of the output.
- `outputImaginary`: An array that contains the imaginary parts of the output.

## See Also

### Performing Split-Complex Discrete Fourier Transforms

- [transform(real:imaginary:)](transform%28real_imaginary_%29-4nwy9.md): Conforms when `T` is `Float`. Returns the result of a single-precision discrete Fourier transform.
- [transform(real:imaginary:)](transform%28real_imaginary_%29-82jag.md): Conforms when `T` is `Double`. Returns the result of a double-precision discrete Fourier transform.
- [transform(inputReal:inputImaginary:outputReal:outputImaginary:)](transform%28inputreal_inputimaginary_outputreal_outputimaginary_%29-sihh.md): Conforms when `T` is `Float`. Computes a single-precision discrete Fourier transform.
