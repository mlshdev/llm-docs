> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/timingpersample](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/timingpersample)

# CMSampleBuffer.TimingPerSample

**Framework:** Core Media  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Specifies timing of each sample in a sample buffer.

## Declaration

```swift
enum TimingPerSample
```

## Topics

### Enumeration Cases

- [CMSampleBuffer.TimingPerSample.distinct(\_:)](timingpersample/distinct%28__%29.md): Each sample has distinct timing.
- [CMSampleBuffer.TimingPerSample.sequential(startingAt:)](timingpersample/sequential%28startingat_%29.md): All samples are adjacent to each other and have the same duration.

### Type Methods

- [sequential(presentationTimeOfFirstSample:uniformDuration:decodeTimeOfFirstSample:)](timingpersample/sequential%28presentationtimeoffirstsample_uniformduration_decodetimeoffirstsample_%29.md): All samples are adjacent to each other and have the same duration.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
