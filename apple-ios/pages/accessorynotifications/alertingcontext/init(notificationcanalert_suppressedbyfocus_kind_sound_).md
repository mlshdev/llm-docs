> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/alertingcontext/init(notificationcanalert:suppressedbyfocus:kind:sound:)](https://developer.apple.com/documentation/accessorynotifications/alertingcontext/init(notificationcanalert:suppressedbyfocus:kind:sound:))

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
