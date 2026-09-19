> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vdsp_fouriertransformfunctions/transform2d(fftsetup:width:height:source:destination:direction:)

# transform2D(fftSetup:width:height:source:destination:direction:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

## Declaration

```swift
static func transform2D(fftSetup: OpaquePointer, width: Int, height: Int, source: UnsafePointer<Self.SplitComplex>, destination: UnsafeMutablePointer<Self.SplitComplex>, direction: vDSP.FourierTransformDirection)
```
