> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/smsservice/viabilitynotification

# SMSService.ViabilityNotification

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A notification that indicates whether SMS is viable for a given cellular service.

## Declaration

```swift
struct ViabilityNotification
```

## Topics

### Accessing notification properties

- [cellularServiceID](viabilitynotification/cellularserviceid.md): The cellular service identifier associated with the notification.
- [isViable](viabilitynotification/isviable.md): A Boolean value that indicates whether the device can peform SMS operations at this time.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining service viabililty

- [isViable(for:)](isviable%28for_%29.md): Queries whether the device can perform SMS operations at this time.
- [viabilityNotifications](viabilitynotifications.md): An asynchronous sequence of service viability notifications produced by this service.
