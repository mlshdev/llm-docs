> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/preferredcontentsize](https://developer.apple.com/documentation/uikit/uiviewcontroller/preferredcontentsize)

# preferredContentSize (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The preferred size for the view controller’s view.

## Declaration

```swift
var preferredContentSize: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

The value in this property is used primarily when displaying the view controller’s content in a popover but may also be used in other situations. Changing the value of this property while the view controller is being displayed in a popover animates the size change; however, the change is not animated if you specify a width or height of `0.0`.

## See Also

### Managing the view

- [view](view.md): The view that the controller manages.
- [viewIfLoaded](viewifloaded.md): The view controller’s view, or `nil` if the view isn’t yet loaded.
- [isViewLoaded](isviewloaded.md): A Boolean value indicating whether the view is currently loaded into memory.
- [loadView()](loadview%28%29.md): Creates the view that the controller manages.
- [viewDidLoad()](viewdidload%28%29.md): Called after the controller’s view is loaded into memory.
- [loadViewIfNeeded()](loadviewifneeded%28%29.md): Loads the view controller’s view if it’s not loaded yet.
- [title](title.md): A localized string that represents the view this controller manages.
- [ornaments](ornaments.md): SwiftUI ornaments to display adjacent to the view controller.

# preferredContentSize (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The preferred size for the view controller’s view.

## Declaration

```objectivec
@property (nonatomic) CGSize preferredContentSize;
```

<a id="Discussion"></a>

## Discussion

The value in this property is used primarily when displaying the view controller’s content in a popover but may also be used in other situations. Changing the value of this property while the view controller is being displayed in a popover animates the size change; however, the change is not animated if you specify a width or height of `0.0`.

## See Also

### Managing the view

- [view](view.md): The view that the controller manages.
- [viewIfLoaded](viewifloaded.md): The view controller’s view, or `nil` if the view isn’t yet loaded.
- [viewLoaded](isviewloaded.md): A Boolean value indicating whether the view is currently loaded into memory.
- [loadView](loadview%28%29.md): Creates the view that the controller manages.
- [viewDidLoad](viewdidload%28%29.md): Called after the controller’s view is loaded into memory.
- [loadViewIfNeeded](loadviewifneeded%28%29.md): Loads the view controller’s view if it’s not loaded yet.
- [title](title.md): A localized string that represents the view this controller manages.
