> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/didsaveobjectidsasyncmessage](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/didsaveobjectidsasyncmessage)

# NSManagedObjectContext.DidSaveObjectIDsAsyncMessage

**Framework:** Core Data  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Posted after a private queue context saves, containing object IDs rather than full objects.

## Declaration

```swift
struct DidSaveObjectIDsAsyncMessage
```

<a id="overview"></a>

## Overview

Only use this message type for contexts with `NSPrivateQueueConcurrencyType`. For main queue contexts, use [NSManagedObjectContext.DidSaveObjectIDsMessage](didsaveobjectidsmessage.md).

## Topics

### Instance Properties

- [context](didsaveobjectidsasyncmessage/context.md)
- [deletedIDs](didsaveobjectidsasyncmessage/deletedids.md): Object IDs of objects that were deleted during this save.
- [historyToken](didsaveobjectidsasyncmessage/historytoken.md): The persistent history token representing the state after the save.
- [insertedIDs](didsaveobjectidsasyncmessage/insertedids.md): Object IDs of objects that were inserted during this save.
- [invalidatedIDs](didsaveobjectidsasyncmessage/invalidatedids.md): Object IDs of objects that were invalidated during this save.
- [queryGeneration](didsaveobjectidsasyncmessage/querygeneration.md): Query generation token after the save.
- [refreshedIDs](didsaveobjectidsasyncmessage/refreshedids.md): Object IDs of objects that were refreshed during this save.
- [updatedIDs](didsaveobjectidsasyncmessage/updatedids.md): Object IDs of objects that were updated during this save.

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](../../foundation/notificationcenter/asyncmessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
