> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gamesavesynceddirectory/finishsyncing()](https://developer.apple.com/documentation/gamesave/gamesavesynceddirectory/finishsyncing())

# finishSyncing()

**Framework:** GameSave  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Waits for the directory sync to complete, without showing any user interface.

## Declaration

```swift
func finishSyncing() async
```

<a id="discussion"></a>

## Discussion

Use this method to wait if your app displays its own syncing UI.

## See Also

### Syncing a directory

- [finishSyncing(statusDisplay:)](finishsyncing%28statusdisplay_%29-309nq.md): Waits for the directory sync to complete, showing the sync’s progress in a modal alert.
- [finishSyncing(statusDisplay:)](finishsyncing%28statusdisplay_%29-500el.md): Waits for the directory sync to complete, showing the sync’s progress in a modal alert.
