> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/alertingcontext/issuppressedbyfocus](https://developer.apple.com/documentation/accessorynotifications/alertingcontext/issuppressedbyfocus)

# isSuppressedByFocus

**Framework:** Accessory Notifications  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A Boolean value that indicates whether the device’s Focus state suppresses notification alerts.

## Declaration

```swift
var isSuppressedByFocus: Bool { get }
```

<a id="discussion"></a>

## Discussion

A `true` value indicates that the notification attempts to alert the person, but the device’s active Focus state suppresses it.

## See Also

### Determining alerting behavior

- [shouldAlert](shouldalert.md): A Boolean value that indicates the recommended alerting behavior.
- [notificationCanAlert](notificationcanalert.md): A Boolean value that indicates whether the accessory can alert the person for the notification.
