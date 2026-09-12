> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdiffabledatasourcereferenceitemprovider](https://developer.apple.com/documentation/appkit/nscollectionviewdiffabledatasourcereferenceitemprovider)

# NSCollectionViewDiffableDataSourceReferenceItemProvider (Swift)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A closure that configures and returns an item for a collection view from its diffable data source.

## Declaration

```swift
typealias NSCollectionViewDiffableDataSourceReferenceItemProvider = (NSCollectionView, IndexPath, Any) -> NSCollectionViewItem?
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

- [init(collectionView:itemProvider:)](nscollectionviewdiffabledatasourcereference/init%28collectionview_itemprovider_%29.md): Creates a diffable data source with the specified item provider, and connects it to the specified collection view.

# NSCollectionViewDiffableDataSourceItemProvider (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A closure that configures and returns an item for a collection view from its diffable data source.

## Declaration

```objectivec
typedef NSCollectionViewItem *(^)(NSCollectionView *, NSIndexPath *, id) NSCollectionViewDiffableDataSourceItemProvider;
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

- [initWithCollectionView:itemProvider:](nscollectionviewdiffabledatasourcereference/init%28collectionview_itemprovider_%29.md): Creates a diffable data source with the specified item provider, and connects it to the specified collection view.
