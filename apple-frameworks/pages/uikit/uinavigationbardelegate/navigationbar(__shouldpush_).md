> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbardelegate/navigationbar(_:shouldpush:)](https://developer.apple.com/documentation/uikit/uinavigationbardelegate/navigationbar(_:shouldpush:))

# navigationBar(\_:shouldPush:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a Boolean value indicating whether the navigation bar should push an item.

## Declaration

```swift
optional func navigationBar(_ navigationBar: UINavigationBar, shouldPush item: UINavigationItem) -> Bool
```

## Parameters

- `navigationBar`: The navigation bar that the item is being pushed onto.
- `item`: The navigation item that is being pushed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item should be pushed; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Sent to the delegate before pushing an item onto the navigation bar.

## See Also

### Pushing items

- [navigationBar(\_:didPush:)](navigationbar%28__didpush_%29.md): Tells the delegate that an item was pushed onto the navigation bar.

# navigationBar:shouldPushItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns a Boolean value indicating whether the navigation bar should push an item.

## Declaration

```objectivec
- (BOOL) navigationBar:(UINavigationBar *) navigationBar shouldPushItem:(UINavigationItem *) item;
```

## Parameters

- `navigationBar`: The navigation bar that the item is being pushed onto.
- `item`: The navigation item that is being pushed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item should be pushed; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Sent to the delegate before pushing an item onto the navigation bar.

## See Also

### Pushing items

- [navigationBar:didPushItem:](navigationbar%28__didpush_%29.md): Tells the delegate that an item was pushed onto the navigation bar.
