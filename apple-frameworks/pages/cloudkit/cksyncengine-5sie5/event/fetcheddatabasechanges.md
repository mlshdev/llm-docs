> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/event/fetcheddatabasechanges](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event/fetcheddatabasechanges)

# CKSyncEngine.Event.FetchedDatabaseChanges

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A type that provides information about fetched database changes.

## Declaration

```swift
struct FetchedDatabaseChanges
```

<a id="overview"></a>

## Overview

> **Note**

> Although CloudKit doesn’t guarantee the order of fetched database changes, the typical order for both deletions and modifications is oldest to newest.

## Topics

### Accessing changes

- [deletions](fetcheddatabasechanges/deletions.md): The fetched record zone deletions.
- [CKSyncEngineZoneDeletionReason](../../cksyncenginezonedeletionreason.md): Describes the reason for a record zone deletion.
- [modifications](fetcheddatabasechanges/modifications.md): The fetched record zone modifications.

### Debugging the event

- [description](fetcheddatabasechanges/description.md): The textual description of the event that’s suitable for logging.

### Default Implementations

- [CustomStringConvertible Implementations](fetcheddatabasechanges/customstringconvertible-implementations.md)

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
- [CKSyncEngine.Event.didFetchChanges(\_:)](didfetchchanges%28__%29.md): The sync engine finished fetching changes from the server.
- [CKSyncEngine.Event.DidFetchChanges](didfetchchanges.md): A type that provides information about a finished database fetch.
