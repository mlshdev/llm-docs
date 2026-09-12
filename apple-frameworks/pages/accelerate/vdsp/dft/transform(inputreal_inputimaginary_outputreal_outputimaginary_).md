> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/dft/transform(inputreal:inputimaginary:outputreal:outputimaginary:)](https://developer.apple.com/documentation/accelerate/vdsp/dft/transform(inputreal:inputimaginary:outputreal:outputimaginary:))

# transform(inputReal:inputImaginary:outputReal:outputImaginary:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Computes an out-of-place discrete Fourier transform.

> Use `vDSP.DiscreteFourierTransform`.

## Declaration

```swift
func transform<U, V>(inputReal: U, inputImaginary: U, outputReal: inout V, outputImaginary: inout V) where T == U.Element, U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == V.Element
```

## See Also

### Instance Methods

- [transform(inputReal:inputImaginary:)](transform%28inputreal_inputimaginary_%29.md): Deprecated. Returns a discrete Fourier transform.
