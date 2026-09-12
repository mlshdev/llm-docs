> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmreadysamplebuffer/init(databuffer:formatdescription:sampleproperties:)](https://developer.apple.com/documentation/coremedia/cmreadysamplebuffer/init(databuffer:formatdescription:sampleproperties:))

# init(dataBuffer:formatDescription:sampleProperties:)

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a sample buffer with media data.

## Declaration

```swift
init(dataBuffer content: Content, formatDescription: CMFormatDescription, sampleProperties: CMSampleBuffer.SamplePropertiesCollection)
```

## Parameters

- `formatDescription`: Format description of the content.
- `sampleProperties`: Properties of samples in the sample buffer.
