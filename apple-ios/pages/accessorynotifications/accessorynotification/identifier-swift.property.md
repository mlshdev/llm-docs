> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorynotifications/accessorynotification/identifier-swift.property

# identifier

**Framework:** Accessory Notifications  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A structure that uniquely identifies the notification.

## Declaration

```swift
let identifier: AccessoryNotification.Identifier
```

<a id="discussion"></a>

## Discussion

This structure combines the source app’s bundle identifier ([sourceIdentifier](identifier-swift.struct/sourceidentifier.md)) with an app-provided notification identifier ([notificationIdentifier](identifier-swift.struct/notificationidentifier.md)).

## See Also

### Identifying and grouping notifications

- [AccessoryNotification.Identifier](identifier-swift.struct.md): A structure that uniquely identifies a notification.
- [threadIdentifier](threadidentifier.md): An identifier that groups notifications that belong to the same thread.
- [sourceName](sourcename.md): A display name for the bundle that sent the notification.
