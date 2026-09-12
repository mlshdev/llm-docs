> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbar/begincustomizingitems(_:)](https://developer.apple.com/documentation/uikit/uitabbar/begincustomizingitems(_:))

# beginCustomizingItems(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+

Presents a standard interface that lets the user customize the contents of the tab bar.

## Declaration

```swift
func beginCustomizingItems(_ items: [UITabBarItem])
```

## Parameters

- `items`: An array of [UITabBarItem](../uitabbaritem.md) objects representing all of the items that can possibly be displayed on the tab bar. Always include at least one visible item in the tab bar. This parameter must not be `nil` or contain an empty array.

<a id="Discussion"></a>

## Discussion

This method presents a custom interface that lets the user replace existing tab bar items with items in the specified array. The interface also lets the user rearrange items on the tab bar, but it does not let the user change the total number of items. The interface includes a Done button that automatically dismisses the interface. You can also dismiss the interface programmatically using the [endCustomizing(animated:)](endcustomizing%28animated_%29.md) method.

> **Important**

>  You cannot use this method to customize a tab bar that is managed by a tab bar controller. For information about how to customize the contents of a tab bar controller, see the [UITabBarController](../uitabbarcontroller.md).

The `items` parameter should include all items currently visible in the tab bar that you allow to be replaced. Any currently visible items that are not included in this array remain fixed in place on the tab bar and cannot be repositioned or replaced by the user. If the user removes the currently selected item from the tab bar, the [selectedItem](selecteditem.md) property is set to `nil`.

The tab bar notifies its delegate about the pending customizations at various points during the presentation and dismissal of the interface. If you want to track when customizations begin and end, provide a delegate and assign it to the tab bar’s [delegate](delegate.md) property. For more information about the methods you can implement, see [UITabBarDelegate](../uitabbardelegate.md).

## See Also

### Supporting user customization of tab bars

- [endCustomizing(animated:)](endcustomizing%28animated_%29.md): Dismisses the standard interface used to customize the tab bar.
- [isCustomizing](iscustomizing.md): A Boolean value indicating whether the user is currently customizing the tab bar.

# beginCustomizingItems: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+

Presents a standard interface that lets the user customize the contents of the tab bar.

## Declaration

```objectivec
- (void) beginCustomizingItems:(NSArray<UITabBarItem *> *) items;
```

## Parameters

- `items`: An array of [UITabBarItem](../uitabbaritem.md) objects representing all of the items that can possibly be displayed on the tab bar. Always include at least one visible item in the tab bar. This parameter must not be `nil` or contain an empty array.

<a id="Discussion"></a>

## Discussion

This method presents a custom interface that lets the user replace existing tab bar items with items in the specified array. The interface also lets the user rearrange items on the tab bar, but it does not let the user change the total number of items. The interface includes a Done button that automatically dismisses the interface. You can also dismiss the interface programmatically using the [endCustomizingAnimated:](endcustomizing%28animated_%29.md) method.

> **Important**

>  You cannot use this method to customize a tab bar that is managed by a tab bar controller. For information about how to customize the contents of a tab bar controller, see the [UITabBarController](../uitabbarcontroller.md).

The `items` parameter should include all items currently visible in the tab bar that you allow to be replaced. Any currently visible items that are not included in this array remain fixed in place on the tab bar and cannot be repositioned or replaced by the user. If the user removes the currently selected item from the tab bar, the [selectedItem](selecteditem.md) property is set to `nil`.

The tab bar notifies its delegate about the pending customizations at various points during the presentation and dismissal of the interface. If you want to track when customizations begin and end, provide a delegate and assign it to the tab bar’s [delegate](delegate.md) property. For more information about the methods you can implement, see [UITabBarDelegate](../uitabbardelegate.md).

## See Also

### Supporting user customization of tab bars

- [endCustomizingAnimated:](endcustomizing%28animated_%29.md): Dismisses the standard interface used to customize the tab bar.
- [customizing](iscustomizing.md): A Boolean value indicating whether the user is currently customizing the tab bar.
