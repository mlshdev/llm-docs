> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutattributes/init(forinteritemgapbefore:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutattributes/init(forinteritemgapbefore:))

# init(forInterItemGapBefore:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.11+

Creates and returns a layout attributes object for an inter-item gap view at the specified index path.

## Declaration

```swift
convenience init(forInterItemGapBefore indexPath: IndexPath)
```

## Parameters

- `indexPath`: The index path at which to insert the gap view. The gap is placed after the item specified by the index path. This parameter must contain a valid value.

<a id="return-value"></a>

## Return Value

A new layout attributes object configured with the initial attributes for the inter-item gap view.

<a id="Discussion"></a>

## Discussion

Call this method when you need to create a layout attributes object for an inter-item gap view in a collection view. Gap views are used during drag and drop to indicate the area where content will drop. This method uses the parameters to set the initial values of the [indexPath](indexpath.md) property of the returned object. The [representedElementKind](representedelementkind.md) property is set to [elementKindInterItemGapIndicator](../nscollectionview/elementkindinteritemgapindicator.md).

## See Also

### Creating Layout Attributes

- [init(forItemWith:)](init%28foritemwith_%29.md): Creates and returns a layout attributes object for the item at the specified index path.
- [init(forSupplementaryViewOfKind:with:)](init%28forsupplementaryviewofkind_with_%29.md): Creates and returns a layout attributes object for a supplementary view based on the specified information.
- [init(forDecorationViewOfKind:with:)](init%28fordecorationviewofkind_with_%29.md): Creates and returns a layout attributes object for a decoration view based on the specified information.
- [NSCollectionView.DecorationElementKind](../nscollectionview/decorationelementkind.md)

# layoutAttributesForInterItemGapBeforeIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.11+

Creates and returns a layout attributes object for an inter-item gap view at the specified index path.

## Declaration

```objectivec
+ (instancetype) layoutAttributesForInterItemGapBeforeIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: The index path at which to insert the gap view. The gap is placed after the item specified by the index path. This parameter must contain a valid value.

<a id="return-value"></a>

## Return Value

A new layout attributes object configured with the initial attributes for the inter-item gap view.

<a id="Discussion"></a>

## Discussion

Call this method when you need to create a layout attributes object for an inter-item gap view in a collection view. Gap views are used during drag and drop to indicate the area where content will drop. This method uses the parameters to set the initial values of the [indexPath](indexpath.md) property of the returned object. The [representedElementKind](representedelementkind.md) property is set to [NSCollectionElementKindInterItemGapIndicator](../nscollectionview/elementkindinteritemgapindicator.md).

## See Also

### Creating Layout Attributes

- [layoutAttributesForItemWithIndexPath:](init%28foritemwith_%29.md): Creates and returns a layout attributes object for the item at the specified index path.
- [layoutAttributesForSupplementaryViewOfKind:withIndexPath:](init%28forsupplementaryviewofkind_with_%29.md): Creates and returns a layout attributes object for a supplementary view based on the specified information.
- [layoutAttributesForDecorationViewOfKind:withIndexPath:](init%28fordecorationviewofkind_with_%29.md): Creates and returns a layout attributes object for a decoration view based on the specified information.
- [NSCollectionViewDecorationElementKind](../nscollectionview/decorationelementkind.md)
