> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/notificationresponse/sourceidentifier](https://developer.apple.com/documentation/accessorynotifications/notificationresponse/sourceidentifier)

# sourceIdentifier

**Framework:** Accessory Notifications  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A bundle identifier for the app that sent the notification.

## Declaration

```swift
var sourceIdentifier: String
```

<a id="discussion"></a>

## Discussion

For example, if Messages sends the notification, this value is `com.apple.MobileSMS`.

## See Also

### Identifying the notification

- [notificationIdentifier](notificationidentifier.md): An identifier for the notification.
