> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/dft/transform(inputreal:inputimaginary:)](https://developer.apple.com/documentation/accelerate/vdsp/dft/transform(inputreal:inputimaginary:))

# transform(inputReal:inputImaginary:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns a discrete Fourier transform.

> Use `vDSP.DiscreteFourierTransform`.

## Declaration

```swift
func transform<U>(inputReal: U, inputImaginary: U) -> (real: [T], imaginary: [T]) where T == U.Element, U : AccelerateBuffer
```

## See Also

### Instance Methods

- [transform(inputReal:inputImaginary:outputReal:outputImaginary:)](transform%28inputreal_inputimaginary_outputreal_outputimaginary_%29.md): Deprecated. Computes an out-of-place discrete Fourier transform.
