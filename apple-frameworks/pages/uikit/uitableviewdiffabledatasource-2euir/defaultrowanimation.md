> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdiffabledatasource-2euir/defaultrowanimation](https://developer.apple.com/documentation/uikit/uitableviewdiffabledatasource-2euir/defaultrowanimation)

# defaultRowAnimation

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

The default type of animation to use when inserting or deleting rows.

## Declaration

```swift
@MainActor @preconcurrency var defaultRowAnimation: UITableView.RowAnimation { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [UITableView.RowAnimation.automatic](../uitableview/rowanimation/automatic.md).

If you set the value of this property, the new value becomes the default row animation for the next update that uses [apply(\_:animatingDifferences:completion:)](apply%28__animatingdifferences_completion_%29.md).

## See Also

### Updating data

- [snapshot()](snapshot%28%29.md): Returns a representation of the current state of the data in the table view.
- [apply(\_:animatingDifferences:)](apply%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes.
- [apply(\_:animatingDifferences:completion:)](apply%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes and executing a completion handler.
- [applySnapshotUsingReloadData(\_:)](applysnapshotusingreloaddata%28__%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes.
- [applySnapshotUsingReloadData(\_:completion:)](applysnapshotusingreloaddata%28__completion_%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes, optionally executing a completion handler.
