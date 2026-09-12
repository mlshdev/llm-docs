> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/notificationsforwarding/accessorynotificationssession/removenotifications(identifiers:)](https://developer.apple.com/documentation/accessorynotifications/notificationsforwarding/accessorynotificationssession/removenotifications(identifiers:))

# removeNotifications(identifiers:)

**Framework:** Accessory Notifications  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Removes the identified notifications.

## Declaration

```swift
func removeNotifications(identifiers: [AccessoryNotification.Identifier]) async throws
```

## Parameters

- `identifiers`: An array of notification identifiers to clear.

<a id="discussion"></a>

## Discussion

This method has equivalent behavior to clearing notifications from Notification Center on the phone. The system doesn’t send actions to apps for removed notifications. This method only throws for errors receiving the removal request, not if some identifiers were already removed.

## See Also

### Removing notifications

- [removeNotifications(withIdentifiers:sourceIdentifier:)](removenotifications%28withidentifiers_sourceidentifier_%29.md): Removes notifications using primitive identifier components.
