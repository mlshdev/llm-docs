> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengineevent/sentdatabasechangesevent](https://developer.apple.com/documentation/cloudkit/cksyncengineevent/sentdatabasechangesevent)

# sentDatabaseChangesEvent

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The event downcast to the subclass that represents a sent batch of database changes.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) CKSyncEngineSentDatabaseChangesEvent * sentDatabaseChangesEvent;
```

## See Also

### Accessing send events

- [willSendChangesEvent](willsendchangesevent.md): The event downcast to the subclass that represents an imminent send operation.
- [CKSyncEngineWillSendChangesEvent](../cksyncenginewillsendchangesevent.md): An object that provides information about an imminent send of local changes.
- [CKSyncEngineSentDatabaseChangesEvent](../cksyncenginesentdatabasechangesevent.md): An object that provides information about a sent batch of database changes.
- [sentRecordZoneChangesEvent](sentrecordzonechangesevent.md): The event downcast to the subclass that represents a sent batch of record zone changes.
- [CKSyncEngineSentRecordZoneChangesEvent](../cksyncenginesentrecordzonechangesevent.md): The sync engine finished sending a batch of record zone changes to the server.
- [didSendChangesEvent](didsendchangesevent.md): The event downcast to the subclass that represents a completed send operation.
- [CKSyncEngineDidSendChangesEvent](../cksyncenginedidsendchangesevent.md): An object that provides information about a finished send operation.
