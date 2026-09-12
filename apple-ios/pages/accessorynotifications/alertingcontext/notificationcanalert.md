> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/alertingcontext/notificationcanalert](https://developer.apple.com/documentation/accessorynotifications/alertingcontext/notificationcanalert)

# notificationCanAlert

**Framework:** Accessory Notifications  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A Boolean value that indicates whether the accessory can alert the person for the notification.

## Declaration

```swift
var notificationCanAlert: Bool
```

<a id="discussion"></a>

## Discussion

A `true` value indicates that the notification includes sound and alert permissions, and the person allows alerts. The system might set this property to `false` if the notification already alerted on another device or if device settings disable alerting for the notification. This property doesn’t account for Focus state; see [isSuppressedByFocus](issuppressedbyfocus.md) and [shouldAlert](shouldalert.md).

## See Also

### Determining alerting behavior

- [shouldAlert](shouldalert.md): A Boolean value that indicates the recommended alerting behavior.
- [isSuppressedByFocus](issuppressedbyfocus.md): A Boolean value that indicates whether the device’s Focus state suppresses notification alerts.
