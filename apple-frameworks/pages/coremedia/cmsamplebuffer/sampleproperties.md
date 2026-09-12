> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/sampleproperties](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/sampleproperties)

# CMSampleBuffer.SampleProperties

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Information about a sample in the sample buffer.

## Declaration

```swift
struct SampleProperties
```

<a id="overview"></a>

## Overview

Each sample buffer holds a [CMSampleBuffer.SamplePropertiesCollection](samplepropertiescollection.md) which provides this sample information for each sample in the sample buffer.

## Topics

### Initializers

- [init(size:timing:attachments:)](sampleproperties/init%28size_timing_attachments_%29.md)

### Instance Properties

- [attachments](sampleproperties/attachments.md): Attachments of the sample.
- [size](sampleproperties/size.md): Size in bytes of the sample.
- [timing](sampleproperties/timing.md): Timing information of the sample.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
