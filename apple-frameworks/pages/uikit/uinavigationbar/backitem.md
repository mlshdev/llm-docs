> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/backitem](https://developer.apple.com/documentation/uikit/uinavigationbar/backitem)

# backItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The navigation item that is immediately below the topmost item on a navigation bar’s stack.

## Declaration

```swift
var backItem: UINavigationItem? { get }
```

<a id="Discussion"></a>

## Discussion

If the [leftBarButtonItem](../uinavigationitem/leftbarbuttonitem.md) property of the topmost navigation item is `nil`, the navigation bar displays a back button whose title is derived from the item in this property.

If there is only one item on the navigation bar’s stack, the value of this property is `nil`.

## See Also

### Pushing and popping items

- [pushItem(\_:animated:)](pushitem%28__animated_%29.md): Pushes the given navigation item onto the navigation bar’s stack and updates the UI.
- [popItem(animated:)](popitem%28animated_%29.md): Pops the top item from the navigation bar’s stack and updates the UI.
- [setItems(\_:animated:)](setitems%28__animated_%29.md): Replaces the navigation items currently managed by the navigation bar with the specified items.
- [items](items.md): An array of navigation items managed by the navigation bar.
- [topItem](topitem.md): The navigation item at the top of the navigation bar’s stack.

# backItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The navigation item that is immediately below the topmost item on a navigation bar’s stack.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UINavigationItem * backItem;
```

<a id="Discussion"></a>

## Discussion

If the [leftBarButtonItem](../uinavigationitem/leftbarbuttonitem.md) property of the topmost navigation item is `nil`, the navigation bar displays a back button whose title is derived from the item in this property.

If there is only one item on the navigation bar’s stack, the value of this property is `nil`.

## See Also

### Pushing and popping items

- [pushNavigationItem:animated:](pushitem%28__animated_%29.md): Pushes the given navigation item onto the navigation bar’s stack and updates the UI.
- [popNavigationItemAnimated:](popitem%28animated_%29.md): Pops the top item from the navigation bar’s stack and updates the UI.
- [setItems:animated:](setitems%28__animated_%29.md): Replaces the navigation items currently managed by the navigation bar with the specified items.
- [items](items.md): An array of navigation items managed by the navigation bar.
- [topItem](topitem.md): The navigation item at the top of the navigation bar’s stack.
