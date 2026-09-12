> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/viewdidload()](https://developer.apple.com/documentation/uikit/uiviewcontroller/viewdidload())

# viewDidLoad() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Called after the controller’s view is loaded into memory.

## Declaration

```swift
func viewDidLoad()
```

## Mentioned In

- [Displaying and managing views with a view controller](../displaying-and-managing-views-with-a-view-controller.md)
- [Customizing a document-based app’s launch experience](../customizing-a-document-based-app-s-launch-experience.md)
- [Making a view into a drag source](../making-a-view-into-a-drag-source.md)

<a id="Discussion"></a>

## Discussion

This method is called after the view controller has loaded its view hierarchy into memory. This method is called regardless of whether the view hierarchy was loaded from a nib file or created programmatically in the [loadView()](loadview%28%29.md) method. You usually override this method to perform additional initialization on views that were loaded from nib files.

## See Also

### Managing the view

- [view](view.md): The view that the controller manages.
- [viewIfLoaded](viewifloaded.md): The view controller’s view, or `nil` if the view isn’t yet loaded.
- [isViewLoaded](isviewloaded.md): A Boolean value indicating whether the view is currently loaded into memory.
- [loadView()](loadview%28%29.md): Creates the view that the controller manages.
- [loadViewIfNeeded()](loadviewifneeded%28%29.md): Loads the view controller’s view if it’s not loaded yet.
- [title](title.md): A localized string that represents the view this controller manages.
- [preferredContentSize](preferredcontentsize.md): The preferred size for the view controller’s view.
- [ornaments](ornaments.md): SwiftUI ornaments to display adjacent to the view controller.

# viewDidLoad (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Called after the controller’s view is loaded into memory.

## Declaration

```objectivec
- (void) viewDidLoad;
```

## Mentioned In

- [Displaying and managing views with a view controller](../displaying-and-managing-views-with-a-view-controller.md)
- [Customizing a document-based app’s launch experience](../customizing-a-document-based-app-s-launch-experience.md)
- [Making a view into a drag source](../making-a-view-into-a-drag-source.md)

<a id="Discussion"></a>

## Discussion

This method is called after the view controller has loaded its view hierarchy into memory. This method is called regardless of whether the view hierarchy was loaded from a nib file or created programmatically in the [loadView](loadview%28%29.md) method. You usually override this method to perform additional initialization on views that were loaded from nib files.

## See Also

### Managing the view

- [view](view.md): The view that the controller manages.
- [viewIfLoaded](viewifloaded.md): The view controller’s view, or `nil` if the view isn’t yet loaded.
- [viewLoaded](isviewloaded.md): A Boolean value indicating whether the view is currently loaded into memory.
- [loadView](loadview%28%29.md): Creates the view that the controller manages.
- [loadViewIfNeeded](loadviewifneeded%28%29.md): Loads the view controller’s view if it’s not loaded yet.
- [title](title.md): A localized string that represents the view this controller manages.
- [preferredContentSize](preferredcontentsize.md): The preferred size for the view controller’s view.
