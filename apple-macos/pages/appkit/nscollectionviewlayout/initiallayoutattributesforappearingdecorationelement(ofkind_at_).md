> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/initiallayoutattributesforappearingdecorationelement(ofkind:at:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/initiallayoutattributesforappearingdecorationelement(ofkind:at:))

# initialLayoutAttributesForAppearingDecorationElement(ofKind:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the starting layout information for a decoration view being added to the collection view.

## Declaration

```swift
func initialLayoutAttributesForAppearingDecorationElement(ofKind elementKind: NSCollectionView.DecorationElementKind, at decorationIndexPath: IndexPath) -> NSCollectionViewLayoutAttributes?
```

## Parameters

- `elementKind`: The type of the decoration view being added.
- `decorationIndexPath`: The index path of the decoration view. You can use this path to retrieve any relevant information from the collection view’s data source.

<a id="return-value"></a>

## Return Value

The layout attributes object that describes the decoration view’s position and properties at the start of animations.

<a id="Discussion"></a>

## Discussion

When your layout object adds decoration views in response to other changes in the collection view, the collection view calls this method for each decoration view before animating it onscreen. Because new decoration views are not yet visible in the collection view, the attributes you return represent the view’s starting state. For example, you might return attributes that position the decoration view offscreen or set its initial alpha to `0`. The collection view uses the attributes you return as the starting point for any animations. (The end point of the animation is the view’s new location and attributes.) If you return `nil`, the layout uses the decoration view’s final attributes for both the start point and end point of the animation.

The default implementation of this method returns `nil`. Subclasses are expected to override this method, as needed, and provide any initial attributes.

## See Also

### Responding to Collection View Updates

- [prepare(forCollectionViewUpdates:)](prepare%28forcollectionviewupdates_%29.md): Performs needed tasks before items are inserted, deleted, or moved within the collection view.
- [finalizeCollectionViewUpdates()](finalizecollectionviewupdates%28%29.md): Performs needed steps after items are inserted, deleted, or moved within a collection view.
- [indexPathsToInsertForSupplementaryView(ofKind:)](indexpathstoinsertforsupplementaryview%28ofkind_%29.md): Returns the index paths for any supplementary views that the layout object wants to add to the collection view.
- [indexPathsToInsertForDecorationView(ofKind:)](indexpathstoinsertfordecorationview%28ofkind_%29.md): Returns the index paths for any decoration views that the layout object wants to add to the collection view.
- [initialLayoutAttributesForAppearingItem(at:)](initiallayoutattributesforappearingitem%28at_%29.md): Returns the starting layout information for an item being inserted into the collection view.
- [initialLayoutAttributesForAppearingSupplementaryElement(ofKind:at:)](initiallayoutattributesforappearingsupplementaryelement%28ofkind_at_%29.md): Returns the starting layout information for a supplementary view being added to the collection view.
- [indexPathsToDeleteForSupplementaryView(ofKind:)](indexpathstodeleteforsupplementaryview%28ofkind_%29.md): Returns the index paths for any supplementary views that the layout object wants to remove from the collection view.
- [indexPathsToDeleteForDecorationView(ofKind:)](indexpathstodeletefordecorationview%28ofkind_%29.md): Returns index paths for any decoration views that the layout object wants to remove from the collection view.
- [finalLayoutAttributesForDisappearingItem(at:)](finallayoutattributesfordisappearingitem%28at_%29.md): Returns the ending layout information for an item being removed from the collection view.
- [finalLayoutAttributesForDisappearingSupplementaryElement(ofKind:at:)](finallayoutattributesfordisappearingsupplementaryelement%28ofkind_at_%29.md): Returns the ending layout information for a supplementary view being removed from the collection view.
- [finalLayoutAttributesForDisappearingDecorationElement(ofKind:at:)](finallayoutattributesfordisappearingdecorationelement%28ofkind_at_%29.md): Returns the ending layout information for a decoration view being removed from the collection view.

# initialLayoutAttributesForAppearingDecorationElementOfKind:atIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the starting layout information for a decoration view being added to the collection view.

## Declaration

```objectivec
- (NSCollectionViewLayoutAttributes *) initialLayoutAttributesForAppearingDecorationElementOfKind:(NSCollectionViewDecorationElementKind) elementKind atIndexPath:(NSIndexPath *) decorationIndexPath;
```

## Parameters

- `elementKind`: The type of the decoration view being added.
- `decorationIndexPath`: The index path of the decoration view. You can use this path to retrieve any relevant information from the collection view’s data source.

<a id="return-value"></a>

## Return Value

The layout attributes object that describes the decoration view’s position and properties at the start of animations.

<a id="Discussion"></a>

## Discussion

When your layout object adds decoration views in response to other changes in the collection view, the collection view calls this method for each decoration view before animating it onscreen. Because new decoration views are not yet visible in the collection view, the attributes you return represent the view’s starting state. For example, you might return attributes that position the decoration view offscreen or set its initial alpha to `0`. The collection view uses the attributes you return as the starting point for any animations. (The end point of the animation is the view’s new location and attributes.) If you return `nil`, the layout uses the decoration view’s final attributes for both the start point and end point of the animation.

The default implementation of this method returns `nil`. Subclasses are expected to override this method, as needed, and provide any initial attributes.

## See Also

### Responding to Collection View Updates

- [prepareForCollectionViewUpdates:](prepare%28forcollectionviewupdates_%29.md): Performs needed tasks before items are inserted, deleted, or moved within the collection view.
- [finalizeCollectionViewUpdates](finalizecollectionviewupdates%28%29.md): Performs needed steps after items are inserted, deleted, or moved within a collection view.
- [indexPathsToInsertForSupplementaryViewOfKind:](indexpathstoinsertforsupplementaryview%28ofkind_%29.md): Returns the index paths for any supplementary views that the layout object wants to add to the collection view.
- [indexPathsToInsertForDecorationViewOfKind:](indexpathstoinsertfordecorationview%28ofkind_%29.md): Returns the index paths for any decoration views that the layout object wants to add to the collection view.
- [initialLayoutAttributesForAppearingItemAtIndexPath:](initiallayoutattributesforappearingitem%28at_%29.md): Returns the starting layout information for an item being inserted into the collection view.
- [initialLayoutAttributesForAppearingSupplementaryElementOfKind:atIndexPath:](initiallayoutattributesforappearingsupplementaryelement%28ofkind_at_%29.md): Returns the starting layout information for a supplementary view being added to the collection view.
- [indexPathsToDeleteForSupplementaryViewOfKind:](indexpathstodeleteforsupplementaryview%28ofkind_%29.md): Returns the index paths for any supplementary views that the layout object wants to remove from the collection view.
- [indexPathsToDeleteForDecorationViewOfKind:](indexpathstodeletefordecorationview%28ofkind_%29.md): Returns index paths for any decoration views that the layout object wants to remove from the collection view.
- [finalLayoutAttributesForDisappearingItemAtIndexPath:](finallayoutattributesfordisappearingitem%28at_%29.md): Returns the ending layout information for an item being removed from the collection view.
- [finalLayoutAttributesForDisappearingSupplementaryElementOfKind:atIndexPath:](finallayoutattributesfordisappearingsupplementaryelement%28ofkind_at_%29.md): Returns the ending layout information for a supplementary view being removed from the collection view.
- [finalLayoutAttributesForDisappearingDecorationElementOfKind:atIndexPath:](finallayoutattributesfordisappearingdecorationelement%28ofkind_at_%29.md): Returns the ending layout information for a decoration view being removed from the collection view.
