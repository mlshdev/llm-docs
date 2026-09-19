> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiarrangementviewcontroller/viewcontrollerforplacement:

# viewControllerForPlacement:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The view controller in the arrangement for the provided placement.

## Declaration

```objectivec
- (UIViewController *) viewControllerForPlacement:(UIArrangementViewControllerViewPlacement) placement;
```

## Parameters

- `placement`: The placement of the view controller.

## See Also

### Managing arrangement view controllers

- [UIArrangementViewControllerViewPlacement](../uiarrangementviewcontrollerviewplacement.md): Beta. A placement of a view within an arrangement view controller. Use this type to define placement for container views within the arrangement view controller.
- [setViewController:forPlacement:](setviewcontroller_forplacement_.md): Beta. Sets the view controller in the arrangement for a specific placement.
- [setViewController:forPlacement:animated:](setviewcontroller_forplacement_animated_.md): Beta. Sets the view controller in the arrangement for a specific placement.
- [placementForViewController:](placementforviewcontroller_.md): Beta. The placement for the provided view controller in the arrangement. Will return `UIArrangementViewControllerViewPlacementNone` if the provided view controller is not a view controller provided to the arrangement view controller with an explicit placement.
