> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swhighlightpersistenceeventtrigger](https://developer.apple.com/documentation/sharedwithyou/swhighlightpersistenceeventtrigger)

# SWHighlightPersistenceEventTrigger (Swift)

**Framework:** Shared with You  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Signifies the type of persistence event trigger.

## Declaration

```swift
enum SWHighlightPersistenceEventTrigger
```

## Topics

### Persistence actions

- [SWHighlightPersistenceEventTrigger.created](swhighlightpersistenceeventtrigger/created.md): Signifies a creation event.
- [SWHighlightPersistenceEventTrigger.deleted](swhighlightpersistenceeventtrigger/deleted.md): Signifies a deletion event.
- [SWHighlightPersistenceEventTrigger.renamed](swhighlightpersistenceeventtrigger/renamed.md): Signifies a rename event.
- [SWHighlightPersistenceEventTrigger.moved](swhighlightpersistenceeventtrigger/moved.md): Signifies a move event.

### Initializers

- [init(rawValue:)](swhighlightpersistenceeventtrigger/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing an event trigger

- [persistenceEventTrigger](swhighlightpersistenceevent/persistenceeventtrigger.md): The persistence event trigger for the highlight.

# SWHighlightPersistenceEventTrigger (Objective-C)

**Framework:** Shared with You  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Signifies the type of persistence event trigger.

## Declaration

```objectivec
enum SWHighlightPersistenceEventTrigger : NSInteger;
```

## Topics

### Persistence actions

- [SWHighlightPersistenceEventTriggerCreated](swhighlightpersistenceeventtrigger/created.md): Signifies a creation event.
- [SWHighlightPersistenceEventTriggerDeleted](swhighlightpersistenceeventtrigger/deleted.md): Signifies a deletion event.
- [SWHighlightPersistenceEventTriggerRenamed](swhighlightpersistenceeventtrigger/renamed.md): Signifies a rename event.
- [SWHighlightPersistenceEventTriggerMoved](swhighlightpersistenceeventtrigger/moved.md): Signifies a move event.

## See Also

### Accessing an event trigger

- [persistenceEventTrigger](swhighlightpersistenceevent/persistenceeventtrigger.md): The persistence event trigger for the highlight.
