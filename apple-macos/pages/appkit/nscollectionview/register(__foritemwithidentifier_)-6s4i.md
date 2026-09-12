> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/register(_:foritemwithidentifier:)-6s4i](https://developer.apple.com/documentation/appkit/nscollectionview/register(_:foritemwithidentifier:)-6s4i)

# register(\_:forItemWithIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Registers a class to use when creating new items in the collection view.

## Declaration

```swift
func register(_ itemClass: AnyClass?, forItemWithIdentifier identifier: NSUserInterfaceItemIdentifier)
```

## Parameters

- `itemClass`: A class to use for creating items. The class must be descended from [NSCollectionViewItem](../nscollectionviewitem.md). Specify `nil` to unregister a previously registered class or nib file.
- `identifier`: The string that identifies the type of item. You use this string later when requesting new items and it must be unique among the other registered item and view classes of this collection view. This parameter must not be an empty string or `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to register the classes that represent items in your collection view. When you request an item using the [makeItem(withIdentifier:for:)](makeitem%28withidentifier_for_%29.md) method, the collection view recycles an existing item with the same `identifier` or creates a new one by instantiating your class and calling the [init()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/init%28%29) method of the resulting object.

Because items are recycled to improve performance, it is recommended that your custom classes conform to the [NSCollectionViewElement](../nscollectionviewelement.md) protocol. You can use the methods of that protocol to prepare your classes for reuse.

Typically, you register your items when initializing your collection view interface. Although you can register new items at any time, you must not call the [makeItem(withIdentifier:for:)](makeitem%28withidentifier_for_%29.md) method until after you register the corresponding item.

## See Also

### Creating Collection View Items

- [makeItem(withIdentifier:for:)](makeitem%28withidentifier_for_%29.md): Creates or returns a reusable item object of the specified type.
- [register(\_:forItemWithIdentifier:)](register%28__foritemwithidentifier_%29-90h1i.md): Registers a nib file to use when creating items in the collection view.
- [makeSupplementaryView(ofKind:withIdentifier:for:)](makesupplementaryview%28ofkind_withidentifier_for_%29.md): Creates or returns a reusable supplementary view of the specified type.
- [register(\_:forSupplementaryViewOfKind:withIdentifier:)](register%28__forsupplementaryviewofkind_withidentifier_%29-3dqa.md): Registers a class to use when creating new supplementary views in the collection view.
- [register(\_:forSupplementaryViewOfKind:withIdentifier:)](register%28__forsupplementaryviewofkind_withidentifier_%29-7gvf2.md): Registers a nib file to use when creating supplementary views in the collection view.
- [NSCollectionView.SupplementaryElementKind](supplementaryelementkind.md)
- [NSUserInterfaceItemIdentifier](../nsuserinterfaceitemidentifier.md)

# registerClass:forItemWithIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Registers a class to use when creating new items in the collection view.

## Declaration

```objectivec
- (void) registerClass:(Class) itemClass forItemWithIdentifier:(NSUserInterfaceItemIdentifier) identifier;
```

## Parameters

- `itemClass`: A class to use for creating items. The class must be descended from [NSCollectionViewItem](../nscollectionviewitem.md). Specify `nil` to unregister a previously registered class or nib file.
- `identifier`: The string that identifies the type of item. You use this string later when requesting new items and it must be unique among the other registered item and view classes of this collection view. This parameter must not be an empty string or `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to register the classes that represent items in your collection view. When you request an item using the [makeItemWithIdentifier:forIndexPath:](makeitem%28withidentifier_for_%29.md) method, the collection view recycles an existing item with the same `identifier` or creates a new one by instantiating your class and calling the [init](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/init%28%29) method of the resulting object.

Because items are recycled to improve performance, it is recommended that your custom classes conform to the [NSCollectionViewElement](../nscollectionviewelement.md) protocol. You can use the methods of that protocol to prepare your classes for reuse.

Typically, you register your items when initializing your collection view interface. Although you can register new items at any time, you must not call the [makeItemWithIdentifier:forIndexPath:](makeitem%28withidentifier_for_%29.md) method until after you register the corresponding item.

## See Also

### Creating Collection View Items

- [makeItemWithIdentifier:forIndexPath:](makeitem%28withidentifier_for_%29.md): Creates or returns a reusable item object of the specified type.
- [registerNib:forItemWithIdentifier:](register%28__foritemwithidentifier_%29-90h1i.md): Registers a nib file to use when creating items in the collection view.
- [makeSupplementaryViewOfKind:withIdentifier:forIndexPath:](makesupplementaryview%28ofkind_withidentifier_for_%29.md): Creates or returns a reusable supplementary view of the specified type.
- [registerClass:forSupplementaryViewOfKind:withIdentifier:](register%28__forsupplementaryviewofkind_withidentifier_%29-3dqa.md): Registers a class to use when creating new supplementary views in the collection view.
- [registerNib:forSupplementaryViewOfKind:withIdentifier:](register%28__forsupplementaryviewofkind_withidentifier_%29-7gvf2.md): Registers a nib file to use when creating supplementary views in the collection view.
- [NSCollectionViewSupplementaryElementKind](supplementaryelementkind.md)
- [NSUserInterfaceItemIdentifier](../nsuserinterfaceitemidentifier.md)
