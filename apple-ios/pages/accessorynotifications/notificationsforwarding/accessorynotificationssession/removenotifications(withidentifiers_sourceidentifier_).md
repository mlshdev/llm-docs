> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorynotifications/notificationsforwarding/accessorynotificationssession/removenotifications(withidentifiers:sourceidentifier:)

# removeNotifications(withIdentifiers:sourceIdentifier:)

**Framework:** Accessory Notifications  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Removes notifications using primitive identifier components.

## Declaration

```swift
func removeNotifications(withIdentifiers identifiers: [String], sourceIdentifier: String) async throws
```

## Parameters

- `identifiers`: A set of notification identifier strings.
- `sourceIdentifier`: The bundle identifier of the app that posted the notifications.

<a id="discussion"></a>

## Discussion

This method provides an alternative way to remove notifications using string identifiers rather than [AccessoryNotification.Identifier](../../accessorynotification/identifier-swift.struct.md) instances.

## See Also

### Removing notifications

- [removeNotifications(identifiers:)](removenotifications%28identifiers_%29.md): Removes the identified notifications.
