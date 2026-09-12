> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_splitcomplexfloat/transform(fftsetup:log2n:source:destination:direction:)](https://developer.apple.com/documentation/accelerate/vdsp_splitcomplexfloat/transform(fftsetup:log2n:source:destination:direction:))

# transform(fftSetup:log2n:source:destination:direction:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Performs a 1D fast Fourier transform.

## Declaration

```swift
static func transform(fftSetup: OpaquePointer, log2n: vDSP_Length, source: UnsafePointer<vDSP_SplitComplexFloat.SplitComplex>, destination: UnsafeMutablePointer<vDSP_SplitComplexFloat.SplitComplex>, direction: vDSP.FourierTransformDirection)
```
