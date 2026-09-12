> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:willdisplay:foritemat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:willdisplay:foritemat:))

# collectionView(\_:willDisplay:forItemAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that the specified cell is about to be displayed in the collection view.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, willDisplay cell: UICollectionViewCell, forItemAt indexPath: IndexPath)
```

## Parameters

- `collectionView`: The collection view object that is adding the cell.
- `cell`: The cell object being added.
- `indexPath`: The index path of the data item that the cell represents.

<a id="Discussion"></a>

## Discussion

The collection view calls this method before adding a cell to its content. Use this method to detect cell additions, as opposed to monitoring the cell itself to see when it appears.

## See Also

### Tracking the addition and removal of views

- [collectionView(\_:willDisplaySupplementaryView:forElementKind:at:)](collectionview%28__willdisplaysupplementaryview_forelementkind_at_%29.md): Tells the delegate that the specified supplementary view is about to be displayed in the collection view.
- [collectionView(\_:didEndDisplaying:forItemAt:)](collectionview%28__didenddisplaying_foritemat_%29.md): Tells the delegate that the specified cell was removed from the collection view.
- [collectionView(\_:didEndDisplayingSupplementaryView:forElementOfKind:at:)](collectionview%28__didenddisplayingsupplementaryview_forelementofkind_at_%29.md): Tells the delegate that the specified supplementary view was removed from the collection view.

# collectionView:willDisplayCell:forItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the specified cell is about to be displayed in the collection view.

## Declaration

```objectivec
- (void) collectionView:(UICollectionView *) collectionView willDisplayCell:(UICollectionViewCell *) cell forItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view object that is adding the cell.
- `cell`: The cell object being added.
- `indexPath`: The index path of the data item that the cell represents.

<a id="Discussion"></a>

## Discussion

The collection view calls this method before adding a cell to its content. Use this method to detect cell additions, as opposed to monitoring the cell itself to see when it appears.

## See Also

### Tracking the addition and removal of views

- [collectionView:willDisplaySupplementaryView:forElementKind:atIndexPath:](collectionview%28__willdisplaysupplementaryview_forelementkind_at_%29.md): Tells the delegate that the specified supplementary view is about to be displayed in the collection view.
- [collectionView:didEndDisplayingCell:forItemAtIndexPath:](collectionview%28__didenddisplaying_foritemat_%29.md): Tells the delegate that the specified cell was removed from the collection view.
- [collectionView:didEndDisplayingSupplementaryView:forElementOfKind:atIndexPath:](collectionview%28__didenddisplayingsupplementaryview_forelementofkind_at_%29.md): Tells the delegate that the specified supplementary view was removed from the collection view.
