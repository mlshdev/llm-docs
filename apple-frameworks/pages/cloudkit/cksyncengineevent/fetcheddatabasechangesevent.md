> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengineevent/fetcheddatabasechangesevent](https://developer.apple.com/documentation/cloudkit/cksyncengineevent/fetcheddatabasechangesevent)

# fetchedDatabaseChangesEvent

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The event downcast to the subclass that represents a set of fetched database changes to process.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) CKSyncEngineFetchedDatabaseChangesEvent * fetchedDatabaseChangesEvent;
```

## See Also

### Accessing fetch events

- [willFetchChangesEvent](willfetchchangesevent.md): The event downcast to the subclass that represents an imminent database fetch.
- [CKSyncEngineWillFetchChangesEvent](../cksyncenginewillfetchchangesevent.md): The sync engine is about to fetch changes from the server.
- [willFetchRecordZoneChangesEvent](willfetchrecordzonechangesevent.md): The event downcast to the subclass that represents an imminent fetch of record zone changes.
- [CKSyncEngineWillFetchRecordZoneChangesEvent](../cksyncenginewillfetchrecordzonechangesevent.md): The sync engine finished fetching record zone changes from the server for a specific zone.
- [CKSyncEngineFetchedDatabaseChangesEvent](../cksyncenginefetcheddatabasechangesevent.md): An object that provides information about fetched database changes.
- [fetchedRecordZoneChangesEvent](fetchedrecordzonechangesevent.md): The event downcast to the subclass that represents a set of fetched record zone changes to process.
- [CKSyncEngineFetchedRecordZoneChangesEvent](../cksyncenginefetchedrecordzonechangesevent.md): An object that provides information about fetched record zone changes.
- [didFetchRecordZoneChangesEvent](didfetchrecordzonechangesevent.md): The event downcast to the subclass that represents a completed record zone fetch.
- [CKSyncEngineDidFetchRecordZoneChangesEvent](../cksyncenginedidfetchrecordzonechangesevent.md): An object that provides information about a finished record zone fetch.
- [didFetchChangesEvent](didfetchchangesevent.md): The event downcast to the subclass that represents a completed database fetch.
- [CKSyncEngineDidFetchChangesEvent](../cksyncenginedidfetchchangesevent.md): The sync engine finished fetching changes from the server.
