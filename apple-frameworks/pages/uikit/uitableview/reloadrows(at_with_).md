> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/reloadrows(at:with:)](https://developer.apple.com/documentation/uikit/uitableview/reloadrows(at:with:))

# reloadRows(at:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Reloads the specified rows using the provided animation effect.

## Declaration

```swift
func reloadRows(at indexPaths: [IndexPath], with animation: UITableView.RowAnimation)
```

## Parameters

- `indexPaths`: An array of [NSIndexPath](../../foundation/nsindexpath.md) objects identifying the rows to reload.
- `animation`: A constant that indicates how the reloading is to be animated, for example, fade out or slide out from the bottom. See [UITableView.RowAnimation](rowanimation.md) for descriptions of these constants.

  The animation constant affects the direction in which both the old and the new rows slide. For example, if the animation constant is [UITableView.RowAnimation.right](rowanimation/right.md), the old rows slide out to the right and the new cells slide in from the right.

<a id="Discussion"></a>

## Discussion

Reloading a row causes the table view to ask its data source for a new cell for that row. The table animates that new cell in as it animates the old row out. Call this method if you want to alert the user that the value of a cell is changing. If, however, notifying the user isn’t important — that is, you just want to change the value that a cell is displaying — you can get the cell for a particular row and set its new value.

When this method is called in an animation block defined by the [beginUpdates()](beginupdates%28%29.md) and [endUpdates()](endupdates%28%29.md) methods, it behaves similarly to [deleteRows(at:with:)](deleterows%28at_with_%29.md). The indexes that [UITableView](../uitableview.md) passes to the method are specified in the state of the table view prior to any updates. This happens regardless of ordering of the insertion, deletion, and reloading method calls within the animation block.

## See Also

### Related Documentation

- [insertRows(at:with:)](insertrows%28at_with_%29.md): Inserts rows in the table view at the locations that an array of index paths identifies, with an option to animate the insertion.

### Reloading the table view

- [hasUncommittedUpdates](hasuncommittedupdates.md): A Boolean value that indicates whether the table view’s appearance contains changes that aren’t present in its data source.
- [reconfigureRows(at:)](reconfigurerows%28at_%29.md): Updates the data for the rows at the index paths you specify, preserving the existing cells for the rows.
- [reloadData()](reloaddata%28%29.md): Reloads the rows and sections of the table view.
- [reloadSections(\_:with:)](reloadsections%28__with_%29.md): Reloads the specified sections using the provided animation effect.
- [reloadSectionIndexTitles()](reloadsectionindextitles%28%29.md): Reloads the items in the index bar along the right side of the table view.

# reloadRowsAtIndexPaths:withRowAnimation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Reloads the specified rows using the provided animation effect.

## Declaration

```objectivec
- (void) reloadRowsAtIndexPaths:(NSArray<NSIndexPath *> *) indexPaths withRowAnimation:(UITableViewRowAnimation) animation;
```

## Parameters

- `indexPaths`: An array of [NSIndexPath](../../foundation/nsindexpath.md) objects identifying the rows to reload.
- `animation`: A constant that indicates how the reloading is to be animated, for example, fade out or slide out from the bottom. See [UITableViewRowAnimation](rowanimation.md) for descriptions of these constants.

  The animation constant affects the direction in which both the old and the new rows slide. For example, if the animation constant is [UITableViewRowAnimationRight](rowanimation/right.md), the old rows slide out to the right and the new cells slide in from the right.

<a id="Discussion"></a>

## Discussion

Reloading a row causes the table view to ask its data source for a new cell for that row. The table animates that new cell in as it animates the old row out. Call this method if you want to alert the user that the value of a cell is changing. If, however, notifying the user isn’t important — that is, you just want to change the value that a cell is displaying — you can get the cell for a particular row and set its new value.

When this method is called in an animation block defined by the [beginUpdates](beginupdates%28%29.md) and [endUpdates](endupdates%28%29.md) methods, it behaves similarly to [deleteRowsAtIndexPaths:withRowAnimation:](deleterows%28at_with_%29.md). The indexes that [UITableView](../uitableview.md) passes to the method are specified in the state of the table view prior to any updates. This happens regardless of ordering of the insertion, deletion, and reloading method calls within the animation block.

## See Also

### Related Documentation

- [insertRowsAtIndexPaths:withRowAnimation:](insertrows%28at_with_%29.md): Inserts rows in the table view at the locations that an array of index paths identifies, with an option to animate the insertion.

### Reloading the table view

- [hasUncommittedUpdates](hasuncommittedupdates.md): A Boolean value that indicates whether the table view’s appearance contains changes that aren’t present in its data source.
- [reconfigureRowsAtIndexPaths:](reconfigurerows%28at_%29.md): Updates the data for the rows at the index paths you specify, preserving the existing cells for the rows.
- [reloadData](reloaddata%28%29.md): Reloads the rows and sections of the table view.
- [reloadSections:withRowAnimation:](reloadsections%28__with_%29.md): Reloads the specified sections using the provided animation effect.
- [reloadSectionIndexTitles](reloadsectionindextitles%28%29.md): Reloads the items in the index bar along the right side of the table view.
