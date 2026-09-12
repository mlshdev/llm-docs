> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/setnavigationbarhidden(_:animated:)](https://developer.apple.com/documentation/uikit/uinavigationcontroller/setnavigationbarhidden(_:animated:))

# setNavigationBarHidden(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets whether the navigation bar is hidden.

## Declaration

```swift
func setNavigationBarHidden(_ hidden: Bool, animated: Bool)
```

## Parameters

- `hidden`: Specify [true](https://developer.apple.com/documentation/swift/true) to hide the navigation bar or [false](https://developer.apple.com/documentation/swift/false) to show it.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want to animate the change in visibility or [false](https://developer.apple.com/documentation/swift/false) if you want the navigation bar to appear immediately.

<a id="Discussion"></a>

## Discussion

For animated transitions, the duration of the animation is specified by the value in the [hideShowBarDuration](hideshowbarduration.md) constant.

## See Also

### Related Documentation

- [isNavigationBarHidden](isnavigationbarhidden.md): A Boolean value that indicates whether the navigation bar is hidden.

### Configuring navigation bars

- [navigationBar](navigationbar.md): The navigation bar managed by the navigation controller.
- [Customizing your app’s navigation bar](../customizing-your-app-s-navigation-bar.md): Create custom titles, prompts, and buttons in your app’s navigation bar.

# setNavigationBarHidden:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets whether the navigation bar is hidden.

## Declaration

```objectivec
- (void) setNavigationBarHidden:(BOOL) hidden animated:(BOOL) animated;
```

## Parameters

- `hidden`: Specify [true](https://developer.apple.com/documentation/swift/true) to hide the navigation bar or [false](https://developer.apple.com/documentation/swift/false) to show it.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want to animate the change in visibility or [false](https://developer.apple.com/documentation/swift/false) if you want the navigation bar to appear immediately.

<a id="Discussion"></a>

## Discussion

For animated transitions, the duration of the animation is specified by the value in the [UINavigationControllerHideShowBarDuration](hideshowbarduration.md) constant.

## See Also

### Related Documentation

- [navigationBarHidden](isnavigationbarhidden.md): A Boolean value that indicates whether the navigation bar is hidden.

### Configuring navigation bars

- [navigationBar](navigationbar.md): The navigation bar managed by the navigation controller.
- [Customizing your app’s navigation bar](../customizing-your-app-s-navigation-bar.md): Create custom titles, prompts, and buttons in your app’s navigation bar.
