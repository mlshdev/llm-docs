> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/makesupplementaryview(ofkind:withidentifier:for:)](https://developer.apple.com/documentation/appkit/nscollectionview/makesupplementaryview(ofkind:withidentifier:for:))

# makeSupplementaryView(ofKind:withIdentifier:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Creates or returns a reusable supplementary view of the specified type.

## Declaration

```swift
func makeSupplementaryView(ofKind elementKind: NSCollectionView.SupplementaryElementKind, withIdentifier identifier: NSUserInterfaceItemIdentifier, for indexPath: IndexPath) -> NSView
```

## Parameters

- `elementKind`: The kind of supplementary view to create. This value is defined by the layout object. This parameter must not be an empty string or `nil`.
- `identifier`: The reuse identifier for the specified item. This is the identifier you specified when registering the supplementary view. This parameter must not be `nil`.
- `indexPath`: The index path specifying the location of the supplementary view. The data source object receives this information in its [collectionView(\_:viewForSupplementaryElementOfKind:at:)](../nscollectionviewdatasource/collectionview%28__viewforsupplementaryelementofkind_at_%29.md) method and you should just pass it along.

<a id="return-value"></a>

## Return Value

A view that adopts the [NSCollectionViewElement](../nscollectionviewelement.md) protocol.

<a id="Discussion"></a>

## Discussion

This method looks for a recycled supplementary view of the specified type and returns it if one exists. If one does not exist, it creates it using one of the following techniques:

- If you used the [register(\_:forSupplementaryViewOfKind:withIdentifier:)](register%28__forsupplementaryviewofkind_withidentifier_%29-3dqa.md) method to register a class for the identifier, this method instantiates your view class and returns it.
- If you used the [register(\_:forSupplementaryViewOfKind:withIdentifier:)](register%28__forsupplementaryviewofkind_withidentifier_%29-7gvf2.md) method to register a nib file for the identifier, this method loads the view from the nib file and returns it.

## See Also

### Creating Collection View Items

- [makeItem(withIdentifier:for:)](makeitem%28withidentifier_for_%29.md): Creates or returns a reusable item object of the specified type.
- [register(\_:forItemWithIdentifier:)](register%28__foritemwithidentifier_%29-6s4i.md): Registers a class to use when creating new items in the collection view.
- [register(\_:forItemWithIdentifier:)](register%28__foritemwithidentifier_%29-90h1i.md): Registers a nib file to use when creating items in the collection view.
- [register(\_:forSupplementaryViewOfKind:withIdentifier:)](register%28__forsupplementaryviewofkind_withidentifier_%29-3dqa.md): Registers a class to use when creating new supplementary views in the collection view.
- [register(\_:forSupplementaryViewOfKind:withIdentifier:)](register%28__forsupplementaryviewofkind_withidentifier_%29-7gvf2.md): Registers a nib file to use when creating supplementary views in the collection view.
- [NSCollectionView.SupplementaryElementKind](supplementaryelementkind.md)
- [NSUserInterfaceItemIdentifier](../nsuserinterfaceitemidentifier.md)

# makeSupplementaryViewOfKind:withIdentifier:forIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Creates or returns a reusable supplementary view of the specified type.

## Declaration

```objectivec
- (NSView *) makeSupplementaryViewOfKind:(NSCollectionViewSupplementaryElementKind) elementKind withIdentifier:(NSUserInterfaceItemIdentifier) identifier forIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `elementKind`: The kind of supplementary view to create. This value is defined by the layout object. This parameter must not be an empty string or `nil`.
- `identifier`: The reuse identifier for the specified item. This is the identifier you specified when registering the supplementary view. This parameter must not be `nil`.
- `indexPath`: The index path specifying the location of the supplementary view. The data source object receives this information in its [collectionView:viewForSupplementaryElementOfKind:atIndexPath:](../nscollectionviewdatasource/collectionview%28__viewforsupplementaryelementofkind_at_%29.md) method and you should just pass it along.

<a id="return-value"></a>

## Return Value

A view that adopts the [NSCollectionViewElement](../nscollectionviewelement.md) protocol.

<a id="Discussion"></a>

## Discussion

This method looks for a recycled supplementary view of the specified type and returns it if one exists. If one does not exist, it creates it using one of the following techniques:

- If you used the [registerClass:forSupplementaryViewOfKind:withIdentifier:](register%28__forsupplementaryviewofkind_withidentifier_%29-3dqa.md) method to register a class for the identifier, this method instantiates your view class and returns it.
- If you used the [registerNib:forSupplementaryViewOfKind:withIdentifier:](register%28__forsupplementaryviewofkind_withidentifier_%29-7gvf2.md) method to register a nib file for the identifier, this method loads the view from the nib file and returns it.

## See Also

### Creating Collection View Items

- [makeItemWithIdentifier:forIndexPath:](makeitem%28withidentifier_for_%29.md): Creates or returns a reusable item object of the specified type.
- [registerClass:forItemWithIdentifier:](register%28__foritemwithidentifier_%29-6s4i.md): Registers a class to use when creating new items in the collection view.
- [registerNib:forItemWithIdentifier:](register%28__foritemwithidentifier_%29-90h1i.md): Registers a nib file to use when creating items in the collection view.
- [registerClass:forSupplementaryViewOfKind:withIdentifier:](register%28__forsupplementaryviewofkind_withidentifier_%29-3dqa.md): Registers a class to use when creating new supplementary views in the collection view.
- [registerNib:forSupplementaryViewOfKind:withIdentifier:](register%28__forsupplementaryviewofkind_withidentifier_%29-7gvf2.md): Registers a nib file to use when creating supplementary views in the collection view.
- [NSCollectionViewSupplementaryElementKind](supplementaryelementkind.md)
- [NSUserInterfaceItemIdentifier](../nsuserinterfaceitemidentifier.md)
