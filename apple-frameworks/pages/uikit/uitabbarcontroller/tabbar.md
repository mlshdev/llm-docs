> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/tabbar](https://developer.apple.com/documentation/uikit/uitabbarcontroller/tabbar)

# tabBar (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tab bar view associated with this controller.

## Declaration

```swift
var tabBar: UITabBar { get }
```

<a id="Discussion"></a>

## Discussion

You should never attempt to manipulate the [UITabBar](../uitabbar.md) object itself stored in this property. If you attempt to do so, the tab bar view throws an exception. To configure the items for your tab bar interface, you should instead assign one or more custom view controllers to the [viewControllers](viewcontrollers.md) property. The tab bar collects the needed tab bar items from the view controllers you specify.

The tab bar view provided by this property is only for situations where you want to display an action sheet using the [show(from:)](../uiactionsheet/show%28from_%29-9i3tw.md) method of the [UIActionSheet](../uiactionsheet.md) class.

## See Also

### Accessing the tab bar controller properties

- [tab(forIdentifier:)](tab%28foridentifier_%29.md): Returns the `tab` matching the specified `identifier` in the tab bar controller’s tabs. Returns nil if no tab is found matching the `identifier`.

# tabBar (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tab bar view associated with this controller.

## Declaration

```objectivec
@property (nonatomic, readonly) UITabBar * tabBar;
```

<a id="Discussion"></a>

## Discussion

You should never attempt to manipulate the [UITabBar](../uitabbar.md) object itself stored in this property. If you attempt to do so, the tab bar view throws an exception. To configure the items for your tab bar interface, you should instead assign one or more custom view controllers to the [viewControllers](viewcontrollers.md) property. The tab bar collects the needed tab bar items from the view controllers you specify.

The tab bar view provided by this property is only for situations where you want to display an action sheet using the [showFromTabBar:](../uiactionsheet/show%28from_%29-9i3tw.md) method of the [UIActionSheet](../uiactionsheet.md) class.

## See Also

### Accessing the tab bar controller properties

- [tabForIdentifier:](tab%28foridentifier_%29.md): Returns the `tab` matching the specified `identifier` in the tab bar controller’s tabs. Returns nil if no tab is found matching the `identifier`.
