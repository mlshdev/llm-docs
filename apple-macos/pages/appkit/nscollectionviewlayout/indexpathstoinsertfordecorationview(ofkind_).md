> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/indexpathstoinsertfordecorationview(ofkind:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/indexpathstoinsertfordecorationview(ofkind:))

# indexPathsToInsertForDecorationView(ofKind:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index paths for any decoration views that the layout object wants to add to the collection view.

## Declaration

```swift
func indexPathsToInsertForDecorationView(ofKind elementKind: NSCollectionView.DecorationElementKind) -> Set<IndexPath>
```

## Parameters

- `elementKind`: The type of the decoration views to add.

<a id="return-value"></a>

## Return Value

The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects representing the decoration views to insert, or an empty array if you do not want to insert any decoration views.

<a id="Discussion"></a>

## Discussion

When your app inserts or deletes items or sections in the collection view, the collection view calls this method for each of the layout’s registered decoration view types. The default implementation returns an empty array, but you can override it and return index paths for each decoration view you want to add. For example, when a section is added, you might want to add the decoration views that are used to adorn that section. In that case, you would add index paths to the array that contain the section numbers that were added.

The index paths you return should always contain a valid section number, but the item number is optional. The item number is necessary only if you support multiple decoration views of the same type in a single section. If you do, your layout object can use the item numbers internally to differentiate the decoration views.

Subclasses are expected to override this method, as needed, and provide any appropriate index paths.

## See Also

### Responding to Collection View Updates

- [prepare(forCollectionViewUpdates:)](prepare%28forcollectionviewupdates_%29.md): Performs needed tasks before items are inserted, deleted, or moved within the collection view.
- [finalizeCollectionViewUpdates()](finalizecollectionviewupdates%28%29.md): Performs needed steps after items are inserted, deleted, or moved within a collection view.
- [indexPathsToInsertForSupplementaryView(ofKind:)](indexpathstoinsertforsupplementaryview%28ofkind_%29.md): Returns the index paths for any supplementary views that the layout object wants to add to the collection view.
- [initialLayoutAttributesForAppearingItem(at:)](initiallayoutattributesforappearingitem%28at_%29.md): Returns the starting layout information for an item being inserted into the collection view.
- [initialLayoutAttributesForAppearingSupplementaryElement(ofKind:at:)](initiallayoutattributesforappearingsupplementaryelement%28ofkind_at_%29.md): Returns the starting layout information for a supplementary view being added to the collection view.
- [initialLayoutAttributesForAppearingDecorationElement(ofKind:at:)](initiallayoutattributesforappearingdecorationelement%28ofkind_at_%29.md): Returns the starting layout information for a decoration view being added to the collection view.
- [indexPathsToDeleteForSupplementaryView(ofKind:)](indexpathstodeleteforsupplementaryview%28ofkind_%29.md): Returns the index paths for any supplementary views that the layout object wants to remove from the collection view.
- [indexPathsToDeleteForDecorationView(ofKind:)](indexpathstodeletefordecorationview%28ofkind_%29.md): Returns index paths for any decoration views that the layout object wants to remove from the collection view.
- [finalLayoutAttributesForDisappearingItem(at:)](finallayoutattributesfordisappearingitem%28at_%29.md): Returns the ending layout information for an item being removed from the collection view.
- [finalLayoutAttributesForDisappearingSupplementaryElement(ofKind:at:)](finallayoutattributesfordisappearingsupplementaryelement%28ofkind_at_%29.md): Returns the ending layout information for a supplementary view being removed from the collection view.
- [finalLayoutAttributesForDisappearingDecorationElement(ofKind:at:)](finallayoutattributesfordisappearingdecorationelement%28ofkind_at_%29.md): Returns the ending layout information for a decoration view being removed from the collection view.

# indexPathsToInsertForDecorationViewOfKind: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index paths for any decoration views that the layout object wants to add to the collection view.

## Declaration

```objectivec
- (NSSet<NSIndexPath *> *) indexPathsToInsertForDecorationViewOfKind:(NSCollectionViewDecorationElementKind) elementKind;
```

## Parameters

- `elementKind`: The type of the decoration views to add.

<a id="return-value"></a>

## Return Value

The set of [NSIndexPath](https://developer.apple.com/documentation/foundation/nsindexpath) objects representing the decoration views to insert, or an empty array if you do not want to insert any decoration views.

<a id="Discussion"></a>

## Discussion

When your app inserts or deletes items or sections in the collection view, the collection view calls this method for each of the layout’s registered decoration view types. The default implementation returns an empty array, but you can override it and return index paths for each decoration view you want to add. For example, when a section is added, you might want to add the decoration views that are used to adorn that section. In that case, you would add index paths to the array that contain the section numbers that were added.

The index paths you return should always contain a valid section number, but the item number is optional. The item number is necessary only if you support multiple decoration views of the same type in a single section. If you do, your layout object can use the item numbers internally to differentiate the decoration views.

Subclasses are expected to override this method, as needed, and provide any appropriate index paths.

## See Also

### Responding to Collection View Updates

- [prepareForCollectionViewUpdates:](prepare%28forcollectionviewupdates_%29.md): Performs needed tasks before items are inserted, deleted, or moved within the collection view.
- [finalizeCollectionViewUpdates](finalizecollectionviewupdates%28%29.md): Performs needed steps after items are inserted, deleted, or moved within a collection view.
- [indexPathsToInsertForSupplementaryViewOfKind:](indexpathstoinsertforsupplementaryview%28ofkind_%29.md): Returns the index paths for any supplementary views that the layout object wants to add to the collection view.
- [initialLayoutAttributesForAppearingItemAtIndexPath:](initiallayoutattributesforappearingitem%28at_%29.md): Returns the starting layout information for an item being inserted into the collection view.
- [initialLayoutAttributesForAppearingSupplementaryElementOfKind:atIndexPath:](initiallayoutattributesforappearingsupplementaryelement%28ofkind_at_%29.md): Returns the starting layout information for a supplementary view being added to the collection view.
- [initialLayoutAttributesForAppearingDecorationElementOfKind:atIndexPath:](initiallayoutattributesforappearingdecorationelement%28ofkind_at_%29.md): Returns the starting layout information for a decoration view being added to the collection view.
- [indexPathsToDeleteForSupplementaryViewOfKind:](indexpathstodeleteforsupplementaryview%28ofkind_%29.md): Returns the index paths for any supplementary views that the layout object wants to remove from the collection view.
- [indexPathsToDeleteForDecorationViewOfKind:](indexpathstodeletefordecorationview%28ofkind_%29.md): Returns index paths for any decoration views that the layout object wants to remove from the collection view.
- [finalLayoutAttributesForDisappearingItemAtIndexPath:](finallayoutattributesfordisappearingitem%28at_%29.md): Returns the ending layout information for an item being removed from the collection view.
- [finalLayoutAttributesForDisappearingSupplementaryElementOfKind:atIndexPath:](finallayoutattributesfordisappearingsupplementaryelement%28ofkind_at_%29.md): Returns the ending layout information for a supplementary view being removed from the collection view.
- [finalLayoutAttributesForDisappearingDecorationElementOfKind:atIndexPath:](finallayoutattributesfordisappearingdecorationelement%28ofkind_at_%29.md): Returns the ending layout information for a decoration view being removed from the collection view.
