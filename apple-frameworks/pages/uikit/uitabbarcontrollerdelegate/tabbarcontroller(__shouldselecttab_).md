> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:shouldselecttab:)](https://developer.apple.com/documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:shouldselecttab:))

# tabBarController(\_:shouldSelectTab:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Asks the delegate whether the specified tab should be made active.

## Declaration

```swift
optional func tabBarController(_ tabBarController: UITabBarController, shouldSelectTab tab: UITab) -> Bool
```

<a id="discussion"></a>

## Discussion

Return @c YES if the specified @c tab can be selected by the user. Otherwise, return @c NO

# tabBarController:shouldSelectTab: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Asks the delegate whether the specified tab should be made active.

## Declaration

```objectivec
- (BOOL) tabBarController:(UITabBarController *) tabBarController shouldSelectTab:(UITab *) tab;
```

<a id="discussion"></a>

## Discussion

Return @c YES if the specified @c tab can be selected by the user. Otherwise, return @c NO
