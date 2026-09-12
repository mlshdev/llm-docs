> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_splitcomplexfloat/makefftsetup(log2n:radix:)](https://developer.apple.com/documentation/accelerate/vdsp_splitcomplexfloat/makefftsetup(log2n:radix:))

# makeFFTSetup(log2n:radix:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns a setup structure to perform a fast Fourier transform.

## Declaration

```swift
static func makeFFTSetup(log2n: vDSP_Length, radix: vDSP.Radix) -> OpaquePointer?
```
