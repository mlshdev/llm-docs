> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/persistent-history](https://developer.apple.com/documentation/coredata/persistent-history)

# Persistent history

**Interface languages:** Swift, Objective-C

**Framework:** Core Data  
**Kind:** API Collection

Use persistent history tracking to determine what changes have occurred in the store since the enabling of persistent history tracking.

## Topics

### Tracking History

- [NSPersistentHistoryToken](nspersistenthistorytoken.md): A bookmark for keeping track the most recent history that you’ve processed.

### Requesting History

- [NSPersistentHistoryChangeRequest](nspersistenthistorychangerequest.md): A request to fetch or purge persistent history.
- [NSPersistentHistoryResult](nspersistenthistoryresult.md): The result of a request to fetch persistent history.

### Reading History

- [NSPersistentHistoryTransaction](nspersistenthistorytransaction.md): A set of changes in the persistent history based on a context save or batch operation.
- [NSPersistentHistoryChange](nspersistenthistorychange.md): A change representing the insertion, update, or deletion of a managed object in the persistent store.

## See Also

### Change processing

- [Accessing data when the store changes](accessing-data-when-the-store-changes.md): Guarantee that a context won’t see store changes until you tell it to look.
- [Consuming relevant store changes](consuming-relevant-store-changes.md): Filter store transactions for changes relevant to the current view.
