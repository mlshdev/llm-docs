> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct/hevctemporalinfo](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct/hevctemporalinfo)

# hevcTemporalInfo

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates a video frame’s level within a hierarchical frame dependency structure.

## Declaration

```swift
var hevcTemporalInfo: CMSampleBuffer.HEVCTemporalInfo? { get set }
```

<a id="discussion"></a>

## Discussion

When present, the temporal level attachments among a group of video frames provide information about where inter-frame dependencies may and may not exist.

This attachment is read from and written to media files.
