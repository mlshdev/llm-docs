> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmsamplebufferconduitnotification_inhibitoutputuntil](https://developer.apple.com/documentation/coremedia/kcmsamplebufferconduitnotification_inhibitoutputuntil)

# kCMSampleBufferConduitNotification_InhibitOutputUntil (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Posted on a conduit of sample buffers to announce a coming discontinuity.

## Declaration

```swift
let kCMSampleBufferConduitNotification_InhibitOutputUntil: CFString
```

<a id="Discussion"></a>

## Discussion

A conduit of sample buffers (for example, a buffer queue; see [CMBufferQueue](cmbufferqueue-api.md)) posts this notification when a discontinuity in decoding occurs. The `userInfo` dictionary for this notification contains the [kCMSampleBufferConduitNotificationParameter_ResumeTag](kcmsamplebufferconduitnotificationparameter_resumetag.md) key, whose value specifies a tag that indicates when output should resume.

The first sample buffer following the discontinuity should have a [kCMSampleBufferAttachmentKey_ResumeOutput](kcmsamplebufferattachmentkey_resumeoutput.md) attachment whose value is the same number as the resume tag announced in this notification. The consumer should discard output data until it receives this sample buffer. If multiple notifications of this type are received, the last one indicates the resume tag.

## See Also

### Sample Buffer Conduit Notifications

- [kCMSampleBufferConduitNotification_ResetOutput](kcmsamplebufferconduitnotification_resetoutput.md): Posted on a conduit of sample buffers to request invalidation of pending output data.
- [kCMSampleBufferConduitNotification_UpcomingOutputPTSRangeChanged](kcmsamplebufferconduitnotification_upcomingoutputptsrangechanged.md): Posted on a conduit of video sample buffers to report information about the range of upcoming output presentation timestamps.
- [kCMSampleBufferConduitNotificationParameter_UpcomingOutputPTSRangeMayOverlapQueuedOutputPTSRange](kcmsamplebufferconduitnotificationparameter_upcomingoutputptsrangemayoverlapqueuedoutputptsrange.md): Indicates that the presentation timestamps of upcoming output samples may overlap those of samples queued for output (type `CFBoolean`).
- [kCMSampleBufferConduitNotificationParameter_MinUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_minupcomingoutputpts.md): Specifies the minimum presentation timestamp of upcoming output samples (type `CFDictionary`).
- [kCMSampleBufferConduitNotificationParameter_MaxUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_maxupcomingoutputpts.md): Specifies the maximum presentation timestamp of upcoming output samples (type `CFDictionary`).
- [kCMSampleBufferConduitNotificationParameter_ResumeTag](kcmsamplebufferconduitnotificationparameter_resumetag.md): Specifies a tag to be attached to the first sample buffer following a discontinuity (type `CFNumber`).

# kCMSampleBufferConduitNotification_InhibitOutputUntil (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Posted on a conduit of sample buffers to announce a coming discontinuity.

## Declaration

```objectivec
extern CFStringRef const kCMSampleBufferConduitNotification_InhibitOutputUntil;
```

<a id="Discussion"></a>

## Discussion

A conduit of sample buffers (for example, a buffer queue; see [CMBufferQueue](cmbufferqueue-api.md)) posts this notification when a discontinuity in decoding occurs. The `userInfo` dictionary for this notification contains the [kCMSampleBufferConduitNotificationParameter_ResumeTag](kcmsamplebufferconduitnotificationparameter_resumetag.md) key, whose value specifies a tag that indicates when output should resume.

The first sample buffer following the discontinuity should have a [kCMSampleBufferAttachmentKey_ResumeOutput](kcmsamplebufferattachmentkey_resumeoutput.md) attachment whose value is the same number as the resume tag announced in this notification. The consumer should discard output data until it receives this sample buffer. If multiple notifications of this type are received, the last one indicates the resume tag.

## See Also

### Sample Buffer Conduit Notifications

- [kCMSampleBufferConduitNotification_ResetOutput](kcmsamplebufferconduitnotification_resetoutput.md): Posted on a conduit of sample buffers to request invalidation of pending output data.
- [kCMSampleBufferConduitNotification_UpcomingOutputPTSRangeChanged](kcmsamplebufferconduitnotification_upcomingoutputptsrangechanged.md): Posted on a conduit of video sample buffers to report information about the range of upcoming output presentation timestamps.
- [kCMSampleBufferConduitNotificationParameter_UpcomingOutputPTSRangeMayOverlapQueuedOutputPTSRange](kcmsamplebufferconduitnotificationparameter_upcomingoutputptsrangemayoverlapqueuedoutputptsrange.md): Indicates that the presentation timestamps of upcoming output samples may overlap those of samples queued for output (type `CFBoolean`).
- [kCMSampleBufferConduitNotificationParameter_MinUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_minupcomingoutputpts.md): Specifies the minimum presentation timestamp of upcoming output samples (type `CFDictionary`).
- [kCMSampleBufferConduitNotificationParameter_MaxUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_maxupcomingoutputpts.md): Specifies the maximum presentation timestamp of upcoming output samples (type `CFDictionary`).
- [kCMSampleBufferConduitNotificationParameter_ResumeTag](kcmsamplebufferconduitnotificationparameter_resumetag.md): Specifies a tag to be attached to the first sample buffer following a discontinuity (type `CFNumber`).
