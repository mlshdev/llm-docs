> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/event/fetchedrecordzonechanges](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event/fetchedrecordzonechanges)

# CKSyncEngine.Event.FetchedRecordZoneChanges

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A type that provides information about fetched record zone changes.

## Declaration

```swift
struct FetchedRecordZoneChanges
```

<a id="overview"></a>

## Overview

> **Note**

> Although CloudKit doesn’t guarantee the order of fetched record zone changes, the typical order for both deletions and modifications is oldest to newest.

## Topics

### Accessing changes

- [deletions](fetchedrecordzonechanges/deletions.md): The fetched record zone deletions.
- [modifications](fetchedrecordzonechanges/modifications.md): The fetched record modifications.

### Debugging the event

- [description](fetchedrecordzonechanges/description.md): The textual description of the event that’s suitable for logging.

### Default Implementations

- [CustomStringConvertible Implementations](fetchedrecordzonechanges/customstringconvertible-implementations.md)

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
- [CKSyncEngine.Event.didFetchRecordZoneChanges(\_:)](didfetchrecordzonechanges%28__%29.md): The sync engine has completed fetching record zone changes from the server for a specific zone.
- [CKSyncEngine.Event.DidFetchRecordZoneChanges](didfetchrecordzonechanges.md): A type that provides information about a finished record zone fetch.
