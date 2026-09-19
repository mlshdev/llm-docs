> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorynotifications/accessorynotification/contexticon

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
