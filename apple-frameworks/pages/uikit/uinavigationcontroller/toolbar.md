> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/toolbar](https://developer.apple.com/documentation/uikit/uinavigationcontroller/toolbar)

# toolbar (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The custom toolbar associated with the navigation controller.

## Declaration

```swift
var toolbar: UIToolbar! { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a reference to the built-in toolbar managed by the navigation controller. Access to this toolbar is provided solely for clients that want to present an action sheet from the toolbar. You should not modify the [UIToolbar](../uitoolbar.md) object directly.

Management of this toolbar’s contents is done through the custom view controllers associated with this navigation controller. For each view controller on the navigation stack, you can assign a custom set of toolbar items using the [setToolbarItems(\_:animated:)](../uiviewcontroller/settoolbaritems%28__animated_%29.md) method of [UIViewController](../uiviewcontroller.md).

The visibility of this toolbar is controlled by the [isToolbarHidden](istoolbarhidden.md) property. The toolbar also obeys the [hidesBottomBarWhenPushed](../uiviewcontroller/hidesbottombarwhenpushed.md) property of the currently visible view controller and hides and shows itself automatically as needed.

## See Also

### Configuring custom toolbars

- [setToolbarHidden(\_:animated:)](settoolbarhidden%28__animated_%29.md): Changes the visibility of the navigation controller’s built-in toolbar.
- [isToolbarHidden](istoolbarhidden.md): A Boolean indicating whether the navigation controller’s built-in toolbar is visible.
- [hideShowBarDuration](hideshowbarduration.md): A variable that specifies the duration when animating the navigation bar.

# toolbar (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The custom toolbar associated with the navigation controller.

## Declaration

```objectivec
@property (nonatomic, readonly, null_resettable) UIToolbar * toolbar;
```

<a id="Discussion"></a>

## Discussion

This property contains a reference to the built-in toolbar managed by the navigation controller. Access to this toolbar is provided solely for clients that want to present an action sheet from the toolbar. You should not modify the [UIToolbar](../uitoolbar.md) object directly.

Management of this toolbar’s contents is done through the custom view controllers associated with this navigation controller. For each view controller on the navigation stack, you can assign a custom set of toolbar items using the [setToolbarItems:animated:](../uiviewcontroller/settoolbaritems%28__animated_%29.md) method of [UIViewController](../uiviewcontroller.md).

The visibility of this toolbar is controlled by the [toolbarHidden](istoolbarhidden.md) property. The toolbar also obeys the [hidesBottomBarWhenPushed](../uiviewcontroller/hidesbottombarwhenpushed.md) property of the currently visible view controller and hides and shows itself automatically as needed.

## See Also

### Configuring custom toolbars

- [setToolbarHidden:animated:](settoolbarhidden%28__animated_%29.md): Changes the visibility of the navigation controller’s built-in toolbar.
- [toolbarHidden](istoolbarhidden.md): A Boolean indicating whether the navigation controller’s built-in toolbar is visible.
- [UINavigationControllerHideShowBarDuration](hideshowbarduration.md): A variable that specifies the duration when animating the navigation bar.
