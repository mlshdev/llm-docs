> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbar/items](https://developer.apple.com/documentation/uikit/uitabbar/items)

# items (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The items displayed by the tab bar.

## Declaration

```swift
var items: [UITabBarItem]? { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [UITabBarItem](../uitabbaritem.md) objects, each of which corresponds to a tab displayed by the tab bar. The order of the items in this property corresponds to the order of the items onscreen. You can use this property to access the items as needed.

For tab bars you create, you can assign a new set of items to this property to change the displayed items. Changing the items replaces them immediately without animations. You must not modify this property if the tab bar is managed by a [UITabBarController](../uitabbarcontroller.md) object, and doing so raises an exception. When the tab bar is owned by a tab bar controller, use the tab bar controller’s methods to make changes.

The default value of this property is `nil`.

## See Also

### Configuring tab bar items

- [setItems(\_:animated:)](setitems%28__animated_%29.md): Sets the items on the tab bar, optionally animating any changes into position.
- [selectedItem](selecteditem.md): The currently selected item on the tab bar.

# items (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The items displayed by the tab bar.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<UITabBarItem *> * items;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [UITabBarItem](../uitabbaritem.md) objects, each of which corresponds to a tab displayed by the tab bar. The order of the items in this property corresponds to the order of the items onscreen. You can use this property to access the items as needed.

For tab bars you create, you can assign a new set of items to this property to change the displayed items. Changing the items replaces them immediately without animations. You must not modify this property if the tab bar is managed by a [UITabBarController](../uitabbarcontroller.md) object, and doing so raises an exception. When the tab bar is owned by a tab bar controller, use the tab bar controller’s methods to make changes.

The default value of this property is `nil`.

## See Also

### Configuring tab bar items

- [setItems:animated:](setitems%28__animated_%29.md): Sets the items on the tab bar, optionally animating any changes into position.
- [selectedItem](selecteditem.md): The currently selected item on the tab bar.
