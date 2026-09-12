> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gssynceddirectory/finishsyncing(completionhandler:)](https://developer.apple.com/documentation/gamesave/gssynceddirectory/finishsyncing(completionhandler:))

# finishSyncing(completionHandler:) (Swift)

**Framework:** GameSave  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Waits for the directory sync to complete, without showing any user interface.

## Declaration

```swift
func finishSyncing(completionHandler completion: @escaping @Sendable () -> Void)
```

```swift
func finishSyncing() async
```

<a id="discussion"></a>

## Discussion

Use this method to wait if your app displays its own syncing UI.

## See Also

### Syncing a directory

- [finishSyncing(\_:completionHandler:)](finishsyncing%28__completionhandler_%29.md): Waits for the directory sync to complete, showing the sync’s progress in a modal alert.

# finishSyncingWithCompletionHandler: (Objective-C)

**Framework:** GameSave  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Waits for the directory sync to complete, without showing any user interface.

## Declaration

```objectivec
- (void) finishSyncingWithCompletionHandler:(void (^)()) completion;
```

<a id="discussion"></a>

## Discussion

Use this method to wait if your app displays its own syncing UI.

## See Also

### Syncing a directory

- [finishSyncing:completionHandler:](finishsyncing%28__completionhandler_%29.md): Waits for the directory sync to complete, showing the sync’s progress in a modal alert.
