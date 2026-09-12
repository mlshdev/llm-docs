> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbardelegate/navigationbar(_:didpop:)](https://developer.apple.com/documentation/uikit/uinavigationbardelegate/navigationbar(_:didpop:))

# navigationBar(\_:didPop:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that an item was popped from the navigation bar.

## Declaration

```swift
optional func navigationBar(_ navigationBar: UINavigationBar, didPop item: UINavigationItem)
```

## Parameters

- `navigationBar`: The navigation bar that the item is being popped from.
- `item`: The navigation item that is being popped.

<a id="Discussion"></a>

## Discussion

If animating the pop operation, this method is invoked after the animation ends; otherwise, it is invoked immediately after the pop.

## See Also

### Popping items

- [navigationBar(\_:shouldPop:)](navigationbar%28__shouldpop_%29.md): Returns a Boolean value indicating whether the navigation bar should pop an item.

# navigationBar:didPopItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate that an item was popped from the navigation bar.

## Declaration

```objectivec
- (void) navigationBar:(UINavigationBar *) navigationBar didPopItem:(UINavigationItem *) item;
```

## Parameters

- `navigationBar`: The navigation bar that the item is being popped from.
- `item`: The navigation item that is being popped.

<a id="Discussion"></a>

## Discussion

If animating the pop operation, this method is invoked after the animation ends; otherwise, it is invoked immediately after the pop.

## See Also

### Popping items

- [navigationBar:shouldPopItem:](navigationbar%28__shouldpop_%29.md): Returns a Boolean value indicating whether the navigation bar should pop an item.
