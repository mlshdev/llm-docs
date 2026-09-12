> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchtab/init(viewcontrollerprovider:)](https://developer.apple.com/documentation/uikit/uisearchtab/init(viewcontrollerprovider:))

# init(viewControllerProvider:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a search tab with a system localized title and image.

## Declaration

```swift
init(viewControllerProvider: ((UITab) -> UIViewController)? = nil)
```

## Parameters

- `viewControllerProvider`: The view controller that the system presents when someone selects the tab.

# initWithViewControllerProvider: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a search tab with a system localized title and image.

## Declaration

```objectivec
- (instancetype) initWithViewControllerProvider:(UIViewController * (^)(UITab *)) viewControllerProvider;
```

## Parameters

- `viewControllerProvider`: The view controller that the system presents when someone selects the tab.
