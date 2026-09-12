> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:tab:operationforacceptingitemsfrom:)](https://developer.apple.com/documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:tab:operationforacceptingitemsfrom:))

# tabBarController(\_:tab:operationForAcceptingItemsFrom:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Asks the delegate for a drop operation to determine if drag items can be dropped into the specified @c tab

## Declaration

```swift
optional func tabBarController(_ tabBarController: UITabBarController, tab: UITab, operationForAcceptingItemsFrom session: any UIDropSession) -> UIDropOperation
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

<a id="discussion"></a>

## Discussion

If the operation is either a `.move` or `.copy`, then the drop will proceed and `tabBarController:tab:acceptItemsFromDropSession:` is called. By default, the drop will be treated as a cancel operation if this is not implemented.

# tabBarController:tab:operationForAcceptingItemsFromDropSession: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Asks the delegate for a drop operation to determine if drag items can be dropped into the specified @c tab

## Declaration

```objectivec
- (UIDropOperation) tabBarController:(UITabBarController *) tabBarController tab:(UITab *) tab operationForAcceptingItemsFromDropSession:(id<UIDropSession>) session;
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

<a id="discussion"></a>

## Discussion

If the operation is either a `.move` or `.copy`, then the drop will proceed and `tabBarController:tab:acceptItemsFromDropSession:` is called. By default, the drop will be treated as a cancel operation if this is not implemented.
