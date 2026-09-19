> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vdsp/vectorizabledouble/transform(dftsetup:inputreal:inputimaginary:outputreal:outputimaginary:)

# transform(dftSetup:inputReal:inputImaginary:outputReal:outputImaginary:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

> Use `vDSP.DiscreteFourierTransform`.

## Declaration

```swift
static func transform<U, V>(dftSetup: OpaquePointer, inputReal: U, inputImaginary: U, outputReal: inout V, outputImaginary: inout V) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Double, V.Element == Double
```
