> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/sendchanges(_:)](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/sendchanges(_:))

# sendChanges(\_:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Sends pending local changes to the server.

## Declaration

```swift
final func sendChanges(_ options: CKSyncEngine.SendChangesOptions = .init()) async throws
```

## Parameters

- `options`: The options to use when sending changes. For more information, see [CKSyncEngine.SendChangesOptions](sendchangesoptions.md).

<a id="discussion"></a>

## Discussion

Use this method to request the sync engine sends all pending local changes to the server before your app continues. This isn’t necessary in normal use, as the engine automatically syncs your app’s records. It is useful, however, in scenarios where you require greater control over sync, such as a “Backup now” button or unit tests.

> **Note**

> [sendChanges(\_:)](sendchanges%28__%29.md) returns only after your sync delegate finishes processing all related send events.

> **Throws**

> An error if the send operation fails. Common errors include network failures, authentication issues, conflicts, or server-side problems.

## See Also

### Invoking manual sync operations

- [fetchChanges(\_:)](fetchchanges%28__%29.md): Fetches pending remote changes from the server.
- [CKSyncEngine.FetchChangesOptions](fetchchangesoptions.md): A set of options to use when fetching changes from the server.
- [CKSyncEngine.SendChangesOptions](sendchangesoptions.md): A set of options to use when sending changes to the server.
