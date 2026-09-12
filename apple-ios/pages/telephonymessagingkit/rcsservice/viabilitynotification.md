> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/viabilitynotification](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/viabilitynotification)

# RCSService.ViabilityNotification

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A notification that indicates whether RCS is viable for a given cellular service.

## Declaration

```swift
struct ViabilityNotification
```

## Topics

### Instance Properties

- [cellularServiceID](viabilitynotification/cellularserviceid.md): The cellular service identifier associated with this notification.
- [isViable](viabilitynotification/isviable.md): A Boolean value that indicates whether the device can peform RCS operations at this time.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining service viabililty

- [isViable(for:)](isviable%28for_%29.md): Queries whether the device can perform RCS operations at this time.
- [viabilityNotifications](viabilitynotifications.md): An asynchronous sequence of service viability notifications produced by the service.
