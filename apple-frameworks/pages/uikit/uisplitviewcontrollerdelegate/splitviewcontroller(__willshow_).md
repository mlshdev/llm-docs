> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:willshow:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:willshow:))

# splitViewController(\_:willShow:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that the specified column is about to be shown.

## Declaration

```swift
optional func splitViewController(_ svc: UISplitViewController, willShow column: UISplitViewController.Column)
```

## Parameters

- `svc`: The split view controller whose column is being shown.
- `column`: The column to be shown. See [UISplitViewController.Column](../uisplitviewcontroller/column.md) for possible values.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to column-style split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

The split view controller calls this method when the system is preparing to show one of its columns; for example, when a person rotates the device. The system doesn’t call this method when you display the column programmatically with [show(\_:)](../uisplitviewcontroller/show%28__%29.md). Use this method to perform any customization associated with showing the column. You can use the split view controller’s [transitionCoordinator](../uiviewcontroller/transitioncoordinator.md) to coordinate any of your animations alongside the transition animation.

## See Also

### Expanding the interface

- [splitViewController(\_:displayModeForExpandingToProposedDisplayMode:)](splitviewcontroller%28__displaymodeforexpandingtoproposeddisplaymode_%29.md): Asks the delegate to provide the display mode to use after the split view interface expands.
- [splitViewController(\_:didShow:)](splitviewcontroller%28__didshow_%29.md): Tells the delegate that the system completed showing the specified column.
- [splitViewControllerDidExpand(\_:)](splitviewcontrollerdidexpand%28__%29.md): Tells the delegate that the split view controller interface has expanded.

# splitViewController:willShowColumn: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that the specified column is about to be shown.

## Declaration

```objectivec
- (void) splitViewController:(UISplitViewController *) svc willShowColumn:(UISplitViewControllerColumn) column;
```

## Parameters

- `svc`: The split view controller whose column is being shown.
- `column`: The column to be shown. See [UISplitViewControllerColumn](../uisplitviewcontroller/column.md) for possible values.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to column-style split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

The split view controller calls this method when the system is preparing to show one of its columns; for example, when a person rotates the device. The system doesn’t call this method when you display the column programmatically with [showColumn:](../uisplitviewcontroller/show%28__%29.md). Use this method to perform any customization associated with showing the column. You can use the split view controller’s [transitionCoordinator](../uiviewcontroller/transitioncoordinator.md) to coordinate any of your animations alongside the transition animation.

## See Also

### Expanding the interface

- [splitViewController:displayModeForExpandingToProposedDisplayMode:](splitviewcontroller%28__displaymodeforexpandingtoproposeddisplaymode_%29.md): Asks the delegate to provide the display mode to use after the split view interface expands.
- [splitViewController:didShowColumn:](splitviewcontroller%28__didshow_%29.md): Tells the delegate that the system completed showing the specified column.
- [splitViewControllerDidExpand:](splitviewcontrollerdidexpand%28__%29.md): Tells the delegate that the split view controller interface has expanded.
