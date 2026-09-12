> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdiffabledatasourcereference/defaultrowanimation](https://developer.apple.com/documentation/uikit/uitableviewdiffabledatasourcereference/defaultrowanimation)

# defaultRowAnimation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The default type of animation to use when inserting or deleting rows.

## Declaration

```swift
var defaultRowAnimation: UITableView.RowAnimation { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [UITableView.RowAnimation.automatic](../uitableview/rowanimation/automatic.md).

If you set the value of this property, the new value becomes the default row animation for the next update that uses [applySnapshot(\_:animatingDifferences:)](applysnapshot%28__animatingdifferences_%29.md) or [applySnapshot(\_:animatingDifferences:completion:)](applysnapshot%28__animatingdifferences_completion_%29.md).

## See Also

### Updating data

- [snapshot()](snapshot%28%29.md): Returns a representation of the current state of the data in the table view.
- [applySnapshot(\_:animatingDifferences:)](applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes.
- [applySnapshot(\_:animatingDifferences:completion:)](applysnapshot%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes and executing a completion handler.
- [applySnapshot(usingReloadData:)](applysnapshot%28usingreloaddata_%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes.
- [applySnapshot(usingReloadData:completion:)](applysnapshot%28usingreloaddata_completion_%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes, optionally executing a completion handler.

# defaultRowAnimation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The default type of animation to use when inserting or deleting rows.

## Declaration

```objectivec
@property (nonatomic) UITableViewRowAnimation defaultRowAnimation;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [UITableViewRowAnimationAutomatic](../uitableview/rowanimation/automatic.md).

If you set the value of this property, the new value becomes the default row animation for the next update that uses [applySnapshot:animatingDifferences:](applysnapshot%28__animatingdifferences_%29.md) or [applySnapshot:animatingDifferences:completion:](applysnapshot%28__animatingdifferences_completion_%29.md).

## See Also

### Updating data

- [snapshot](snapshot%28%29.md): Returns a representation of the current state of the data in the table view.
- [applySnapshot:animatingDifferences:](applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes.
- [applySnapshot:animatingDifferences:completion:](applysnapshot%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes and executing a completion handler.
- [applySnapshotUsingReloadData:](applysnapshot%28usingreloaddata_%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes.
- [applySnapshotUsingReloadData:completion:](applysnapshot%28usingreloaddata_completion_%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes, optionally executing a completion handler.
