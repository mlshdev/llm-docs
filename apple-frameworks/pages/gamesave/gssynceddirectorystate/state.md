> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamesave/gssynceddirectorystate/state

# state (Swift)

**Framework:** GameSave  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Specifies the current state of the directory

## Declaration

```swift
var state: GSSyncState { get }
```

## See Also

### Directory state information

- [GSSyncState](../gssyncstate.md)
- [conflictedVersions](conflictedversions.md): The conflicting versions.
- [error](error.md): The error preventing you from using the directory.
- [url](url.md): The URL of a directory to read and write game-save data in.

# state (Objective-C)

**Framework:** GameSave  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Specifies the current state of the directory

## Declaration

```objectivec
@property (readonly) GSSyncState state;
```

## See Also

### Directory state information

- [GSSyncState](../gssyncstate.md)
- [conflictedVersions](conflictedversions.md): The conflicting versions.
- [error](error.md): The error preventing you from using the directory.
- [url](url.md): The URL of a directory to read and write game-save data in.
