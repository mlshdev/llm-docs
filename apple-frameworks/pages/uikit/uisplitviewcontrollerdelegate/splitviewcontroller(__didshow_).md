> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:didshow:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:didshow:))

# splitViewController(\_:didShow:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Tells the delegate that the system completed showing the specified column.

## Declaration

```swift
optional func splitViewController(_ svc: UISplitViewController, didShow column: UISplitViewController.Column)
```

## Parameters

- `svc`: The split view controller whose column the system completed showing.
- `column`: The column the system completed showing. See [UISplitViewController.Column](../uisplitviewcontroller/column.md) for possible values.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to column-style split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

The split view controller calls this method when the system completes showing one of its columns; for example, when a person rotates the device. The system doesn’t call this method when you display the column programmatically with [show(\_:)](../uisplitviewcontroller/show%28__%29.md). Use this method to perform any updates after  showing the column. You can use the split view controller’s [transitionCoordinator](../uiviewcontroller/transitioncoordinator.md) to coordinate any of your animations alongside the transition animation.

## See Also

### Expanding the interface

- [splitViewController(\_:displayModeForExpandingToProposedDisplayMode:)](splitviewcontroller%28__displaymodeforexpandingtoproposeddisplaymode_%29.md): Asks the delegate to provide the display mode to use after the split view interface expands.
- [splitViewController(\_:willShow:)](splitviewcontroller%28__willshow_%29.md): Tells the delegate that the specified column is about to be shown.
- [splitViewControllerDidExpand(\_:)](splitviewcontrollerdidexpand%28__%29.md): Tells the delegate that the split view controller interface has expanded.

# splitViewController:didShowColumn: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Tells the delegate that the system completed showing the specified column.

## Declaration

```objectivec
- (void) splitViewController:(UISplitViewController *) svc didShowColumn:(UISplitViewControllerColumn) column;
```

## Parameters

- `svc`: The split view controller whose column the system completed showing.
- `column`: The column the system completed showing. See [UISplitViewControllerColumn](../uisplitviewcontroller/column.md) for possible values.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to column-style split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

The split view controller calls this method when the system completes showing one of its columns; for example, when a person rotates the device. The system doesn’t call this method when you display the column programmatically with [showColumn:](../uisplitviewcontroller/show%28__%29.md). Use this method to perform any updates after  showing the column. You can use the split view controller’s [transitionCoordinator](../uiviewcontroller/transitioncoordinator.md) to coordinate any of your animations alongside the transition animation.

## See Also

### Expanding the interface

- [splitViewController:displayModeForExpandingToProposedDisplayMode:](splitviewcontroller%28__displaymodeforexpandingtoproposeddisplaymode_%29.md): Asks the delegate to provide the display mode to use after the split view interface expands.
- [splitViewController:willShowColumn:](splitviewcontroller%28__willshow_%29.md): Tells the delegate that the specified column is about to be shown.
- [splitViewControllerDidExpand:](splitviewcontrollerdidexpand%28__%29.md): Tells the delegate that the split view controller interface has expanded.
