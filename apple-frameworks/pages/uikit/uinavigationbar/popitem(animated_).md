> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/popitem(animated:)](https://developer.apple.com/documentation/uikit/uinavigationbar/popitem(animated:))

# popItem(animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Pops the top item from the navigation bar’s stack and updates the UI.

## Declaration

```swift
func popItem(animated: Bool) -> UINavigationItem?
```

## Parameters

- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the navigation bar should be animated; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

The top item that was popped.

<a id="Discussion"></a>

## Discussion

Popping a navigation item removes the top item from the stack and replaces it with the back item. The back item’s title is centered on the navigation bar and its other properties are displayed.

## See Also

### Pushing and popping items

- [pushItem(\_:animated:)](pushitem%28__animated_%29.md): Pushes the given navigation item onto the navigation bar’s stack and updates the UI.
- [setItems(\_:animated:)](setitems%28__animated_%29.md): Replaces the navigation items currently managed by the navigation bar with the specified items.
- [items](items.md): An array of navigation items managed by the navigation bar.
- [topItem](topitem.md): The navigation item at the top of the navigation bar’s stack.
- [backItem](backitem.md): The navigation item that is immediately below the topmost item on a navigation bar’s stack.

# popNavigationItemAnimated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Pops the top item from the navigation bar’s stack and updates the UI.

## Declaration

```objectivec
- (UINavigationItem *) popNavigationItemAnimated:(BOOL) animated;
```

## Parameters

- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the navigation bar should be animated; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

The top item that was popped.

<a id="Discussion"></a>

## Discussion

Popping a navigation item removes the top item from the stack and replaces it with the back item. The back item’s title is centered on the navigation bar and its other properties are displayed.

## See Also

### Pushing and popping items

- [pushNavigationItem:animated:](pushitem%28__animated_%29.md): Pushes the given navigation item onto the navigation bar’s stack and updates the UI.
- [setItems:animated:](setitems%28__animated_%29.md): Replaces the navigation items currently managed by the navigation bar with the specified items.
- [items](items.md): An array of navigation items managed by the navigation bar.
- [topItem](topitem.md): The navigation item at the top of the navigation bar’s stack.
- [backItem](backitem.md): The navigation item that is immediately below the topmost item on a navigation bar’s stack.
