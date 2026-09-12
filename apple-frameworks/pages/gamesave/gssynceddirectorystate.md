> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gssynceddirectorystate](https://developer.apple.com/documentation/gamesave/gssynceddirectorystate)

# GSSyncedDirectoryState (Swift)

**Framework:** GameSave  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Represents the state and its associated properties of the directory

## Declaration

```swift
class GSSyncedDirectoryState
```

<a id="overview"></a>

## Overview

Use the [state](gssynceddirectorystate/state.md) property to determine the validity of the other properties

## Topics

### Directory state information

- [GSSyncState](gssyncstate.md)
- [state](gssynceddirectorystate/state.md): Specifies the current state of the directory
- [conflictedVersions](gssynceddirectorystate/conflictedversions.md): The conflicting versions.
- [error](gssynceddirectorystate/error.md): The error preventing you from using the directory.
- [url](gssynceddirectorystate/url.md): The URL of a directory to read and write game-save data in.

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

### Accessing a directory

- [open(forContainerIdentifier:)](gssynceddirectory/open%28forcontaineridentifier_%29.md): Requests an instance of the game-save directory.
- [directoryState](gssynceddirectory/directorystate.md): The state of the directory.

# GSSyncedDirectoryState (Objective-C)

**Framework:** GameSave  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Represents the state and its associated properties of the directory

## Declaration

```objectivec
@interface GSSyncedDirectoryState : NSObject
```

<a id="overview"></a>

## Overview

Use the [state](gssynceddirectorystate/state.md) property to determine the validity of the other properties

## Topics

### Directory state information

- [GSSyncState](gssyncstate.md)
- [state](gssynceddirectorystate/state.md): Specifies the current state of the directory
- [conflictedVersions](gssynceddirectorystate/conflictedversions.md): The conflicting versions.
- [error](gssynceddirectorystate/error.md): The error preventing you from using the directory.
- [url](gssynceddirectorystate/url.md): The URL of a directory to read and write game-save data in.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Accessing a directory

- [openDirectoryForContainerIdentifier:](gssynceddirectory/open%28forcontaineridentifier_%29.md): Requests an instance of the game-save directory.
- [directoryState](gssynceddirectory/directorystate.md): The state of the directory.
