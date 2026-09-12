> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebufferattachmentkeydefinitions/droppedframereason](https://developer.apple.com/documentation/coremedia/cmsamplebufferattachmentkeydefinitions/droppedframereason)

# droppedFrameReason

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Indicates the reason the current video frame was dropped.

## Declaration

```swift
static let droppedFrameReason: CVAttachmentKeyDefinition<CMSampleBufferAttachmentKeyDefinitions.ShouldPropagate, CMDroppedFrameReason>
```

<a id="discussion"></a>

## Discussion

Sample buffers with this attachment contain no image or data buffer. They mark a dropped video frame. This attachment identifies the reason the frame was dropped.
