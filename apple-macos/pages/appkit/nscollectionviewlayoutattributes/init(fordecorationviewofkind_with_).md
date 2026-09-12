> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutattributes/init(fordecorationviewofkind:with:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutattributes/init(fordecorationviewofkind:with:))

# init(forDecorationViewOfKind:with:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.11+

Creates and returns a layout attributes object for a decoration view based on the specified information.

## Declaration

```swift
convenience init(forDecorationViewOfKind decorationViewKind: NSCollectionView.DecorationElementKind, with indexPath: IndexPath)
```

## Parameters

- `decorationViewKind`: A string that identifies the type of the decoration view. Use this string to differentiate from among the decoration views in a given section. This parameter must contain a valid value.
- `indexPath`: The index path of the item. You can use this information to identify the item in your app’s data structures.

<a id="return-value"></a>

## Return Value

A new layout attributes object configured with the initial attributes for the decoration view.

<a id="Discussion"></a>

## Discussion

Call this method when you need to create a layout attributes object for a decoration view in a collection view. Decoration views are a tertiary type of content that display visual adornments in your collection view interface. For example, decoration views might display custom backgrounds. This method uses the parameters to set the initial values of the [indexPath](indexpath.md) and [representedElementKind](representedelementkind.md) properties the returned object.

## See Also

### Creating Layout Attributes

- [init(forItemWith:)](init%28foritemwith_%29.md): Creates and returns a layout attributes object for the item at the specified index path.
- [init(forSupplementaryViewOfKind:with:)](init%28forsupplementaryviewofkind_with_%29.md): Creates and returns a layout attributes object for a supplementary view based on the specified information.
- [init(forInterItemGapBefore:)](init%28forinteritemgapbefore_%29.md): Creates and returns a layout attributes object for an inter-item gap view at the specified index path.
- [NSCollectionView.DecorationElementKind](../nscollectionview/decorationelementkind.md)

# layoutAttributesForDecorationViewOfKind:withIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.11+

Creates and returns a layout attributes object for a decoration view based on the specified information.

## Declaration

```objectivec
+ (instancetype) layoutAttributesForDecorationViewOfKind:(NSCollectionViewDecorationElementKind) decorationViewKind withIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `decorationViewKind`: A string that identifies the type of the decoration view. Use this string to differentiate from among the decoration views in a given section. This parameter must contain a valid value.
- `indexPath`: The index path of the item. You can use this information to identify the item in your app’s data structures.

<a id="return-value"></a>

## Return Value

A new layout attributes object configured with the initial attributes for the decoration view.

<a id="Discussion"></a>

## Discussion

Call this method when you need to create a layout attributes object for a decoration view in a collection view. Decoration views are a tertiary type of content that display visual adornments in your collection view interface. For example, decoration views might display custom backgrounds. This method uses the parameters to set the initial values of the [indexPath](indexpath.md) and [representedElementKind](representedelementkind.md) properties the returned object.

## See Also

### Creating Layout Attributes

- [layoutAttributesForItemWithIndexPath:](init%28foritemwith_%29.md): Creates and returns a layout attributes object for the item at the specified index path.
- [layoutAttributesForSupplementaryViewOfKind:withIndexPath:](init%28forsupplementaryviewofkind_with_%29.md): Creates and returns a layout attributes object for a supplementary view based on the specified information.
- [layoutAttributesForInterItemGapBeforeIndexPath:](init%28forinteritemgapbefore_%29.md): Creates and returns a layout attributes object for an inter-item gap view at the specified index path.
- [NSCollectionViewDecorationElementKind](../nscollectionview/decorationelementkind.md)
