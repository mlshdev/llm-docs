> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gssyncstate/error](https://developer.apple.com/documentation/gamesave/gssyncstate/error)

# GSSyncState.error (Swift)

**Framework:** GameSave  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The directory is in error state and can’t be used.

## Declaration

```swift
case error
```

<a id="discussion"></a>

## Discussion

In this state, the value of [error](../gssynceddirectorystate/error.md) is nonnull.

## See Also

### Directory states

- [GSSyncState.closed](closed.md): The directory is closed.
- [GSSyncState.conflicted](conflicted.md): The directory has conflicts with the cloud, which the game needs to resolve.
- [GSSyncState.local](local.md): The directory is local-only and not synced to iCloud.
- [GSSyncState.offline](offline.md): The directory is available locally, but not fully synced because the device is offline.
- [GSSyncState.ready](ready.md): The directory is fully synced and ready to use.
- [GSSyncState.syncing](syncing.md): The directory is currently syncing and is not ready yet.

# GSSyncStateError (Objective-C)

**Framework:** GameSave  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The directory is in error state and can’t be used.

## Declaration

```objectivec
GSSyncStateError
```

<a id="discussion"></a>

## Discussion

In this state, the value of [error](../gssynceddirectorystate/error.md) is nonnull.

## See Also

### Directory states

- [GSSyncStateClosed](closed.md): The directory is closed.
- [GSSyncStateConflicted](conflicted.md): The directory has conflicts with the cloud, which the game needs to resolve.
- [GSSyncStateLocal](local.md): The directory is local-only and not synced to iCloud.
- [GSSyncStateOffline](offline.md): The directory is available locally, but not fully synced because the device is offline.
- [GSSyncStateReady](ready.md): The directory is fully synced and ready to use.
- [GSSyncStateSyncing](syncing.md): The directory is currently syncing and is not ready yet.
