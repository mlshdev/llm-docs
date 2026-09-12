> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gssyncstate](https://developer.apple.com/documentation/gamesave/gssyncstate)

# GSSyncState (Swift)

**Framework:** GameSave  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
enum GSSyncState
```

## Topics

### Directory states

- [GSSyncState.closed](gssyncstate/closed.md): The directory is closed.
- [GSSyncState.conflicted](gssyncstate/conflicted.md): The directory has conflicts with the cloud, which the game needs to resolve.
- [GSSyncState.error](gssyncstate/error.md): The directory is in error state and can’t be used.
- [GSSyncState.local](gssyncstate/local.md): The directory is local-only and not synced to iCloud.
- [GSSyncState.offline](gssyncstate/offline.md): The directory is available locally, but not fully synced because the device is offline.
- [GSSyncState.ready](gssyncstate/ready.md): The directory is fully synced and ready to use.
- [GSSyncState.syncing](gssyncstate/syncing.md): The directory is currently syncing and is not ready yet.

### Creating a directory state

- [init(rawValue:)](gssyncstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Directory state information

- [state](gssynceddirectorystate/state.md): Specifies the current state of the directory
- [conflictedVersions](gssynceddirectorystate/conflictedversions.md): The conflicting versions.
- [error](gssynceddirectorystate/error.md): The error preventing you from using the directory.
- [url](gssynceddirectorystate/url.md): The URL of a directory to read and write game-save data in.

# GSSyncState (Objective-C)

**Framework:** GameSave  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
enum GSSyncState : NSInteger;
```

## Topics

### Directory states

- [GSSyncStateClosed](gssyncstate/closed.md): The directory is closed.
- [GSSyncStateConflicted](gssyncstate/conflicted.md): The directory has conflicts with the cloud, which the game needs to resolve.
- [GSSyncStateError](gssyncstate/error.md): The directory is in error state and can’t be used.
- [GSSyncStateLocal](gssyncstate/local.md): The directory is local-only and not synced to iCloud.
- [GSSyncStateOffline](gssyncstate/offline.md): The directory is available locally, but not fully synced because the device is offline.
- [GSSyncStateReady](gssyncstate/ready.md): The directory is fully synced and ready to use.
- [GSSyncStateSyncing](gssyncstate/syncing.md): The directory is currently syncing and is not ready yet.

## See Also

### Directory state information

- [state](gssynceddirectorystate/state.md): Specifies the current state of the directory
- [conflictedVersions](gssynceddirectorystate/conflictedversions.md): The conflicting versions.
- [error](gssynceddirectorystate/error.md): The error preventing you from using the directory.
- [url](gssynceddirectorystate/url.md): The URL of a directory to read and write game-save data in.
