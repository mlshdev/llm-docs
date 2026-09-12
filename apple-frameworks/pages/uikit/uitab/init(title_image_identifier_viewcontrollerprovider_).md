> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitab/init(title:image:identifier:viewcontrollerprovider:)](https://developer.apple.com/documentation/uikit/uitab/init(title:image:identifier:viewcontrollerprovider:))

# init(title:image:identifier:viewControllerProvider:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a tab object.

## Declaration

```swift
init(title: String, image: UIImage?, identifier: String, viewControllerProvider: ((UITab) -> UIViewController)? = nil)
```

## Parameters

- `title`: The tab’s title.
- `image`: The tab’s image.
- `identifier`: An identifier string for the tab. Each identifier must be unique across all the tabs managed by a [UITabBarController](../uitabbarcontroller.md).
- `viewControllerProvider`: The view controller that the system presents when someone selects the tab.

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

# initWithTitle:image:identifier:viewControllerProvider: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a tab object.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title image:(UIImage *) image identifier:(NSString *) identifier viewControllerProvider:(UIViewController * (^)(UITab *)) viewControllerProvider;
```

## Parameters

- `title`: The tab’s title.
- `image`: The tab’s image.
- `identifier`: An identifier string for the tab. Each identifier must be unique across all the tabs managed by a [UITabBarController](../uitabbarcontroller.md).
- `viewControllerProvider`: The view controller that the system presents when someone selects the tab.

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)
