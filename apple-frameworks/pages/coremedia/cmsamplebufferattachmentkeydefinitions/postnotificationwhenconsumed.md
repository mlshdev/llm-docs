> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmsamplebufferattachmentkeydefinitions/postnotificationwhenconsumed

# postNotificationWhenConsumed

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Indicates that decode pipelines should post a notification when consuming the sample buffer.

## Declaration

```swift
static let postNotificationWhenConsumed: CVAttachmentKeyDefinition<CMSampleBufferAttachmentKeyDefinitions.ShouldPropagate, CMCustomNotificationInfo>
```

<a id="discussion"></a>

## Discussion

This attachment is used at run time to request that a decode pipeline post [kCMSampleBufferConsumerNotification_BufferConsumed](../kcmsamplebufferconsumernotification_bufferconsumed.md) notification when this sample buffer is consumed. The value for this key is used as the userInfo dictionary in the notification.
