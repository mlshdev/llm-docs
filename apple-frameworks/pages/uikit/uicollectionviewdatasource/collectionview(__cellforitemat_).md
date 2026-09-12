> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdatasource/collectionview(_:cellforitemat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdatasource/collectionview(_:cellforitemat:))

# collectionView(\_:cellForItemAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks your data source object for the cell that corresponds to the specified item in the collection view.

## Declaration

```swift
func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell
```

## Parameters

- `collectionView`: The collection view requesting this information.
- `indexPath`: The index path that specifies the location of the item.

<a id="return-value"></a>

## Return Value

A configured cell object. You must not return `nil` from this method.

<a id="Discussion"></a>

## Discussion

Your implementation of this method is responsible for creating, configuring, and returning the appropriate cell for the given item. You do this by calling the [dequeueReusableCell(withReuseIdentifier:for:)](../uicollectionview/dequeuereusablecell%28withreuseidentifier_for_%29.md) method of the collection view and passing the reuse identifier that corresponds to the cell type you want. That method always returns a valid cell object. Upon receiving the cell, you should set any properties that correspond to the data of the corresponding item, perform any additional needed configuration, and return the cell.

You don’t need to set the location of the cell inside the collection view’s bounds. The collection view sets the location of each cell automatically using the layout attributes provided by its layout object.

If [isPrefetchingEnabled](../uicollectionview/isprefetchingenabled.md) on the collection view is set to [true](https://developer.apple.com/documentation/swift/true) then this method is called in advance of the cell appearing. Use the [collectionView(\_:willDisplay:forItemAt:)](../uicollectionviewdelegate/collectionview%28__willdisplay_foritemat_%29.md) delegate method to make any changes to the appearance of the cell to reflect its visual state such as selection.

This method must always return a valid view object.

## See Also

### Getting views for items

- [collectionView(\_:viewForSupplementaryElementOfKind:at:)](collectionview%28__viewforsupplementaryelementofkind_at_%29.md): Asks your data source object to provide a supplementary view to display in the collection view.

# collectionView:cellForItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks your data source object for the cell that corresponds to the specified item in the collection view.

## Declaration

```objectivec
- (UICollectionViewCell *) collectionView:(UICollectionView *) collectionView cellForItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view requesting this information.
- `indexPath`: The index path that specifies the location of the item.

<a id="return-value"></a>

## Return Value

A configured cell object. You must not return `nil` from this method.

<a id="Discussion"></a>

## Discussion

Your implementation of this method is responsible for creating, configuring, and returning the appropriate cell for the given item. You do this by calling the [dequeueReusableCellWithReuseIdentifier:forIndexPath:](../uicollectionview/dequeuereusablecell%28withreuseidentifier_for_%29.md) method of the collection view and passing the reuse identifier that corresponds to the cell type you want. That method always returns a valid cell object. Upon receiving the cell, you should set any properties that correspond to the data of the corresponding item, perform any additional needed configuration, and return the cell.

You don’t need to set the location of the cell inside the collection view’s bounds. The collection view sets the location of each cell automatically using the layout attributes provided by its layout object.

If [prefetchingEnabled](../uicollectionview/isprefetchingenabled.md) on the collection view is set to [true](https://developer.apple.com/documentation/swift/true) then this method is called in advance of the cell appearing. Use the [collectionView:willDisplayCell:forItemAtIndexPath:](../uicollectionviewdelegate/collectionview%28__willdisplay_foritemat_%29.md) delegate method to make any changes to the appearance of the cell to reflect its visual state such as selection.

This method must always return a valid view object.

## See Also

### Getting views for items

- [collectionView:viewForSupplementaryElementOfKind:atIndexPath:](collectionview%28__viewforsupplementaryelementofkind_at_%29.md): Asks your data source object to provide a supplementary view to display in the collection view.
