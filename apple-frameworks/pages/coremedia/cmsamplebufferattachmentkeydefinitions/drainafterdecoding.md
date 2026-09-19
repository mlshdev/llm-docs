> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmsamplebufferattachmentkeydefinitions/drainafterdecoding

# drainAfterDecoding

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Indicates whether the sample buffer should be drained after decoding.

## Declaration

```swift
static let drainAfterDecoding: CVAttachmentKeyDefinitionWithDefault<CMSampleBufferAttachmentKeyDefinitions.ShouldPropagate, Bool>
```

<a id="discussion"></a>

## Discussion

This attachment is used at run time to indicate that a sample precedes a break in decode sequence and that it is appropriate to drain the decoder after decoding this sample. This attachment is not written to media files. The getter returns the default value of false if this attachment is not present.
