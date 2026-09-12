> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarpositioningdelegate/position(for:)](https://developer.apple.com/documentation/uikit/uibarpositioningdelegate/position(for:))

# position(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate for the position of the specified bar in its new window.

## Declaration

```swift
optional func position(for bar: any UIBarPositioning) -> UIBarPosition
```

## Parameters

- `bar`: The bar that was added to the window.

<a id="return-value"></a>

## Return Value

The position of the bar.

<a id="Discussion"></a>

## Discussion

If your interface has a custom bar with a delegate, that delegate can implement this method and use it to specify the position of the bar that has been added to a window.

Delegates for the [UINavigationBar](../uinavigationbar.md) and [UISearchBar](../uisearchbar.md) classes return the value [UIBarPosition.top](../uibarposition/top.md) by default. The delegate of the [UIToolbar](../uitoolbar.md) class returns the value [UIBarPosition.bottom](../uibarposition/bottom.md) by default.

## See Also

### Related Documentation

- [UIBarPositioning](../uibarpositioning.md): A set of methods for defining the positioning of bars in iOS apps.

# positionForBar: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate for the position of the specified bar in its new window.

## Declaration

```objectivec
- (UIBarPosition) positionForBar:(id<UIBarPositioning>) bar;
```

## Parameters

- `bar`: The bar that was added to the window.

<a id="return-value"></a>

## Return Value

The position of the bar.

<a id="Discussion"></a>

## Discussion

If your interface has a custom bar with a delegate, that delegate can implement this method and use it to specify the position of the bar that has been added to a window.

Delegates for the [UINavigationBar](../uinavigationbar.md) and [UISearchBar](../uisearchbar.md) classes return the value [UIBarPositionTop](../uibarposition/top.md) by default. The delegate of the [UIToolbar](../uitoolbar.md) class returns the value [UIBarPositionBottom](../uibarposition/bottom.md) by default.

## See Also

### Related Documentation

- [UIBarPositioning](../uibarpositioning.md): A set of methods for defining the positioning of bars in iOS apps.
