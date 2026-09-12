> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebufferattachmentkeydefinitions/gradualdecoderrefresh](https://developer.apple.com/documentation/coremedia/cmsamplebufferattachmentkeydefinitions/gradualdecoderrefresh)

# gradualDecoderRefresh

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Indicates the decoder refresh count.

## Declaration

```swift
static let gradualDecoderRefresh: CVAttachmentKeyDefinition<CMSampleBufferAttachmentKeyDefinitions.ShouldPropagate, Int16>
```

<a id="discussion"></a>

## Discussion

Sample buffers with this attachment may be used to identify the audio decoder refresh count.
