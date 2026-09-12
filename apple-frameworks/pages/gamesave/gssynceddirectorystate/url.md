> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gssynceddirectorystate/url](https://developer.apple.com/documentation/gamesave/gssynceddirectorystate/url)

# url (Swift)

**Framework:** GameSave  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The URL of a directory to read and write game-save data in.

## Declaration

```swift
var url: URL? { get }
```

<a id="discussion"></a>

## Discussion

This property’s value is `nil` unless the state is `GSSyncStateReady`, `GSSyncStateOffline`, or `GSSyncStateLocal`.

## See Also

### Directory state information

- [GSSyncState](../gssyncstate.md)
- [state](state.md): Specifies the current state of the directory
- [conflictedVersions](conflictedversions.md): The conflicting versions.
- [error](error.md): The error preventing you from using the directory.

# url (Objective-C)

**Framework:** GameSave  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The URL of a directory to read and write game-save data in.

## Declaration

```objectivec
@property (readonly, nullable) NSURL * url;
```

<a id="discussion"></a>

## Discussion

This property’s value is `nil` unless the state is `GSSyncStateReady`, `GSSyncStateOffline`, or `GSSyncStateLocal`.

## See Also

### Directory state information

- [GSSyncState](../gssyncstate.md)
- [state](state.md): Specifies the current state of the directory
- [conflictedVersions](conflictedversions.md): The conflicting versions.
- [error](error.md): The error preventing you from using the directory.
