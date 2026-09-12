> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/collapsesecondaryviewcontroller(_:for:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/collapsesecondaryviewcontroller(_:for:))

# collapseSecondaryViewController(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Called when a split view controller transitions to a compact-width size class.

## Declaration

```swift
func collapseSecondaryViewController(_ secondaryViewController: UIViewController, for splitViewController: UISplitViewController)
```

## Parameters

- `secondaryViewController`: The secondary view controller associated with the split view controller.
- `splitViewController`: The current split view controller.

<a id="Discussion"></a>

## Discussion

This method provides default behavior when you do not overwrite the [splitViewController(\_:collapseSecondary:onto:)](../uisplitviewcontrollerdelegate/splitviewcontroller%28__collapsesecondary_onto_%29.md) method. The primary view controller associated with the split view controller is displayed.

## See Also

### Adapting to environment changes

- [separateSecondaryViewController(for:)](separatesecondaryviewcontroller%28for_%29.md): Called when a split view controller transitions to a regular-width size class.

# collapseSecondaryViewController:forSplitViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Called when a split view controller transitions to a compact-width size class.

## Declaration

```objectivec
- (void) collapseSecondaryViewController:(UIViewController *) secondaryViewController forSplitViewController:(UISplitViewController *) splitViewController;
```

## Parameters

- `secondaryViewController`: The secondary view controller associated with the split view controller.
- `splitViewController`: The current split view controller.

<a id="Discussion"></a>

## Discussion

This method provides default behavior when you do not overwrite the [splitViewController:collapseSecondaryViewController:ontoPrimaryViewController:](../uisplitviewcontrollerdelegate/splitviewcontroller%28__collapsesecondary_onto_%29.md) method. The primary view controller associated with the split view controller is displayed.

## See Also

### Adapting to environment changes

- [separateSecondaryViewControllerForSplitViewController:](separatesecondaryviewcontroller%28for_%29.md): Called when a split view controller transitions to a regular-width size class.
