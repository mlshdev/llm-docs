> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vdsp/vectorizabledouble/applymulti(setup:pinputs:poutputs:count:)

# applyMulti(setup:pInputs:pOutputs:count:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

## Declaration

```swift
static func applyMulti(setup: vDSP_biquadm_SetupD, pInputs: UnsafeMutablePointer<UnsafePointer<vDSP.VectorizableDouble.Scalar>>, pOutputs: UnsafeMutablePointer<UnsafeMutablePointer<vDSP.VectorizableDouble.Scalar>>, count: vDSP_Length)
```
