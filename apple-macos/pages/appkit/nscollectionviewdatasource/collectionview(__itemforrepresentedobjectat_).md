> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdatasource/collectionview(_:itemforrepresentedobjectat:)](https://developer.apple.com/documentation/appkit/nscollectionviewdatasource/collectionview(_:itemforrepresentedobjectat:))

# collectionView(\_:itemForRepresentedObjectAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks your data source object to provide the item at the specified location in the collection view.

## Declaration

```swift
@MainActor func collectionView(_ collectionView: NSCollectionView, itemForRepresentedObjectAt indexPath: IndexPath) -> NSCollectionViewItem
```

## Parameters

- `collectionView`: The collection view requesting the information.
- `indexPath`: The index path that specifies the location of the item. This index path contains both the section index and the item index within that section.

<a id="return-value"></a>

## Return Value

A configured item object. You must not return `nil` from this method.

<a id="Discussion"></a>

## Discussion

All data source objects must implement this method. Your implementation is responsible for creating, configuring, and returning the appropriate item object based on the specified index path. You do this by calling the [makeItem(withIdentifier:for:)](../nscollectionview/makeitem%28withidentifier_for_%29.md) method of the collection view to retrieve an empty item object of the appropriate type. After receiving the item object, update its properties with the data from your app’s data structures and return it.

You do not need to set the frame of an item’s view from this method. The collection view gets the item’s location and other layout-related attributes from the layout object during a separate step.

## See Also

### Configuring Items and Supplementary Views

- [collectionView(\_:viewForSupplementaryElementOfKind:at:)](collectionview%28__viewforsupplementaryelementofkind_at_%29.md): Asks your data source object to provide the supplementary view at the specified location in a section of the collection view.

# collectionView:itemForRepresentedObjectAtIndexPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks your data source object to provide the item at the specified location in the collection view.

## Declaration

```objectivec
- (NSCollectionViewItem *) collectionView:(NSCollectionView *) collectionView itemForRepresentedObjectAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view requesting the information.
- `indexPath`: The index path that specifies the location of the item. This index path contains both the section index and the item index within that section.

<a id="return-value"></a>

## Return Value

A configured item object. You must not return `nil` from this method.

<a id="Discussion"></a>

## Discussion

All data source objects must implement this method. Your implementation is responsible for creating, configuring, and returning the appropriate item object based on the specified index path. You do this by calling the [makeItemWithIdentifier:forIndexPath:](../nscollectionview/makeitem%28withidentifier_for_%29.md) method of the collection view to retrieve an empty item object of the appropriate type. After receiving the item object, update its properties with the data from your app’s data structures and return it.

You do not need to set the frame of an item’s view from this method. The collection view gets the item’s location and other layout-related attributes from the layout object during a separate step.

## See Also

### Configuring Items and Supplementary Views

- [collectionView:viewForSupplementaryElementOfKind:atIndexPath:](collectionview%28__viewforsupplementaryelementofkind_at_%29.md): Asks your data source object to provide the supplementary view at the specified location in a section of the collection view.
