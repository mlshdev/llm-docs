> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdiffabledatasourcereference/applysnapshot(_:animatingdifferences:completion:)](https://developer.apple.com/documentation/uikit/uitableviewdiffabledatasourcereference/applysnapshot(_:animatingdifferences:completion:))

# applySnapshot(\_:animatingDifferences:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes and executing a completion handler.

## Declaration

```swift
func applySnapshot(_ snapshot: NSDiffableDataSourceSnapshotReference, animatingDifferences: Bool, completion: (() -> Void)? = nil)
```

## Parameters

- `snapshot`: The snapshot that reflects the new state of the data in the table view.
- `animatingDifferences`: If [true](https://developer.apple.com/documentation/swift/true), the system animates the updates to the table view. If [false](https://developer.apple.com/documentation/swift/false), the system doesn’t animate the updates to the table view.
- `completion`: A closure to execute when the animations are complete. This closure has no return value and takes no parameters. The system calls this closure from the main queue.

<a id="Discussion"></a>

## Discussion

The diffable data source computes the difference between the table view’s current state and the new state in the applied snapshot, which is an O(*n*) operation, where *n* is the number of items in the snapshot.

You can safely call this method from a background queue, but you must do so consistently in your app. Always call this method exclusively from the main queue or from a background queue.

## See Also

### Updating data

- [snapshot()](snapshot%28%29.md): Returns a representation of the current state of the data in the table view.
- [applySnapshot(\_:animatingDifferences:)](applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes.
- [applySnapshot(usingReloadData:)](applysnapshot%28usingreloaddata_%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes.
- [applySnapshot(usingReloadData:completion:)](applysnapshot%28usingreloaddata_completion_%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes, optionally executing a completion handler.
- [defaultRowAnimation](defaultrowanimation.md): The default type of animation to use when inserting or deleting rows.

# applySnapshot:animatingDifferences:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes and executing a completion handler.

## Declaration

```objectivec
- (void) applySnapshot:(NSDiffableDataSourceSnapshot<id,id> *) snapshot animatingDifferences:(BOOL) animatingDifferences completion:(void (^)()) completion;
```

## Parameters

- `snapshot`: The snapshot that reflects the new state of the data in the table view.
- `animatingDifferences`: If [true](https://developer.apple.com/documentation/swift/true), the system animates the updates to the table view. If [false](https://developer.apple.com/documentation/swift/false), the system doesn’t animate the updates to the table view.
- `completion`: A closure to execute when the animations are complete. This closure has no return value and takes no parameters. The system calls this closure from the main queue.

<a id="Discussion"></a>

## Discussion

The diffable data source computes the difference between the table view’s current state and the new state in the applied snapshot, which is an O(*n*) operation, where *n* is the number of items in the snapshot.

You can safely call this method from a background queue, but you must do so consistently in your app. Always call this method exclusively from the main queue or from a background queue.

## See Also

### Updating data

- [snapshot](snapshot%28%29.md): Returns a representation of the current state of the data in the table view.
- [applySnapshot:animatingDifferences:](applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes.
- [applySnapshotUsingReloadData:](applysnapshot%28usingreloaddata_%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes.
- [applySnapshotUsingReloadData:completion:](applysnapshot%28usingreloaddata_completion_%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes, optionally executing a completion handler.
- [defaultRowAnimation](defaultrowanimation.md): The default type of animation to use when inserting or deleting rows.
