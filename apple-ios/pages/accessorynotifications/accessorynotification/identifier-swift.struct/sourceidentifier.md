> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessorynotification/identifier-swift.struct/sourceidentifier](https://developer.apple.com/documentation/accessorynotifications/accessorynotification/identifier-swift.struct/sourceidentifier)

# sourceIdentifier

**Framework:** Accessory Notifications  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

The source app’s bundle identifier.

## Declaration

```swift
let sourceIdentifier: String
```

<a id="discussion"></a>

## Discussion

If Messages is the app that sends the notification, the value of this property is `com.apple.MobileSMS`.

## See Also

### Accessing identifier components

- [notificationIdentifier](notificationidentifier.md): An identifier that the source app sets for the notification.
