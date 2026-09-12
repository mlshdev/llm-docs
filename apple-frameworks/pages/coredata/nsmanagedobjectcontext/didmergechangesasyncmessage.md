> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/didmergechangesasyncmessage](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/didmergechangesasyncmessage)

# NSManagedObjectContext.DidMergeChangesAsyncMessage

**Framework:** Core Data  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Posted after a private queue context merges changes from another context, containing object IDs.

## Declaration

```swift
struct DidMergeChangesAsyncMessage
```

<a id="overview"></a>

## Overview

Only use this message type for contexts with `NSPrivateQueueConcurrencyType`. For main queue contexts, use [NSManagedObjectContext.DidMergeChangesMessage](didmergechangesmessage.md).

## Topics

### Instance Properties

- [context](didmergechangesasyncmessage/context.md)
- [deletedIDs](didmergechangesasyncmessage/deletedids.md): Object IDs of objects that were deleted during the merge.
- [historyToken](didmergechangesasyncmessage/historytoken.md): The persistent history token representing the state after the merge.
- [insertedIDs](didmergechangesasyncmessage/insertedids.md): Object IDs of objects that were inserted during the merge.
- [invalidatedIDs](didmergechangesasyncmessage/invalidatedids.md): Object IDs of objects that were invalidated during the merge.
- [queryGeneration](didmergechangesasyncmessage/querygeneration.md): Query generation token after the merge.
- [refreshedIDs](didmergechangesasyncmessage/refreshedids.md): Object IDs of objects that were refreshed during the merge.
- [updatedIDs](didmergechangesasyncmessage/updatedids.md): Object IDs of objects that were updated during the merge.

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](../../foundation/notificationcenter/asyncmessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
