> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebufferattachmentkeydefinitions/forcekeyframe](https://developer.apple.com/documentation/coremedia/cmsamplebufferattachmentkeydefinitions/forcekeyframe)

# forceKeyFrame

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Indicates that the current or next video sample buffer should be forced to be encoded as a key frame.

## Declaration

```swift
static let forceKeyFrame: CVAttachmentKeyDefinitionWithDefault<CMSampleBufferAttachmentKeyDefinitions.ShouldPropagate, Bool>
```

<a id="discussion"></a>

## Discussion

If this attachment is `true` on a sample buffer with a video frame, that video frame will be forced to become a key frame. If the sample buffer for which this is `true` does not have a valid video frame, the next sample buffer processed that contains a valid video frame will be encoded as a key frame. The getter returns the default value of false if this attachment is not present.

Unless the origin and destination of a sample buffer is known, the general recommended practice is to synthesize an empty sample buffer with this attachment alone and insert it into the sample buffer stream ahead of the concrete sample buffer rather than setting this attachment on the concrete sample buffer itself.
