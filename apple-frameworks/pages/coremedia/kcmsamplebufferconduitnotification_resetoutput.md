> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmsamplebufferconduitnotification_resetoutput](https://developer.apple.com/documentation/coremedia/kcmsamplebufferconduitnotification_resetoutput)

# kCMSampleBufferConduitNotification_ResetOutput (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Posted on a conduit of sample buffers to request invalidation of pending output data.

## Declaration

```swift
let kCMSampleBufferConduitNotification_ResetOutput: CFString
```

## See Also

### Sample Buffer Conduit Notifications

- [kCMSampleBufferConduitNotification_InhibitOutputUntil](kcmsamplebufferconduitnotification_inhibitoutputuntil.md): Posted on a conduit of sample buffers to announce a coming discontinuity.
- [kCMSampleBufferConduitNotification_UpcomingOutputPTSRangeChanged](kcmsamplebufferconduitnotification_upcomingoutputptsrangechanged.md): Posted on a conduit of video sample buffers to report information about the range of upcoming output presentation timestamps.
- [kCMSampleBufferConduitNotificationParameter_UpcomingOutputPTSRangeMayOverlapQueuedOutputPTSRange](kcmsamplebufferconduitnotificationparameter_upcomingoutputptsrangemayoverlapqueuedoutputptsrange.md): Indicates that the presentation timestamps of upcoming output samples may overlap those of samples queued for output (type `CFBoolean`).
- [kCMSampleBufferConduitNotificationParameter_MinUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_minupcomingoutputpts.md): Specifies the minimum presentation timestamp of upcoming output samples (type `CFDictionary`).
- [kCMSampleBufferConduitNotificationParameter_MaxUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_maxupcomingoutputpts.md): Specifies the maximum presentation timestamp of upcoming output samples (type `CFDictionary`).
- [kCMSampleBufferConduitNotificationParameter_ResumeTag](kcmsamplebufferconduitnotificationparameter_resumetag.md): Specifies a tag to be attached to the first sample buffer following a discontinuity (type `CFNumber`).

# kCMSampleBufferConduitNotification_ResetOutput (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Posted on a conduit of sample buffers to request invalidation of pending output data.

## Declaration

```objectivec
extern CFStringRef const kCMSampleBufferConduitNotification_ResetOutput;
```

## See Also

### Sample Buffer Conduit Notifications

- [kCMSampleBufferConduitNotification_InhibitOutputUntil](kcmsamplebufferconduitnotification_inhibitoutputuntil.md): Posted on a conduit of sample buffers to announce a coming discontinuity.
- [kCMSampleBufferConduitNotification_UpcomingOutputPTSRangeChanged](kcmsamplebufferconduitnotification_upcomingoutputptsrangechanged.md): Posted on a conduit of video sample buffers to report information about the range of upcoming output presentation timestamps.
- [kCMSampleBufferConduitNotificationParameter_UpcomingOutputPTSRangeMayOverlapQueuedOutputPTSRange](kcmsamplebufferconduitnotificationparameter_upcomingoutputptsrangemayoverlapqueuedoutputptsrange.md): Indicates that the presentation timestamps of upcoming output samples may overlap those of samples queued for output (type `CFBoolean`).
- [kCMSampleBufferConduitNotificationParameter_MinUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_minupcomingoutputpts.md): Specifies the minimum presentation timestamp of upcoming output samples (type `CFDictionary`).
- [kCMSampleBufferConduitNotificationParameter_MaxUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_maxupcomingoutputpts.md): Specifies the maximum presentation timestamp of upcoming output samples (type `CFDictionary`).
- [kCMSampleBufferConduitNotificationParameter_ResumeTag](kcmsamplebufferconduitnotificationparameter_resumetag.md): Specifies a tag to be attached to the first sample buffer following a discontinuity (type `CFNumber`).
