> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessorynotification/contexticon](https://developer.apple.com/documentation/accessorynotifications/accessorynotification/contexticon)

# contextIcon

**Framework:** Accessory Notifications  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A secondary icon that provides additional contextual information about the notification.

## Declaration

```swift
let contextIcon: AccessoryNotification.File?
```

<a id="discussion"></a>

## Discussion

For communication notifications, this image might be a message sender’s avatar or group chat icon.

## See Also

### Accessing related media

- [attachments](attachments.md): An array of files sent with the notification.
- [sourceIcon](sourceicon.md): An icon that represents the app that sent the notification.
- [AccessoryNotification.File](file.md): A file associated with a notification.
