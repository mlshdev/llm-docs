> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiarrangementviewcontroller/viewcontroller(for:)

# viewController(for:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The view controller in the arrangement for the provided placement.

## Declaration

```swift
@MainActor @preconcurrency final func viewController(for placement: UIArrangementViewController.ViewPlacement) -> UIViewController?
```

## Parameters

- `placement`: The placement of the view controller.

## See Also

### Managing arrangement view controllers

- [UIArrangementViewController.ViewPlacement](viewplacement.md): Beta. A placement of a view controller within an arrangement view controller.
- [setViewController(\_:for:animated:)](setviewcontroller%28__for_animated_%29.md): Beta. Sets the view controller in the arrangement for a specific placement.
- [placement(for:)](placement%28for_%29.md): Beta. Returns the placement for the provided view controller in the arrangement.
