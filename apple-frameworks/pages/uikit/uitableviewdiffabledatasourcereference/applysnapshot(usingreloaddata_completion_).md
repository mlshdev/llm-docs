> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdiffabledatasourcereference/applysnapshot(usingreloaddata:completion:)](https://developer.apple.com/documentation/uikit/uitableviewdiffabledatasourcereference/applysnapshot(usingreloaddata:completion:))

# applySnapshot(usingReloadData:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes, optionally executing a completion handler.

## Declaration

```swift
func applySnapshot(usingReloadData snapshot: NSDiffableDataSourceSnapshotReference, completion: (() -> Void)? = nil)
```

## Parameters

- `snapshot`: The snapshot that reflects the new state of the data in the table view.
- `completion`: A closure to execute when the reload completes. This closure has no return value and takes no parameters. The system calls this closure from the main queue.

<a id="Discussion"></a>

## Discussion

The system interrupts any ongoing item animations and immediately reloads the table view’s content.

You can safely call this method from a background queue, but you must do so consistently in your app. Always call this method exclusively from the main queue or from a background queue.

## See Also

### Updating data

- [snapshot()](snapshot%28%29.md): Returns a representation of the current state of the data in the table view.
- [applySnapshot(\_:animatingDifferences:)](applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes.
- [applySnapshot(\_:animatingDifferences:completion:)](applysnapshot%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes and executing a completion handler.
- [applySnapshot(usingReloadData:)](applysnapshot%28usingreloaddata_%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes.
- [defaultRowAnimation](defaultrowanimation.md): The default type of animation to use when inserting or deleting rows.

# applySnapshotUsingReloadData:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes, optionally executing a completion handler.

## Declaration

```objectivec
- (void) applySnapshotUsingReloadData:(NSDiffableDataSourceSnapshot<id,id> *) snapshot completion:(void (^)()) completion;
```

## Parameters

- `snapshot`: The snapshot that reflects the new state of the data in the table view.
- `completion`: A closure to execute when the reload completes. This closure has no return value and takes no parameters. The system calls this closure from the main queue.

<a id="Discussion"></a>

## Discussion

The system interrupts any ongoing item animations and immediately reloads the table view’s content.

You can safely call this method from a background queue, but you must do so consistently in your app. Always call this method exclusively from the main queue or from a background queue.

## See Also

### Updating data

- [snapshot](snapshot%28%29.md): Returns a representation of the current state of the data in the table view.
- [applySnapshot:animatingDifferences:](applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes.
- [applySnapshot:animatingDifferences:completion:](applysnapshot%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes and executing a completion handler.
- [applySnapshotUsingReloadData:](applysnapshot%28usingreloaddata_%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes.
- [defaultRowAnimation](defaultrowanimation.md): The default type of animation to use when inserting or deleting rows.
