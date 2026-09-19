> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiarrangementviewcontroller/state(for:)

# state(for:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Returns the view state for a placement in the arrangement.

## Declaration

```swift
@MainActor @preconcurrency final func state(for placement: UIArrangementViewController.ViewPlacement) -> UIArrangementViewController.ViewState?
```

## Parameters

- `placement`: The placement of the view controller.

## See Also

### Getting view state

- [UIArrangementViewController.ViewState](viewstate.md): Beta. The state of a view within an arrangement.
