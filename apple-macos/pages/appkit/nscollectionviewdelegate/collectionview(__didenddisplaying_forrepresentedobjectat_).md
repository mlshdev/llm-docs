> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:didenddisplaying:forrepresentedobjectat:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:didenddisplaying:forrepresentedobjectat:))

# collectionView(\_:didEndDisplaying:forRepresentedObjectAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Notifies the delegate that the specified item was removed from the collection view.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, didEndDisplaying item: NSCollectionViewItem, forRepresentedObjectAt indexPath: IndexPath)
```

## Parameters

- `collectionView`: The collection view that removed the item.
- `item`: The item that was removed.
- `indexPath`: The index path of the item.

<a id="Discussion"></a>

## Discussion

The collection view calls this method after removing an item from its content. You can use this method to track the removal of items and perform related tasks.

## See Also

### Tracking the Addition and Removal of Items

- [collectionView(\_:willDisplay:forRepresentedObjectAt:)](collectionview%28__willdisplay_forrepresentedobjectat_%29.md): Notifies the delegate that the specified item is about to be displayed by the collection view.
- [collectionView(\_:willDisplaySupplementaryView:forElementKind:at:)](collectionview%28__willdisplaysupplementaryview_forelementkind_at_%29.md): Notifies the delegate that the specified supplementary view is about to be displayed by the collection view.
- [collectionView(\_:didEndDisplayingSupplementaryView:forElementOfKind:at:)](collectionview%28__didenddisplayingsupplementaryview_forelementofkind_at_%29.md): Notifies the delegate that the specified supplementary view was removed from the collection view.

# collectionView:didEndDisplayingItem:forRepresentedObjectAtIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Notifies the delegate that the specified item was removed from the collection view.

## Declaration

```objectivec
- (void) collectionView:(NSCollectionView *) collectionView didEndDisplayingItem:(NSCollectionViewItem *) item forRepresentedObjectAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view that removed the item.
- `item`: The item that was removed.
- `indexPath`: The index path of the item.

<a id="Discussion"></a>

## Discussion

The collection view calls this method after removing an item from its content. You can use this method to track the removal of items and perform related tasks.

## See Also

### Tracking the Addition and Removal of Items

- [collectionView:willDisplayItem:forRepresentedObjectAtIndexPath:](collectionview%28__willdisplay_forrepresentedobjectat_%29.md): Notifies the delegate that the specified item is about to be displayed by the collection view.
- [collectionView:willDisplaySupplementaryView:forElementKind:atIndexPath:](collectionview%28__willdisplaysupplementaryview_forelementkind_at_%29.md): Notifies the delegate that the specified supplementary view is about to be displayed by the collection view.
- [collectionView:didEndDisplayingSupplementaryView:forElementOfKind:atIndexPath:](collectionview%28__didenddisplayingsupplementaryview_forelementofkind_at_%29.md): Notifies the delegate that the specified supplementary view was removed from the collection view.
