> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/ornaments](https://developer.apple.com/documentation/uikit/uiviewcontroller/ornaments)

# ornaments

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

SwiftUI ornaments to display adjacent to the view controller.

## Declaration

```swift
@MainActor @preconcurrency var ornaments: [UIOrnament] { get set }
```

## See Also

### Managing the view

- [view](view.md): The view that the controller manages.
- [viewIfLoaded](viewifloaded.md): The view controller’s view, or `nil` if the view isn’t yet loaded.
- [isViewLoaded](isviewloaded.md): A Boolean value indicating whether the view is currently loaded into memory.
- [loadView()](loadview%28%29.md): Creates the view that the controller manages.
- [viewDidLoad()](viewdidload%28%29.md): Called after the controller’s view is loaded into memory.
- [loadViewIfNeeded()](loadviewifneeded%28%29.md): Loads the view controller’s view if it’s not loaded yet.
- [title](title.md): A localized string that represents the view this controller manages.
- [preferredContentSize](preferredcontentsize.md): The preferred size for the view controller’s view.
