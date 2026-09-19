> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiarrangementviewcontroller/viewstate

# UIArrangementViewController.ViewState

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The state of a view within an arrangement.

## Declaration

```swift
struct ViewState
```

## Topics

### Getting the state

- [isHidden](viewstate/ishidden.md): Beta. A Boolean value that indicates whether the view is hidden in the current arrangement.
- [splitAxis](viewstate/splitaxis.md): Beta. The axis of the current split for the view within the arrangement if it exists.
- [zIndex](viewstate/zindex.md): Beta. The z-index of the view within the arrangement.

## See Also

### Getting view state

- [state(for:)](state%28for_%29.md): Beta. Returns the view state for a placement in the arrangement.
