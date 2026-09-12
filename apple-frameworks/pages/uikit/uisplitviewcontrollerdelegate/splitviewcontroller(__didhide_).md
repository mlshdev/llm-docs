> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:didhide:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:didhide:))

# splitViewController(\_:didHide:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Tells the delegate that the system completed hiding the specified column.

## Declaration

```swift
optional func splitViewController(_ svc: UISplitViewController, didHide column: UISplitViewController.Column)
```

## Parameters

- `svc`: The split view controller whose column the system completed hiding.
- `column`: The column the system completed hiding. See [UISplitViewController.Column](../uisplitviewcontroller/column.md) for possible values.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to column-style split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

The split view controller calls this method when the system completes hiding one of its columns; for example, when a person rotates the device. The system doesn’t call this method when you hide a column programmatically with [hide(\_:)](../uisplitviewcontroller/hide%28__%29.md). Use this method to perform any updates after hiding the column. You can use the split view controller’s [transitionCoordinator](../uiviewcontroller/transitioncoordinator.md) to coordinate any of your animations alongside the transition animation.

## See Also

### Collapsing the interface

- [splitViewController(\_:topColumnForCollapsingToProposedTopColumn:)](splitviewcontroller%28__topcolumnforcollapsingtoproposedtopcolumn_%29.md): Asks the delegate to provide the column to display after the split view interface collapses.
- [splitViewController(\_:willHide:)](splitviewcontroller%28__willhide_%29.md): Tells the delegate that the specified column is about to be hidden.
- [splitViewControllerDidCollapse(\_:)](splitviewcontrollerdidcollapse%28__%29.md): Tells the delegate that the split view controller interface has collapsed.

# splitViewController:didHideColumn: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Tells the delegate that the system completed hiding the specified column.

## Declaration

```objectivec
- (void) splitViewController:(UISplitViewController *) svc didHideColumn:(UISplitViewControllerColumn) column;
```

## Parameters

- `svc`: The split view controller whose column the system completed hiding.
- `column`: The column the system completed hiding. See [UISplitViewControllerColumn](../uisplitviewcontroller/column.md) for possible values.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to column-style split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

The split view controller calls this method when the system completes hiding one of its columns; for example, when a person rotates the device. The system doesn’t call this method when you hide a column programmatically with [hideColumn:](../uisplitviewcontroller/hide%28__%29.md). Use this method to perform any updates after hiding the column. You can use the split view controller’s [transitionCoordinator](../uiviewcontroller/transitioncoordinator.md) to coordinate any of your animations alongside the transition animation.

## See Also

### Collapsing the interface

- [splitViewController:topColumnForCollapsingToProposedTopColumn:](splitviewcontroller%28__topcolumnforcollapsingtoproposedtopcolumn_%29.md): Asks the delegate to provide the column to display after the split view interface collapses.
- [splitViewController:willHideColumn:](splitviewcontroller%28__willhide_%29.md): Tells the delegate that the specified column is about to be hidden.
- [splitViewControllerDidCollapse:](splitviewcontrollerdidcollapse%28__%29.md): Tells the delegate that the split view controller interface has collapsed.
