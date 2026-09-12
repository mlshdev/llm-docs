> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontrollerdidexpand(_:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontrollerdidexpand(_:))

# splitViewControllerDidExpand(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that the split view controller interface has expanded.

## Declaration

```swift
optional func splitViewControllerDidExpand(_ svc: UISplitViewController)
```

## Parameters

- `svc`: The split view controller whose interface has expanded.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to column-style split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

The split view controller calls this method after its interface has expanded, meaning that [isCollapsed](../uisplitviewcontroller/iscollapsed.md) is [false](https://developer.apple.com/documentation/swift/false). Use this method to perform any customization associated with the expanded interface.

## See Also

### Expanding the interface

- [splitViewController(\_:displayModeForExpandingToProposedDisplayMode:)](splitviewcontroller%28__displaymodeforexpandingtoproposeddisplaymode_%29.md): Asks the delegate to provide the display mode to use after the split view interface expands.
- [splitViewController(\_:willShow:)](splitviewcontroller%28__willshow_%29.md): Tells the delegate that the specified column is about to be shown.
- [splitViewController(\_:didShow:)](splitviewcontroller%28__didshow_%29.md): Tells the delegate that the system completed showing the specified column.

# splitViewControllerDidExpand: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate that the split view controller interface has expanded.

## Declaration

```objectivec
- (void) splitViewControllerDidExpand:(UISplitViewController *) svc;
```

## Parameters

- `svc`: The split view controller whose interface has expanded.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to column-style split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

The split view controller calls this method after its interface has expanded, meaning that [collapsed](../uisplitviewcontroller/iscollapsed.md) is [false](https://developer.apple.com/documentation/swift/false). Use this method to perform any customization associated with the expanded interface.

## See Also

### Expanding the interface

- [splitViewController:displayModeForExpandingToProposedDisplayMode:](splitviewcontroller%28__displaymodeforexpandingtoproposeddisplaymode_%29.md): Asks the delegate to provide the display mode to use after the split view interface expands.
- [splitViewController:willShowColumn:](splitviewcontroller%28__willshow_%29.md): Tells the delegate that the specified column is about to be shown.
- [splitViewController:didShowColumn:](splitviewcontroller%28__didshow_%29.md): Tells the delegate that the system completed showing the specified column.
