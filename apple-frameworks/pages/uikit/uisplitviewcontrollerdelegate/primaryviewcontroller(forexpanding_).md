> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/primaryviewcontroller(forexpanding:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/primaryviewcontroller(forexpanding:))

# primaryViewController(forExpanding:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate to provide the view controller to display in the primary position when the split view interface expands.

## Declaration

```swift
optional func primaryViewController(forExpanding splitViewController: UISplitViewController) -> UIViewController?
```

## Parameters

- `splitViewController`: The split view controller whose interface is expanding.

<a id="return-value"></a>

## Return Value

The view controller to use as the primary view controller, or `nil` to specify the current primary view controller.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to classic split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

When the split view controller transitions from a horizontally compact to a horizontally regular size class, it calls this method and asks you for the view controller to display in the primary position when that transition is complete. The view controller you return becomes the primary view controller of the split view interface. If you do not implement this method, or if your implementation returns `nil`, the split view controller chooses its current primary view controller as the one to use.

If you specified a specific view controller in your [primaryViewController(forCollapsing:)](primaryviewcontroller%28forcollapsing_%29.md) method, use this method to restore the original primary view controller for your split view interface. You can also implement the [splitViewController(\_:separateSecondaryFrom:)](splitviewcontroller%28__separatesecondaryfrom_%29.md) method to disentangle your view controllers from one another as needed.

## See Also

### Collapsing and expanding classic split views

- [primaryViewController(forCollapsing:)](primaryviewcontroller%28forcollapsing_%29.md): Asks the delegate to provide the single view controller to display after the split view interface collapses.
- [splitViewController(\_:collapseSecondary:onto:)](splitviewcontroller%28__collapsesecondary_onto_%29.md): Asks the delegate to adjust the primary view controller and to incorporate the secondary view controller into the collapsed interface.
- [splitViewController(\_:separateSecondaryFrom:)](splitviewcontroller%28__separatesecondaryfrom_%29.md): Asks the delegate to provide the new secondary view controller for the split view interface.

# primaryViewControllerForExpandingSplitViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate to provide the view controller to display in the primary position when the split view interface expands.

## Declaration

```objectivec
- (UIViewController *) primaryViewControllerForExpandingSplitViewController:(UISplitViewController *) splitViewController;
```

## Parameters

- `splitViewController`: The split view controller whose interface is expanding.

<a id="return-value"></a>

## Return Value

The view controller to use as the primary view controller, or `nil` to specify the current primary view controller.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to classic split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

When the split view controller transitions from a horizontally compact to a horizontally regular size class, it calls this method and asks you for the view controller to display in the primary position when that transition is complete. The view controller you return becomes the primary view controller of the split view interface. If you do not implement this method, or if your implementation returns `nil`, the split view controller chooses its current primary view controller as the one to use.

If you specified a specific view controller in your [primaryViewControllerForCollapsingSplitViewController:](primaryviewcontroller%28forcollapsing_%29.md) method, use this method to restore the original primary view controller for your split view interface. You can also implement the [splitViewController:separateSecondaryViewControllerFromPrimaryViewController:](splitviewcontroller%28__separatesecondaryfrom_%29.md) method to disentangle your view controllers from one another as needed.

## See Also

### Collapsing and expanding classic split views

- [primaryViewControllerForCollapsingSplitViewController:](primaryviewcontroller%28forcollapsing_%29.md): Asks the delegate to provide the single view controller to display after the split view interface collapses.
- [splitViewController:collapseSecondaryViewController:ontoPrimaryViewController:](splitviewcontroller%28__collapsesecondary_onto_%29.md): Asks the delegate to adjust the primary view controller and to incorporate the secondary view controller into the collapsed interface.
- [splitViewController:separateSecondaryViewControllerFromPrimaryViewController:](splitviewcontroller%28__separatesecondaryfrom_%29.md): Asks the delegate to provide the new secondary view controller for the split view interface.
