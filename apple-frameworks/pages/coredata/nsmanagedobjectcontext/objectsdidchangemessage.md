> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/objectsdidchangemessage](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/objectsdidchangemessage)

# NSManagedObjectContext.ObjectsDidChangeMessage

**Framework:** Core Data  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Posted when objects in a main queue context change (inserted, updated, deleted, refreshed, or invalidated).

## Declaration

```swift
struct ObjectsDidChangeMessage
```

<a id="overview"></a>

## Overview

Only use this message type for contexts with `NSMainQueueConcurrencyType`.

## Topics

### Instance Properties

- [context](objectsdidchangemessage/context.md)
- [deleted](objectsdidchangemessage/deleted.md): Objects that were deleted.
- [inserted](objectsdidchangemessage/inserted.md): Objects that were inserted.
- [invalidated](objectsdidchangemessage/invalidated.md): Objects that were invalidated.
- [invalidatedAll](objectsdidchangemessage/invalidatedall.md): True if all objects in the context were invalidated.
- [refreshed](objectsdidchangemessage/refreshed.md): Objects that were refreshed.
- [updated](objectsdidchangemessage/updated.md): Objects that were updated.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
