> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/title](https://developer.apple.com/documentation/uikit/uiviewcontroller/title)

# title (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A localized string that represents the view this controller manages.

## Declaration

```swift
var title: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Set the title to a human-readable string that describes the view. If the view controller has a valid navigation item or tab-bar item, assigning a value to this property updates the title text of those objects.

## See Also

### Managing the view

- [view](view.md): The view that the controller manages.
- [viewIfLoaded](viewifloaded.md): The view controller’s view, or `nil` if the view isn’t yet loaded.
- [isViewLoaded](isviewloaded.md): A Boolean value indicating whether the view is currently loaded into memory.
- [loadView()](loadview%28%29.md): Creates the view that the controller manages.
- [viewDidLoad()](viewdidload%28%29.md): Called after the controller’s view is loaded into memory.
- [loadViewIfNeeded()](loadviewifneeded%28%29.md): Loads the view controller’s view if it’s not loaded yet.
- [preferredContentSize](preferredcontentsize.md): The preferred size for the view controller’s view.
- [ornaments](ornaments.md): SwiftUI ornaments to display adjacent to the view controller.

# title (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A localized string that represents the view this controller manages.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * title;
```

<a id="Discussion"></a>

## Discussion

Set the title to a human-readable string that describes the view. If the view controller has a valid navigation item or tab-bar item, assigning a value to this property updates the title text of those objects.

## See Also

### Managing the view

- [view](view.md): The view that the controller manages.
- [viewIfLoaded](viewifloaded.md): The view controller’s view, or `nil` if the view isn’t yet loaded.
- [viewLoaded](isviewloaded.md): A Boolean value indicating whether the view is currently loaded into memory.
- [loadView](loadview%28%29.md): Creates the view that the controller manages.
- [viewDidLoad](viewdidload%28%29.md): Called after the controller’s view is loaded into memory.
- [loadViewIfNeeded](loadviewifneeded%28%29.md): Loads the view controller’s view if it’s not loaded yet.
- [preferredContentSize](preferredcontentsize.md): The preferred size for the view controller’s view.
