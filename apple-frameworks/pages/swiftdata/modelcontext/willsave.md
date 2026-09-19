> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftdata/modelcontext/willsave

# willSave

**Framework:** SwiftData  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

A notification that posts when the context is about to process pending inserts, changes, and deletes.

## Declaration

```swift
static let willSave: Notification.Name
```

<a id="discussion"></a>

## Discussion

> **Note**

> Notifications with this name don’t contain a `userInfo` dictionary.

## See Also

### Registering for notifications

- [didSave](didsave.md): A notification that posts when the context finishes processing pending inserts, changes, and deletes.
- [ModelContext.NotificationKey](notificationkey.md): Describes the data in the user info dictionary of a notification sent by a model context.
