> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/notificationsforwarding/accessorynotificationshandler/updatenotification(_:)](https://developer.apple.com/documentation/accessorynotifications/notificationsforwarding/accessorynotificationshandler/updatenotification(_:))

# updateNotification(\_:)

**Framework:** Accessory Notifications  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Updates a notification with new content.

## Declaration

```swift
func updateNotification(_ notification: AccessoryNotification)
```

## Parameters

- `notification`: The notification with updated details.

<a id="discussion"></a>

## Discussion

Accessories don’t need to alert the person for notification updates; update the displayed notification content without triggering additional alerts.
