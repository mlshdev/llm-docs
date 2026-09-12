> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebufferattachmentkeydefinitions/filldiscontinuitieswithsilence](https://developer.apple.com/documentation/coremedia/cmsamplebufferattachmentkeydefinitions/filldiscontinuitieswithsilence)

# fillDiscontinuitiesWithSilence

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Fill the difference between discontiguous sample buffers with silence.

## Declaration

```swift
static let fillDiscontinuitiesWithSilence: CVAttachmentKeyDefinitionWithDefault<CMSampleBufferAttachmentKeyDefinitions.ShouldPropagate, Bool>
```

<a id="discussion"></a>

## Discussion

If a sample buffer enters a buffer queue and the presentation time stamp between the previous buffer and the buffer with this attachment are discontiguous, handle the discontinuity by generating silence for the time difference. The getter returns the default value of false if this attachment is not present.
