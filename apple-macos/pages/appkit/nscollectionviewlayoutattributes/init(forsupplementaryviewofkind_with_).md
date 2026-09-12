> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutattributes/init(forsupplementaryviewofkind:with:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutattributes/init(forsupplementaryviewofkind:with:))

# init(forSupplementaryViewOfKind:with:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.11+

Creates and returns a layout attributes object for a supplementary view based on the specified information.

## Declaration

```swift
convenience init(forSupplementaryViewOfKind elementKind: NSCollectionView.SupplementaryElementKind, with indexPath: IndexPath)
```

## Parameters

- `elementKind`: A string that identifies the type of the supplementary view. Use this string to differentiate from among the supplementary views in a given section. This parameter must contain a valid value.
- `indexPath`: The index path of the item. You can use this information to identify the item in your app’s data structures. This parameter must contain a valid value.

<a id="return-value"></a>

## Return Value

A new layout attributes object configured with the initial attributes for the supplementary view.

<a id="Discussion"></a>

## Discussion

Call this method when you need to create a layout attributes object for a supplementary view in a collection view. Supplementary views are a secondary type of content that display data related to a specific section. For example, header and footer views in a grid layout implemented using supplementary views. This method uses the parameters to set the initial values of the [indexPath](indexpath.md) and [representedElementKind](representedelementkind.md) properties the returned object.

## See Also

### Creating Layout Attributes

- [init(forItemWith:)](init%28foritemwith_%29.md): Creates and returns a layout attributes object for the item at the specified index path.
- [init(forDecorationViewOfKind:with:)](init%28fordecorationviewofkind_with_%29.md): Creates and returns a layout attributes object for a decoration view based on the specified information.
- [init(forInterItemGapBefore:)](init%28forinteritemgapbefore_%29.md): Creates and returns a layout attributes object for an inter-item gap view at the specified index path.
- [NSCollectionView.DecorationElementKind](../nscollectionview/decorationelementkind.md)

# layoutAttributesForSupplementaryViewOfKind:withIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.11+

Creates and returns a layout attributes object for a supplementary view based on the specified information.

## Declaration

```objectivec
+ (instancetype) layoutAttributesForSupplementaryViewOfKind:(NSCollectionViewSupplementaryElementKind) elementKind withIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `elementKind`: A string that identifies the type of the supplementary view. Use this string to differentiate from among the supplementary views in a given section. This parameter must contain a valid value.
- `indexPath`: The index path of the item. You can use this information to identify the item in your app’s data structures. This parameter must contain a valid value.

<a id="return-value"></a>

## Return Value

A new layout attributes object configured with the initial attributes for the supplementary view.

<a id="Discussion"></a>

## Discussion

Call this method when you need to create a layout attributes object for a supplementary view in a collection view. Supplementary views are a secondary type of content that display data related to a specific section. For example, header and footer views in a grid layout implemented using supplementary views. This method uses the parameters to set the initial values of the [indexPath](indexpath.md) and [representedElementKind](representedelementkind.md) properties the returned object.

## See Also

### Creating Layout Attributes

- [layoutAttributesForItemWithIndexPath:](init%28foritemwith_%29.md): Creates and returns a layout attributes object for the item at the specified index path.
- [layoutAttributesForDecorationViewOfKind:withIndexPath:](init%28fordecorationviewofkind_with_%29.md): Creates and returns a layout attributes object for a decoration view based on the specified information.
- [layoutAttributesForInterItemGapBeforeIndexPath:](init%28forinteritemgapbefore_%29.md): Creates and returns a layout attributes object for an inter-item gap view at the specified index path.
- [NSCollectionViewDecorationElementKind](../nscollectionview/decorationelementkind.md)
