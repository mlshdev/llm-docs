> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gssyncstate/closed](https://developer.apple.com/documentation/gamesave/gssyncstate/closed)

# GSSyncState.closed (Swift)

**Framework:** GameSave  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The directory is closed.

## Declaration

```swift
case closed
```

## See Also

### Directory states

- [GSSyncState.conflicted](conflicted.md): The directory has conflicts with the cloud, which the game needs to resolve.
- [GSSyncState.error](error.md): The directory is in error state and can’t be used.
- [GSSyncState.local](local.md): The directory is local-only and not synced to iCloud.
- [GSSyncState.offline](offline.md): The directory is available locally, but not fully synced because the device is offline.
- [GSSyncState.ready](ready.md): The directory is fully synced and ready to use.
- [GSSyncState.syncing](syncing.md): The directory is currently syncing and is not ready yet.

# GSSyncStateClosed (Objective-C)

**Framework:** GameSave  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The directory is closed.

## Declaration

```objectivec
GSSyncStateClosed
```

## See Also

### Directory states

- [GSSyncStateConflicted](conflicted.md): The directory has conflicts with the cloud, which the game needs to resolve.
- [GSSyncStateError](error.md): The directory is in error state and can’t be used.
- [GSSyncStateLocal](local.md): The directory is local-only and not synced to iCloud.
- [GSSyncStateOffline](offline.md): The directory is available locally, but not fully synced because the device is offline.
- [GSSyncStateReady](ready.md): The directory is fully synced and ready to use.
- [GSSyncStateSyncing](syncing.md): The directory is currently syncing and is not ready yet.
