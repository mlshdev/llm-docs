> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/finalizecollectionviewupdates()](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/finalizecollectionviewupdates())

# finalizeCollectionViewUpdates() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Performs any additional animations or clean up needed during a collection view update.

## Declaration

```swift
func finalizeCollectionViewUpdates()
```

<a id="Discussion"></a>

## Discussion

The collection view calls this method as the last step before proceeding to animate any changes into place. This method is called within the animation block used to perform all of the insertion, deletion, and move animations so you can create additional animations using this method as needed. Otherwise, you can use it to perform any last minute tasks associated with managing your layout object’s state information.

## See Also

### Responding to collection view updates

- [prepare(forCollectionViewUpdates:)](prepare%28forcollectionviewupdates_%29.md): Notifies the layout object that the contents of the collection view are about to change.
- [indexPathsToInsertForSupplementaryView(ofKind:)](indexpathstoinsertforsupplementaryview%28ofkind_%29.md): Retrieves an array of index paths for the supplementary views you want to add to the layout.
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

# finalizeCollectionViewUpdates (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Performs any additional animations or clean up needed during a collection view update.

## Declaration

```objectivec
- (void) finalizeCollectionViewUpdates;
```

<a id="Discussion"></a>

## Discussion

The collection view calls this method as the last step before proceeding to animate any changes into place. This method is called within the animation block used to perform all of the insertion, deletion, and move animations so you can create additional animations using this method as needed. Otherwise, you can use it to perform any last minute tasks associated with managing your layout object’s state information.

## See Also

### Responding to collection view updates

- [prepareForCollectionViewUpdates:](prepare%28forcollectionviewupdates_%29.md): Notifies the layout object that the contents of the collection view are about to change.
- [indexPathsToInsertForSupplementaryViewOfKind:](indexpathstoinsertforsupplementaryview%28ofkind_%29.md): Retrieves an array of index paths for the supplementary views you want to add to the layout.
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
