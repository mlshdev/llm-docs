> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbar/setitems(_:animated:)](https://developer.apple.com/documentation/uikit/uitabbar/setitems(_:animated:))

# setItems(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the items on the tab bar, optionally animating any changes into position.

## Declaration

```swift
func setItems(_ items: [UITabBarItem]?, animated: Bool)
```

## Parameters

- `items`: The array of [UITabBarItem](../uitabbaritem.md) objects to display.
- `animated`: A Boolean indicating whether changes should be animated. Specify [true](https://developer.apple.com/documentation/swift/true) to animate changes or [false](https://developer.apple.com/documentation/swift/false) to display the new items without animations. When animations are enabled, the tab bar fades out removed items and fades in new items, adjusting the spacing between items as needed.

<a id="Discussion"></a>

## Discussion

Use this method to make changes to the currently visible items at runtime. Calling this method on a tab bar that is managed by a [UITabBarController](../uitabbarcontroller.md) object raises an exception. When the tab bar is owned by a tab bar controller, use the tab bar controller’s methods to make changes to items.

## See Also

### Configuring tab bar items

- [items](items.md): The items displayed by the tab bar.
- [selectedItem](selecteditem.md): The currently selected item on the tab bar.

# setItems:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the items on the tab bar, optionally animating any changes into position.

## Declaration

```objectivec
- (void) setItems:(NSArray<UITabBarItem *> *) items animated:(BOOL) animated;
```

## Parameters

- `items`: The array of [UITabBarItem](../uitabbaritem.md) objects to display.
- `animated`: A Boolean indicating whether changes should be animated. Specify [true](https://developer.apple.com/documentation/swift/true) to animate changes or [false](https://developer.apple.com/documentation/swift/false) to display the new items without animations. When animations are enabled, the tab bar fades out removed items and fades in new items, adjusting the spacing between items as needed.

<a id="Discussion"></a>

## Discussion

Use this method to make changes to the currently visible items at runtime. Calling this method on a tab bar that is managed by a [UITabBarController](../uitabbarcontroller.md) object raises an exception. When the tab bar is owned by a tab bar controller, use the tab bar controller’s methods to make changes to items.

## See Also

### Configuring tab bar items

- [items](items.md): The items displayed by the tab bar.
- [selectedItem](selecteditem.md): The currently selected item on the tab bar.
