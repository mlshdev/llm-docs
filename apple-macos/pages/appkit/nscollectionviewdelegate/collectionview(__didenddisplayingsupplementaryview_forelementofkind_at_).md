> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:didenddisplayingsupplementaryview:forelementofkind:at:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:didenddisplayingsupplementaryview:forelementofkind:at:))

# collectionView(\_:didEndDisplayingSupplementaryView:forElementOfKind:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Notifies the delegate that the specified supplementary view was removed from the collection view.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, didEndDisplayingSupplementaryView view: NSView, forElementOfKind elementKind: NSCollectionView.SupplementaryElementKind, at indexPath: IndexPath)
```

## Parameters

- `collectionView`: The collection view that removed the view.
- `view`: The supplementary view that was removed.
- `elementKind`: The type of the supplementary view. Layouts are responsible for defining the types of supplementary views they support.
- `indexPath`: The index path associated with the supplementary view.

<a id="Discussion"></a>

## Discussion

The collection view calls this method after removing a supplementary view from its content. You can use this method to track the removal of views and perform related tasks.

## See Also

### Tracking the Addition and Removal of Items

- [collectionView(\_:willDisplay:forRepresentedObjectAt:)](collectionview%28__willdisplay_forrepresentedobjectat_%29.md): Notifies the delegate that the specified item is about to be displayed by the collection view.
- [collectionView(\_:didEndDisplaying:forRepresentedObjectAt:)](collectionview%28__didenddisplaying_forrepresentedobjectat_%29.md): Notifies the delegate that the specified item was removed from the collection view.
- [collectionView(\_:willDisplaySupplementaryView:forElementKind:at:)](collectionview%28__willdisplaysupplementaryview_forelementkind_at_%29.md): Notifies the delegate that the specified supplementary view is about to be displayed by the collection view.

# collectionView:didEndDisplayingSupplementaryView:forElementOfKind:atIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Notifies the delegate that the specified supplementary view was removed from the collection view.

## Declaration

```objectivec
- (void) collectionView:(NSCollectionView *) collectionView didEndDisplayingSupplementaryView:(NSView *) view forElementOfKind:(NSCollectionViewSupplementaryElementKind) elementKind atIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view that removed the view.
- `view`: The supplementary view that was removed.
- `elementKind`: The type of the supplementary view. Layouts are responsible for defining the types of supplementary views they support.
- `indexPath`: The index path associated with the supplementary view.

<a id="Discussion"></a>

## Discussion

The collection view calls this method after removing a supplementary view from its content. You can use this method to track the removal of views and perform related tasks.

## See Also

### Tracking the Addition and Removal of Items

- [collectionView:willDisplayItem:forRepresentedObjectAtIndexPath:](collectionview%28__willdisplay_forrepresentedobjectat_%29.md): Notifies the delegate that the specified item is about to be displayed by the collection view.
- [collectionView:didEndDisplayingItem:forRepresentedObjectAtIndexPath:](collectionview%28__didenddisplaying_forrepresentedobjectat_%29.md): Notifies the delegate that the specified item was removed from the collection view.
- [collectionView:willDisplaySupplementaryView:forElementKind:atIndexPath:](collectionview%28__willdisplaysupplementaryview_forelementkind_at_%29.md): Notifies the delegate that the specified supplementary view is about to be displayed by the collection view.
