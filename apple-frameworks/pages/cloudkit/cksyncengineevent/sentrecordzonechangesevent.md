> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksyncengineevent/sentrecordzonechangesevent

# sentRecordZoneChangesEvent

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The event downcast to the subclass that represents a sent batch of record zone changes.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) CKSyncEngineSentRecordZoneChangesEvent * sentRecordZoneChangesEvent;
```

## See Also

### Accessing send events

- [willSendChangesEvent](willsendchangesevent.md): The event downcast to the subclass that represents an imminent send operation.
- [CKSyncEngineWillSendChangesEvent](../cksyncenginewillsendchangesevent.md): An object that provides information about an imminent send of local changes.
- [sentDatabaseChangesEvent](sentdatabasechangesevent.md): The event downcast to the subclass that represents a sent batch of database changes.
- [CKSyncEngineSentDatabaseChangesEvent](../cksyncenginesentdatabasechangesevent.md): An object that provides information about a sent batch of database changes.
- [CKSyncEngineSentRecordZoneChangesEvent](../cksyncenginesentrecordzonechangesevent.md): The sync engine finished sending a batch of record zone changes to the server.
- [didSendChangesEvent](didsendchangesevent.md): The event downcast to the subclass that represents a completed send operation.
- [CKSyncEngineDidSendChangesEvent](../cksyncenginedidsendchangesevent.md): An object that provides information about a finished send operation.
