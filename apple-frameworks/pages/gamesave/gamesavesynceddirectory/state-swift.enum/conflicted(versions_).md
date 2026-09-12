> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gamesavesynceddirectory/state-swift.enum/conflicted(versions:)](https://developer.apple.com/documentation/gamesave/gamesavesynceddirectory/state-swift.enum/conflicted(versions:))

# GameSaveSyncedDirectory.State.conflicted(versions:)

**Framework:** GameSave  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The directory has conflicts with the cloud, which the game needs to resolve.

## Declaration

```swift
case conflicted(versions: [GameSaveSyncedDirectory.Version])
```

## See Also

### Directory states

- [GameSaveSyncedDirectory.State.closed](closed.md): The directory is closed.
- [GameSaveSyncedDirectory.State.error(\_:)](error%28__%29.md): The directory is in error state and can’t be used.
- [GameSaveSyncedDirectory.State.local(\_:)](local%28__%29.md): The directory is local-only and not synced to iCloud.
- [GameSaveSyncedDirectory.State.offline(\_:)](offline%28__%29.md): The directory is available locally, but not fully synced because the device is offline.
- [GameSaveSyncedDirectory.State.ready(\_:)](ready%28__%29.md): The directory is fully synced and ready to use.
- [GameSaveSyncedDirectory.State.syncing](syncing.md): The directory is currently syncing and is not ready yet.
