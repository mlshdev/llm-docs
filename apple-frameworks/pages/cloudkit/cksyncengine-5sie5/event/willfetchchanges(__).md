> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/event/willfetchchanges(_:)](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event/willfetchchanges(_:))

# CKSyncEngine.Event.willFetchChanges(\_:)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The sync engine is about to fetch changes from the server.

## Declaration

```swift
case willFetchChanges(CKSyncEngine.Event.WillFetchChanges)
```

## See Also

### Remote database changes

- [CKSyncEngine.Event.WillFetchChanges](willfetchchanges.md): The sync engine is about to fetch changes from the server.
- [CKSyncEngine.Event.fetchedDatabaseChanges(\_:)](fetcheddatabasechanges%28__%29.md): The sync engine has fetched new database changes from the server.
- [CKSyncEngine.Event.FetchedDatabaseChanges](fetcheddatabasechanges.md): A type that provides information about fetched database changes.
- [CKSyncEngine.Event.didFetchChanges(\_:)](didfetchchanges%28__%29.md): The sync engine finished fetching changes from the server.
- [CKSyncEngine.Event.DidFetchChanges](didfetchchanges.md): A type that provides information about a finished database fetch.
