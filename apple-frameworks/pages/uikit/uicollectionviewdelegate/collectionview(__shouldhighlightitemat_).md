> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:shouldhighlightitemat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:shouldhighlightitemat:))

# collectionView(\_:shouldHighlightItemAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate if the item should be highlighted during tracking.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, shouldHighlightItemAt indexPath: IndexPath) -> Bool
```

## Parameters

- `collectionView`: The collection view object that is asking about the highlight change.
- `indexPath`: The index path of the cell to be highlighted.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item should be highlighted or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

As touch events arrive, the collection view highlights items in anticipation of the user selecting them. As it processes those touch events, the collection view calls this method to ask your delegate if a given cell should be highlighted. It calls this method only in response to user interactions and does not call it if you programmatically set the highlighting on a cell.

If you return [false](https://developer.apple.com/documentation/swift/false) in your implementation, the cell does not get highlighted and the system bypasses the entire selection process. That is, the system does not call [collectionView(\_:shouldSelectItemAt:)](collectionview%28__shouldselectitemat_%29.md) or any other selection-related methods. If you return [true](https://developer.apple.com/documentation/swift/true), [isHighlighted](../uicollectionviewcell/ishighlighted.md) is set to [true](https://developer.apple.com/documentation/swift/true), [collectionView(\_:didHighlightItemAt:)](collectionview%28__didhighlightitemat_%29.md) is called, and the system begins the selection process.

If you do not implement this method, the default return value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing cell highlighting

- [collectionView(\_:didHighlightItemAt:)](collectionview%28__didhighlightitemat_%29.md): Tells the delegate that the item at the specified index path was highlighted.
- [collectionView(\_:didUnhighlightItemAt:)](collectionview%28__didunhighlightitemat_%29.md): Tells the delegate that the highlight was removed from the item at the specified index path.

# collectionView:shouldHighlightItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate if the item should be highlighted during tracking.

## Declaration

```objectivec
- (BOOL) collectionView:(UICollectionView *) collectionView shouldHighlightItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view object that is asking about the highlight change.
- `indexPath`: The index path of the cell to be highlighted.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item should be highlighted or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

As touch events arrive, the collection view highlights items in anticipation of the user selecting them. As it processes those touch events, the collection view calls this method to ask your delegate if a given cell should be highlighted. It calls this method only in response to user interactions and does not call it if you programmatically set the highlighting on a cell.

If you return [false](https://developer.apple.com/documentation/swift/false) in your implementation, the cell does not get highlighted and the system bypasses the entire selection process. That is, the system does not call [collectionView:shouldSelectItemAtIndexPath:](collectionview%28__shouldselectitemat_%29.md) or any other selection-related methods. If you return [true](https://developer.apple.com/documentation/swift/true), [highlighted](../uicollectionviewcell/ishighlighted.md) is set to [true](https://developer.apple.com/documentation/swift/true), [collectionView:didHighlightItemAtIndexPath:](collectionview%28__didhighlightitemat_%29.md) is called, and the system begins the selection process.

If you do not implement this method, the default return value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing cell highlighting

- [collectionView:didHighlightItemAtIndexPath:](collectionview%28__didhighlightitemat_%29.md): Tells the delegate that the item at the specified index path was highlighted.
- [collectionView:didUnhighlightItemAtIndexPath:](collectionview%28__didunhighlightitemat_%29.md): Tells the delegate that the highlight was removed from the item at the specified index path.
