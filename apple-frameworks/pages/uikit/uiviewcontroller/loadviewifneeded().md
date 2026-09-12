> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/loadviewifneeded()](https://developer.apple.com/documentation/uikit/uiviewcontroller/loadviewifneeded())

# loadViewIfNeeded() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Loads the view controller’s view if it’s not loaded yet.

## Declaration

```swift
func loadViewIfNeeded()
```

<a id="Discussion"></a>

## Discussion

Calling this method loads the view controller’s view from its storyboard file, or creates the view as needed based on the established rules.

## See Also

### Managing the view

- [view](view.md): The view that the controller manages.
- [viewIfLoaded](viewifloaded.md): The view controller’s view, or `nil` if the view isn’t yet loaded.
- [isViewLoaded](isviewloaded.md): A Boolean value indicating whether the view is currently loaded into memory.
- [loadView()](loadview%28%29.md): Creates the view that the controller manages.
- [viewDidLoad()](viewdidload%28%29.md): Called after the controller’s view is loaded into memory.
- [title](title.md): A localized string that represents the view this controller manages.
- [preferredContentSize](preferredcontentsize.md): The preferred size for the view controller’s view.
- [ornaments](ornaments.md): SwiftUI ornaments to display adjacent to the view controller.

# loadViewIfNeeded (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Loads the view controller’s view if it’s not loaded yet.

## Declaration

```objectivec
- (void) loadViewIfNeeded;
```

<a id="Discussion"></a>

## Discussion

Calling this method loads the view controller’s view from its storyboard file, or creates the view as needed based on the established rules.

## See Also

### Managing the view

- [view](view.md): The view that the controller manages.
- [viewIfLoaded](viewifloaded.md): The view controller’s view, or `nil` if the view isn’t yet loaded.
- [viewLoaded](isviewloaded.md): A Boolean value indicating whether the view is currently loaded into memory.
- [loadView](loadview%28%29.md): Creates the view that the controller manages.
- [viewDidLoad](viewdidload%28%29.md): Called after the controller’s view is loaded into memory.
- [title](title.md): A localized string that represents the view this controller manages.
- [preferredContentSize](preferredcontentsize.md): The preferred size for the view controller’s view.
