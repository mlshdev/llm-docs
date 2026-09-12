> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/items](https://developer.apple.com/documentation/uikit/uinavigationbar/items)

# items (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of navigation items managed by the navigation bar.

## Declaration

```swift
var items: [UINavigationItem]? { get set }
```

<a id="Discussion"></a>

## Discussion

The bottom item is at index `0`, the back item is at index `n-2`, and the top item is at index `n-1`, where `n` is the number of items in the array.

## See Also

### Pushing and popping items

- [pushItem(\_:animated:)](pushitem%28__animated_%29.md): Pushes the given navigation item onto the navigation bar’s stack and updates the UI.
- [popItem(animated:)](popitem%28animated_%29.md): Pops the top item from the navigation bar’s stack and updates the UI.
- [setItems(\_:animated:)](setitems%28__animated_%29.md): Replaces the navigation items currently managed by the navigation bar with the specified items.
- [topItem](topitem.md): The navigation item at the top of the navigation bar’s stack.
- [backItem](backitem.md): The navigation item that is immediately below the topmost item on a navigation bar’s stack.

# items (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of navigation items managed by the navigation bar.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<UINavigationItem *> * items;
```

<a id="Discussion"></a>

## Discussion

The bottom item is at index `0`, the back item is at index `n-2`, and the top item is at index `n-1`, where `n` is the number of items in the array.

## See Also

### Pushing and popping items

- [pushNavigationItem:animated:](pushitem%28__animated_%29.md): Pushes the given navigation item onto the navigation bar’s stack and updates the UI.
- [popNavigationItemAnimated:](popitem%28animated_%29.md): Pops the top item from the navigation bar’s stack and updates the UI.
- [setItems:animated:](setitems%28__animated_%29.md): Replaces the navigation items currently managed by the navigation bar with the specified items.
- [topItem](topitem.md): The navigation item at the top of the navigation bar’s stack.
- [backItem](backitem.md): The navigation item that is immediately below the topmost item on a navigation bar’s stack.
