> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmsamplebufferconduitnotificationparameter_upcomingoutputptsrangemayoverlapqueuedoutputptsrange](https://developer.apple.com/documentation/coremedia/kcmsamplebufferconduitnotificationparameter_upcomingoutputptsrangemayoverlapqueuedoutputptsrange)

# kCMSampleBufferConduitNotificationParameter_UpcomingOutputPTSRangeMayOverlapQueuedOutputPTSRange (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Indicates that the presentation timestamps of upcoming output samples may overlap those of samples queued for output (type `CFBoolean`).

## Declaration

```swift
let kCMSampleBufferConduitNotificationParameter_UpcomingOutputPTSRangeMayOverlapQueuedOutputPTSRange: CFString
```

<a id="Discussion"></a>

## Discussion

This key is always present in the `userInfo` dictionary for the [kCMSampleBufferConduitNotification_UpcomingOutputPTSRangeChanged](kcmsamplebufferconduitnotification_upcomingoutputptsrangechanged.md) notification. If its value is [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), there is a possibility that upcoming frames may have earlier presentation timestamps than the frames previously provided to the conduit, and the dictionary also contains one or both of the [kCMSampleBufferConduitNotificationParameter_MinUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_minupcomingoutputpts.md) or [kCMSampleBufferConduitNotificationParameter_MaxUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_maxupcomingoutputpts.md) keys providing further information. If its value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md), there is no such possibility.

## See Also

### Sample Buffer Conduit Notifications

- [kCMSampleBufferConduitNotification_ResetOutput](kcmsamplebufferconduitnotification_resetoutput.md): Posted on a conduit of sample buffers to request invalidation of pending output data.
- [kCMSampleBufferConduitNotification_InhibitOutputUntil](kcmsamplebufferconduitnotification_inhibitoutputuntil.md): Posted on a conduit of sample buffers to announce a coming discontinuity.
- [kCMSampleBufferConduitNotification_UpcomingOutputPTSRangeChanged](kcmsamplebufferconduitnotification_upcomingoutputptsrangechanged.md): Posted on a conduit of video sample buffers to report information about the range of upcoming output presentation timestamps.
- [kCMSampleBufferConduitNotificationParameter_MinUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_minupcomingoutputpts.md): Specifies the minimum presentation timestamp of upcoming output samples (type `CFDictionary`).
- [kCMSampleBufferConduitNotificationParameter_MaxUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_maxupcomingoutputpts.md): Specifies the maximum presentation timestamp of upcoming output samples (type `CFDictionary`).
- [kCMSampleBufferConduitNotificationParameter_ResumeTag](kcmsamplebufferconduitnotificationparameter_resumetag.md): Specifies a tag to be attached to the first sample buffer following a discontinuity (type `CFNumber`).

# kCMSampleBufferConduitNotificationParameter_UpcomingOutputPTSRangeMayOverlapQueuedOutputPTSRange (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Indicates that the presentation timestamps of upcoming output samples may overlap those of samples queued for output (type `CFBoolean`).

## Declaration

```objectivec
extern CFStringRef const kCMSampleBufferConduitNotificationParameter_UpcomingOutputPTSRangeMayOverlapQueuedOutputPTSRange;
```

<a id="Discussion"></a>

## Discussion

This key is always present in the `userInfo` dictionary for the [kCMSampleBufferConduitNotification_UpcomingOutputPTSRangeChanged](kcmsamplebufferconduitnotification_upcomingoutputptsrangechanged.md) notification. If its value is [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), there is a possibility that upcoming frames may have earlier presentation timestamps than the frames previously provided to the conduit, and the dictionary also contains one or both of the [kCMSampleBufferConduitNotificationParameter_MinUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_minupcomingoutputpts.md) or [kCMSampleBufferConduitNotificationParameter_MaxUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_maxupcomingoutputpts.md) keys providing further information. If its value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md), there is no such possibility.

## See Also

### Sample Buffer Conduit Notifications

- [kCMSampleBufferConduitNotification_ResetOutput](kcmsamplebufferconduitnotification_resetoutput.md): Posted on a conduit of sample buffers to request invalidation of pending output data.
- [kCMSampleBufferConduitNotification_InhibitOutputUntil](kcmsamplebufferconduitnotification_inhibitoutputuntil.md): Posted on a conduit of sample buffers to announce a coming discontinuity.
- [kCMSampleBufferConduitNotification_UpcomingOutputPTSRangeChanged](kcmsamplebufferconduitnotification_upcomingoutputptsrangechanged.md): Posted on a conduit of video sample buffers to report information about the range of upcoming output presentation timestamps.
- [kCMSampleBufferConduitNotificationParameter_MinUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_minupcomingoutputpts.md): Specifies the minimum presentation timestamp of upcoming output samples (type `CFDictionary`).
- [kCMSampleBufferConduitNotificationParameter_MaxUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_maxupcomingoutputpts.md): Specifies the maximum presentation timestamp of upcoming output samples (type `CFDictionary`).
- [kCMSampleBufferConduitNotificationParameter_ResumeTag](kcmsamplebufferconduitnotificationparameter_resumetag.md): Specifies a tag to be attached to the first sample buffer following a discontinuity (type `CFNumber`).
