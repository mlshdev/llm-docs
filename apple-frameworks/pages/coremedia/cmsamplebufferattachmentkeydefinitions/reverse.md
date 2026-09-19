> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmsamplebufferattachmentkeydefinitions/reverse

# reverse

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Indicates that the decoded contents of the sample buffer should be reversed.

## Declaration

```swift
static let reverse: CVAttachmentKeyDefinitionWithDefault<CMSampleBufferAttachmentKeyDefinitions.ShouldPropagate, Bool>
```

<a id="discussion"></a>

## Discussion

If this attachment is not present, the sample buffer should be played forwards as usual. Reversal occurs after trimming and speed multipliers. The getter returns the default value of false if this attachment is not present.
