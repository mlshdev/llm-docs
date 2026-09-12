> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebufferattachmentkeydefinitions/resumeoutput](https://developer.apple.com/documentation/coremedia/cmsamplebufferattachmentkeydefinitions/resumeoutput)

# resumeOutput

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

If present, indicates that output should be resumed following a discontinuity.

## Declaration

```swift
static let resumeOutput: CVAttachmentKeyDefinitionWithDefault<CMSampleBufferAttachmentKeyDefinitions.ShouldPropagate, Bool>
```

<a id="discussion"></a>

## Discussion

This attachment is used at run time to request that a decode pipeline resume producing output after a discontinuity announced using the [kCMSampleBufferConduitNotification_InhibitOutputUntil](../kcmsamplebufferconduitnotification_inhibitoutputuntil.md) notification. The getter returns the default value of false if this attachment is not present.
