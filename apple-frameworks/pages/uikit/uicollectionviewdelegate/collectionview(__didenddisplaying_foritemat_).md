> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:didenddisplaying:foritemat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:didenddisplaying:foritemat:))

# collectionView(\_:didEndDisplaying:forItemAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that the specified cell was removed from the collection view.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, didEndDisplaying cell: UICollectionViewCell, forItemAt indexPath: IndexPath)
```

## Parameters

- `collectionView`: The collection view object that removed the cell.
- `cell`: The cell object that was removed.
- `indexPath`: The index path of the data item that the cell represented.

<a id="Discussion"></a>

## Discussion

Use this method to detect when a cell is removed from a collection view, as opposed to monitoring the view itself to see when it disappears.

## See Also

### Tracking the addition and removal of views

- [collectionView(\_:willDisplay:forItemAt:)](collectionview%28__willdisplay_foritemat_%29.md): Tells the delegate that the specified cell is about to be displayed in the collection view.
- [collectionView(\_:willDisplaySupplementaryView:forElementKind:at:)](collectionview%28__willdisplaysupplementaryview_forelementkind_at_%29.md): Tells the delegate that the specified supplementary view is about to be displayed in the collection view.
- [collectionView(\_:didEndDisplayingSupplementaryView:forElementOfKind:at:)](collectionview%28__didenddisplayingsupplementaryview_forelementofkind_at_%29.md): Tells the delegate that the specified supplementary view was removed from the collection view.

# collectionView:didEndDisplayingCell:forItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate that the specified cell was removed from the collection view.

## Declaration

```objectivec
- (void) collectionView:(UICollectionView *) collectionView didEndDisplayingCell:(UICollectionViewCell *) cell forItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view object that removed the cell.
- `cell`: The cell object that was removed.
- `indexPath`: The index path of the data item that the cell represented.

<a id="Discussion"></a>

## Discussion

Use this method to detect when a cell is removed from a collection view, as opposed to monitoring the view itself to see when it disappears.

## See Also

### Tracking the addition and removal of views

- [collectionView:willDisplayCell:forItemAtIndexPath:](collectionview%28__willdisplay_foritemat_%29.md): Tells the delegate that the specified cell is about to be displayed in the collection view.
- [collectionView:willDisplaySupplementaryView:forElementKind:atIndexPath:](collectionview%28__willdisplaysupplementaryview_forelementkind_at_%29.md): Tells the delegate that the specified supplementary view is about to be displayed in the collection view.
- [collectionView:didEndDisplayingSupplementaryView:forElementOfKind:atIndexPath:](collectionview%28__didenddisplayingsupplementaryview_forelementofkind_at_%29.md): Tells the delegate that the specified supplementary view was removed from the collection view.
