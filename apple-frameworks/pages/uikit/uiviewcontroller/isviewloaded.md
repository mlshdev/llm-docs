> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/isviewloaded](https://developer.apple.com/documentation/uikit/uiviewcontroller/isviewloaded)

# isViewLoaded (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating whether the view is currently loaded into memory.

## Declaration

```swift
var isViewLoaded: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the view is in memory or [false](https://developer.apple.com/documentation/swift/false) when it is not. Accessing this property does not attempt to load the view if it is not currently in memory.

## See Also

### Managing the view

- [view](view.md): The view that the controller manages.
- [viewIfLoaded](viewifloaded.md): The view controller’s view, or `nil` if the view isn’t yet loaded.
- [loadView()](loadview%28%29.md): Creates the view that the controller manages.
- [viewDidLoad()](viewdidload%28%29.md): Called after the controller’s view is loaded into memory.
- [loadViewIfNeeded()](loadviewifneeded%28%29.md): Loads the view controller’s view if it’s not loaded yet.
- [title](title.md): A localized string that represents the view this controller manages.
- [preferredContentSize](preferredcontentsize.md): The preferred size for the view controller’s view.
- [ornaments](ornaments.md): SwiftUI ornaments to display adjacent to the view controller.

# viewLoaded (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating whether the view is currently loaded into memory.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isViewLoaded) BOOL viewLoaded;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the view is in memory or [false](https://developer.apple.com/documentation/swift/false) when it is not. Accessing this property does not attempt to load the view if it is not currently in memory.

## See Also

### Managing the view

- [view](view.md): The view that the controller manages.
- [viewIfLoaded](viewifloaded.md): The view controller’s view, or `nil` if the view isn’t yet loaded.
- [loadView](loadview%28%29.md): Creates the view that the controller manages.
- [viewDidLoad](viewdidload%28%29.md): Called after the controller’s view is loaded into memory.
- [loadViewIfNeeded](loadviewifneeded%28%29.md): Loads the view controller’s view if it’s not loaded yet.
- [title](title.md): A localized string that represents the view this controller manages.
- [preferredContentSize](preferredcontentsize.md): The preferred size for the view controller’s view.
