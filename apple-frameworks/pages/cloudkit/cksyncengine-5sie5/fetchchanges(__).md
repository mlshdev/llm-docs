> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/fetchchanges(_:)](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/fetchchanges(_:))

# fetchChanges(\_:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Fetches pending remote changes from the server.

## Declaration

```swift
final func fetchChanges(_ options: CKSyncEngine.FetchChangesOptions = .init()) async throws
```

## Parameters

- `options`: The options to use when fetching changes. For more information, see [CKSyncEngine.FetchChangesOptions](fetchchangesoptions.md).

<a id="discussion"></a>

## Discussion

Use this method to request the sync engine immediately fetches all pending remote changes before your app continues. This isn’t necessary in normal use, as the engine automatically syncs your app’s records. It is useful, however, in scenarios where you require more control over sync, such as pull-to-refresh or unit tests.

> **Note**

> [fetchChanges(\_:)](fetchchanges%28__%29.md) returns only after your sync delegate finishes processing all related fetch events.

> **Throws**

> An error if the fetch operation fails. Common errors include network failures, authentication issues, or server-side problems.

## See Also

### Invoking manual sync operations

- [CKSyncEngine.FetchChangesOptions](fetchchangesoptions.md): A set of options to use when fetching changes from the server.
- [sendChanges(\_:)](sendchanges%28__%29.md): Sends pending local changes to the server.
- [CKSyncEngine.SendChangesOptions](sendchangesoptions.md): A set of options to use when sending changes to the server.
