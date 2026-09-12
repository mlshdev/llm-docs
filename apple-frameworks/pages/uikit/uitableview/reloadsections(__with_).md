> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/reloadsections(_:with:)](https://developer.apple.com/documentation/uikit/uitableview/reloadsections(_:with:))

# reloadSections(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Reloads the specified sections using the provided animation effect.

## Declaration

```swift
func reloadSections(_ sections: IndexSet, with animation: UITableView.RowAnimation)
```

## Parameters

- `sections`: An index set identifying the sections to reload.
- `animation`: A constant that indicates how the reloading is to be animated, for example, fade out or slide out from the bottom. See [UITableView.RowAnimation](rowanimation.md) for descriptions of these constants.

  The animation constant affects the direction in which both the old and the new section rows slide. For example, if the animation constant is [UITableView.RowAnimation.right](rowanimation/right.md), the old rows slide out to the right and the new cells slide in from the right.

<a id="Discussion"></a>

## Discussion

Calling this method causes the table view to ask its data source for new cells for the specified sections. The table view animates the insertion of new cells in as it animates the old cells out. Call this method if you want to alert the user that the values of the designated sections are changing. If, however, you just want to change values in cells of the specified sections without alerting the user, you can get those cells and directly set their new values.

When this method is called in an animation block defined by the [beginUpdates()](beginupdates%28%29.md) and [endUpdates()](endupdates%28%29.md) methods, it behaves similarly to [deleteSections(\_:with:)](deletesections%28__with_%29.md). The indexes that `UITableView` passes to the method are specified in the state of the table view prior to any updates. This happens regardless of ordering of the insertion, deletion, and reloading method calls within the animation block.

## See Also

### Related Documentation

- [insertSections(\_:with:)](insertsections%28__with_%29.md): Inserts one or more sections in the table view, with an option to animate the insertion.

### Reloading the table view

- [hasUncommittedUpdates](hasuncommittedupdates.md): A Boolean value that indicates whether the table view’s appearance contains changes that aren’t present in its data source.
- [reconfigureRows(at:)](reconfigurerows%28at_%29.md): Updates the data for the rows at the index paths you specify, preserving the existing cells for the rows.
- [reloadData()](reloaddata%28%29.md): Reloads the rows and sections of the table view.
- [reloadRows(at:with:)](reloadrows%28at_with_%29.md): Reloads the specified rows using the provided animation effect.
- [reloadSectionIndexTitles()](reloadsectionindextitles%28%29.md): Reloads the items in the index bar along the right side of the table view.

# reloadSections:withRowAnimation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Reloads the specified sections using the provided animation effect.

## Declaration

```objectivec
- (void) reloadSections:(NSIndexSet *) sections withRowAnimation:(UITableViewRowAnimation) animation;
```

## Parameters

- `sections`: An index set identifying the sections to reload.
- `animation`: A constant that indicates how the reloading is to be animated, for example, fade out or slide out from the bottom. See [UITableViewRowAnimation](rowanimation.md) for descriptions of these constants.

  The animation constant affects the direction in which both the old and the new section rows slide. For example, if the animation constant is [UITableViewRowAnimationRight](rowanimation/right.md), the old rows slide out to the right and the new cells slide in from the right.

<a id="Discussion"></a>

## Discussion

Calling this method causes the table view to ask its data source for new cells for the specified sections. The table view animates the insertion of new cells in as it animates the old cells out. Call this method if you want to alert the user that the values of the designated sections are changing. If, however, you just want to change values in cells of the specified sections without alerting the user, you can get those cells and directly set their new values.

When this method is called in an animation block defined by the [beginUpdates](beginupdates%28%29.md) and [endUpdates](endupdates%28%29.md) methods, it behaves similarly to [deleteSections:withRowAnimation:](deletesections%28__with_%29.md). The indexes that `UITableView` passes to the method are specified in the state of the table view prior to any updates. This happens regardless of ordering of the insertion, deletion, and reloading method calls within the animation block.

## See Also

### Related Documentation

- [insertSections:withRowAnimation:](insertsections%28__with_%29.md): Inserts one or more sections in the table view, with an option to animate the insertion.

### Reloading the table view

- [hasUncommittedUpdates](hasuncommittedupdates.md): A Boolean value that indicates whether the table view’s appearance contains changes that aren’t present in its data source.
- [reconfigureRowsAtIndexPaths:](reconfigurerows%28at_%29.md): Updates the data for the rows at the index paths you specify, preserving the existing cells for the rows.
- [reloadData](reloaddata%28%29.md): Reloads the rows and sections of the table view.
- [reloadRowsAtIndexPaths:withRowAnimation:](reloadrows%28at_with_%29.md): Reloads the specified rows using the provided animation effect.
- [reloadSectionIndexTitles](reloadsectionindextitles%28%29.md): Reloads the items in the index bar along the right side of the table view.
