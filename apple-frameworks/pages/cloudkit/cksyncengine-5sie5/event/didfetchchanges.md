> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/event/didfetchchanges](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event/didfetchchanges)

# CKSyncEngine.Event.DidFetchChanges

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A type that provides information about a finished database fetch.

## Declaration

```swift
struct DidFetchChanges
```

## Topics

### Debugging the event

- [description](didfetchchanges/description.md): The textual description of the event that’s suitable for logging.

### Instance Properties

- [context](didfetchchanges/context.md)

### Default Implementations

- [CustomStringConvertible Implementations](didfetchchanges/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Remote database changes

- [CKSyncEngine.Event.willFetchChanges(\_:)](willfetchchanges%28__%29.md): The sync engine is about to fetch changes from the server.
- [CKSyncEngine.Event.WillFetchChanges](willfetchchanges.md): The sync engine is about to fetch changes from the server.
- [CKSyncEngine.Event.fetchedDatabaseChanges(\_:)](fetcheddatabasechanges%28__%29.md): The sync engine has fetched new database changes from the server.
- [CKSyncEngine.Event.FetchedDatabaseChanges](fetcheddatabasechanges.md): A type that provides information about fetched database changes.
- [CKSyncEngine.Event.didFetchChanges(\_:)](didfetchchanges%28__%29.md): The sync engine finished fetching changes from the server.
