> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:willhide:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:willhide:))

# splitViewController(\_:willHide:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that the specified column is about to be hidden.

## Declaration

```swift
optional func splitViewController(_ svc: UISplitViewController, willHide column: UISplitViewController.Column)
```

## Parameters

- `svc`: The split view controller whose column is being hidden.
- `column`: The column to be hidden. See [UISplitViewController.Column](../uisplitviewcontroller/column.md) for possible values.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to column-style split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

The split view controller calls this method when the system is preparing to hide one of its columns; for example, when a person rotates the device. The system doesn’t call this method when you hide a column programmatically with [hide(\_:)](../uisplitviewcontroller/hide%28__%29.md). Use this method to perform any customization associated with hiding the column. You can use the split view controller’s [transitionCoordinator](../uiviewcontroller/transitioncoordinator.md) to coordinate any of your animations alongside the transition animation.

## See Also

### Collapsing the interface

- [splitViewController(\_:topColumnForCollapsingToProposedTopColumn:)](splitviewcontroller%28__topcolumnforcollapsingtoproposedtopcolumn_%29.md): Asks the delegate to provide the column to display after the split view interface collapses.
- [splitViewController(\_:didHide:)](splitviewcontroller%28__didhide_%29.md): Tells the delegate that the system completed hiding the specified column.
- [splitViewControllerDidCollapse(\_:)](splitviewcontrollerdidcollapse%28__%29.md): Tells the delegate that the split view controller interface has collapsed.

# splitViewController:willHideColumn: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that the specified column is about to be hidden.

## Declaration

```objectivec
- (void) splitViewController:(UISplitViewController *) svc willHideColumn:(UISplitViewControllerColumn) column;
```

## Parameters

- `svc`: The split view controller whose column is being hidden.
- `column`: The column to be hidden. See [UISplitViewControllerColumn](../uisplitviewcontroller/column.md) for possible values.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to column-style split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

The split view controller calls this method when the system is preparing to hide one of its columns; for example, when a person rotates the device. The system doesn’t call this method when you hide a column programmatically with [hideColumn:](../uisplitviewcontroller/hide%28__%29.md). Use this method to perform any customization associated with hiding the column. You can use the split view controller’s [transitionCoordinator](../uiviewcontroller/transitioncoordinator.md) to coordinate any of your animations alongside the transition animation.

## See Also

### Collapsing the interface

- [splitViewController:topColumnForCollapsingToProposedTopColumn:](splitviewcontroller%28__topcolumnforcollapsingtoproposedtopcolumn_%29.md): Asks the delegate to provide the column to display after the split view interface collapses.
- [splitViewController:didHideColumn:](splitviewcontroller%28__didhide_%29.md): Tells the delegate that the system completed hiding the specified column.
- [splitViewControllerDidCollapse:](splitviewcontrollerdidcollapse%28__%29.md): Tells the delegate that the split view controller interface has collapsed.
