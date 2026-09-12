> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbardelegate/navigationbar(_:shouldpop:)](https://developer.apple.com/documentation/uikit/uinavigationbardelegate/navigationbar(_:shouldpop:))

# navigationBar(\_:shouldPop:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a Boolean value indicating whether the navigation bar should pop an item.

## Declaration

```swift
optional func navigationBar(_ navigationBar: UINavigationBar, shouldPop item: UINavigationItem) -> Bool
```

## Parameters

- `navigationBar`: The navigation bar that the item is being popped from.
- `item`: The navigation item that is being popped.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item should be popped; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Sent to the delegate before popping an item from the navigation bar.

## See Also

### Popping items

- [navigationBar(\_:didPop:)](navigationbar%28__didpop_%29.md): Tells the delegate that an item was popped from the navigation bar.

# navigationBar:shouldPopItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns a Boolean value indicating whether the navigation bar should pop an item.

## Declaration

```objectivec
- (BOOL) navigationBar:(UINavigationBar *) navigationBar shouldPopItem:(UINavigationItem *) item;
```

## Parameters

- `navigationBar`: The navigation bar that the item is being popped from.
- `item`: The navigation item that is being popped.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item should be popped; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Sent to the delegate before popping an item from the navigation bar.

## See Also

### Popping items

- [navigationBar:didPopItem:](navigationbar%28__didpop_%29.md): Tells the delegate that an item was popped from the navigation bar.
