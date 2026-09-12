> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:collapsesecondary:onto:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:collapsesecondary:onto:))

# splitViewController(\_:collapseSecondary:onto:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate to adjust the primary view controller and to incorporate the secondary view controller into the collapsed interface.

## Declaration

```swift
optional func splitViewController(_ splitViewController: UISplitViewController, collapseSecondary secondaryViewController: UIViewController, onto primaryViewController: UIViewController) -> Bool
```

## Parameters

- `splitViewController`: The split view controller whose interface is collapsing.
- `secondaryViewController`: The secondary view controller of the split view interface.
- `primaryViewController`: The primary view controller of the split view interface. If you implement the [primaryViewController(forCollapsing:)](primaryviewcontroller%28forcollapsing_%29.md) method in your delegate, this object is the one that method returns.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) to let the split view controller try to incorporate the secondary view controller’s content into the collapsed interface, or [true](https://developer.apple.com/documentation/swift/true) to indicate that you do not want the split view controller to do anything with the secondary view controller.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to classic split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

This method is your opportunity to perform any necessary tasks related to the transition to a collapsed interface. After this method returns, the split view controller removes the secondary view controller from its [viewControllers](../uisplitviewcontroller/viewcontrollers.md) array, leaving the primary view controller as its only child. In your implementation of this method, you might prepare the primary view controller for display in a compact environment, or you might attempt to incorporate the secondary view controller’s content into the newly collapsed interface.

Returning [false](https://developer.apple.com/documentation/swift/false) tells the split view controller to use its default behavior to try to incorporate the secondary view controller into the collapsed interface. When you return [false](https://developer.apple.com/documentation/swift/false), the split view controller calls the [collapseSecondaryViewController(\_:for:)](../uiviewcontroller/collapsesecondaryviewcontroller%28__for_%29.md) method of the primary view controller, giving it a chance to do something with the secondary view controller’s content. Most view controllers do nothing by default, but the [UINavigationController](../uinavigationcontroller.md) class responds by pushing the secondary view controller onto its navigation stack.

Returning [true](https://developer.apple.com/documentation/swift/true) from this method tells the split view controller not to apply any default behavior. You might return [true](https://developer.apple.com/documentation/swift/true) in cases where you do not want the secondary view controller’s content incorporated into the resulting interface.

## See Also

### Collapsing and expanding classic split views

- [primaryViewController(forCollapsing:)](primaryviewcontroller%28forcollapsing_%29.md): Asks the delegate to provide the single view controller to display after the split view interface collapses.
- [primaryViewController(forExpanding:)](primaryviewcontroller%28forexpanding_%29.md): Asks the delegate to provide the view controller to display in the primary position when the split view interface expands.
- [splitViewController(\_:separateSecondaryFrom:)](splitviewcontroller%28__separatesecondaryfrom_%29.md): Asks the delegate to provide the new secondary view controller for the split view interface.

# splitViewController:collapseSecondaryViewController:ontoPrimaryViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate to adjust the primary view controller and to incorporate the secondary view controller into the collapsed interface.

## Declaration

```objectivec
- (BOOL) splitViewController:(UISplitViewController *) splitViewController collapseSecondaryViewController:(UIViewController *) secondaryViewController ontoPrimaryViewController:(UIViewController *) primaryViewController;
```

## Parameters

- `splitViewController`: The split view controller whose interface is collapsing.
- `secondaryViewController`: The secondary view controller of the split view interface.
- `primaryViewController`: The primary view controller of the split view interface. If you implement the [primaryViewControllerForCollapsingSplitViewController:](primaryviewcontroller%28forcollapsing_%29.md) method in your delegate, this object is the one that method returns.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) to let the split view controller try to incorporate the secondary view controller’s content into the collapsed interface, or [true](https://developer.apple.com/documentation/swift/true) to indicate that you do not want the split view controller to do anything with the secondary view controller.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to classic split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

This method is your opportunity to perform any necessary tasks related to the transition to a collapsed interface. After this method returns, the split view controller removes the secondary view controller from its [viewControllers](../uisplitviewcontroller/viewcontrollers.md) array, leaving the primary view controller as its only child. In your implementation of this method, you might prepare the primary view controller for display in a compact environment, or you might attempt to incorporate the secondary view controller’s content into the newly collapsed interface.

Returning [false](https://developer.apple.com/documentation/swift/false) tells the split view controller to use its default behavior to try to incorporate the secondary view controller into the collapsed interface. When you return [false](https://developer.apple.com/documentation/swift/false), the split view controller calls the [collapseSecondaryViewController:forSplitViewController:](../uiviewcontroller/collapsesecondaryviewcontroller%28__for_%29.md) method of the primary view controller, giving it a chance to do something with the secondary view controller’s content. Most view controllers do nothing by default, but the [UINavigationController](../uinavigationcontroller.md) class responds by pushing the secondary view controller onto its navigation stack.

Returning [true](https://developer.apple.com/documentation/swift/true) from this method tells the split view controller not to apply any default behavior. You might return [true](https://developer.apple.com/documentation/swift/true) in cases where you do not want the secondary view controller’s content incorporated into the resulting interface.

## See Also

### Collapsing and expanding classic split views

- [primaryViewControllerForCollapsingSplitViewController:](primaryviewcontroller%28forcollapsing_%29.md): Asks the delegate to provide the single view controller to display after the split view interface collapses.
- [primaryViewControllerForExpandingSplitViewController:](primaryviewcontroller%28forexpanding_%29.md): Asks the delegate to provide the view controller to display in the primary position when the split view interface expands.
- [splitViewController:separateSecondaryViewControllerFromPrimaryViewController:](splitviewcontroller%28__separatesecondaryfrom_%29.md): Asks the delegate to provide the new secondary view controller for the split view interface.
