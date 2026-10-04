> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiarrangementviewcontroller/state(for:)

# state(for:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · tvOS 27.1+ · visionOS 27.1+

Returns the view state for a placement in the arrangement.

## Declaration

```swift
@MainActor @preconcurrency final func state(for placement: UIArrangementViewController.ViewPlacement) -> UIArrangementViewController.ViewState?
```

## Parameters

- `placement`: The placement of the view controller.

## See Also

### Getting view state

- [UIArrangementViewController.ViewState](viewstate.md): The state of a view within an arrangement.
