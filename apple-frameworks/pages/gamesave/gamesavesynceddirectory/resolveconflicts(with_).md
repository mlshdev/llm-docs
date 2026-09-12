> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gamesavesynceddirectory/resolveconflicts(with:)](https://developer.apple.com/documentation/gamesave/gamesavesynceddirectory/resolveconflicts(with:))

# resolveConflicts(with:)

**Framework:** GameSave  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Indicates that you resolved a conflict.

## Declaration

```swift
func resolveConflicts(with version: GameSaveSyncedDirectory.Version)
```

## Parameters

- `version`: The version to use.

<a id="discussion"></a>

## Discussion

If you’re implementing your own conflict resolution, read all of the conflicting versions, and modify one of them to incorporate the state and changes from the others. Then call this method, passing that version.

Call this method only when the directory is in the [GameSaveSyncedDirectory.State.conflicted(versions:)](state-swift.enum/conflicted%28versions_%29.md) state.

## See Also

### Resolving conflicts

- [GameSaveSyncedDirectory.Version](version.md): A representation of a version of the directory.
