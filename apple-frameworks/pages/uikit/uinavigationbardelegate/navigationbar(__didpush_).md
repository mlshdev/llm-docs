> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbardelegate/navigationbar(_:didpush:)](https://developer.apple.com/documentation/uikit/uinavigationbardelegate/navigationbar(_:didpush:))

# navigationBar(\_:didPush:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that an item was pushed onto the navigation bar.

## Declaration

```swift
optional func navigationBar(_ navigationBar: UINavigationBar, didPush item: UINavigationItem)
```

## Parameters

- `navigationBar`: The navigation bar that the item is being pushed onto.
- `item`: The navigation item that is being pushed.

<a id="Discussion"></a>

## Discussion

If pushing an item onto the navigation bar is animated, this method is invoked after the animation ends; otherwise, it is invoked immediately after the push.

## See Also

### Pushing items

- [navigationBar(\_:shouldPush:)](navigationbar%28__shouldpush_%29.md): Returns a Boolean value indicating whether the navigation bar should push an item.

# navigationBar:didPushItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate that an item was pushed onto the navigation bar.

## Declaration

```objectivec
- (void) navigationBar:(UINavigationBar *) navigationBar didPushItem:(UINavigationItem *) item;
```

## Parameters

- `navigationBar`: The navigation bar that the item is being pushed onto.
- `item`: The navigation item that is being pushed.

<a id="Discussion"></a>

## Discussion

If pushing an item onto the navigation bar is animated, this method is invoked after the animation ends; otherwise, it is invoked immediately after the push.

## See Also

### Pushing items

- [navigationBar:shouldPushItem:](navigationbar%28__shouldpush_%29.md): Returns a Boolean value indicating whether the navigation bar should push an item.
