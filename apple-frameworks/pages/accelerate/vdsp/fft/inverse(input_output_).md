> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/fft/inverse(input:output:)](https://developer.apple.com/documentation/accelerate/vdsp/fft/inverse(input:output:))

# inverse(input:output:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Computes an out-of-place inverse fast Fourier transform.

## Declaration

```swift
func inverse(input: DSPSplitComplex, output: inout DSPSplitComplex)
```

## See Also

### Instance Methods

- [forward(input:output:)](forward%28input_output_%29.md): Computes an out-of-place forward fast Fourier transform.
- [transform(input:output:direction:)](transform%28input_output_direction_%29.md): Computes an out-of-place fast Fourier transform.
