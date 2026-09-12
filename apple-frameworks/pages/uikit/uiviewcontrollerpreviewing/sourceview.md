> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollerpreviewing/sourceview](https://developer.apple.com/documentation/uikit/uiviewcontrollerpreviewing/sourceview)

# sourceView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

A source view, in a previewing view controller’s view hierarchy, responds to a 3D Touch by the user.

> For more information, see [UIViewControllerPreviewing](../uiviewcontrollerpreviewing.md).

## Declaration

```swift
var sourceView: UIView { get }
```

<a id="Discussion"></a>

## Discussion

Set the value of this property when you register a view controller to participate in 3D Touch. Do this in the view controller’s [registerForPreviewing(with:sourceView:)](../uiviewcontroller/registerforpreviewing%28with_sourceview_%29.md) method.

When the user begins to press on the source view, the system blurs the surrounding area to let the user know that a preview (peek) is available. At this time, the system calls your [previewingContext(\_:viewControllerForLocation:)](../uiviewcontrollerpreviewingdelegate/previewingcontext%28__viewcontrollerforlocation_%29.md) method to let you prepare the presentation of a preview. If the user presses more deeply, the system presents the preview defined in your delegate method.

If the user presses deeper on the preview, the system navigates to the view you’ve specified in your [previewingContext(\_:commit:)](../uiviewcontrollerpreviewingdelegate/previewingcontext%28__commit_%29.md) method. The commit view then fills the bounds of the app’s window.

## See Also

### Related Documentation

- [sourceRect](sourcerect.md): Deprecated. The rectangle, in the source view’s coordinate system, that responds to a 3D Touch by a user and remains visually sharp while surrounding content blurs.

### Accessing properties of a 3D Touch previewing view controller

- [delegate](delegate.md): Deprecated. The previewing view controller’s delegate for managing preview (peek) and commit (pop) view controllers.

# sourceView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

A source view, in a previewing view controller’s view hierarchy, responds to a 3D Touch by the user.

> For more information, see [UIViewControllerPreviewing](../uiviewcontrollerpreviewing.md).

## Declaration

```objectivec
@property (nonatomic, readonly) UIView * sourceView;
```

<a id="Discussion"></a>

## Discussion

Set the value of this property when you register a view controller to participate in 3D Touch. Do this in the view controller’s [registerForPreviewingWithDelegate:sourceView:](../uiviewcontroller/registerforpreviewing%28with_sourceview_%29.md) method.

When the user begins to press on the source view, the system blurs the surrounding area to let the user know that a preview (peek) is available. At this time, the system calls your [previewingContext:viewControllerForLocation:](../uiviewcontrollerpreviewingdelegate/previewingcontext%28__viewcontrollerforlocation_%29.md) method to let you prepare the presentation of a preview. If the user presses more deeply, the system presents the preview defined in your delegate method.

If the user presses deeper on the preview, the system navigates to the view you’ve specified in your [previewingContext:commitViewController:](../uiviewcontrollerpreviewingdelegate/previewingcontext%28__commit_%29.md) method. The commit view then fills the bounds of the app’s window.

## See Also

### Related Documentation

- [sourceRect](sourcerect.md): Deprecated. The rectangle, in the source view’s coordinate system, that responds to a 3D Touch by a user and remains visually sharp while surrounding content blurs.

### Accessing properties of a 3D Touch previewing view controller

- [delegate](delegate.md): Deprecated. The previewing view controller’s delegate for managing preview (peek) and commit (pop) view controllers.
