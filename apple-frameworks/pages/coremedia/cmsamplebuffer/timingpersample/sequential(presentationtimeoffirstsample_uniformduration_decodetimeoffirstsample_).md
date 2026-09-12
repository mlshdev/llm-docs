> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/timingpersample/sequential(presentationtimeoffirstsample:uniformduration:decodetimeoffirstsample:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/timingpersample/sequential(presentationtimeoffirstsample:uniformduration:decodetimeoffirstsample:))

# sequential(presentationTimeOfFirstSample:uniformDuration:decodeTimeOfFirstSample:)

**Framework:** Core Media  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

All samples are adjacent to each other and have the same duration.

## Declaration

```swift
static func sequential(presentationTimeOfFirstSample: CMTime, uniformDuration: CMTime, decodeTimeOfFirstSample: CMTime = .invalid) -> CMSampleBuffer.TimingPerSample
```

## Parameters

- `presentationTimeOfFirstSample`: Time at which the first sample is presented.
- `uniformDuration`: Duration shared by ever sample in the sample buffer.
- `decodeTimeOfFirstSample`: Time at which the first sample is decoded. Samples must have the same decode and presentation order.
