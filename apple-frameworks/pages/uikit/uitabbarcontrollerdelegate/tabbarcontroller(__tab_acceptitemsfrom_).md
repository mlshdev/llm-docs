> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:tab:acceptitemsfrom:)](https://developer.apple.com/documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:tab:acceptitemsfrom:))

# tabBarController(\_:tab:acceptItemsFrom:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Notifies the delegate to perform a drop into the specified @c tab from the specified session.

## Declaration

```swift
optional func tabBarController(_ tabBarController: UITabBarController, tab: UITab, acceptItemsFrom session: any UIDropSession)
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

<a id="discussion"></a>

## Discussion

This is only called if the operation returned from `tabBarController:tab:operationForAcceptingItemsFromDropSession` is valid for a drop.

# tabBarController:tab:acceptItemsFromDropSession: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Notifies the delegate to perform a drop into the specified @c tab from the specified session.

## Declaration

```objectivec
- (void) tabBarController:(UITabBarController *) tabBarController tab:(UITab *) tab acceptItemsFromDropSession:(id<UIDropSession>) session;
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

<a id="discussion"></a>

## Discussion

This is only called if the operation returned from `tabBarController:tab:operationForAcceptingItemsFromDropSession` is valid for a drop.
