> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamesave/gssynceddirectory/finishsyncing(_:completionhandler:)](https://developer.apple.com/documentation/gamesave/gssynceddirectory/finishsyncing(_:completionhandler:))

# finishSyncing(\_:completionHandler:) (Swift)

**Framework:** GameSave  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Waits for the directory sync to complete, showing the sync’s progress in a modal alert.

## Declaration

```swift
func finishSyncing(_ statusDisplay: UIWindow, completionHandler completion: @escaping @Sendable () -> Void)
```

```swift
func finishSyncing(_ statusDisplay: UIWindow) async
```

```swift
func finishSyncing(_ statusDisplay: NSWindow, completionHandler completion: @escaping @Sendable () -> Void)
```

```swift
func finishSyncing(_ statusDisplay: NSWindow) async
```

## Parameters

- `statusDisplay`: The window where the system shows progress and alerts.
- `completion`: The block that GameSave calls after syncing finishes.

<a id="discussion"></a>

## Discussion

If the sync results in a conflict, the framework displays a conflict resolution UI for the user to chose a version that will be used. If the user isn’t signed in to iCloud or iCloud drive, the framework informs the user and then switches to local saving.

## See Also

### Syncing a directory

- [finishSyncing(completionHandler:)](finishsyncing%28completionhandler_%29.md): Waits for the directory sync to complete, without showing any user interface.

# finishSyncing:completionHandler: (Objective-C)

**Framework:** GameSave  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Waits for the directory sync to complete, showing the sync’s progress in a modal alert.

## Declaration

```objectivec
- (void) finishSyncing:(UIWindow *) statusDisplay completionHandler:(void (^)()) completion;
```

```objectivec
- (void) finishSyncing:(NSWindow *) statusDisplay completionHandler:(void (^)()) completion;
```

## Parameters

- `statusDisplay`: The window where the system shows progress and alerts.
- `completion`: The block that GameSave calls after syncing finishes.

<a id="discussion"></a>

## Discussion

If the sync results in a conflict, the framework displays a conflict resolution UI for the user to chose a version that will be used. If the user isn’t signed in to iCloud or iCloud drive, the framework informs the user and then switches to local saving.

## See Also

### Syncing a directory

- [finishSyncingWithCompletionHandler:](finishsyncing%28completionhandler_%29.md): Waits for the directory sync to complete, without showing any user interface.
