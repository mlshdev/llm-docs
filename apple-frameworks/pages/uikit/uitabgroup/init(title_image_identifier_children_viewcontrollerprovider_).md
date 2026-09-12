> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabgroup/init(title:image:identifier:children:viewcontrollerprovider:)](https://developer.apple.com/documentation/uikit/uitabgroup/init(title:image:identifier:children:viewcontrollerprovider:))

# init(title:image:identifier:children:viewControllerProvider:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a tab group.

## Declaration

```swift
init(title: String, image: UIImage?, identifier: String, children: [UITab], viewControllerProvider: ((UITab) -> UIViewController)? = nil)
```

## Parameters

- `title`: The group’s title.
- `image`: The group’s image.
- `identifier`: An identifier string for the tab.
- `children`: The contained tab items.
- `viewControllerProvider`: The view controller that the system presents when someone selects the group from the tab bar.

# initWithTitle:image:identifier:children:viewControllerProvider: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a tab group.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title image:(UIImage *) image identifier:(NSString *) identifier children:(NSArray<UITab *> *) children viewControllerProvider:(UIViewController * (^)(UITab *)) viewControllerProvider;
```

## Parameters

- `title`: The group’s title.
- `image`: The group’s image.
- `identifier`: An identifier string for the tab.
- `children`: The contained tab items.
- `viewControllerProvider`: The view controller that the system presents when someone selects the group from the tab bar.
