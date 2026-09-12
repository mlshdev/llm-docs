> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollerpreviewingdelegate/previewingcontext(_:commit:)](https://developer.apple.com/documentation/uikit/uiviewcontrollerpreviewingdelegate/previewingcontext(_:commit:))

# previewingContext(\_:commit:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

Called to let you prepare the presentation of a commit (pop) view from your commit view controller.

> For more information, see [UIViewControllerPreviewingDelegate](../uiviewcontrollerpreviewingdelegate.md).

## Declaration

```swift
func previewingContext(_ previewingContext: any UIViewControllerPreviewing, commit viewControllerToCommit: UIViewController)
```

## Parameters

- `previewingContext`: The context object for the previewing view controller.
- `viewControllerToCommit`: The view controller whose view your implementation of this method is moving into place as a commit (pop) view.

<a id="Discussion"></a>

## Discussion

Implement this method to configure and present the commit (pop) view controller, in a way that is appropriate for your app.

For example, to present the commit view controller’s view in a navigation controller, call the navigation controller’s [show(\_:sender:)](../uinavigationcontroller/show%28__sender_%29.md) method; to present the view modally, you could call the [present(\_:animated:completion:)](../uiviewcontroller/present%28__animated_completion_%29.md) method.

## See Also

### Providing preview and commit views for 3D Touch

- [previewingContext(\_:viewControllerForLocation:)](previewingcontext%28__viewcontrollerforlocation_%29.md): Deprecated. Called when the user has pressed a source view in a previewing view controller, thereby obtaining a surrounding blur to indicate that a preview (peek) is available.

# previewingContext:commitViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

Called to let you prepare the presentation of a commit (pop) view from your commit view controller.

> For more information, see [UIViewControllerPreviewingDelegate](../uiviewcontrollerpreviewingdelegate.md).

## Declaration

```objectivec
- (void) previewingContext:(id<UIViewControllerPreviewing>) previewingContext commitViewController:(UIViewController *) viewControllerToCommit;
```

## Parameters

- `previewingContext`: The context object for the previewing view controller.
- `viewControllerToCommit`: The view controller whose view your implementation of this method is moving into place as a commit (pop) view.

<a id="Discussion"></a>

## Discussion

Implement this method to configure and present the commit (pop) view controller, in a way that is appropriate for your app.

For example, to present the commit view controller’s view in a navigation controller, call the navigation controller’s [showViewController:sender:](../uinavigationcontroller/show%28__sender_%29.md) method; to present the view modally, you could call the [presentViewController:animated:completion:](../uiviewcontroller/present%28__animated_completion_%29.md) method.

## See Also

### Providing preview and commit views for 3D Touch

- [previewingContext:viewControllerForLocation:](previewingcontext%28__viewcontrollerforlocation_%29.md): Deprecated. Called when the user has pressed a source view in a previewing view controller, thereby obtaining a surrounding blur to indicate that a preview (peek) is available.
