> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:displaymodeforexpandingtoproposeddisplaymode:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:displaymodeforexpandingtoproposeddisplaymode:))

# splitViewController(\_:displayModeForExpandingToProposedDisplayMode:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Asks the delegate to provide the display mode to use after the split view interface expands.

## Declaration

```swift
optional func splitViewController(_ svc: UISplitViewController, displayModeForExpandingToProposedDisplayMode proposedDisplayMode: UISplitViewController.DisplayMode) -> UISplitViewController.DisplayMode
```

## Parameters

- `svc`: The split view controller whose interface is expanding.
- `proposedDisplayMode`: The proposed display mode to expand the interface to.

<a id="return-value"></a>

## Return Value

The display mode to expand the interface to. This value may be the same as `proposedDisplayMode`, or you may return a different value.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to column-style split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

When the split view controller transitions from a horizontally compact to a horizontally regular size class, it calls this method and asks you for the display mode to use when that transition is complete. Use this method to customize the display mode you’re expanding to. For example, you might use this opportunity to adjust column widths before returning the display mode to use.

## See Also

### Expanding the interface

- [splitViewController(\_:willShow:)](splitviewcontroller%28__willshow_%29.md): Tells the delegate that the specified column is about to be shown.
- [splitViewController(\_:didShow:)](splitviewcontroller%28__didshow_%29.md): Tells the delegate that the system completed showing the specified column.
- [splitViewControllerDidExpand(\_:)](splitviewcontrollerdidexpand%28__%29.md): Tells the delegate that the split view controller interface has expanded.

# splitViewController:displayModeForExpandingToProposedDisplayMode: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Asks the delegate to provide the display mode to use after the split view interface expands.

## Declaration

```objectivec
- (UISplitViewControllerDisplayMode) splitViewController:(UISplitViewController *) svc displayModeForExpandingToProposedDisplayMode:(UISplitViewControllerDisplayMode) proposedDisplayMode;
```

## Parameters

- `svc`: The split view controller whose interface is expanding.
- `proposedDisplayMode`: The proposed display mode to expand the interface to.

<a id="return-value"></a>

## Return Value

The display mode to expand the interface to. This value may be the same as `proposedDisplayMode`, or you may return a different value.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to column-style split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

When the split view controller transitions from a horizontally compact to a horizontally regular size class, it calls this method and asks you for the display mode to use when that transition is complete. Use this method to customize the display mode you’re expanding to. For example, you might use this opportunity to adjust column widths before returning the display mode to use.

## See Also

### Expanding the interface

- [splitViewController:willShowColumn:](splitviewcontroller%28__willshow_%29.md): Tells the delegate that the specified column is about to be shown.
- [splitViewController:didShowColumn:](splitviewcontroller%28__didshow_%29.md): Tells the delegate that the system completed showing the specified column.
- [splitViewControllerDidExpand:](splitviewcontrollerdidexpand%28__%29.md): Tells the delegate that the split view controller interface has expanded.
