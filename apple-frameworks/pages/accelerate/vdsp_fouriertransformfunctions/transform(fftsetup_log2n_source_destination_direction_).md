> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_fouriertransformfunctions/transform(fftsetup:log2n:source:destination:direction:)](https://developer.apple.com/documentation/accelerate/vdsp_fouriertransformfunctions/transform(fftsetup:log2n:source:destination:direction:))

# transform(fftSetup:log2n:source:destination:direction:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

## Declaration

```swift
static func transform(fftSetup: OpaquePointer, log2n: vDSP_Length, source: UnsafePointer<Self.SplitComplex>, destination: UnsafeMutablePointer<Self.SplitComplex>, direction: vDSP.FourierTransformDirection)
```
