> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiarrangementviewcontroller/setviewcontroller(_:for:animated:)

# setViewController(\_:for:animated:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · tvOS 27.1+ · visionOS 27.1+

Sets the view controller in the arrangement for a specific placement.

## Declaration

```swift
@MainActor @preconcurrency final func setViewController(_ viewController: UIViewController?, for placement: UIArrangementViewController.ViewPlacement, animated: Bool = false)
```

## Parameters

- `viewController`: The view controller to place in the arrangement, or `nil` to remove the view controller currently in the placement.
- `placement`: The placement of the view controller in the arrangement.
- `animated`: Whether to animate the view controller transition.

## See Also

### Managing arrangement view controllers

- [UIArrangementViewController.ViewPlacement](viewplacement.md): A placement of a view controller within an arrangement view controller.
- [viewController(for:)](viewcontroller%28for_%29.md): The view controller in the arrangement for the provided placement.
- [placement(for:)](placement%28for_%29.md): Returns the placement for the provided view controller in the arrangement.
