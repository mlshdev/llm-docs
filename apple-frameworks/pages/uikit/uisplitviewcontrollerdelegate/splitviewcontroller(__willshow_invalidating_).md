> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:willshow:invalidating:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:willshow:invalidating:))

# splitViewController(\_:willShow:invalidating:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the specified view controller is about to be shown again.

> Implement the [splitViewController(\_:willChangeTo:)](splitviewcontroller%28__willchangeto_%29.md) method instead.

## Declaration

```swift
optional func splitViewController(_ svc: UISplitViewController, willShow aViewController: UIViewController, invalidating barButtonItem: UIBarButtonItem)
```

## Parameters

- `svc`: The split view controller that owns the specified view controller.
- `aViewController`: The view controller being hidden.
- `barButtonItem`: The button used to display the view controller while it was hidden.

<a id="Discussion"></a>

## Discussion

When the view controller rotates from a portrait to landscape orientation, it shows its hidden view controller once more. If you added the specified button to your toolbar to facilitate the display of the hidden view controller in a popover, you must implement this method and use it to remove that button.

## See Also

### Deprecated methods

- [splitViewController(\_:shouldHide:in:)](splitviewcontroller%28__shouldhide_in_%29.md): Deprecated. Asks the delegate whether the first view controller should be hidden for the specified orientation.
- [splitViewController(\_:willHide:with:for:)](splitviewcontroller%28__willhide_with_for_%29.md): Deprecated. Tells the delegate that the specified view controller is about to be hidden.
- [splitViewController(\_:popoverController:willPresent:)](splitviewcontroller%28__popovercontroller_willpresent_%29.md): Deprecated. Tells the delegate that the hidden view controller is about to be displayed in a popover.

# splitViewController:willShowViewController:invalidatingBarButtonItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the specified view controller is about to be shown again.

> Implement the [splitViewController:willChangeToDisplayMode:](splitviewcontroller%28__willchangeto_%29.md) method instead.

## Declaration

```objectivec
- (void) splitViewController:(UISplitViewController *) svc willShowViewController:(UIViewController *) aViewController invalidatingBarButtonItem:(UIBarButtonItem *) barButtonItem;
```

## Parameters

- `svc`: The split view controller that owns the specified view controller.
- `aViewController`: The view controller being hidden.
- `barButtonItem`: The button used to display the view controller while it was hidden.

<a id="Discussion"></a>

## Discussion

When the view controller rotates from a portrait to landscape orientation, it shows its hidden view controller once more. If you added the specified button to your toolbar to facilitate the display of the hidden view controller in a popover, you must implement this method and use it to remove that button.

## See Also

### Deprecated methods

- [splitViewController:shouldHideViewController:inOrientation:](splitviewcontroller%28__shouldhide_in_%29.md): Deprecated. Asks the delegate whether the first view controller should be hidden for the specified orientation.
- [splitViewController:willHideViewController:withBarButtonItem:forPopoverController:](splitviewcontroller%28__willhide_with_for_%29.md): Deprecated. Tells the delegate that the specified view controller is about to be hidden.
- [splitViewController:popoverController:willPresentViewController:](splitviewcontroller%28__popovercontroller_willpresent_%29.md): Deprecated. Tells the delegate that the hidden view controller is about to be displayed in a popover.
