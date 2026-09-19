> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vdsp/dft/init(previous:count:direction:transformtype:oftype:)

# init(previous:count:direction:transformType:ofType:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Initializes a new discrete Fourier transform instance.

> Use `vDSP.DiscreteFourierTransform`.

## Declaration

```swift
init?(previous: vDSP.DFT<T>? = nil, count: Int, direction: vDSP.FourierTransformDirection, transformType: vDSP.DFTTransformType, ofType: T.Type)
```
