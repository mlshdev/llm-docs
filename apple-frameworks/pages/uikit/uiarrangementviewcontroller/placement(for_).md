> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiarrangementviewcontroller/placement(for:)

# placement(for:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · tvOS 27.1+ · visionOS 27.1+

Returns the placement for the provided view controller in the arrangement.

## Declaration

```swift
@MainActor @preconcurrency final func placement(for viewController: UIViewController) -> UIArrangementViewController.ViewPlacement?
```

## Parameters

- `viewController`: The view controller in the arrangement.

<a id="discussion"></a>

## Discussion

Returns `nil` if the provided view controller isn’t one of the view controllers in the arrangement with a specific placement.

## See Also

### Managing arrangement view controllers

- [UIArrangementViewController.ViewPlacement](viewplacement.md): A placement of a view controller within an arrangement view controller.
- [viewController(for:)](viewcontroller%28for_%29.md): The view controller in the arrangement for the provided placement.
- [setViewController(\_:for:animated:)](setviewcontroller%28__for_animated_%29.md): Sets the view controller in the arrangement for a specific placement.
