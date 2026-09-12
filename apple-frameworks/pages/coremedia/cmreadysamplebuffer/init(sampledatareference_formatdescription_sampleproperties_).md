> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmreadysamplebuffer/init(sampledatareference:formatdescription:sampleproperties:)](https://developer.apple.com/documentation/coremedia/cmreadysamplebuffer/init(sampledatareference:formatdescription:sampleproperties:))

# init(sampleDataReference:formatDescription:sampleProperties:)

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a sample buffer with references to sample data.

## Declaration

```swift
init(sampleDataReference content: Content, formatDescription: CMFormatDescription, sampleProperties: CMSampleBuffer.SamplePropertiesCollection)
```

## Parameters

- `formatDescription`: Format description of the content.
- `sampleProperties`: Properties of samples in the sample buffer.
