> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/didmergechangesmessage](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/didmergechangesmessage)

# NSManagedObjectContext.DidMergeChangesMessage

**Framework:** Core Data  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Posted after a main queue context merges changes from another context, containing object IDs.

## Declaration

```swift
struct DidMergeChangesMessage
```

<a id="overview"></a>

## Overview

Only use this message type for contexts with `NSMainQueueConcurrencyType`. For private queue contexts, use [NSManagedObjectContext.DidMergeChangesAsyncMessage](didmergechangesasyncmessage.md).

## Topics

### Instance Properties

- [context](didmergechangesmessage/context.md)
- [deletedIDs](didmergechangesmessage/deletedids.md): Object IDs of objects that were deleted during the merge.
- [historyToken](didmergechangesmessage/historytoken.md): The persistent history token representing the state after the merge.
- [insertedIDs](didmergechangesmessage/insertedids.md): Object IDs of objects that were inserted during the merge.
- [invalidatedIDs](didmergechangesmessage/invalidatedids.md): Object IDs of objects that were invalidated during the merge.
- [queryGeneration](didmergechangesmessage/querygeneration.md): Query generation token after the merge.
- [refreshedIDs](didmergechangesmessage/refreshedids.md): Object IDs of objects that were refreshed during the merge.
- [updatedIDs](didmergechangesmessage/updatedids.md): Object IDs of objects that were updated during the merge.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
