> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutattributes/init(foritemwith:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutattributes/init(foritemwith:))

# init(forItemWith:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.11+

Creates and returns a layout attributes object for the item at the specified index path.

## Declaration

```swift
convenience init(forItemWith indexPath: IndexPath)
```

## Parameters

- `indexPath`: The index path of the item. You can use this information to identify the item in your app’s data structures. This parameter must contain a valid value.

<a id="return-value"></a>

## Return Value

A new layout attributes object containing the initial attributes for the item.

<a id="Discussion"></a>

## Discussion

Call this method when you need to create a layout attributes object for an item in a collection view. Items are the main type of content presented by a collection view. Items are grouped into sections, although a collection view may have only one section. This method assigns the provided index path to the [indexPath](indexpath.md) property of the returned object.

## See Also

### Creating Layout Attributes

- [init(forSupplementaryViewOfKind:with:)](init%28forsupplementaryviewofkind_with_%29.md): Creates and returns a layout attributes object for a supplementary view based on the specified information.
- [init(forDecorationViewOfKind:with:)](init%28fordecorationviewofkind_with_%29.md): Creates and returns a layout attributes object for a decoration view based on the specified information.
- [init(forInterItemGapBefore:)](init%28forinteritemgapbefore_%29.md): Creates and returns a layout attributes object for an inter-item gap view at the specified index path.
- [NSCollectionView.DecorationElementKind](../nscollectionview/decorationelementkind.md)

# layoutAttributesForItemWithIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.11+

Creates and returns a layout attributes object for the item at the specified index path.

## Declaration

```objectivec
+ (instancetype) layoutAttributesForItemWithIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: The index path of the item. You can use this information to identify the item in your app’s data structures. This parameter must contain a valid value.

<a id="return-value"></a>

## Return Value

A new layout attributes object containing the initial attributes for the item.

<a id="Discussion"></a>

## Discussion

Call this method when you need to create a layout attributes object for an item in a collection view. Items are the main type of content presented by a collection view. Items are grouped into sections, although a collection view may have only one section. This method assigns the provided index path to the [indexPath](indexpath.md) property of the returned object.

## See Also

### Creating Layout Attributes

- [layoutAttributesForSupplementaryViewOfKind:withIndexPath:](init%28forsupplementaryviewofkind_with_%29.md): Creates and returns a layout attributes object for a supplementary view based on the specified information.
- [layoutAttributesForDecorationViewOfKind:withIndexPath:](init%28fordecorationviewofkind_with_%29.md): Creates and returns a layout attributes object for a decoration view based on the specified information.
- [layoutAttributesForInterItemGapBeforeIndexPath:](init%28forinteritemgapbefore_%29.md): Creates and returns a layout attributes object for an inter-item gap view at the specified index path.
- [NSCollectionViewDecorationElementKind](../nscollectionview/decorationelementkind.md)
