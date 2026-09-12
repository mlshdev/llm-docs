> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/notificationsforwarding/accessorynotificationshandler/didactivate(for:)](https://developer.apple.com/documentation/accessorynotifications/notificationsforwarding/accessorynotificationshandler/didactivate(for:))

# didActivate(for:)

**Framework:** Accessory Notifications  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Establishes a notification session for communication with the system.

## Declaration

```swift
func didActivate(for session: NotificationsForwarding.Session)
```

## Parameters

- `session`: A session object that enables communication with the system.

<a id="discussion"></a>

## Discussion

Store the session reference to use across multiple notification life cycle events for sending messages to your accessory and communicating responses back to the system.

## See Also

### Managing the session life cycle

- [didInvalidate()](didinvalidate%28%29.md): Handles notification session termination.
