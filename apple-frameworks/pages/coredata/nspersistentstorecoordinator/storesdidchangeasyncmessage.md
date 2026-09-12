> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/storesdidchangeasyncmessage](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/storesdidchangeasyncmessage)

# NSPersistentStoreCoordinator.StoresDidChangeAsyncMessage

**Framework:** Core Data  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Posted when stores are added to or removed from the persistent store coordinator on a background queue.

## Declaration

```swift
struct StoresDidChangeAsyncMessage
```

## Topics

### Instance Properties

- [addedStores](storesdidchangeasyncmessage/addedstores.md): Stores that were added during this change.
- [persistentStoreCoordinator](storesdidchangeasyncmessage/persistentstorecoordinator.md)
- [removedStores](storesdidchangeasyncmessage/removedstores.md): Stores that were removed during this change.
- [uuidChangedStores](storesdidchangeasyncmessage/uuidchangedstores.md)

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](../../foundation/notificationcenter/asyncmessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
