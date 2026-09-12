> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/init(customview:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/init(customview:))

# init(customView:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates an item using the specified custom view.

## Declaration

```swift
convenience init(customView: UIView)
```

## Parameters

- `customView`: A custom view representing the item.

<a id="return-value"></a>

## Return Value

A newly initialized [UIBarButtonItem](../uibarbuttonitem.md).

<a id="Discussion"></a>

## Discussion

The bar button item created by this method doesn’t call the action method of its target in response to user interactions. Instead, the bar button item expects the specified custom view to handle any user interactions and provide an appropriate response.

# initWithCustomView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates an item using the specified custom view.

## Declaration

```objectivec
- (instancetype) initWithCustomView:(UIView *) customView;
```

## Parameters

- `customView`: A custom view representing the item.

<a id="return-value"></a>

## Return Value

A newly initialized [UIBarButtonItem](../uibarbuttonitem.md).

<a id="Discussion"></a>

## Discussion

The bar button item created by this method doesn’t call the action method of its target in response to user interactions. Instead, the bar button item expects the specified custom view to handle any user interactions and provide an appropriate response.
