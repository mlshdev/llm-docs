> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmreadysamplebuffer/samplecount](https://developer.apple.com/documentation/coremedia/cmreadysamplebuffer/samplecount)

# sampleCount

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Number of samples in the sample buffer.

## Declaration

```swift
var sampleCount: Int { get }
```

<a id="discussion"></a>

## Discussion

This value is always equal to `sampleProperties.count`. This value is 0 when `Content` is [CMSampleBuffer.DynamicContent](../cmsamplebuffer/dynamiccontent.md) and [contentType](contenttype.md) is [CMSampleBuffer.ContentType.markerOnly](../cmsamplebuffer/contenttype-swift.enum/markeronly.md). For all other sample buffer content, this value is greater than 0.
