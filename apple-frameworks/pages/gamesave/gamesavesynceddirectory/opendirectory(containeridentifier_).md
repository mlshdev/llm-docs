> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gamesavesynceddirectory/opendirectory(containeridentifier:)](https://developer.apple.com/documentation/gamesave/gamesavesynceddirectory/opendirectory(containeridentifier:))

# openDirectory(containerIdentifier:)

**Framework:** GameSave  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Requests an instance of the game-save directory.

## Declaration

```swift
class func openDirectory(containerIdentifier: String? = nil) -> GameSaveSyncedDirectory
```

## Parameters

- `containerIdentifier`: The identifier of the directory to request. If you pass `nil`, this method uses the first container identifier listed in the `com.apple.developer.icloud-container-identifiers` entitlements array.

<a id="discussion"></a>

## Discussion

This method returns immediately, and starts syncing the directory in the background. To wait for syncing to complete, call the [finishSyncing()](finishsyncing%28%29.md) method.

## See Also

### Accessing a directory

- [GameSaveSyncedDirectory.State](state-swift.enum.md): The state of the directory.
- [state](state-swift.property.md): The state that the game-save directory is in.
