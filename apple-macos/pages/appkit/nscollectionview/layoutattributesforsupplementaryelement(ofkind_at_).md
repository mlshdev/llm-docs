> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/layoutattributesforsupplementaryelement(ofkind:at:)](https://developer.apple.com/documentation/appkit/nscollectionview/layoutattributesforsupplementaryelement(ofkind:at:))

# layoutAttributesForSupplementaryElement(ofKind:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the layout information for the supplementary view at the specified index path.

## Declaration

```swift
func layoutAttributesForSupplementaryElement(ofKind kind: NSCollectionView.SupplementaryElementKind, at indexPath: IndexPath) -> NSCollectionViewLayoutAttributes?
```

## Parameters

- `kind`: The kind of the supplementary view whose attributes you want. The layout object defines the kinds of supplementary views it supports. This parameter must not be `nil`.
- `indexPath`: The index path of the supplementary view. Normally, this path

<a id="return-value"></a>

## Return Value

The layout attributes of the supplementary view or `nil` if no item exists at the specified path.

<a id="Discussion"></a>

## Discussion

This method updates the layout information as needed before returning the specified attributes. Always use this method to retrieve the layout attributes for supplementary views in the collection view. Do not query the layout object directly.

## See Also

### Getting Layout Information

- [layoutAttributesForItem(at:)](layoutattributesforitem%28at_%29.md): Returns the layout information for the item at the specified index path.

# layoutAttributesForSupplementaryElementOfKind:atIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the layout information for the supplementary view at the specified index path.

## Declaration

```objectivec
- (NSCollectionViewLayoutAttributes *) layoutAttributesForSupplementaryElementOfKind:(NSCollectionViewSupplementaryElementKind) kind atIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `kind`: The kind of the supplementary view whose attributes you want. The layout object defines the kinds of supplementary views it supports. This parameter must not be `nil`.
- `indexPath`: The index path of the supplementary view. Normally, this path

<a id="return-value"></a>

## Return Value

The layout attributes of the supplementary view or `nil` if no item exists at the specified path.

<a id="Discussion"></a>

## Discussion

This method updates the layout information as needed before returning the specified attributes. Always use this method to retrieve the layout attributes for supplementary views in the collection view. Do not query the layout object directly.

## See Also

### Getting Layout Information

- [layoutAttributesForItemAtIndexPath:](layoutattributesforitem%28at_%29.md): Returns the layout information for the item at the specified index path.
