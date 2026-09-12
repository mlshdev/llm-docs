> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/layoutattributesforitem(at:)](https://developer.apple.com/documentation/appkit/nscollectionview/layoutattributesforitem(at:))

# layoutAttributesForItem(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the layout information for the item at the specified index path.

## Declaration

```swift
func layoutAttributesForItem(at indexPath: IndexPath) -> NSCollectionViewLayoutAttributes?
```

## Parameters

- `indexPath`: The index path of the item.

<a id="return-value"></a>

## Return Value

The layout attributes of the item or `nil` if no item exists at the specified path.

<a id="Discussion"></a>

## Discussion

This method updates the layout information as needed before returning the specified attributes. Always use this method to retrieve the layout attributes for items in the collection view. Do not query the layout object directly.

## See Also

### Getting Layout Information

- [layoutAttributesForSupplementaryElement(ofKind:at:)](layoutattributesforsupplementaryelement%28ofkind_at_%29.md): Returns the layout information for the supplementary view at the specified index path.

# layoutAttributesForItemAtIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the layout information for the item at the specified index path.

## Declaration

```objectivec
- (NSCollectionViewLayoutAttributes *) layoutAttributesForItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: The index path of the item.

<a id="return-value"></a>

## Return Value

The layout attributes of the item or `nil` if no item exists at the specified path.

<a id="Discussion"></a>

## Discussion

This method updates the layout information as needed before returning the specified attributes. Always use this method to retrieve the layout attributes for items in the collection view. Do not query the layout object directly.

## See Also

### Getting Layout Information

- [layoutAttributesForSupplementaryElementOfKind:atIndexPath:](layoutattributesforsupplementaryelement%28ofkind_at_%29.md): Returns the layout information for the supplementary view at the specified index path.
