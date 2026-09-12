> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/fft/transform(input:output:direction:)](https://developer.apple.com/documentation/accelerate/vdsp/fft/transform(input:output:direction:))

# transform(input:output:direction:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Computes an out-of-place fast Fourier transform.

## Declaration

```swift
func transform<T>(input: T, output: inout T, direction: vDSP.FourierTransformDirection) where T : vDSP_FourierTransformable
```

## See Also

### Instance Methods

- [forward(input:output:)](forward%28input_output_%29.md): Computes an out-of-place forward fast Fourier transform.
- [inverse(input:output:)](inverse%28input_output_%29.md): Computes an out-of-place inverse fast Fourier transform.
