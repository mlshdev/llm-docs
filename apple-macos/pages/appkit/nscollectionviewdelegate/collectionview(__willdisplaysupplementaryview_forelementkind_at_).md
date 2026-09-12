> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdelegate/collectionview(_:willdisplaysupplementaryview:forelementkind:at:)](https://developer.apple.com/documentation/appkit/nscollectionviewdelegate/collectionview(_:willdisplaysupplementaryview:forelementkind:at:))

# collectionView(\_:willDisplaySupplementaryView:forElementKind:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Notifies the delegate that the specified supplementary view is about to be displayed by the collection view.

## Declaration

```swift
@MainActor optional func collectionView(_ collectionView: NSCollectionView, willDisplaySupplementaryView view: NSView, forElementKind elementKind: NSCollectionView.SupplementaryElementKind, at indexPath: IndexPath)
```

## Parameters

- `collectionView`: The collection view that is adding the supplementary view.
- `view`: The supplementary view being added.
- `elementKind`: The type of the supplementary view. Layouts are responsible for defining the types of supplementary views they support.
- `indexPath`: The index path associated with the supplementary view.

<a id="Discussion"></a>

## Discussion

The collection view calls this method before adding new supplementary views to its content. You can use this method to track the addition of those views and perform related tasks.

## See Also

### Tracking the Addition and Removal of Items

- [collectionView(\_:willDisplay:forRepresentedObjectAt:)](collectionview%28__willdisplay_forrepresentedobjectat_%29.md): Notifies the delegate that the specified item is about to be displayed by the collection view.
- [collectionView(\_:didEndDisplaying:forRepresentedObjectAt:)](collectionview%28__didenddisplaying_forrepresentedobjectat_%29.md): Notifies the delegate that the specified item was removed from the collection view.
- [collectionView(\_:didEndDisplayingSupplementaryView:forElementOfKind:at:)](collectionview%28__didenddisplayingsupplementaryview_forelementofkind_at_%29.md): Notifies the delegate that the specified supplementary view was removed from the collection view.

# collectionView:willDisplaySupplementaryView:forElementKind:atIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Notifies the delegate that the specified supplementary view is about to be displayed by the collection view.

## Declaration

```objectivec
- (void) collectionView:(NSCollectionView *) collectionView willDisplaySupplementaryView:(NSView *) view forElementKind:(NSCollectionViewSupplementaryElementKind) elementKind atIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view that is adding the supplementary view.
- `view`: The supplementary view being added.
- `elementKind`: The type of the supplementary view. Layouts are responsible for defining the types of supplementary views they support.
- `indexPath`: The index path associated with the supplementary view.

<a id="Discussion"></a>

## Discussion

The collection view calls this method before adding new supplementary views to its content. You can use this method to track the addition of those views and perform related tasks.

## See Also

### Tracking the Addition and Removal of Items

- [collectionView:willDisplayItem:forRepresentedObjectAtIndexPath:](collectionview%28__willdisplay_forrepresentedobjectat_%29.md): Notifies the delegate that the specified item is about to be displayed by the collection view.
- [collectionView:didEndDisplayingItem:forRepresentedObjectAtIndexPath:](collectionview%28__didenddisplaying_forrepresentedobjectat_%29.md): Notifies the delegate that the specified item was removed from the collection view.
- [collectionView:didEndDisplayingSupplementaryView:forElementOfKind:atIndexPath:](collectionview%28__didenddisplayingsupplementaryview_forelementofkind_at_%29.md): Notifies the delegate that the specified supplementary view was removed from the collection view.
