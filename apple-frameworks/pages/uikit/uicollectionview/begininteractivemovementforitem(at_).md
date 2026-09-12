> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/begininteractivemovementforitem(at:)](https://developer.apple.com/documentation/uikit/uicollectionview/begininteractivemovementforitem(at:))

# beginInteractiveMovementForItem(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Initiates the interactive movement of the item at the specified index path.

## Declaration

```swift
func beginInteractiveMovementForItem(at indexPath: IndexPath) -> Bool
```

## Parameters

- `indexPath`: The index path of the item you want to move.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if it is possible to move the item or [false](https://developer.apple.com/documentation/swift/false) if the item is not allowed to move.

<a id="Discussion"></a>

## Discussion

Call this method when you want to begin the interactive movement of an item from its current location to a new location within the same collection view. When using a gesture recognizer to track movements of the item, call this method from your handler method when the gesture recognition process begins. When interactions with the item end, you must call either the [endInteractiveMovement()](endinteractivemovement%28%29.md) or [cancelInteractiveMovement()](cancelinteractivemovement%28%29.md) method to inform the collection view of that fact.

When you call this method, the collection view consults its delegate to make sure the item can be moved. If the data source does not support the movement of the item, this method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Reordering items interactively

- [updateInteractiveMovementTargetPosition(\_:)](updateinteractivemovementtargetposition%28__%29.md): Updates the position of the item within the collection view’s bounds.
- [endInteractiveMovement()](endinteractivemovement%28%29.md): Ends interactive movement tracking and moves the target item to its new location.
- [cancelInteractiveMovement()](cancelinteractivemovement%28%29.md): Ends interactive movement tracking and returns the target item to its original location.

# beginInteractiveMovementForItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Initiates the interactive movement of the item at the specified index path.

## Declaration

```objectivec
- (BOOL) beginInteractiveMovementForItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: The index path of the item you want to move.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if it is possible to move the item or [false](https://developer.apple.com/documentation/swift/false) if the item is not allowed to move.

<a id="Discussion"></a>

## Discussion

Call this method when you want to begin the interactive movement of an item from its current location to a new location within the same collection view. When using a gesture recognizer to track movements of the item, call this method from your handler method when the gesture recognition process begins. When interactions with the item end, you must call either the [endInteractiveMovement](endinteractivemovement%28%29.md) or [cancelInteractiveMovement](cancelinteractivemovement%28%29.md) method to inform the collection view of that fact.

When you call this method, the collection view consults its delegate to make sure the item can be moved. If the data source does not support the movement of the item, this method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Reordering items interactively

- [updateInteractiveMovementTargetPosition:](updateinteractivemovementtargetposition%28__%29.md): Updates the position of the item within the collection view’s bounds.
- [endInteractiveMovement](endinteractivemovement%28%29.md): Ends interactive movement tracking and moves the target item to its new location.
- [cancelInteractiveMovement](cancelinteractivemovement%28%29.md): Ends interactive movement tracking and returns the target item to its original location.
