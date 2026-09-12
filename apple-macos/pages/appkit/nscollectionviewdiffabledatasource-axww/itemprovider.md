> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdiffabledatasource-axww/itemprovider](https://developer.apple.com/documentation/appkit/nscollectionviewdiffabledatasource-axww/itemprovider)

# NSCollectionViewDiffableDataSource.ItemProvider

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 10.15.1+

A closure that configures and returns an item for a collection view from its diffable data source.

## Declaration

```swift
typealias ItemProvider = (NSCollectionView, IndexPath, ItemIdentifierType) -> NSCollectionViewItem?
```

## Parameters

- `collectionView`: The collection view to configure this item for.
- `indexPath`: The index path that specifies the location of the item in the collection view.
- `itemIdentifier`: The identifier of the data item for this item.

<a id="return-value"></a>

## Return Value

A non-`nil` configured item object. The item provider must return a valid item object to the collection view.

## See Also

### Creating a Diffable Data Source

- [init(collectionView:itemProvider:)](init%28collectionview_itemprovider_%29.md): Creates a diffable data source with the specified item provider, and connects it to the specified collection view.
