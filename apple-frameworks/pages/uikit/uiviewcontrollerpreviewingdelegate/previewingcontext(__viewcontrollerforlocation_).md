> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollerpreviewingdelegate/previewingcontext(_:viewcontrollerforlocation:)](https://developer.apple.com/documentation/uikit/uiviewcontrollerpreviewingdelegate/previewingcontext(_:viewcontrollerforlocation:))

# previewingContext(\_:viewControllerForLocation:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

Called when the user has pressed a source view in a previewing view controller, thereby obtaining a surrounding blur to indicate that a preview (peek) is available.

> For more information, see [UIViewControllerPreviewingDelegate](../uiviewcontrollerpreviewingdelegate.md).

## Declaration

```swift
func previewingContext(_ previewingContext: any UIViewControllerPreviewing, viewControllerForLocation location: CGPoint) -> UIViewController?
```

## Parameters

- `previewingContext`: The context object for the previewing view controller.
- `location`: The location of the touch in the source view’s coordinate system.

<a id="return-value"></a>

## Return Value

The view controller whose view you want to provide as the preview (peek), or `nil` to disable preview..

<a id="Discussion"></a>

## Discussion

Implement this method to return the preview view controller.

To indicate that a particular portion of the source view is responding to the user’s force touch, set the context object’s [sourceRect](../uiviewcontrollerpreviewing/sourcerect.md) property to the desired rectangle. For example, if the context object’s [sourceView](../uiviewcontrollerpreviewing/sourceview.md) property is a table view, you can set the [sourceRect](../uiviewcontrollerpreviewing/sourcerect.md) property to the frame of the row indicated by the `location` parameter’s value. When the system presents the preview (peek), it appears to originate from the selected row.

You can disable preview by returning `nil` from this method.

## See Also

### Providing preview and commit views for 3D Touch

- [previewingContext(\_:commit:)](previewingcontext%28__commit_%29.md): Deprecated. Called to let you prepare the presentation of a commit (pop) view from your commit view controller.

# previewingContext:viewControllerForLocation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

Called when the user has pressed a source view in a previewing view controller, thereby obtaining a surrounding blur to indicate that a preview (peek) is available.

> For more information, see [UIViewControllerPreviewingDelegate](../uiviewcontrollerpreviewingdelegate.md).

## Declaration

```objectivec
- (UIViewController *) previewingContext:(id<UIViewControllerPreviewing>) previewingContext viewControllerForLocation:(CGPoint) location;
```

## Parameters

- `previewingContext`: The context object for the previewing view controller.
- `location`: The location of the touch in the source view’s coordinate system.

<a id="return-value"></a>

## Return Value

The view controller whose view you want to provide as the preview (peek), or `nil` to disable preview..

<a id="Discussion"></a>

## Discussion

Implement this method to return the preview view controller.

To indicate that a particular portion of the source view is responding to the user’s force touch, set the context object’s [sourceRect](../uiviewcontrollerpreviewing/sourcerect.md) property to the desired rectangle. For example, if the context object’s [sourceView](../uiviewcontrollerpreviewing/sourceview.md) property is a table view, you can set the [sourceRect](../uiviewcontrollerpreviewing/sourcerect.md) property to the frame of the row indicated by the `location` parameter’s value. When the system presents the preview (peek), it appears to originate from the selected row.

You can disable preview by returning `nil` from this method.

## See Also

### Providing preview and commit views for 3D Touch

- [previewingContext:commitViewController:](previewingcontext%28__commit_%29.md): Deprecated. Called to let you prepare the presentation of a commit (pop) view from your commit view controller.
