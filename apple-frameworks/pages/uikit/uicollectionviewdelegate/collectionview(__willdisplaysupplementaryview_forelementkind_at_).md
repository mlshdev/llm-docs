> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:willdisplaysupplementaryview:forelementkind:at:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:willdisplaysupplementaryview:forelementkind:at:))

# collectionView(\_:willDisplaySupplementaryView:forElementKind:at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that the specified supplementary view is about to be displayed in the collection view.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, willDisplaySupplementaryView view: UICollectionReusableView, forElementKind elementKind: String, at indexPath: IndexPath)
```

## Parameters

- `collectionView`: The collection view object that is adding the supplementary view.
- `view`: The view being added.
- `elementKind`: The type of the supplementary view. This string is defined by the layout that presents the view.
- `indexPath`: The index path of the data item that the supplementary view represents.

<a id="Discussion"></a>

## Discussion

The collection view calls this method before adding a supplementary view to its content. Use this method to detect view additions, as opposed to monitoring the view itself to see when it appears.

## See Also

### Tracking the addition and removal of views

- [collectionView(\_:willDisplay:forItemAt:)](collectionview%28__willdisplay_foritemat_%29.md): Tells the delegate that the specified cell is about to be displayed in the collection view.
- [collectionView(\_:didEndDisplaying:forItemAt:)](collectionview%28__didenddisplaying_foritemat_%29.md): Tells the delegate that the specified cell was removed from the collection view.
- [collectionView(\_:didEndDisplayingSupplementaryView:forElementOfKind:at:)](collectionview%28__didenddisplayingsupplementaryview_forelementofkind_at_%29.md): Tells the delegate that the specified supplementary view was removed from the collection view.

# collectionView:willDisplaySupplementaryView:forElementKind:atIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the specified supplementary view is about to be displayed in the collection view.

## Declaration

```objectivec
- (void) collectionView:(UICollectionView *) collectionView willDisplaySupplementaryView:(UICollectionReusableView *) view forElementKind:(NSString *) elementKind atIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view object that is adding the supplementary view.
- `view`: The view being added.
- `elementKind`: The type of the supplementary view. This string is defined by the layout that presents the view.
- `indexPath`: The index path of the data item that the supplementary view represents.

<a id="Discussion"></a>

## Discussion

The collection view calls this method before adding a supplementary view to its content. Use this method to detect view additions, as opposed to monitoring the view itself to see when it appears.

## See Also

### Tracking the addition and removal of views

- [collectionView:willDisplayCell:forItemAtIndexPath:](collectionview%28__willdisplay_foritemat_%29.md): Tells the delegate that the specified cell is about to be displayed in the collection view.
- [collectionView:didEndDisplayingCell:forItemAtIndexPath:](collectionview%28__didenddisplaying_foritemat_%29.md): Tells the delegate that the specified cell was removed from the collection view.
- [collectionView:didEndDisplayingSupplementaryView:forElementOfKind:atIndexPath:](collectionview%28__didenddisplayingsupplementaryview_forelementofkind_at_%29.md): Tells the delegate that the specified supplementary view was removed from the collection view.
