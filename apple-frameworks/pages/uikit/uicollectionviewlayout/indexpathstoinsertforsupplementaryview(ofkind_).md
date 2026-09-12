> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/indexpathstoinsertforsupplementaryview(ofkind:)](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/indexpathstoinsertforsupplementaryview(ofkind:))

# indexPathsToInsertForSupplementaryView(ofKind:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Retrieves an array of index paths for the supplementary views you want to add to the layout.

## Declaration

```swift
func indexPathsToInsertForSupplementaryView(ofKind elementKind: String) -> [IndexPath]
```

## Parameters

- `elementKind`: The specific type of supplementary view.

<a id="return-value"></a>

## Return Value

An array of [NSIndexPath](../../foundation/nsindexpath.md) objects indicating the location of the new supplementary views, or an empty array if you don’t want to add any supplementary views.

<a id="Discussion"></a>

## Discussion

The collection view calls this method whenever you add cells or sections to the collection view. Implementing this method gives your layout object an opportunity to add new supplementary views to complement the additions.

The collection view calls this method between its calls to [prepare(forCollectionViewUpdates:)](prepare%28forcollectionviewupdates_%29.md) and [finalizeCollectionViewUpdates()](finalizecollectionviewupdates%28%29.md).

## See Also

### Responding to collection view updates

- [prepare(forCollectionViewUpdates:)](prepare%28forcollectionviewupdates_%29.md): Notifies the layout object that the contents of the collection view are about to change.
- [finalizeCollectionViewUpdates()](finalizecollectionviewupdates%28%29.md): Performs any additional animations or clean up needed during a collection view update.
- [indexPathsToInsertForDecorationView(ofKind:)](indexpathstoinsertfordecorationview%28ofkind_%29.md): Retrieves an array of index paths representing the decoration views to add.
- [initialLayoutAttributesForAppearingItem(at:)](initiallayoutattributesforappearingitem%28at_%29.md): Retrieves the starting layout information for an item being inserted into the collection view.
- [initialLayoutAttributesForAppearingSupplementaryElement(ofKind:at:)](initiallayoutattributesforappearingsupplementaryelement%28ofkind_at_%29.md): Retrieves the starting layout information for a supplementary view being inserted into the collection view.
- [initialLayoutAttributesForAppearingDecorationElement(ofKind:at:)](initiallayoutattributesforappearingdecorationelement%28ofkind_at_%29.md): Retrieves the starting layout information for a decoration view being inserted into the collection view.
- [indexPathsToDeleteForSupplementaryView(ofKind:)](indexpathstodeleteforsupplementaryview%28ofkind_%29.md): Retrieves an array of index paths representing the supplementary views to remove.
- [indexPathsToDeleteForDecorationView(ofKind:)](indexpathstodeletefordecorationview%28ofkind_%29.md): Retrieves an array of index paths representing the decoration views to remove.
- [finalLayoutAttributesForDisappearingItem(at:)](finallayoutattributesfordisappearingitem%28at_%29.md): Retrieves the final layout information for an item that is about to be removed from the collection view.
- [finalLayoutAttributesForDisappearingSupplementaryElement(ofKind:at:)](finallayoutattributesfordisappearingsupplementaryelement%28ofkind_at_%29.md): Retrieves the final layout information for a supplementary view that is about to be removed from the collection view.
- [finalLayoutAttributesForDisappearingDecorationElement(ofKind:at:)](finallayoutattributesfordisappearingdecorationelement%28ofkind_at_%29.md): Retrieves the final layout information for a decoration view that is about to be removed from the collection view.
- [targetIndexPath(forInteractivelyMovingItem:withPosition:)](targetindexpath%28forinteractivelymovingitem_withposition_%29.md): Retrieves the index path to for an item when it is at the specified location in the collection view’s bounds.

# indexPathsToInsertForSupplementaryViewOfKind: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Retrieves an array of index paths for the supplementary views you want to add to the layout.

## Declaration

```objectivec
- (NSArray<NSIndexPath *> *) indexPathsToInsertForSupplementaryViewOfKind:(NSString *) elementKind;
```

## Parameters

- `elementKind`: The specific type of supplementary view.

<a id="return-value"></a>

## Return Value

An array of [NSIndexPath](../../foundation/nsindexpath.md) objects indicating the location of the new supplementary views, or an empty array if you don’t want to add any supplementary views.

<a id="Discussion"></a>

## Discussion

The collection view calls this method whenever you add cells or sections to the collection view. Implementing this method gives your layout object an opportunity to add new supplementary views to complement the additions.

The collection view calls this method between its calls to [prepareForCollectionViewUpdates:](prepare%28forcollectionviewupdates_%29.md) and [finalizeCollectionViewUpdates](finalizecollectionviewupdates%28%29.md).

## See Also

### Responding to collection view updates

- [prepareForCollectionViewUpdates:](prepare%28forcollectionviewupdates_%29.md): Notifies the layout object that the contents of the collection view are about to change.
- [finalizeCollectionViewUpdates](finalizecollectionviewupdates%28%29.md): Performs any additional animations or clean up needed during a collection view update.
- [indexPathsToInsertForDecorationViewOfKind:](indexpathstoinsertfordecorationview%28ofkind_%29.md): Retrieves an array of index paths representing the decoration views to add.
- [initialLayoutAttributesForAppearingItemAtIndexPath:](initiallayoutattributesforappearingitem%28at_%29.md): Retrieves the starting layout information for an item being inserted into the collection view.
- [initialLayoutAttributesForAppearingSupplementaryElementOfKind:atIndexPath:](initiallayoutattributesforappearingsupplementaryelement%28ofkind_at_%29.md): Retrieves the starting layout information for a supplementary view being inserted into the collection view.
- [initialLayoutAttributesForAppearingDecorationElementOfKind:atIndexPath:](initiallayoutattributesforappearingdecorationelement%28ofkind_at_%29.md): Retrieves the starting layout information for a decoration view being inserted into the collection view.
- [indexPathsToDeleteForSupplementaryViewOfKind:](indexpathstodeleteforsupplementaryview%28ofkind_%29.md): Retrieves an array of index paths representing the supplementary views to remove.
- [indexPathsToDeleteForDecorationViewOfKind:](indexpathstodeletefordecorationview%28ofkind_%29.md): Retrieves an array of index paths representing the decoration views to remove.
- [finalLayoutAttributesForDisappearingItemAtIndexPath:](finallayoutattributesfordisappearingitem%28at_%29.md): Retrieves the final layout information for an item that is about to be removed from the collection view.
- [finalLayoutAttributesForDisappearingSupplementaryElementOfKind:atIndexPath:](finallayoutattributesfordisappearingsupplementaryelement%28ofkind_at_%29.md): Retrieves the final layout information for a supplementary view that is about to be removed from the collection view.
- [finalLayoutAttributesForDisappearingDecorationElementOfKind:atIndexPath:](finallayoutattributesfordisappearingdecorationelement%28ofkind_at_%29.md): Retrieves the final layout information for a decoration view that is about to be removed from the collection view.
- [targetIndexPathForInteractivelyMovingItem:withPosition:](targetindexpath%28forinteractivelymovingitem_withposition_%29.md): Retrieves the index path to for an item when it is at the specified location in the collection view’s bounds.
