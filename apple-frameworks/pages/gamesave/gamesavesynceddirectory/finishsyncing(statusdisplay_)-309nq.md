> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gamesavesynceddirectory/finishsyncing(statusdisplay:)-309nq](https://developer.apple.com/documentation/gamesave/gamesavesynceddirectory/finishsyncing(statusdisplay:)-309nq)

# finishSyncing(statusDisplay:)

**Framework:** GameSave  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Waits for the directory sync to complete, showing the sync’s progress in a modal alert.

## Declaration

```swift
func finishSyncing(statusDisplay window: NSWindow) async
```

## Parameters

- `window`: The window where the system shows progress and alerts.

<a id="discussion"></a>

## Discussion

If the sync results in a conflict, the framework displays a conflict resolution UI for the user to chose a version that will be used. If the user isn’t signed in to iCloud or iCloud drive, the framework informs the user and then switches to local saving.

## See Also

### Syncing a directory

- [finishSyncing()](finishsyncing%28%29.md): Waits for the directory sync to complete, without showing any user interface.
- [finishSyncing(statusDisplay:)](finishsyncing%28statusdisplay_%29-500el.md): Waits for the directory sync to complete, showing the sync’s progress in a modal alert.
