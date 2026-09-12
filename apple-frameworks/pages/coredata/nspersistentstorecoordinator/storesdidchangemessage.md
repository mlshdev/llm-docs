> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/storesdidchangemessage](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/storesdidchangemessage)

# NSPersistentStoreCoordinator.StoresDidChangeMessage

**Framework:** Core Data  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Posted when stores are added to or removed from the persistent store coordinator on the main queue.

## Declaration

```swift
struct StoresDidChangeMessage
```

## Topics

### Instance Properties

- [addedStores](storesdidchangemessage/addedstores.md): Stores that were added during this change.
- [persistentStoreCoordinator](storesdidchangemessage/persistentstorecoordinator.md)
- [removedStores](storesdidchangemessage/removedstores.md): Stores that were removed during this change.
- [uuidChangedStores](storesdidchangemessage/uuidchangedstores.md)

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
