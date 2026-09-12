> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebufferattachmentkeydefinitions/displayemptymediaimmediately](https://developer.apple.com/documentation/coremedia/cmsamplebufferattachmentkeydefinitions/displayemptymediaimmediately)

# displayEmptyMediaImmediately

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Indicates that the empty marker should be dequeued immediately regardless of its timestamp.

## Declaration

```swift
static let displayEmptyMediaImmediately: CVAttachmentKeyDefinitionWithDefault<CMSampleBufferAttachmentKeyDefinitions.ShouldPropagate, Bool>
```

<a id="discussion"></a>

## Discussion

Marker sample buffers with this attachment in addition to [emptyMedia](emptymedia.md) are used to tell that the empty sample buffer should be dequeued immediately regardless of its timestamp. This attachment should only be used with sample buffers with the [emptyMedia](emptymedia.md) attachment. The getter returns the default value of false if this attachment is not present.
