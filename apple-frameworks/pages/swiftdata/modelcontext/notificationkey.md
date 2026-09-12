> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontext/notificationkey](https://developer.apple.com/documentation/swiftdata/modelcontext/notificationkey)

# ModelContext.NotificationKey

**Framework:** SwiftData  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Describes the data in the user info dictionary of a notification sent by a model context.

## Declaration

```swift
enum NotificationKey
```

## Topics

### Accessing notification keys

- [ModelContext.NotificationKey.deletedIdentifiers](notificationkey/deletedidentifiers.md): A set of values identifying the context’s deleted models.
- [ModelContext.NotificationKey.insertedIdentifiers](notificationkey/insertedidentifiers.md): A set of values identifying the context’s inserted models.
- [ModelContext.NotificationKey.invalidatedAllIdentifiers](notificationkey/invalidatedallidentifiers.md): A set of values identifying the context’s invalidated models.
- [ModelContext.NotificationKey.updatedIdentifiers](notificationkey/updatedidentifiers.md): A set of values identifying the context’s updated models.
- [ModelContext.NotificationKey.queryGeneration](notificationkey/querygeneration.md): A token that indicates which generation of the model store SwiftData is using.
- [ModelContext.NotificationKey.historyTokens](notificationkey/historytokens.md): A history token representing the persistent store state after the save.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Registering for notifications

- [willSave](willsave.md): A notification that posts when the context is about to process pending inserts, changes, and deletes.
- [didSave](didsave.md): A notification that posts when the context finishes processing pending inserts, changes, and deletes.
