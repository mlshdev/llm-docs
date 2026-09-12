> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:topcolumnforcollapsingtoproposedtopcolumn:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:topcolumnforcollapsingtoproposedtopcolumn:))

# splitViewController(\_:topColumnForCollapsingToProposedTopColumn:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Asks the delegate to provide the column to display after the split view interface collapses.

## Declaration

```swift
optional func splitViewController(_ svc: UISplitViewController, topColumnForCollapsingToProposedTopColumn proposedTopColumn: UISplitViewController.Column) -> UISplitViewController.Column
```

## Parameters

- `svc`: The split view controller whose interface is collapsing.
- `proposedTopColumn`: The proposed column to display in the collapsed interface.

<a id="return-value"></a>

## Return Value

The column corresponding to the view controller to display in the collapsed interface. This value may be the same as `proposedTopColumn`, or you may return a different value.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to column-style split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

When the split view controller transitions from a horizontally regular to a horizontally compact size class, it calls this method and asks you for the column to display when that transition is complete. Use this method to customize the view controller you’re collapsing to. For example, you might use this opportunity to configure the interface in the view controller associated with the [UISplitViewController.Column.compact](../uisplitviewcontroller/column/compact.md) column before returning that column.

## See Also

### Collapsing the interface

- [splitViewController(\_:willHide:)](splitviewcontroller%28__willhide_%29.md): Tells the delegate that the specified column is about to be hidden.
- [splitViewController(\_:didHide:)](splitviewcontroller%28__didhide_%29.md): Tells the delegate that the system completed hiding the specified column.
- [splitViewControllerDidCollapse(\_:)](splitviewcontrollerdidcollapse%28__%29.md): Tells the delegate that the split view controller interface has collapsed.

# splitViewController:topColumnForCollapsingToProposedTopColumn: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Asks the delegate to provide the column to display after the split view interface collapses.

## Declaration

```objectivec
- (UISplitViewControllerColumn) splitViewController:(UISplitViewController *) svc topColumnForCollapsingToProposedTopColumn:(UISplitViewControllerColumn) proposedTopColumn;
```

## Parameters

- `svc`: The split view controller whose interface is collapsing.
- `proposedTopColumn`: The proposed column to display in the collapsed interface.

<a id="return-value"></a>

## Return Value

The column corresponding to the view controller to display in the collapsed interface. This value may be the same as `proposedTopColumn`, or you may return a different value.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to column-style split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

When the split view controller transitions from a horizontally regular to a horizontally compact size class, it calls this method and asks you for the column to display when that transition is complete. Use this method to customize the view controller you’re collapsing to. For example, you might use this opportunity to configure the interface in the view controller associated with the [UISplitViewControllerColumnCompact](../uisplitviewcontroller/column/compact.md) column before returning that column.

## See Also

### Collapsing the interface

- [splitViewController:willHideColumn:](splitviewcontroller%28__willhide_%29.md): Tells the delegate that the specified column is about to be hidden.
- [splitViewController:didHideColumn:](splitviewcontroller%28__didhide_%29.md): Tells the delegate that the system completed hiding the specified column.
- [splitViewControllerDidCollapse:](splitviewcontrollerdidcollapse%28__%29.md): Tells the delegate that the split view controller interface has collapsed.
