> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorynotifications/alertingcontext/init(notificationcanalert:suppressedbyfocus:kind:sound:)

# init(notificationCanAlert:suppressedByFocus:kind:sound:)

**Framework:** Accessory Notifications  
**Kind:** Initializer  
**Availability:** iOS 26.5+

Initializes an alerting context with notification alert conditions.

## Declaration

```swift
init(notificationCanAlert: Bool = false, suppressedByFocus: Bool = false, kind: AlertingContext.Kind = .notification, sound: AlertingContext.Sound? = nil)
```

## Parameters

- `notificationCanAlert`: A Boolean value that indicates whether the notification can alert.
- `suppressedByFocus`: A Boolean value that indicates whether Focus suppresses the alert.
- `kind`: The classification for the notification type.
- `sound`: An optional sound configuration for the notification.
