> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/prepare(forcollectionviewupdates:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/prepare(forcollectionviewupdates:))

# prepare(forCollectionViewUpdates:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Performs needed tasks before items are inserted, deleted, or moved within the collection view.

## Declaration

```swift
func prepare(forCollectionViewUpdates updateItems: [NSCollectionViewUpdateItem])
```

## Parameters

- `updateItems`: An array of [NSCollectionViewUpdateItem](../nscollectionviewupdateitem.md) objects that identify the changes being made.

<a id="Discussion"></a>

## Discussion

When items are inserted, deleted, or moved, the collection view calls this method to report those changes to the layout object. The default implementation uses the provided information to plan the layout animations needed to respond to the changes. Subclasses can override this method and use it to prepare for any custom changes, but you should always call `super` at some point in your implementation.

## See Also

### Responding to Collection View Updates

- [finalizeCollectionViewUpdates()](finalizecollectionviewupdates%28%29.md): Performs needed steps after items are inserted, deleted, or moved within a collection view.
- [indexPathsToInsertForSupplementaryView(ofKind:)](indexpathstoinsertforsupplementaryview%28ofkind_%29.md): Returns the index paths for any supplementary views that the layout object wants to add to the collection view.
- [indexPathsToInsertForDecorationView(ofKind:)](indexpathstoinsertfordecorationview%28ofkind_%29.md): Returns the index paths for any decoration views that the layout object wants to add to the collection view.
- [initialLayoutAttributesForAppearingItem(at:)](initiallayoutattributesforappearingitem%28at_%29.md): Returns the starting layout information for an item being inserted into the collection view.
- [initialLayoutAttributesForAppearingSupplementaryElement(ofKind:at:)](initiallayoutattributesforappearingsupplementaryelement%28ofkind_at_%29.md): Returns the starting layout information for a supplementary view being added to the collection view.
- [initialLayoutAttributesForAppearingDecorationElement(ofKind:at:)](initiallayoutattributesforappearingdecorationelement%28ofkind_at_%29.md): Returns the starting layout information for a decoration view being added to the collection view.
- [indexPathsToDeleteForSupplementaryView(ofKind:)](indexpathstodeleteforsupplementaryview%28ofkind_%29.md): Returns the index paths for any supplementary views that the layout object wants to remove from the collection view.
- [indexPathsToDeleteForDecorationView(ofKind:)](indexpathstodeletefordecorationview%28ofkind_%29.md): Returns index paths for any decoration views that the layout object wants to remove from the collection view.
- [finalLayoutAttributesForDisappearingItem(at:)](finallayoutattributesfordisappearingitem%28at_%29.md): Returns the ending layout information for an item being removed from the collection view.
- [finalLayoutAttributesForDisappearingSupplementaryElement(ofKind:at:)](finallayoutattributesfordisappearingsupplementaryelement%28ofkind_at_%29.md): Returns the ending layout information for a supplementary view being removed from the collection view.
- [finalLayoutAttributesForDisappearingDecorationElement(ofKind:at:)](finallayoutattributesfordisappearingdecorationelement%28ofkind_at_%29.md): Returns the ending layout information for a decoration view being removed from the collection view.

# prepareForCollectionViewUpdates: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Performs needed tasks before items are inserted, deleted, or moved within the collection view.

## Declaration

```objectivec
- (void) prepareForCollectionViewUpdates:(NSArray<NSCollectionViewUpdateItem *> *) updateItems;
```

## Parameters

- `updateItems`: An array of [NSCollectionViewUpdateItem](../nscollectionviewupdateitem.md) objects that identify the changes being made.

<a id="Discussion"></a>

## Discussion

When items are inserted, deleted, or moved, the collection view calls this method to report those changes to the layout object. The default implementation uses the provided information to plan the layout animations needed to respond to the changes. Subclasses can override this method and use it to prepare for any custom changes, but you should always call `super` at some point in your implementation.

## See Also

### Responding to Collection View Updates

- [finalizeCollectionViewUpdates](finalizecollectionviewupdates%28%29.md): Performs needed steps after items are inserted, deleted, or moved within a collection view.
- [indexPathsToInsertForSupplementaryViewOfKind:](indexpathstoinsertforsupplementaryview%28ofkind_%29.md): Returns the index paths for any supplementary views that the layout object wants to add to the collection view.
- [indexPathsToInsertForDecorationViewOfKind:](indexpathstoinsertfordecorationview%28ofkind_%29.md): Returns the index paths for any decoration views that the layout object wants to add to the collection view.
- [initialLayoutAttributesForAppearingItemAtIndexPath:](initiallayoutattributesforappearingitem%28at_%29.md): Returns the starting layout information for an item being inserted into the collection view.
- [initialLayoutAttributesForAppearingSupplementaryElementOfKind:atIndexPath:](initiallayoutattributesforappearingsupplementaryelement%28ofkind_at_%29.md): Returns the starting layout information for a supplementary view being added to the collection view.
- [initialLayoutAttributesForAppearingDecorationElementOfKind:atIndexPath:](initiallayoutattributesforappearingdecorationelement%28ofkind_at_%29.md): Returns the starting layout information for a decoration view being added to the collection view.
- [indexPathsToDeleteForSupplementaryViewOfKind:](indexpathstodeleteforsupplementaryview%28ofkind_%29.md): Returns the index paths for any supplementary views that the layout object wants to remove from the collection view.
- [indexPathsToDeleteForDecorationViewOfKind:](indexpathstodeletefordecorationview%28ofkind_%29.md): Returns index paths for any decoration views that the layout object wants to remove from the collection view.
- [finalLayoutAttributesForDisappearingItemAtIndexPath:](finallayoutattributesfordisappearingitem%28at_%29.md): Returns the ending layout information for an item being removed from the collection view.
- [finalLayoutAttributesForDisappearingSupplementaryElementOfKind:atIndexPath:](finallayoutattributesfordisappearingsupplementaryelement%28ofkind_at_%29.md): Returns the ending layout information for a supplementary view being removed from the collection view.
- [finalLayoutAttributesForDisappearingDecorationElementOfKind:atIndexPath:](finallayoutattributesfordisappearingdecorationelement%28ofkind_at_%29.md): Returns the ending layout information for a decoration view being removed from the collection view.
