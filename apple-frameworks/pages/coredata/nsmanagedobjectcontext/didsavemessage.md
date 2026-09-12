> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/didsavemessage](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/didsavemessage)

# NSManagedObjectContext.DidSaveMessage

**Framework:** Core Data  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Posted after a main queue context saves.

## Declaration

```swift
struct DidSaveMessage
```

<a id="overview"></a>

## Overview

Only use this message type for contexts with `NSMainQueueConcurrencyType`.

## Topics

### Instance Properties

- [context](didsavemessage/context.md)
- [deleted](didsavemessage/deleted.md): Managed objects that were deleted during this save.
- [historyToken](didsavemessage/historytoken.md)
- [inserted](didsavemessage/inserted.md): Managed objects that were inserted during this save.
- [queryGeneration](didsavemessage/querygeneration.md): Query generation token after the save.
- [updated](didsavemessage/updated.md): Managed objects that were updated during this save.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
