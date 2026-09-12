> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gssynceddirectoryversion](https://developer.apple.com/documentation/gamesave/gssynceddirectoryversion)

# GSSyncedDirectoryVersion (Swift)

**Framework:** GameSave  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
class GSSyncedDirectoryVersion
```

<a id="Accessing-saved-game-state"></a>

### Accessing saved game state

- [url](gssynceddirectoryversion/url.md)
- [isLocal](gssynceddirectoryversion/islocal.md)

<a id="Comparing-versions"></a>

### Comparing versions

- [localizedNameOfSavingComputer](gssynceddirectoryversion/localizednameofsavingcomputer.md)
- [modifiedDate](gssynceddirectoryversion/modifieddate.md)

## Topics

### Instance Properties

- [description](gssynceddirectoryversion/description.md)
- [isLocal](gssynceddirectoryversion/islocal.md): `YES` if the directory version is local; otherwise `NO`.
- [localizedNameOfSavingComputer](gssynceddirectoryversion/localizednameofsavingcomputer.md): The localized name of the device that saved this version.
- [modifiedDate](gssynceddirectoryversion/modifieddate.md): The date that this version was last modified.
- [url](gssynceddirectoryversion/url.md): The URL of a directory where you read and write game-save data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Resolving conflicts

- [resolveConflicts(with:)](gssynceddirectory/resolveconflicts%28with_%29.md): Indicates that you resolved a conflict.

# GSSyncedDirectoryVersion (Objective-C)

**Framework:** GameSave  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
@interface GSSyncedDirectoryVersion : NSObject
```

<a id="Accessing-saved-game-state"></a>

### Accessing saved game state

- [url](gssynceddirectoryversion/url.md)
- [isLocal](gssynceddirectoryversion/islocal.md)

<a id="Comparing-versions"></a>

### Comparing versions

- [localizedNameOfSavingComputer](gssynceddirectoryversion/localizednameofsavingcomputer.md)
- [modifiedDate](gssynceddirectoryversion/modifieddate.md)

## Topics

### Instance Properties

- [description](gssynceddirectoryversion/description.md)
- [isLocal](gssynceddirectoryversion/islocal.md): `YES` if the directory version is local; otherwise `NO`.
- [localizedNameOfSavingComputer](gssynceddirectoryversion/localizednameofsavingcomputer.md): The localized name of the device that saved this version.
- [modifiedDate](gssynceddirectoryversion/modifieddate.md): The date that this version was last modified.
- [url](gssynceddirectoryversion/url.md): The URL of a directory where you read and write game-save data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Resolving conflicts

- [resolveConflictsWithVersion:](gssynceddirectory/resolveconflicts%28with_%29.md): Indicates that you resolved a conflict.
