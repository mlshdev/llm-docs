> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/fft2d/transform(input:output:direction:)](https://developer.apple.com/documentation/accelerate/vdsp/fft2d/transform(input:output:direction:))

# transform(input:output:direction:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Computes an out-of-place 2D fast Fourier transform.

## Declaration

```swift
override func transform<T>(input: T, output: inout T, direction: vDSP.FourierTransformDirection) where T : vDSP_FourierTransformable
```
