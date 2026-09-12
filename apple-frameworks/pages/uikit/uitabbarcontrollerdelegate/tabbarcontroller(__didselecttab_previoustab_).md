> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:didselecttab:previoustab:)](https://developer.apple.com/documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:didselecttab:previoustab:))

# tabBarController(\_:didSelectTab:previousTab:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Tells the delegate that the user selected the specified @c selectedTab in the tab bar controller.

## Declaration

```swift
optional func tabBarController(_ tabBarController: UITabBarController, didSelectTab selectedTab: UITab, previousTab: UITab?)
```

<a id="discussion"></a>

## Discussion

This specified @c selectedTab is either a root tab or any of their descendants.

# tabBarController:didSelectTab:previousTab: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Tells the delegate that the user selected the specified @c selectedTab in the tab bar controller.

## Declaration

```objectivec
- (void) tabBarController:(UITabBarController *) tabBarController didSelectTab:(UITab *) selectedTab previousTab:(UITab *) previousTab;
```

<a id="discussion"></a>

## Discussion

This specified @c selectedTab is either a root tab or any of their descendants.
