> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:visibilitydidchangefor:)

# tabBarController(\_:visibilityDidChangeFor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Notifies the delegate when editing has ended and the specified tabs have had their `isHidden` values changed by the user.

## Declaration

```swift
optional func tabBarController(_ tabBarController: UITabBarController, visibilityDidChangeFor tabs: [UITab])
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

# tabBarController:visibilityDidChangeForTabs: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Notifies the delegate when editing has ended and the specified tabs have had their `isHidden` values changed by the user.

## Declaration

```objectivec
- (void) tabBarController:(UITabBarController *) tabBarController visibilityDidChangeForTabs:(NSArray<UITab *> *) tabs;
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)
