> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gamesavesynceddirectory/state-swift.enum/offline(_:)](https://developer.apple.com/documentation/gamesave/gamesavesynceddirectory/state-swift.enum/offline(_:))

# GameSaveSyncedDirectory.State.offline(\_:)

**Framework:** GameSave  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The directory is available locally, but not fully synced because the device is offline.

## Declaration

```swift
case offline(URL)
```

## Parameters

- `URL`: The URL of a directory to read and write game-save data in.

## See Also

### Directory states

- [GameSaveSyncedDirectory.State.closed](closed.md): The directory is closed.
- [GameSaveSyncedDirectory.State.conflicted(versions:)](conflicted%28versions_%29.md): The directory has conflicts with the cloud, which the game needs to resolve.
- [GameSaveSyncedDirectory.State.error(\_:)](error%28__%29.md): The directory is in error state and can’t be used.
- [GameSaveSyncedDirectory.State.local(\_:)](local%28__%29.md): The directory is local-only and not synced to iCloud.
- [GameSaveSyncedDirectory.State.ready(\_:)](ready%28__%29.md): The directory is fully synced and ready to use.
- [GameSaveSyncedDirectory.State.syncing](syncing.md): The directory is currently syncing and is not ready yet.
