> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/event/willfetchchanges](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event/willfetchchanges)

# CKSyncEngine.Event.WillFetchChanges

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The sync engine is about to fetch changes from the server.

## Declaration

```swift
struct WillFetchChanges
```

<a id="overview"></a>

## Overview

The sync engine delivers the changes themselves via [CKSyncEngine.Event.FetchedDatabaseChanges](fetcheddatabasechanges.md) and [CKSyncEngine.Event.FetchedRecordZoneChanges](fetchedrecordzonechanges.md).

Note that this event might not always occur every time you call [fetchChanges(\_:)](../fetchchanges%28__%29.md). For example, if you call [fetchChanges(\_:)](../fetchchanges%28__%29.md) concurrently while the engine is already fetching changes, this event might not be sent. Similarly, if there’s no logged-in account, the engine might short-circuit the call to [fetchChanges(\_:)](../fetchchanges%28__%29.md), and this event won’t be sent.

## Topics

### Debugging the event

- [description](willfetchchanges/description.md): The textual description of the event that’s suitable for logging.

### Instance Properties

- [context](willfetchchanges/context.md)

### Default Implementations

- [CustomStringConvertible Implementations](willfetchchanges/customstringconvertible-implementations.md)

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
- [CKSyncEngine.Event.fetchedDatabaseChanges(\_:)](fetcheddatabasechanges%28__%29.md): The sync engine has fetched new database changes from the server.
- [CKSyncEngine.Event.FetchedDatabaseChanges](fetcheddatabasechanges.md): A type that provides information about fetched database changes.
- [CKSyncEngine.Event.didFetchChanges(\_:)](didfetchchanges%28__%29.md): The sync engine finished fetching changes from the server.
- [CKSyncEngine.Event.DidFetchChanges](didfetchchanges.md): A type that provides information about a finished database fetch.
