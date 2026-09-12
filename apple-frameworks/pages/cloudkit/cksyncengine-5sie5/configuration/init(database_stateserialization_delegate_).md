> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/configuration/init(database:stateserialization:delegate:)](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/configuration/init(database:stateserialization:delegate:))

# init(database:stateSerialization:delegate:)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates a configuration for the specified database and serialized state.

## Declaration

```swift
init(database: CKDatabase, stateSerialization: CKSyncEngine.State.Serialization?, delegate: any CKSyncEngineDelegate)
```

## Parameters

- `database`: The database to sync — either a person’s private database or their shared database.
- `stateSerialization`: If this is the first initialization of the associated sync engine, specify `nil`; otherwise, specify the state from the most recent [CKSyncEngine.Event.stateUpdate(\_:)](../event/stateupdate%28__%29.md) event that your delegate handled.
- `delegate`: The object that provides the records to sync and handles any related events.
