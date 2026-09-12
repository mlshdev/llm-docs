> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/navigationbar](https://developer.apple.com/documentation/uikit/uinavigationcontroller/navigationbar)

# navigationBar (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The navigation bar managed by the navigation controller.

## Declaration

```swift
var navigationBar: UINavigationBar { get }
```

<a id="Discussion"></a>

## Discussion

It is permissible to customize the appearance of the navigation bar using the methods and properties of the [UINavigationBar](../uinavigationbar.md) class but you must never change its [frame](../uiview/frame.md), [bounds](../uiview/bounds.md), or [alpha](../uiview/alpha.md) values or modify its view hierarchy directly. To show or hide the navigation bar, you should always do so through the navigation controller by changing its [isNavigationBarHidden](isnavigationbarhidden.md) property or calling the [setNavigationBarHidden(\_:animated:)](setnavigationbarhidden%28__animated_%29.md) method.

## See Also

### Configuring navigation bars

- [setNavigationBarHidden(\_:animated:)](setnavigationbarhidden%28__animated_%29.md): Sets whether the navigation bar is hidden.
- [Customizing your app’s navigation bar](../customizing-your-app-s-navigation-bar.md): Create custom titles, prompts, and buttons in your app’s navigation bar.

# navigationBar (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The navigation bar managed by the navigation controller.

## Declaration

```objectivec
@property (nonatomic, readonly) UINavigationBar * navigationBar;
```

<a id="Discussion"></a>

## Discussion

It is permissible to customize the appearance of the navigation bar using the methods and properties of the [UINavigationBar](../uinavigationbar.md) class but you must never change its [frame](../uiview/frame.md), [bounds](../uiview/bounds.md), or [alpha](../uiview/alpha.md) values or modify its view hierarchy directly. To show or hide the navigation bar, you should always do so through the navigation controller by changing its [navigationBarHidden](isnavigationbarhidden.md) property or calling the [setNavigationBarHidden:animated:](setnavigationbarhidden%28__animated_%29.md) method.

## See Also

### Configuring navigation bars

- [setNavigationBarHidden:animated:](setnavigationbarhidden%28__animated_%29.md): Sets whether the navigation bar is hidden.
- [Customizing your app’s navigation bar](../customizing-your-app-s-navigation-bar.md): Create custom titles, prompts, and buttons in your app’s navigation bar.
