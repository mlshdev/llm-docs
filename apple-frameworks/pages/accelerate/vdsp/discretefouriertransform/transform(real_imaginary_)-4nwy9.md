> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/discretefouriertransform/transform(real:imaginary:)-4nwy9](https://developer.apple.com/documentation/accelerate/vdsp/discretefouriertransform/transform(real:imaginary:)-4nwy9)

# transform(real:imaginary:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Returns the result of a single-precision discrete Fourier transform.

## Declaration

```swift
func transform<U>(real: U, imaginary: U) -> (real: [Float], imaginary: [Float]) where U : AccelerateBuffer, U.Element == Float
```

## Parameters

- `real`: An array that contains the real parts of the input.
- `imaginary`: An array that contains the imaginary parts of the input.

<a id="return-value"></a>

## Return Value

A tuple of two arrays that represents the real and imaginary parts of the output.

## See Also

### Performing Split-Complex Discrete Fourier Transforms

- [transform(real:imaginary:)](transform%28real_imaginary_%29-82jag.md): Conforms when `T` is `Double`. Returns the result of a double-precision discrete Fourier transform.
- [transform(inputReal:inputImaginary:outputReal:outputImaginary:)](transform%28inputreal_inputimaginary_outputreal_outputimaginary_%29-sihh.md): Conforms when `T` is `Float`. Computes a single-precision discrete Fourier transform.
- [transform(inputReal:inputImaginary:outputReal:outputImaginary:)](transform%28inputreal_inputimaginary_outputreal_outputimaginary_%29-7115x.md): Conforms when `T` is `Double`. Computes a double-precision discrete Fourier transform.
