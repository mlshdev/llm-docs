> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/initiallayoutattributesforappearingsupplementaryelement(ofkind:at:)](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/initiallayoutattributesforappearingsupplementaryelement(ofkind:at:))

# initialLayoutAttributesForAppearingSupplementaryElement(ofKind:at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Retrieves the starting layout information for a supplementary view being inserted into the collection view.

## Declaration

```swift
func initialLayoutAttributesForAppearingSupplementaryElement(ofKind elementKind: String, at elementIndexPath: IndexPath) -> UICollectionViewLayoutAttributes?
```

## Parameters

- `elementKind`: A string that identifies the type of supplementary view.
- `elementIndexPath`: The index path of the item being inserted.

<a id="return-value"></a>

## Return Value

A layout attributes object that describes the position at which to place the corresponding supplementary view.

<a id="Discussion"></a>

## Discussion

This method is called after the [prepare(forCollectionViewUpdates:)](prepare%28forcollectionviewupdates_%29.md) method and before the [finalizeCollectionViewUpdates()](finalizecollectionviewupdates%28%29.md) method for any supplementary views that are about to be inserted. Your implementation should return the layout information that describes the initial position and state of the view. The collection view uses this information as the starting point for any animations. (The end point of the animation is the view’s new location in the collection view.) If you return `nil`, the layout object uses the item’s final attributes for both the start and end points of the animation.

The default implementation of this method returns `nil`.

## See Also

### Responding to collection view updates

- [prepare(forCollectionViewUpdates:)](prepare%28forcollectionviewupdates_%29.md): Notifies the layout object that the contents of the collection view are about to change.
- [finalizeCollectionViewUpdates()](finalizecollectionviewupdates%28%29.md): Performs any additional animations or clean up needed during a collection view update.
- [indexPathsToInsertForSupplementaryView(ofKind:)](indexpathstoinsertforsupplementaryview%28ofkind_%29.md): Retrieves an array of index paths for the supplementary views you want to add to the layout.
- [indexPathsToInsertForDecorationView(ofKind:)](indexpathstoinsertfordecorationview%28ofkind_%29.md): Retrieves an array of index paths representing the decoration views to add.
- [initialLayoutAttributesForAppearingItem(at:)](initiallayoutattributesforappearingitem%28at_%29.md): Retrieves the starting layout information for an item being inserted into the collection view.
- [initialLayoutAttributesForAppearingDecorationElement(ofKind:at:)](initiallayoutattributesforappearingdecorationelement%28ofkind_at_%29.md): Retrieves the starting layout information for a decoration view being inserted into the collection view.
- [indexPathsToDeleteForSupplementaryView(ofKind:)](indexpathstodeleteforsupplementaryview%28ofkind_%29.md): Retrieves an array of index paths representing the supplementary views to remove.
- [indexPathsToDeleteForDecorationView(ofKind:)](indexpathstodeletefordecorationview%28ofkind_%29.md): Retrieves an array of index paths representing the decoration views to remove.
- [finalLayoutAttributesForDisappearingItem(at:)](finallayoutattributesfordisappearingitem%28at_%29.md): Retrieves the final layout information for an item that is about to be removed from the collection view.
- [finalLayoutAttributesForDisappearingSupplementaryElement(ofKind:at:)](finallayoutattributesfordisappearingsupplementaryelement%28ofkind_at_%29.md): Retrieves the final layout information for a supplementary view that is about to be removed from the collection view.
- [finalLayoutAttributesForDisappearingDecorationElement(ofKind:at:)](finallayoutattributesfordisappearingdecorationelement%28ofkind_at_%29.md): Retrieves the final layout information for a decoration view that is about to be removed from the collection view.
- [targetIndexPath(forInteractivelyMovingItem:withPosition:)](targetindexpath%28forinteractivelymovingitem_withposition_%29.md): Retrieves the index path to for an item when it is at the specified location in the collection view’s bounds.

# initialLayoutAttributesForAppearingSupplementaryElementOfKind:atIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Retrieves the starting layout information for a supplementary view being inserted into the collection view.

## Declaration

```objectivec
- (UICollectionViewLayoutAttributes *) initialLayoutAttributesForAppearingSupplementaryElementOfKind:(NSString *) elementKind atIndexPath:(NSIndexPath *) elementIndexPath;
```

## Parameters

- `elementKind`: A string that identifies the type of supplementary view.
- `elementIndexPath`: The index path of the item being inserted.

<a id="return-value"></a>

## Return Value

A layout attributes object that describes the position at which to place the corresponding supplementary view.

<a id="Discussion"></a>

## Discussion

This method is called after the [prepareForCollectionViewUpdates:](prepare%28forcollectionviewupdates_%29.md) method and before the [finalizeCollectionViewUpdates](finalizecollectionviewupdates%28%29.md) method for any supplementary views that are about to be inserted. Your implementation should return the layout information that describes the initial position and state of the view. The collection view uses this information as the starting point for any animations. (The end point of the animation is the view’s new location in the collection view.) If you return `nil`, the layout object uses the item’s final attributes for both the start and end points of the animation.

The default implementation of this method returns `nil`.

## See Also

### Responding to collection view updates

- [prepareForCollectionViewUpdates:](prepare%28forcollectionviewupdates_%29.md): Notifies the layout object that the contents of the collection view are about to change.
- [finalizeCollectionViewUpdates](finalizecollectionviewupdates%28%29.md): Performs any additional animations or clean up needed during a collection view update.
- [indexPathsToInsertForSupplementaryViewOfKind:](indexpathstoinsertforsupplementaryview%28ofkind_%29.md): Retrieves an array of index paths for the supplementary views you want to add to the layout.
- [indexPathsToInsertForDecorationViewOfKind:](indexpathstoinsertfordecorationview%28ofkind_%29.md): Retrieves an array of index paths representing the decoration views to add.
- [initialLayoutAttributesForAppearingItemAtIndexPath:](initiallayoutattributesforappearingitem%28at_%29.md): Retrieves the starting layout information for an item being inserted into the collection view.
- [initialLayoutAttributesForAppearingDecorationElementOfKind:atIndexPath:](initiallayoutattributesforappearingdecorationelement%28ofkind_at_%29.md): Retrieves the starting layout information for a decoration view being inserted into the collection view.
- [indexPathsToDeleteForSupplementaryViewOfKind:](indexpathstodeleteforsupplementaryview%28ofkind_%29.md): Retrieves an array of index paths representing the supplementary views to remove.
- [indexPathsToDeleteForDecorationViewOfKind:](indexpathstodeletefordecorationview%28ofkind_%29.md): Retrieves an array of index paths representing the decoration views to remove.
- [finalLayoutAttributesForDisappearingItemAtIndexPath:](finallayoutattributesfordisappearingitem%28at_%29.md): Retrieves the final layout information for an item that is about to be removed from the collection view.
- [finalLayoutAttributesForDisappearingSupplementaryElementOfKind:atIndexPath:](finallayoutattributesfordisappearingsupplementaryelement%28ofkind_at_%29.md): Retrieves the final layout information for a supplementary view that is about to be removed from the collection view.
- [finalLayoutAttributesForDisappearingDecorationElementOfKind:atIndexPath:](finallayoutattributesfordisappearingdecorationelement%28ofkind_at_%29.md): Retrieves the final layout information for a decoration view that is about to be removed from the collection view.
- [targetIndexPathForInteractivelyMovingItem:withPosition:](targetindexpath%28forinteractivelymovingitem_withposition_%29.md): Retrieves the index path to for an item when it is at the specified location in the collection view’s bounds.
