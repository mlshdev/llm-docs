> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vdsp_splitcomplexfloat/transform2d(fftsetup:width:height:source:destination:direction:)

# transform2D(fftSetup:width:height:source:destination:direction:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Performs a 2D fast Fourier transform.

## Declaration

```swift
static func transform2D(fftSetup: OpaquePointer, width: Int, height: Int, source: UnsafePointer<vDSP_SplitComplexFloat.SplitComplex>, destination: UnsafeMutablePointer<vDSP_SplitComplexFloat.SplitComplex>, direction: vDSP.FourierTransformDirection)
```
