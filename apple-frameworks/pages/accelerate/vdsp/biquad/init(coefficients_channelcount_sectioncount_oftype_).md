> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/biquad/init(coefficients:channelcount:sectioncount:oftype:)](https://developer.apple.com/documentation/accelerate/vdsp/biquad/init(coefficients:channelcount:sectioncount:oftype:))

# init(coefficients:channelCount:sectionCount:ofType:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Creates a new single-channel or multichannel cascaded biquad IIR structure.

## Declaration

```swift
init?(coefficients: [Double], channelCount: vDSP_Length, sectionCount: vDSP_Length, ofType: T.Type)
```
