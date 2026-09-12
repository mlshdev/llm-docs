> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontext/didsave](https://developer.apple.com/documentation/swiftdata/modelcontext/didsave)

# didSave

**Framework:** SwiftData  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

A notification that posts when the context finishes processing pending inserts, changes, and deletes.

## Declaration

```swift
static let didSave: Notification.Name
```

<a id="discussion"></a>

## Discussion

The notification’s `userInfo` dictionary contains the persistent identifiers of any inserted, updated, or deleted models. Use the appropriate key to access those identifiers. For more information, see [ModelContext.NotificationKey](notificationkey.md).

## See Also

### Registering for notifications

- [willSave](willsave.md): A notification that posts when the context is about to process pending inserts, changes, and deletes.
- [ModelContext.NotificationKey](notificationkey.md): Describes the data in the user info dictionary of a notification sent by a model context.
