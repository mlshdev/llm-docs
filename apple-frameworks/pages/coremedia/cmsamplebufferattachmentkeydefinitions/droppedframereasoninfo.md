> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebufferattachmentkeydefinitions/droppedframereasoninfo](https://developer.apple.com/documentation/coremedia/cmsamplebufferattachmentkeydefinitions/droppedframereasoninfo)

# droppedFrameReasonInfo

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Indicates additional information regarding the dropped video frame.

## Declaration

```swift
static let droppedFrameReasonInfo: CVAttachmentKeyDefinition<CMSampleBufferAttachmentKeyDefinitions.ShouldPropagate, CMDroppedFrameReason.Info>
```

<a id="discussion"></a>

## Discussion

Sample buffers with this attachment contain no image or data buffer. They mark a dropped video frame. If present, this attachment provides additional information about the reason described by the [droppedFrameReason](droppedframereason.md) key.
