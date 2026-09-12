> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmsamplebuffernotification_databecameready](https://developer.apple.com/documentation/coremedia/kcmsamplebuffernotification_databecameready)

# kCMSampleBufferNotification_DataBecameReady (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Posted on a sample buffer by the [CMSampleBufferSetDataReady(\_:)](cmsamplebuffersetdataready%28__%29.md) function when the buffer becomes ready.

## Declaration

```swift
let kCMSampleBufferNotification_DataBecameReady: CFString
```

## See Also

### Sample Buffer Notifications

- [kCMSampleBufferNotification_DataFailed](kcmsamplebuffernotification_datafailed.md)
- [kCMSampleBufferNotificationParameter_OSStatus](kcmsamplebuffernotificationparameter_osstatus.md)
- [kCMSampleBufferConsumerNotification_BufferConsumed](kcmsamplebufferconsumernotification_bufferconsumed.md): Optionally posted when a sample buffer is consumed.

# kCMSampleBufferNotification_DataBecameReady (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Posted on a sample buffer by the [CMSampleBufferSetDataReady](cmsamplebuffersetdataready%28__%29.md) function when the buffer becomes ready.

## Declaration

```objectivec
extern CFStringRef const kCMSampleBufferNotification_DataBecameReady;
```

## See Also

### Sample Buffer Notifications

- [kCMSampleBufferNotification_DataFailed](kcmsamplebuffernotification_datafailed.md)
- [kCMSampleBufferNotificationParameter_OSStatus](kcmsamplebuffernotificationparameter_osstatus.md)
- [kCMSampleBufferConsumerNotification_BufferConsumed](kcmsamplebufferconsumernotification_bufferconsumed.md): Optionally posted when a sample buffer is consumed.
