> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmsservice/viabilitynotification](https://developer.apple.com/documentation/telephonymessagingkit/mmsservice/viabilitynotification)

# MMSService.ViabilityNotification

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A notification that indicates if MMS is viable for a given cellular service.

## Declaration

```swift
struct ViabilityNotification
```

## Topics

### Accessing notification properties

- [cellularServiceID](viabilitynotification/cellularserviceid.md): The cellular service identifier associated with this notification.
- [isViable](viabilitynotification/isviable.md): A Boolean value that indicates whether the device can peform MMS operations at this time.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining service viabililty

- [isViable(for:)](isviable%28for_%29.md): Queries whether the device can perform MMS operations at this time.
- [viabilityNotifications](viabilitynotifications.md): An asynchronous sequence of service viability notifications produced by the service.
