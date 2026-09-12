> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/sample-buffer-notifications](https://developer.apple.com/documentation/coremedia/sample-buffer-notifications)

# Sample Buffer Notifications (Swift)

**Framework:** Core Media  
**Kind:** API Collection

Notifications the system posts when processing sample buffer objects.

## Topics

### Sample Buffer Notifications

- [kCMSampleBufferNotification_DataBecameReady](kcmsamplebuffernotification_databecameready.md): Posted on a sample buffer by the [CMSampleBufferSetDataReady(\_:)](cmsamplebuffersetdataready%28__%29.md) function when the buffer becomes ready.
- [kCMSampleBufferNotification_DataFailed](kcmsamplebuffernotification_datafailed.md)
- [kCMSampleBufferNotificationParameter_OSStatus](kcmsamplebuffernotificationparameter_osstatus.md)
- [kCMSampleBufferConsumerNotification_BufferConsumed](kcmsamplebufferconsumernotification_bufferconsumed.md): Optionally posted when a sample buffer is consumed.

### Sample Buffer Conduit Notifications

- [kCMSampleBufferConduitNotification_ResetOutput](kcmsamplebufferconduitnotification_resetoutput.md): Posted on a conduit of sample buffers to request invalidation of pending output data.
- [kCMSampleBufferConduitNotification_InhibitOutputUntil](kcmsamplebufferconduitnotification_inhibitoutputuntil.md): Posted on a conduit of sample buffers to announce a coming discontinuity.
- [kCMSampleBufferConduitNotification_UpcomingOutputPTSRangeChanged](kcmsamplebufferconduitnotification_upcomingoutputptsrangechanged.md): Posted on a conduit of video sample buffers to report information about the range of upcoming output presentation timestamps.
- [kCMSampleBufferConduitNotificationParameter_UpcomingOutputPTSRangeMayOverlapQueuedOutputPTSRange](kcmsamplebufferconduitnotificationparameter_upcomingoutputptsrangemayoverlapqueuedoutputptsrange.md): Indicates that the presentation timestamps of upcoming output samples may overlap those of samples queued for output (type `CFBoolean`).
- [kCMSampleBufferConduitNotificationParameter_MinUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_minupcomingoutputpts.md): Specifies the minimum presentation timestamp of upcoming output samples (type `CFDictionary`).
- [kCMSampleBufferConduitNotificationParameter_MaxUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_maxupcomingoutputpts.md): Specifies the maximum presentation timestamp of upcoming output samples (type `CFDictionary`).
- [kCMSampleBufferConduitNotificationParameter_ResumeTag](kcmsamplebufferconduitnotificationparameter_resumetag.md): Specifies a tag to be attached to the first sample buffer following a discontinuity (type `CFNumber`).

# Sample Buffer Notifications (Objective-C)

**Framework:** Core Media  
**Kind:** API Collection

Notifications the system posts when processing sample buffer objects.

## Topics

### Sample Buffer Notifications

- [kCMSampleBufferNotification_DataBecameReady](kcmsamplebuffernotification_databecameready.md): Posted on a sample buffer by the [CMSampleBufferSetDataReady](cmsamplebuffersetdataready%28__%29.md) function when the buffer becomes ready.
- [kCMSampleBufferNotification_DataFailed](kcmsamplebuffernotification_datafailed.md)
- [kCMSampleBufferNotificationParameter_OSStatus](kcmsamplebuffernotificationparameter_osstatus.md)
- [kCMSampleBufferConsumerNotification_BufferConsumed](kcmsamplebufferconsumernotification_bufferconsumed.md): Optionally posted when a sample buffer is consumed.

### Sample Buffer Conduit Notifications

- [kCMSampleBufferConduitNotification_ResetOutput](kcmsamplebufferconduitnotification_resetoutput.md): Posted on a conduit of sample buffers to request invalidation of pending output data.
- [kCMSampleBufferConduitNotification_InhibitOutputUntil](kcmsamplebufferconduitnotification_inhibitoutputuntil.md): Posted on a conduit of sample buffers to announce a coming discontinuity.
- [kCMSampleBufferConduitNotification_UpcomingOutputPTSRangeChanged](kcmsamplebufferconduitnotification_upcomingoutputptsrangechanged.md): Posted on a conduit of video sample buffers to report information about the range of upcoming output presentation timestamps.
- [kCMSampleBufferConduitNotificationParameter_UpcomingOutputPTSRangeMayOverlapQueuedOutputPTSRange](kcmsamplebufferconduitnotificationparameter_upcomingoutputptsrangemayoverlapqueuedoutputptsrange.md): Indicates that the presentation timestamps of upcoming output samples may overlap those of samples queued for output (type `CFBoolean`).
- [kCMSampleBufferConduitNotificationParameter_MinUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_minupcomingoutputpts.md): Specifies the minimum presentation timestamp of upcoming output samples (type `CFDictionary`).
- [kCMSampleBufferConduitNotificationParameter_MaxUpcomingOutputPTS](kcmsamplebufferconduitnotificationparameter_maxupcomingoutputpts.md): Specifies the maximum presentation timestamp of upcoming output samples (type `CFDictionary`).
- [kCMSampleBufferConduitNotificationParameter_ResumeTag](kcmsamplebufferconduitnotificationparameter_resumetag.md): Specifies a tag to be attached to the first sample buffer following a discontinuity (type `CFNumber`).
