> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebufferattachmentkeydefinitions/permanentemptymedia](https://developer.apple.com/documentation/coremedia/cmsamplebufferattachmentkeydefinitions/permanentemptymedia)

# permanentEmptyMedia

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Marks the end of the sequence of samples.

## Declaration

```swift
static let permanentEmptyMedia: CVAttachmentKeyDefinitionWithDefault<CMSampleBufferAttachmentKeyDefinitions.ShouldPropagate, Bool>
```

<a id="discussion"></a>

## Discussion

Marker sample buffers with this attachment in addition to [emptyMedia](emptymedia.md) are used to indicate that no further samples are expected. The getter returns the default value of false if this attachment is not present.
