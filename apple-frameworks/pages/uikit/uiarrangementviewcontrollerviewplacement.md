> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiarrangementviewcontrollerviewplacement

# UIArrangementViewControllerViewPlacement

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

A placement of a view within an arrangement view controller. Use this type to define placement for container views within the arrangement view controller.

## Declaration

```objectivec
enum UIArrangementViewControllerViewPlacement : NSInteger;
```

## Topics

### Specifying a view placement

- [UIArrangementViewControllerViewPlacementNone](uiarrangementviewcontrollerviewplacement/uiarrangementviewcontrollerviewplacementnone.md): Beta. A value that indicates the view controller has no placement in the arrangement.
- [UIArrangementViewControllerViewPlacementPrimary](uiarrangementviewcontrollerviewplacement/uiarrangementviewcontrollerviewplacementprimary.md): Beta. The primary placement in the arrangement.
- [UIArrangementViewControllerViewPlacementSecondary](uiarrangementviewcontrollerviewplacement/uiarrangementviewcontrollerviewplacementsecondary.md): Beta. The secondary placement in the arrangement.

## See Also

### Managing arrangement view controllers

- [viewControllerForPlacement:](uiarrangementviewcontroller/viewcontrollerforplacement_.md): Beta. The view controller in the arrangement for the provided placement.
- [setViewController:forPlacement:](uiarrangementviewcontroller/setviewcontroller_forplacement_.md): Beta. Sets the view controller in the arrangement for a specific placement.
- [setViewController:forPlacement:animated:](uiarrangementviewcontroller/setviewcontroller_forplacement_animated_.md): Beta. Sets the view controller in the arrangement for a specific placement.
- [placementForViewController:](uiarrangementviewcontroller/placementforviewcontroller_.md): Beta. The placement for the provided view controller in the arrangement. Will return `UIArrangementViewControllerViewPlacementNone` if the provided view controller is not a view controller provided to the arrangement view controller with an explicit placement.
