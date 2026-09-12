> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/makeitem(withidentifier:for:)](https://developer.apple.com/documentation/appkit/nscollectionview/makeitem(withidentifier:for:))

# makeItem(withIdentifier:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Creates or returns a reusable item object of the specified type.

## Declaration

```swift
func makeItem(withIdentifier identifier: NSUserInterfaceItemIdentifier, for indexPath: IndexPath) -> NSCollectionViewItem
```

## Parameters

- `identifier`: The reuse identifier for the specified item. This is the identifier you specified when registering the item. This parameter must not be `nil`.
- `indexPath`: The index path specifying the location of the item. The data source object receives this information in its [collectionView(\_:itemForRepresentedObjectAt:)](../nscollectionviewdatasource/collectionview%28__itemforrepresentedobjectat_%29.md) method and you should just pass it along.

<a id="return-value"></a>

## Return Value

A valid [NSCollectionViewItem](../nscollectionviewitem.md) object.

<a id="Discussion"></a>

## Discussion

This method looks for a recycled item object of the specified type and returns it if one exists. If one does not exist, it creates it using one of the following techniques:

- If you used the [register(\_:forItemWithIdentifier:)](register%28__foritemwithidentifier_%29-6s4i.md) method to register a class for the identifier, this method instantiates your class and returns it.
- If you used the [register(\_:forItemWithIdentifier:)](register%28__foritemwithidentifier_%29-90h1i.md) method to register a nib file for the identifier, this method loads the item from the nib file and returns it.

## See Also

### Creating Collection View Items

- [register(\_:forItemWithIdentifier:)](register%28__foritemwithidentifier_%29-6s4i.md): Registers a class to use when creating new items in the collection view.
- [register(\_:forItemWithIdentifier:)](register%28__foritemwithidentifier_%29-90h1i.md): Registers a nib file to use when creating items in the collection view.
- [makeSupplementaryView(ofKind:withIdentifier:for:)](makesupplementaryview%28ofkind_withidentifier_for_%29.md): Creates or returns a reusable supplementary view of the specified type.
- [register(\_:forSupplementaryViewOfKind:withIdentifier:)](register%28__forsupplementaryviewofkind_withidentifier_%29-3dqa.md): Registers a class to use when creating new supplementary views in the collection view.
- [register(\_:forSupplementaryViewOfKind:withIdentifier:)](register%28__forsupplementaryviewofkind_withidentifier_%29-7gvf2.md): Registers a nib file to use when creating supplementary views in the collection view.
- [NSCollectionView.SupplementaryElementKind](supplementaryelementkind.md)
- [NSUserInterfaceItemIdentifier](../nsuserinterfaceitemidentifier.md)

# makeItemWithIdentifier:forIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Creates or returns a reusable item object of the specified type.

## Declaration

```objectivec
- (NSCollectionViewItem *) makeItemWithIdentifier:(NSUserInterfaceItemIdentifier) identifier forIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `identifier`: The reuse identifier for the specified item. This is the identifier you specified when registering the item. This parameter must not be `nil`.
- `indexPath`: The index path specifying the location of the item. The data source object receives this information in its [collectionView:itemForRepresentedObjectAtIndexPath:](../nscollectionviewdatasource/collectionview%28__itemforrepresentedobjectat_%29.md) method and you should just pass it along.

<a id="return-value"></a>

## Return Value

A valid [NSCollectionViewItem](../nscollectionviewitem.md) object.

<a id="Discussion"></a>

## Discussion

This method looks for a recycled item object of the specified type and returns it if one exists. If one does not exist, it creates it using one of the following techniques:

- If you used the [registerClass:forItemWithIdentifier:](register%28__foritemwithidentifier_%29-6s4i.md) method to register a class for the identifier, this method instantiates your class and returns it.
- If you used the [registerNib:forItemWithIdentifier:](register%28__foritemwithidentifier_%29-90h1i.md) method to register a nib file for the identifier, this method loads the item from the nib file and returns it.

## See Also

### Creating Collection View Items

- [registerClass:forItemWithIdentifier:](register%28__foritemwithidentifier_%29-6s4i.md): Registers a class to use when creating new items in the collection view.
- [registerNib:forItemWithIdentifier:](register%28__foritemwithidentifier_%29-90h1i.md): Registers a nib file to use when creating items in the collection view.
- [makeSupplementaryViewOfKind:withIdentifier:forIndexPath:](makesupplementaryview%28ofkind_withidentifier_for_%29.md): Creates or returns a reusable supplementary view of the specified type.
- [registerClass:forSupplementaryViewOfKind:withIdentifier:](register%28__forsupplementaryviewofkind_withidentifier_%29-3dqa.md): Registers a class to use when creating new supplementary views in the collection view.
- [registerNib:forSupplementaryViewOfKind:withIdentifier:](register%28__forsupplementaryviewofkind_withidentifier_%29-7gvf2.md): Registers a nib file to use when creating supplementary views in the collection view.
- [NSCollectionViewSupplementaryElementKind](supplementaryelementkind.md)
- [NSUserInterfaceItemIdentifier](../nsuserinterfaceitemidentifier.md)
