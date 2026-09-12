> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/endinteractivemovement()](https://developer.apple.com/documentation/uikit/uicollectionview/endinteractivemovement())

# endInteractiveMovement() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Ends interactive movement tracking and moves the target item to its new location.

## Declaration

```swift
func endInteractiveMovement()
```

<a id="Discussion"></a>

## Discussion

Call this method upon the successful completion of movement tracking for a item. For example, when using a gesture recognizer to track user interactions, call this method upon the successful completion of the gesture. Calling this method lets the collection view know to end tracking and move the item to its new location permanently. The collection view responds by calling the [collectionView(\_:moveItemAt:to:)](../uicollectionviewdatasource/collectionview%28__moveitemat_to_%29.md) method of its data source to ensure that your data structures are updated.

## See Also

### Reordering items interactively

- [beginInteractiveMovementForItem(at:)](begininteractivemovementforitem%28at_%29.md): Initiates the interactive movement of the item at the specified index path.
- [updateInteractiveMovementTargetPosition(\_:)](updateinteractivemovementtargetposition%28__%29.md): Updates the position of the item within the collection view’s bounds.
- [cancelInteractiveMovement()](cancelinteractivemovement%28%29.md): Ends interactive movement tracking and returns the target item to its original location.

# endInteractiveMovement (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Ends interactive movement tracking and moves the target item to its new location.

## Declaration

```objectivec
- (void) endInteractiveMovement;
```

<a id="Discussion"></a>

## Discussion

Call this method upon the successful completion of movement tracking for a item. For example, when using a gesture recognizer to track user interactions, call this method upon the successful completion of the gesture. Calling this method lets the collection view know to end tracking and move the item to its new location permanently. The collection view responds by calling the [collectionView:moveItemAtIndexPath:toIndexPath:](../uicollectionviewdatasource/collectionview%28__moveitemat_to_%29.md) method of its data source to ensure that your data structures are updated.

## See Also

### Reordering items interactively

- [beginInteractiveMovementForItemAtIndexPath:](begininteractivemovementforitem%28at_%29.md): Initiates the interactive movement of the item at the specified index path.
- [updateInteractiveMovementTargetPosition:](updateinteractivemovementtargetposition%28__%29.md): Updates the position of the item within the collection view’s bounds.
- [cancelInteractiveMovement](cancelinteractivemovement%28%29.md): Ends interactive movement tracking and returns the target item to its original location.
