> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/pushitem(_:animated:)](https://developer.apple.com/documentation/uikit/uinavigationbar/pushitem(_:animated:))

# pushItem(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Pushes the given navigation item onto the navigation bar’s stack and updates the UI.

## Declaration

```swift
func pushItem(_ item: UINavigationItem, animated: Bool)
```

## Parameters

- `item`: The navigation item to push on the stack.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the navigation bar should be animated; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Pushing a navigation item displays the item’s title in the center on the navigation bar. The previous top navigation item (if it exists) is displayed as a Back button on the left side of the navigation bar. If the new top item has a left custom view, it is displayed instead of the back button.

## See Also

### Pushing and popping items

- [popItem(animated:)](popitem%28animated_%29.md): Pops the top item from the navigation bar’s stack and updates the UI.
- [setItems(\_:animated:)](setitems%28__animated_%29.md): Replaces the navigation items currently managed by the navigation bar with the specified items.
- [items](items.md): An array of navigation items managed by the navigation bar.
- [topItem](topitem.md): The navigation item at the top of the navigation bar’s stack.
- [backItem](backitem.md): The navigation item that is immediately below the topmost item on a navigation bar’s stack.

# pushNavigationItem:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Pushes the given navigation item onto the navigation bar’s stack and updates the UI.

## Declaration

```objectivec
- (void) pushNavigationItem:(UINavigationItem *) item animated:(BOOL) animated;
```

## Parameters

- `item`: The navigation item to push on the stack.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the navigation bar should be animated; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Pushing a navigation item displays the item’s title in the center on the navigation bar. The previous top navigation item (if it exists) is displayed as a Back button on the left side of the navigation bar. If the new top item has a left custom view, it is displayed instead of the back button.

## See Also

### Pushing and popping items

- [popNavigationItemAnimated:](popitem%28animated_%29.md): Pops the top item from the navigation bar’s stack and updates the UI.
- [setItems:animated:](setitems%28__animated_%29.md): Replaces the navigation items currently managed by the navigation bar with the specified items.
- [items](items.md): An array of navigation items managed by the navigation bar.
- [topItem](topitem.md): The navigation item at the top of the navigation bar’s stack.
- [backItem](backitem.md): The navigation item that is immediately below the topmost item on a navigation bar’s stack.
