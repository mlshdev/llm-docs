> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/settoolbarhidden(_:animated:)](https://developer.apple.com/documentation/uikit/uinavigationcontroller/settoolbarhidden(_:animated:))

# setToolbarHidden(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Changes the visibility of the navigation controller’s built-in toolbar.

## Declaration

```swift
func setToolbarHidden(_ hidden: Bool, animated: Bool)
```

## Parameters

- `hidden`: Specify [true](https://developer.apple.com/documentation/swift/true) to hide the toolbar or [false](https://developer.apple.com/documentation/swift/false) to show it.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the toolbar to be animated on or off the screen.

<a id="Discussion"></a>

## Discussion

You can use this method to animate changes to the visibility of the built-in toolbar.

Calling this method with the `animated` parameter set to [false](https://developer.apple.com/documentation/swift/false) is equivalent to setting the value of the [isToolbarHidden](istoolbarhidden.md) property directly. The toolbar simply appears or disappears depending on the value in the `hidden` parameter.

## See Also

### Configuring custom toolbars

- [toolbar](toolbar.md): The custom toolbar associated with the navigation controller.
- [isToolbarHidden](istoolbarhidden.md): A Boolean indicating whether the navigation controller’s built-in toolbar is visible.
- [hideShowBarDuration](hideshowbarduration.md): A variable that specifies the duration when animating the navigation bar.

# setToolbarHidden:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Changes the visibility of the navigation controller’s built-in toolbar.

## Declaration

```objectivec
- (void) setToolbarHidden:(BOOL) hidden animated:(BOOL) animated;
```

## Parameters

- `hidden`: Specify [true](https://developer.apple.com/documentation/swift/true) to hide the toolbar or [false](https://developer.apple.com/documentation/swift/false) to show it.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the toolbar to be animated on or off the screen.

<a id="Discussion"></a>

## Discussion

You can use this method to animate changes to the visibility of the built-in toolbar.

Calling this method with the `animated` parameter set to [false](https://developer.apple.com/documentation/swift/false) is equivalent to setting the value of the [toolbarHidden](istoolbarhidden.md) property directly. The toolbar simply appears or disappears depending on the value in the `hidden` parameter.

## See Also

### Configuring custom toolbars

- [toolbar](toolbar.md): The custom toolbar associated with the navigation controller.
- [toolbarHidden](istoolbarhidden.md): A Boolean indicating whether the navigation controller’s built-in toolbar is visible.
- [UINavigationControllerHideShowBarDuration](hideshowbarduration.md): A variable that specifies the duration when animating the navigation bar.
