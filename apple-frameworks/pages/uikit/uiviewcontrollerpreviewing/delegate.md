> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollerpreviewing/delegate](https://developer.apple.com/documentation/uikit/uiviewcontrollerpreviewing/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

The previewing view controller’s delegate for managing preview (peek) and commit (pop) view controllers.

> For more information, see [UIViewControllerPreviewing](../uiviewcontrollerpreviewing.md).

## Declaration

```swift
var delegate: any UIViewControllerPreviewingDelegate { get }
```

<a id="Discussion"></a>

## Discussion

Set a previewing view controller’s 3D Touch delegate when you register the view controller by calling its [registerForPreviewing(with:sourceView:)](../uiviewcontroller/registerforpreviewing%28with_sourceview_%29.md) method.

For information on the methods the delegate can implement, read [UIViewControllerPreviewingDelegate](../uiviewcontrollerpreviewingdelegate.md).

## See Also

### Accessing properties of a 3D Touch previewing view controller

- [sourceView](sourceview.md): Deprecated. A source view, in a previewing view controller’s view hierarchy, responds to a 3D Touch by the user.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

The previewing view controller’s delegate for managing preview (peek) and commit (pop) view controllers.

> For more information, see [UIViewControllerPreviewing](../uiviewcontrollerpreviewing.md).

## Declaration

```objectivec
@property (nonatomic, readonly) id<UIViewControllerPreviewingDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Set a previewing view controller’s 3D Touch delegate when you register the view controller by calling its [registerForPreviewingWithDelegate:sourceView:](../uiviewcontroller/registerforpreviewing%28with_sourceview_%29.md) method.

For information on the methods the delegate can implement, read [UIViewControllerPreviewingDelegate](../uiviewcontrollerpreviewingdelegate.md).

## See Also

### Accessing properties of a 3D Touch previewing view controller

- [sourceView](sourceview.md): Deprecated. A source view, in a previewing view controller’s view hierarchy, responds to a 3D Touch by the user.
