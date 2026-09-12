> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gssynceddirectory/resolveconflicts(with:)](https://developer.apple.com/documentation/gamesave/gssynceddirectory/resolveconflicts(with:))

# resolveConflicts(with:) (Swift)

**Framework:** GameSave  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Indicates that you resolved a conflict.

## Declaration

```swift
func resolveConflicts(with version: GSSyncedDirectoryVersion)
```

## Parameters

- `version`: The version to use.

<a id="discussion"></a>

## Discussion

If you’re implementing your own conflict resolution, read all of the conflicting versions, and modify one of them to incorporate the state and changes from the others. Then call this method, passing that version.

Call this method only when the directory is in the [GSSyncState.conflicted](../gssyncstate/conflicted.md) state.

## See Also

### Resolving conflicts

- [GSSyncedDirectoryVersion](../gssynceddirectoryversion.md)

# resolveConflictsWithVersion: (Objective-C)

**Framework:** GameSave  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Indicates that you resolved a conflict.

## Declaration

```objectivec
- (void) resolveConflictsWithVersion:(GSSyncedDirectoryVersion *) version;
```

## Parameters

- `version`: The version to use.

<a id="discussion"></a>

## Discussion

If you’re implementing your own conflict resolution, read all of the conflicting versions, and modify one of them to incorporate the state and changes from the others. Then call this method, passing that version.

Call this method only when the directory is in the [GSSyncStateConflicted](../gssyncstate/conflicted.md) state.

## See Also

### Resolving conflicts

- [GSSyncedDirectoryVersion](../gssynceddirectoryversion.md)
