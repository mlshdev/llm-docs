> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/viewifloaded](https://developer.apple.com/documentation/uikit/uiviewcontroller/viewifloaded)

# viewIfLoaded (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The view controller’s view, or `nil` if the view isn’t yet loaded.

## Declaration

```swift
var viewIfLoaded: UIView? { get }
```

<a id="Discussion"></a>

## Discussion

If the view controller’s view has already been loaded, this property contains that view. If the view has not yet been loaded, this property is set to `nil`.

## See Also

### Managing the view

- [view](view.md): The view that the controller manages.
- [isViewLoaded](isviewloaded.md): A Boolean value indicating whether the view is currently loaded into memory.
- [loadView()](loadview%28%29.md): Creates the view that the controller manages.
- [viewDidLoad()](viewdidload%28%29.md): Called after the controller’s view is loaded into memory.
- [loadViewIfNeeded()](loadviewifneeded%28%29.md): Loads the view controller’s view if it’s not loaded yet.
- [title](title.md): A localized string that represents the view this controller manages.
- [preferredContentSize](preferredcontentsize.md): The preferred size for the view controller’s view.
- [ornaments](ornaments.md): SwiftUI ornaments to display adjacent to the view controller.

# viewIfLoaded (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The view controller’s view, or `nil` if the view isn’t yet loaded.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIView * viewIfLoaded;
```

<a id="Discussion"></a>

## Discussion

If the view controller’s view has already been loaded, this property contains that view. If the view has not yet been loaded, this property is set to `nil`.

## See Also

### Managing the view

- [view](view.md): The view that the controller manages.
- [viewLoaded](isviewloaded.md): A Boolean value indicating whether the view is currently loaded into memory.
- [loadView](loadview%28%29.md): Creates the view that the controller manages.
- [viewDidLoad](viewdidload%28%29.md): Called after the controller’s view is loaded into memory.
- [loadViewIfNeeded](loadviewifneeded%28%29.md): Loads the view controller’s view if it’s not loaded yet.
- [title](title.md): A localized string that represents the view this controller manages.
- [preferredContentSize](preferredcontentsize.md): The preferred size for the view controller’s view.
