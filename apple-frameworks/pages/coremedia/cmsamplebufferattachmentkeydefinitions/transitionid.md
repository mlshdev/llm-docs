> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebufferattachmentkeydefinitions/transitionid](https://developer.apple.com/documentation/coremedia/cmsamplebufferattachmentkeydefinitions/transitionid)

# transitionID

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Marks a transition from one source of buffers to another.

## Declaration

```swift
static let transitionID: CVAttachmentKeyDefinition<CMSampleBufferAttachmentKeyDefinitions.ShouldNotPropagate, Int>
```

<a id="discussion"></a>

## Discussion

During gapless playback of a list of songs, this attachment marks the first buffer from the next song. If this attachment is on a buffer containing no samples, the first following buffer that contains samples is the buffer that contains the first samples from the next song. This transition identifier should be unique within a playlist, so each transition in a playlist is uniquely identifiable. A counter that increments with each transition is a simple example.
