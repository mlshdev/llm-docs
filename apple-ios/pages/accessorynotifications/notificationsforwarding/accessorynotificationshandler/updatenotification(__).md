> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorynotifications/notificationsforwarding/accessorynotificationshandler/updatenotification(_:)

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
