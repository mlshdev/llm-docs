> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/cancelinteractivemovement()](https://developer.apple.com/documentation/uikit/uicollectionview/cancelinteractivemovement())

# cancelInteractiveMovement() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Ends interactive movement tracking and returns the target item to its original location.

## Declaration

```swift
func cancelInteractiveMovement()
```

<a id="Discussion"></a>

## Discussion

Call this method to cancel movement tracking and return the item to its original location. For example, when using a gesture recognizer to track interactions, call this method when the gesture is cancelled. Calling this method lets the collection view know to end the tracking process and return the item to its original location.

## See Also

### Reordering items interactively

- [beginInteractiveMovementForItem(at:)](begininteractivemovementforitem%28at_%29.md): Initiates the interactive movement of the item at the specified index path.
- [updateInteractiveMovementTargetPosition(\_:)](updateinteractivemovementtargetposition%28__%29.md): Updates the position of the item within the collection view’s bounds.
- [endInteractiveMovement()](endinteractivemovement%28%29.md): Ends interactive movement tracking and moves the target item to its new location.

# cancelInteractiveMovement (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Ends interactive movement tracking and returns the target item to its original location.

## Declaration

```objectivec
- (void) cancelInteractiveMovement;
```

<a id="Discussion"></a>

## Discussion

Call this method to cancel movement tracking and return the item to its original location. For example, when using a gesture recognizer to track interactions, call this method when the gesture is cancelled. Calling this method lets the collection view know to end the tracking process and return the item to its original location.

## See Also

### Reordering items interactively

- [beginInteractiveMovementForItemAtIndexPath:](begininteractivemovementforitem%28at_%29.md): Initiates the interactive movement of the item at the specified index path.
- [updateInteractiveMovementTargetPosition:](updateinteractivemovementtargetposition%28__%29.md): Updates the position of the item within the collection view’s bounds.
- [endInteractiveMovement](endinteractivemovement%28%29.md): Ends interactive movement tracking and moves the target item to its new location.
