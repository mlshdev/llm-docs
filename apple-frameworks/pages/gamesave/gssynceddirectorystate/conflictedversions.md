> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gssynceddirectorystate/conflictedversions](https://developer.apple.com/documentation/gamesave/gssynceddirectorystate/conflictedversions)

# conflictedVersions (Swift)

**Framework:** GameSave  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The conflicting versions.

## Declaration

```swift
var conflictedVersions: [GSSyncedDirectoryVersion]? { get }
```

<a id="discussion"></a>

## Discussion

If you’re implementing your own conflict resolution, read all of the conflicting versions, and modify one of them to incorporate the state and changes from the others. Then call [resolveConflicts(with:)](../gssynceddirectory/resolveconflicts%28with_%29.md), passing that version.

This property’s value is `nil` unless the state is `GSSyncStateConflicted`.

## See Also

### Directory state information

- [GSSyncState](../gssyncstate.md)
- [state](state.md): Specifies the current state of the directory
- [error](error.md): The error preventing you from using the directory.
- [url](url.md): The URL of a directory to read and write game-save data in.

# conflictedVersions (Objective-C)

**Framework:** GameSave  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The conflicting versions.

## Declaration

```objectivec
@property (readonly, nullable) NSArray<GSSyncedDirectoryVersion *> * conflictedVersions;
```

<a id="discussion"></a>

## Discussion

If you’re implementing your own conflict resolution, read all of the conflicting versions, and modify one of them to incorporate the state and changes from the others. Then call [resolveConflictsWithVersion:](../gssynceddirectory/resolveconflicts%28with_%29.md), passing that version.

This property’s value is `nil` unless the state is `GSSyncStateConflicted`.

## See Also

### Directory state information

- [GSSyncState](../gssyncstate.md)
- [state](state.md): Specifies the current state of the directory
- [error](error.md): The error preventing you from using the directory.
- [url](url.md): The URL of a directory to read and write game-save data in.
