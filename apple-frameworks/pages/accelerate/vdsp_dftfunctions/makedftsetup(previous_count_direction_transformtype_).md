> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vdsp_dftfunctions/makedftsetup(previous:count:direction:transformtype:)

# makeDFTSetup(previous:count:direction:transformType:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

> Use `vDSP.DiscreteFourierTransform`.

## Declaration

```swift
static func makeDFTSetup<T>(previous: vDSP.DFT<T>?, count: Int, direction: vDSP.FourierTransformDirection, transformType: vDSP.DFTTransformType) -> OpaquePointer? where T : vDSP_FloatingPointDiscreteFourierTransformable
```
