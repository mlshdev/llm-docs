> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebufferattachmentkeydefinitions/trimdurationatend](https://developer.apple.com/documentation/coremedia/cmsamplebufferattachmentkeydefinitions/trimdurationatend)

# trimDurationAtEnd

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The duration that should be removed at the end of the sample buffer, after decoding.

## Declaration

```swift
static let trimDurationAtEnd: CVAttachmentKeyDefinitionWithDefault<CMSampleBufferAttachmentKeyDefinitions.ShouldPropagate, CMTime>
```

<a id="discussion"></a>

## Discussion

The getter returns the default value of [zero](../cmtime/zero.md) (nothing removed) if this attachment is not present.
