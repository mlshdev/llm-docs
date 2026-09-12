> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/updateinteractivemovementtargetposition(_:)](https://developer.apple.com/documentation/uikit/uicollectionview/updateinteractivemovementtargetposition(_:))

# updateInteractiveMovementTargetPosition(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Updates the position of the item within the collection view’s bounds.

## Declaration

```swift
func updateInteractiveMovementTargetPosition(_ targetPosition: CGPoint)
```

## Parameters

- `targetPosition`: The position of the item in the collection view’s coordinate system.

<a id="Discussion"></a>

## Discussion

When moving an item interactively, use this method to provide the collection view with the item’s new position. When using a gesture recognizer to track user interactions with the item, call this method each time the gesture recognizer reports a location change. The collection view uses the new point to determine if the item needs to be repositioned and if the current layout needs to be updated.

For each position change, the collection view reports the change to the [collectionView(\_:targetIndexPathForMoveFromItemAt:toProposedIndexPath:)](../uicollectionviewdelegate/collectionview%28__targetindexpathformovefromitemat_toproposedindexpath_%29.md) method of its delegate

## See Also

### Reordering items interactively

- [beginInteractiveMovementForItem(at:)](begininteractivemovementforitem%28at_%29.md): Initiates the interactive movement of the item at the specified index path.
- [endInteractiveMovement()](endinteractivemovement%28%29.md): Ends interactive movement tracking and moves the target item to its new location.
- [cancelInteractiveMovement()](cancelinteractivemovement%28%29.md): Ends interactive movement tracking and returns the target item to its original location.

# updateInteractiveMovementTargetPosition: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Updates the position of the item within the collection view’s bounds.

## Declaration

```objectivec
- (void) updateInteractiveMovementTargetPosition:(CGPoint) targetPosition;
```

## Parameters

- `targetPosition`: The position of the item in the collection view’s coordinate system.

<a id="Discussion"></a>

## Discussion

When moving an item interactively, use this method to provide the collection view with the item’s new position. When using a gesture recognizer to track user interactions with the item, call this method each time the gesture recognizer reports a location change. The collection view uses the new point to determine if the item needs to be repositioned and if the current layout needs to be updated.

For each position change, the collection view reports the change to the [collectionView:targetIndexPathForMoveFromItemAtIndexPath:toProposedIndexPath:](../uicollectionviewdelegate/collectionview%28__targetindexpathformovefromitemat_toproposedindexpath_%29.md) method of its delegate

## See Also

### Reordering items interactively

- [beginInteractiveMovementForItemAtIndexPath:](begininteractivemovementforitem%28at_%29.md): Initiates the interactive movement of the item at the specified index path.
- [endInteractiveMovement](endinteractivemovement%28%29.md): Ends interactive movement tracking and moves the target item to its new location.
- [cancelInteractiveMovement](cancelinteractivemovement%28%29.md): Ends interactive movement tracking and returns the target item to its original location.
