> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebufferattachmentkeydefinitions/trimdurationatstart](https://developer.apple.com/documentation/coremedia/cmsamplebufferattachmentkeydefinitions/trimdurationatstart)

# trimDurationAtStart

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The duration that should be removed at the beginning of the sample buffer, after decoding.

## Declaration

```swift
static let trimDurationAtStart: CVAttachmentKeyDefinitionWithDefault<CMSampleBufferAttachmentKeyDefinitions.ShouldPropagate, CMTime>
```

<a id="discussion"></a>

## Discussion

The getter returns the default value of [zero](../cmtime/zero.md) (nothing removed) if this attachment is not present. In cases where all the output after decoding the sample buffer is to be discarded (for example, the samples are only being decoded to prime the decoder) the usual convention is to set [trimDurationAtStart](trimdurationatstart.md) to the whole duration and not to set a [trimDurationAtEnd](trimdurationatend.md) attachment.
