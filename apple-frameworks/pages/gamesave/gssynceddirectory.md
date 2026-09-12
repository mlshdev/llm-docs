> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gssynceddirectory](https://developer.apple.com/documentation/gamesave/gssynceddirectory)

# GSSyncedDirectory (Swift)

**Framework:** GameSave  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A cloud-synced directory for game-save data.

## Declaration

```swift
class GSSyncedDirectory
```

<a id="overview"></a>

## Overview

To get an instance of the directory, call [open(forContainerIdentifier:)](gssynceddirectory/open%28forcontaineridentifier_%29.md), which returns the directory for the iCloud container associated with the specified identifier. Calling this method starts syncing the directory in the background on the specified container. When the game needs to access the contents of the directory, show a UI while the directory fully syncs using the [finishSyncing(\_:completionHandler:)](gssynceddirectory/finishsyncing%28__completionhandler_%29.md) method. If you’re showing your own UI, call the [finishSyncing(completionHandler:)](gssynceddirectory/finishsyncing%28completionhandler_%29.md) method to wait for the directory to finish syncing.

After the directory is ready to use, syncing pauses until you close the directory object or the object is deallocated. To resume syncing during the game, close and re-open the directory by calling [close()](gssynceddirectory/close%28%29.md) and then [open(forContainerIdentifier:)](gssynceddirectory/open%28forcontaineridentifier_%29.md).

## Topics

### Accessing a directory

- [open(forContainerIdentifier:)](gssynceddirectory/open%28forcontaineridentifier_%29.md): Requests an instance of the game-save directory.
- [directoryState](gssynceddirectory/directorystate.md): The state of the directory.
- [GSSyncedDirectoryState](gssynceddirectorystate.md): Represents the state and its associated properties of the directory

### Syncing a directory

- [finishSyncing(\_:completionHandler:)](gssynceddirectory/finishsyncing%28__completionhandler_%29.md): Waits for the directory sync to complete, showing the sync’s progress in a modal alert.
- [finishSyncing(completionHandler:)](gssynceddirectory/finishsyncing%28completionhandler_%29.md): Waits for the directory sync to complete, without showing any user interface.

### Resolving conflicts

- [GSSyncedDirectoryVersion](gssynceddirectoryversion.md)
- [resolveConflicts(with:)](gssynceddirectory/resolveconflicts%28with_%29.md): Indicates that you resolved a conflict.

### Finishing with a directory

- [triggerPendingUpload(completionHandler:)](gssynceddirectory/triggerpendingupload%28completionhandler_%29.md): Triggers an upload of the directory for any changes that were pending.
- [close()](gssynceddirectory/close%28%29.md): Closes the directory, and resumes syncing the directory to the cloud.

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

# GSSyncedDirectory (Objective-C)

**Framework:** GameSave  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A cloud-synced directory for game-save data.

## Declaration

```objectivec
@interface GSSyncedDirectory : NSObject
```

<a id="overview"></a>

## Overview

To get an instance of the directory, call [openDirectoryForContainerIdentifier:](gssynceddirectory/open%28forcontaineridentifier_%29.md), which returns the directory for the iCloud container associated with the specified identifier. Calling this method starts syncing the directory in the background on the specified container. When the game needs to access the contents of the directory, show a UI while the directory fully syncs using the [finishSyncing:completionHandler:](gssynceddirectory/finishsyncing%28__completionhandler_%29.md) method. If you’re showing your own UI, call the [finishSyncingWithCompletionHandler:](gssynceddirectory/finishsyncing%28completionhandler_%29.md) method to wait for the directory to finish syncing.

After the directory is ready to use, syncing pauses until you close the directory object or the object is deallocated. To resume syncing during the game, close and re-open the directory by calling [close](gssynceddirectory/close%28%29.md) and then [openDirectoryForContainerIdentifier:](gssynceddirectory/open%28forcontaineridentifier_%29.md).

## Topics

### Accessing a directory

- [openDirectoryForContainerIdentifier:](gssynceddirectory/open%28forcontaineridentifier_%29.md): Requests an instance of the game-save directory.
- [directoryState](gssynceddirectory/directorystate.md): The state of the directory.
- [GSSyncedDirectoryState](gssynceddirectorystate.md): Represents the state and its associated properties of the directory

### Syncing a directory

- [finishSyncing:completionHandler:](gssynceddirectory/finishsyncing%28__completionhandler_%29.md): Waits for the directory sync to complete, showing the sync’s progress in a modal alert.
- [finishSyncingWithCompletionHandler:](gssynceddirectory/finishsyncing%28completionhandler_%29.md): Waits for the directory sync to complete, without showing any user interface.

### Resolving conflicts

- [GSSyncedDirectoryVersion](gssynceddirectoryversion.md)
- [resolveConflictsWithVersion:](gssynceddirectory/resolveconflicts%28with_%29.md): Indicates that you resolved a conflict.

### Finishing with a directory

- [triggerPendingUploadWithCompletionHandler:](gssynceddirectory/triggerpendingupload%28completionhandler_%29.md): Triggers an upload of the directory for any changes that were pending.
- [close](gssynceddirectory/close%28%29.md): Closes the directory, and resumes syncing the directory to the cloud.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
