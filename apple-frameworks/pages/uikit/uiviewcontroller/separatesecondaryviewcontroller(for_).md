> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/separatesecondaryviewcontroller(for:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/separatesecondaryviewcontroller(for:))

# separateSecondaryViewController(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Called when a split view controller transitions to a regular-width size class.

## Declaration

```swift
func separateSecondaryViewController(for splitViewController: UISplitViewController) -> UIViewController?
```

## Parameters

- `splitViewController`: The current split view controller.

<a id="return-value"></a>

## Return Value

The designated secondary view controller for the split view controller.

<a id="Discussion"></a>

## Discussion

This method provides default behavior when you do not overwrite the [splitViewController(\_:separateSecondaryFrom:)](../uisplitviewcontrollerdelegate/splitviewcontroller%28__separatesecondaryfrom_%29.md) method. The previous secondary view controller is returned.

## See Also

### Adapting to environment changes

- [collapseSecondaryViewController(\_:for:)](collapsesecondaryviewcontroller%28__for_%29.md): Called when a split view controller transitions to a compact-width size class.

# separateSecondaryViewControllerForSplitViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Called when a split view controller transitions to a regular-width size class.

## Declaration

```objectivec
- (UIViewController *) separateSecondaryViewControllerForSplitViewController:(UISplitViewController *) splitViewController;
```

## Parameters

- `splitViewController`: The current split view controller.

<a id="return-value"></a>

## Return Value

The designated secondary view controller for the split view controller.

<a id="Discussion"></a>

## Discussion

This method provides default behavior when you do not overwrite the [splitViewController:separateSecondaryViewControllerFromPrimaryViewController:](../uisplitviewcontrollerdelegate/splitviewcontroller%28__separatesecondaryfrom_%29.md) method. The previous secondary view controller is returned.

## See Also

### Adapting to environment changes

- [collapseSecondaryViewController:forSplitViewController:](collapsesecondaryviewcontroller%28__for_%29.md): Called when a split view controller transitions to a compact-width size class.
