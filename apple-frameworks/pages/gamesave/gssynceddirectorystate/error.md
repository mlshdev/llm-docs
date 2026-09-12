> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gssynceddirectorystate/error](https://developer.apple.com/documentation/gamesave/gssynceddirectorystate/error)

# error (Swift)

**Framework:** GameSave  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The error preventing you from using the directory.

## Declaration

```swift
var error: (any Error)? { get }
```

<a id="discussion"></a>

## Discussion

This property’s value is `nil` unless the state is `GSSyncStateError`.

## See Also

### Directory state information

- [GSSyncState](../gssyncstate.md)
- [state](state.md): Specifies the current state of the directory
- [conflictedVersions](conflictedversions.md): The conflicting versions.
- [url](url.md): The URL of a directory to read and write game-save data in.

# error (Objective-C)

**Framework:** GameSave  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The error preventing you from using the directory.

## Declaration

```objectivec
@property (readonly, nullable) NSError * error;
```

<a id="discussion"></a>

## Discussion

This property’s value is `nil` unless the state is `GSSyncStateError`.

## See Also

### Directory state information

- [GSSyncState](../gssyncstate.md)
- [state](state.md): Specifies the current state of the directory
- [conflictedVersions](conflictedversions.md): The conflicting versions.
- [url](url.md): The URL of a directory to read and write game-save data in.
