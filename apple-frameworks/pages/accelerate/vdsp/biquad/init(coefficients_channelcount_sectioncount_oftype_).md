> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vdsp/biquad/init(coefficients:channelcount:sectioncount:oftype:)

# init(coefficients:channelCount:sectionCount:ofType:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Creates a new single-channel or multichannel cascaded biquad IIR structure.

## Declaration

```swift
init?(coefficients: [Double], channelCount: vDSP_Length, sectionCount: vDSP_Length, ofType: T.Type)
```
