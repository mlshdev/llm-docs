> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/primarybackgroundstyle](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/primarybackgroundstyle)

# primaryBackgroundStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The background style of the primary view controller.

## Declaration

```swift
var primaryBackgroundStyle: UISplitViewController.BackgroundStyle { get set }
```

## Mentioned In

- [Optimizing your iPad app for Mac](../optimizing-your-ipad-app-for-mac.md)

<a id="Discussion"></a>

## Discussion

In macOS, the sidebar of a split view has Liquid Glass behind its view. To achieve this effect in your iPad app when it runs in macOS, set [primaryBackgroundStyle](primarybackgroundstyle.md) to [UISplitViewController.BackgroundStyle.sidebar](backgroundstyle/sidebar.md). Set the style to [UISplitViewController.BackgroundStyle.none](backgroundstyle/none.md) when you want to control the background appearance of the primary view controller.

> **Note**

>  Setting the background style to [UISplitViewController.BackgroundStyle.sidebar](backgroundstyle/sidebar.md) has no effect when your app is running in iOS or tvOS.

## See Also

### Managing the background style

- [UISplitViewController.BackgroundStyle](backgroundstyle.md): Styles that apply a visual effect to the background of a primary view controller.

# primaryBackgroundStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The background style of the primary view controller.

## Declaration

```objectivec
@property (nonatomic) UISplitViewControllerBackgroundStyle primaryBackgroundStyle;
```

## Mentioned In

- [Optimizing your iPad app for Mac](../optimizing-your-ipad-app-for-mac.md)

<a id="Discussion"></a>

## Discussion

In macOS, the sidebar of a split view has Liquid Glass behind its view. To achieve this effect in your iPad app when it runs in macOS, set [primaryBackgroundStyle](primarybackgroundstyle.md) to [UISplitViewControllerBackgroundStyleSidebar](backgroundstyle/sidebar.md). Set the style to [UISplitViewControllerBackgroundStyleNone](backgroundstyle/none.md) when you want to control the background appearance of the primary view controller.

> **Note**

>  Setting the background style to [UISplitViewControllerBackgroundStyleSidebar](backgroundstyle/sidebar.md) has no effect when your app is running in iOS or tvOS.

## See Also

### Managing the background style

- [UISplitViewControllerBackgroundStyle](backgroundstyle.md): Styles that apply a visual effect to the background of a primary view controller.
