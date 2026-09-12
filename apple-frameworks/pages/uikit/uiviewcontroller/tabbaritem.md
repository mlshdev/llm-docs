> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/tabbaritem](https://developer.apple.com/documentation/uikit/uiviewcontroller/tabbaritem)

# tabBarItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The tab bar item that represents the view controller when added to a tab bar controller.

## Declaration

```swift
var tabBarItem: UITabBarItem! { get set }
```

<a id="Discussion"></a>

## Discussion

This is a unique instance of [UITabBarItem](../uitabbaritem.md) created to represent the view controller when it is a child of a tab bar controller. The first time the property is accessed, the [UITabBarItem](../uitabbaritem.md) is created. Therefore, you should not access this property if you are not using a tab bar controller to display the view controller. To ensure the tab bar item is configured, you can either override this property and add code to create the bar button items when first accessed or create the items in your view controller’s initialization code.

The default value is a tab bar item that displays the view controller’s title.

## See Also

### Configuring tab bar content

- [tab](tab.md): The `UITab` instance that was used to create the receiver, and represents the view controller. Default is nil.
- [tabBarObservedScrollView](tabbarobservedscrollview.md): Deprecated. The full-screen scroll view to synchronize with a scrolling tab bar.

# tabBarItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

The tab bar item that represents the view controller when added to a tab bar controller.

## Declaration

```objectivec
@property (nonatomic, strong, null_resettable) UITabBarItem * tabBarItem;
```

<a id="Discussion"></a>

## Discussion

This is a unique instance of [UITabBarItem](../uitabbaritem.md) created to represent the view controller when it is a child of a tab bar controller. The first time the property is accessed, the [UITabBarItem](../uitabbaritem.md) is created. Therefore, you should not access this property if you are not using a tab bar controller to display the view controller. To ensure the tab bar item is configured, you can either override this property and add code to create the bar button items when first accessed or create the items in your view controller’s initialization code.

The default value is a tab bar item that displays the view controller’s title.

## See Also

### Configuring tab bar content

- [tab](tab.md): The `UITab` instance that was used to create the receiver, and represents the view controller. Default is nil.
- [tabBarObservedScrollView](tabbarobservedscrollview.md): Deprecated. The full-screen scroll view to synchronize with a scrolling tab bar.
