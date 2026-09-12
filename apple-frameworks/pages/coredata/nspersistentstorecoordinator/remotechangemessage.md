> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/remotechangemessage](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/remotechangemessage)

# NSPersistentStoreCoordinator.RemoteChangeMessage

**Framework:** Core Data  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Posted when a store receives a remote change notification from another process.

## Declaration

```swift
struct RemoteChangeMessage
```

## Topics

### Instance Properties

- [historyToken](remotechangemessage/historytoken.md): The persistent history token representing the state after the remote change.
- [persistentStoreCoordinator](remotechangemessage/persistentstorecoordinator.md)
- [storeURL](remotechangemessage/storeurl.md): The URL of the store that changed.
- [storeUUID](remotechangemessage/storeuuid.md): The UUID of the store that changed.

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](../../foundation/notificationcenter/asyncmessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
