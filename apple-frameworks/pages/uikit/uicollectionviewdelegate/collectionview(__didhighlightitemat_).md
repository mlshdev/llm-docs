> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:didhighlightitemat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:didhighlightitemat:))

# collectionView(\_:didHighlightItemAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that the item at the specified index path was highlighted.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, didHighlightItemAt indexPath: IndexPath)
```

## Parameters

- `collectionView`: The collection view object that is notifying you of the highlight change.
- `indexPath`: The index path of the cell that was highlighted.

<a id="Discussion"></a>

## Discussion

The collection view calls this method only in response to user interactions and does not call it if you programmatically set the highlighting on a cell.

## See Also

### Managing cell highlighting

- [collectionView(\_:shouldHighlightItemAt:)](collectionview%28__shouldhighlightitemat_%29.md): Asks the delegate if the item should be highlighted during tracking.
- [collectionView(\_:didUnhighlightItemAt:)](collectionview%28__didunhighlightitemat_%29.md): Tells the delegate that the highlight was removed from the item at the specified index path.

# collectionView:didHighlightItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate that the item at the specified index path was highlighted.

## Declaration

```objectivec
- (void) collectionView:(UICollectionView *) collectionView didHighlightItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view object that is notifying you of the highlight change.
- `indexPath`: The index path of the cell that was highlighted.

<a id="Discussion"></a>

## Discussion

The collection view calls this method only in response to user interactions and does not call it if you programmatically set the highlighting on a cell.

## See Also

### Managing cell highlighting

- [collectionView:shouldHighlightItemAtIndexPath:](collectionview%28__shouldhighlightitemat_%29.md): Asks the delegate if the item should be highlighted during tracking.
- [collectionView:didUnhighlightItemAtIndexPath:](collectionview%28__didunhighlightitemat_%29.md): Tells the delegate that the highlight was removed from the item at the specified index path.
