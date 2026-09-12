> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nscoredatacorespotlightdelegate/indexdidupdatemessage](https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/indexdidupdatemessage)

# NSCoreDataCoreSpotlightDelegate.IndexDidUpdateMessage

**Framework:** Core Data  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS

Posted when the Core Spotlight index is updated on a private queue.

## Declaration

```swift
struct IndexDidUpdateMessage
```

## Topics

### Instance Properties

- [historyToken](indexdidupdatemessage/historytoken.md): The persistent history token representing the index state.
- [storeUUID](indexdidupdatemessage/storeuuid.md): The UUID of the store that was indexed.

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](../../foundation/notificationcenter/asyncmessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
