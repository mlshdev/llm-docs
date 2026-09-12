> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gamesavesynceddirectory/version](https://developer.apple.com/documentation/gamesave/gamesavesynceddirectory/version)

# GameSaveSyncedDirectory.Version

**Framework:** GameSave  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A representation of a version of the directory.

## Declaration

```swift
class Version
```

<a id="overview"></a>

## Overview

Used to describe the conflicted or local versions of a directory in case there are conflicts.

## Topics

### Accessing saved game state

- [url](version/url.md): The URL of a directory where you read and write game-save data.
- [isLocal](version/islocal.md): `true` if the directory version is local; otherwise `false`.

### Comparing versions

- [localizedNameOfSavingComputer](version/localizednameofsavingcomputer.md): The localized name of the device that saved this version.
- [modifiedDate](version/modifieddate.md): The date that this version was last modified.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Resolving conflicts

- [resolveConflicts(with:)](resolveconflicts%28with_%29.md): Indicates that you resolved a conflict.
