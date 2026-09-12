> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/event/didfetchrecordzonechanges](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event/didfetchrecordzonechanges)

# CKSyncEngine.Event.DidFetchRecordZoneChanges

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A type that provides information about a finished record zone fetch.

## Declaration

```swift
struct DidFetchRecordZoneChanges
```

## Topics

### Identifying the record zone

- [zoneID](didfetchrecordzonechanges/zoneid.md): The associated record zone’s unique identifier.

### Handling errors

- [error](didfetchrecordzonechanges/error.md): An error that describes the cause of a failed fetch operation.

### Debugging the event

- [description](didfetchrecordzonechanges/description.md): The textual description of the event that’s suitable for logging.

### Default Implementations

- [CustomStringConvertible Implementations](didfetchrecordzonechanges/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Remote record zone changes

- [CKSyncEngine.Event.willFetchRecordZoneChanges(\_:)](willfetchrecordzonechanges%28__%29.md): The sync engine is about to fetch record zone changes from the server for a specific zone.
- [CKSyncEngine.Event.WillFetchRecordZoneChanges](willfetchrecordzonechanges.md): A type that provides information about an imminent fetch of changes in a record zone.
- [CKSyncEngine.Event.fetchedRecordZoneChanges(\_:)](fetchedrecordzonechanges%28__%29.md): The sync engine fetched new record zone changes from the server.
- [CKSyncEngine.Event.FetchedRecordZoneChanges](fetchedrecordzonechanges.md): A type that provides information about fetched record zone changes.
- [CKSyncEngine.Event.didFetchRecordZoneChanges(\_:)](didfetchrecordzonechanges%28__%29.md): The sync engine has completed fetching record zone changes from the server for a specific zone.
