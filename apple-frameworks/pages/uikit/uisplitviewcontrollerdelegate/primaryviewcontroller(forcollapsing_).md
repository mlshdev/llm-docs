> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/primaryviewcontroller(forcollapsing:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/primaryviewcontroller(forcollapsing:))

# primaryViewController(forCollapsing:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate to provide the single view controller to display after the split view interface collapses.

## Declaration

```swift
optional func primaryViewController(forCollapsing splitViewController: UISplitViewController) -> UIViewController?
```

## Parameters

- `splitViewController`: The split view controller whose interface is collapsing.

<a id="return-value"></a>

## Return Value

The new primary view controller to display onscreen.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to classic split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

When the split view controller transitions from a horizontally regular to a horizontally compact size class, it calls this method and asks you for the view controller to display when that transition is complete. The view controller you return becomes the new primary view controller of the split view interface.

Use this method to specify which view controller you want to display in a compact environment. By default, a collapsing split view controller displays its current primary view controller, but you can return a different view controller if you want to. For example, you might return the secondary view controller if that view controller contains the content you want to display. You might also return a completely different view controller that is better suited for displaying content in a compact environment.

If you implement this method, you should also implement the [primaryViewController(forExpanding:)](primaryviewcontroller%28forexpanding_%29.md) method to handle the expansion of your interface from a horizontally compact to a horizontally regular environment. If you do not implement this method, or if your implementation returns `nil`, the split view controller chooses its primary view controller as the one to display.

## See Also

### Collapsing and expanding classic split views

- [splitViewController(\_:collapseSecondary:onto:)](splitviewcontroller%28__collapsesecondary_onto_%29.md): Asks the delegate to adjust the primary view controller and to incorporate the secondary view controller into the collapsed interface.
- [primaryViewController(forExpanding:)](primaryviewcontroller%28forexpanding_%29.md): Asks the delegate to provide the view controller to display in the primary position when the split view interface expands.
- [splitViewController(\_:separateSecondaryFrom:)](splitviewcontroller%28__separatesecondaryfrom_%29.md): Asks the delegate to provide the new secondary view controller for the split view interface.

# primaryViewControllerForCollapsingSplitViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate to provide the single view controller to display after the split view interface collapses.

## Declaration

```objectivec
- (UIViewController *) primaryViewControllerForCollapsingSplitViewController:(UISplitViewController *) splitViewController;
```

## Parameters

- `splitViewController`: The split view controller whose interface is collapsing.

<a id="return-value"></a>

## Return Value

The new primary view controller to display onscreen.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to classic split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

When the split view controller transitions from a horizontally regular to a horizontally compact size class, it calls this method and asks you for the view controller to display when that transition is complete. The view controller you return becomes the new primary view controller of the split view interface.

Use this method to specify which view controller you want to display in a compact environment. By default, a collapsing split view controller displays its current primary view controller, but you can return a different view controller if you want to. For example, you might return the secondary view controller if that view controller contains the content you want to display. You might also return a completely different view controller that is better suited for displaying content in a compact environment.

If you implement this method, you should also implement the [primaryViewControllerForExpandingSplitViewController:](primaryviewcontroller%28forexpanding_%29.md) method to handle the expansion of your interface from a horizontally compact to a horizontally regular environment. If you do not implement this method, or if your implementation returns `nil`, the split view controller chooses its primary view controller as the one to display.

## See Also

### Collapsing and expanding classic split views

- [splitViewController:collapseSecondaryViewController:ontoPrimaryViewController:](splitviewcontroller%28__collapsesecondary_onto_%29.md): Asks the delegate to adjust the primary view controller and to incorporate the secondary view controller into the collapsed interface.
- [primaryViewControllerForExpandingSplitViewController:](primaryviewcontroller%28forexpanding_%29.md): Asks the delegate to provide the view controller to display in the primary position when the split view interface expands.
- [splitViewController:separateSecondaryViewControllerFromPrimaryViewController:](splitviewcontroller%28__separatesecondaryfrom_%29.md): Asks the delegate to provide the new secondary view controller for the split view interface.
