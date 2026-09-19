> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorynotifications/notificationsforwarding/accessorynotificationshandler/removenotification(identifier:)

# removeNotification(identifier:)

**Framework:** Accessory Notifications  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Removes a previously-posted notification from your accessory.

## Declaration

```swift
func removeNotification(identifier: AccessoryNotification.Identifier)
```

## Parameters

- `identifier`: The identifier of the notification to remove.

<a id="discussion"></a>

## Discussion

The system calls this method when a notification needs to be removed, such as when a person dismisses it on another device or when the person deletes the app that sent the notification.

## See Also

### Removing notifications

- [removeAllNotifications()](removeallnotifications%28%29.md): Removes all notifications from the user interface.
