> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/didsaveobjectidsmessage](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/didsaveobjectidsmessage)

# NSManagedObjectContext.DidSaveObjectIDsMessage

**Framework:** Core Data  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Posted after a main queue context saves, containing object IDs rather than full objects.

## Declaration

```swift
struct DidSaveObjectIDsMessage
```

<a id="overview"></a>

## Overview

Only use this message type for contexts with `NSMainQueueConcurrencyType`.

## Topics

### Instance Properties

- [context](didsaveobjectidsmessage/context.md)
- [deletedIDs](didsaveobjectidsmessage/deletedids.md): Object IDs of objects that were deleted during this save.
- [historyToken](didsaveobjectidsmessage/historytoken.md): The persistent history token representing the state after the save.
- [insertedIDs](didsaveobjectidsmessage/insertedids.md): Object IDs of objects that were inserted during this save.
- [invalidatedIDs](didsaveobjectidsmessage/invalidatedids.md): Object IDs of objects that were invalidated during this save.
- [queryGeneration](didsaveobjectidsmessage/querygeneration.md): Query generation token after the save.
- [refreshedIDs](didsaveobjectidsmessage/refreshedids.md): Object IDs of objects that were refreshed during this save.
- [updatedIDs](didsaveobjectidsmessage/updatedids.md): Object IDs of objects that were updated during this save.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
