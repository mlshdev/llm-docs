> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gssynceddirectory/open(forcontaineridentifier:)](https://developer.apple.com/documentation/gamesave/gssynceddirectory/open(forcontaineridentifier:))

# open(forContainerIdentifier:) (Swift)

**Framework:** GameSave  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Requests an instance of the game-save directory.

## Declaration

```swift
class func open(forContainerIdentifier containerIdentifier: String?) -> GSSyncedDirectory
```

## Parameters

- `containerIdentifier`: The identifier of the directory to request. If you pass `nil`, this method uses the first container identifier listed in the `com.apple.developer.icloud-container-identifiers` entitlements array.

<a id="discussion"></a>

## Discussion

This method returns immediately, and starts syncing the directory in the background. To wait for syncing to complete, call the [finishSyncing(completionHandler:)](finishsyncing%28completionhandler_%29.md) method.

## See Also

### Accessing a directory

- [directoryState](directorystate.md): The state of the directory.
- [GSSyncedDirectoryState](../gssynceddirectorystate.md): Represents the state and its associated properties of the directory

# openDirectoryForContainerIdentifier: (Objective-C)

**Framework:** GameSave  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Requests an instance of the game-save directory.

## Declaration

```objectivec
+ (GSSyncedDirectory *) openDirectoryForContainerIdentifier:(NSString *) containerIdentifier;
```

## Parameters

- `containerIdentifier`: The identifier of the directory to request. If you pass `nil`, this method uses the first container identifier listed in the `com.apple.developer.icloud-container-identifiers` entitlements array.

<a id="discussion"></a>

## Discussion

This method returns immediately, and starts syncing the directory in the background. To wait for syncing to complete, call the [finishSyncingWithCompletionHandler:](finishsyncing%28completionhandler_%29.md) method.

## See Also

### Accessing a directory

- [directoryState](directorystate.md): The state of the directory.
- [GSSyncedDirectoryState](../gssynceddirectorystate.md): Represents the state and its associated properties of the directory
