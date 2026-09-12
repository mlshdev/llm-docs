> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdiffabledatasourcereference/init(collectionview:itemprovider:)](https://developer.apple.com/documentation/appkit/nscollectionviewdiffabledatasourcereference/init(collectionview:itemprovider:))

# init(collectionView:itemProvider:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates a diffable data source with the specified item provider, and connects it to the specified collection view.

## Declaration

```swift
init(collectionView: NSCollectionView, itemProvider: @escaping NSCollectionViewDiffableDataSourceReferenceItemProvider)
```

## Parameters

- `collectionView`: The initialized collection view object to connect to the diffable data source.
- `itemProvider`: A closure that creates and returns each of the items for the collection view from the data the diffable data source provides.

## See Also

### Creating a Diffable Data Source

- [NSCollectionViewDiffableDataSourceReferenceItemProvider](../nscollectionviewdiffabledatasourcereferenceitemprovider.md): A closure that configures and returns an item for a collection view from its diffable data source.

# initWithCollectionView:itemProvider: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Creates a diffable data source with the specified item provider, and connects it to the specified collection view.

## Declaration

```objectivec
- (instancetype) initWithCollectionView:(NSCollectionView *) collectionView itemProvider:(NSCollectionViewDiffableDataSourceItemProvider) itemProvider;
```

## Parameters

- `collectionView`: The initialized collection view object to connect to the diffable data source.
- `itemProvider`: A closure that creates and returns each of the items for the collection view from the data the diffable data source provides.

## See Also

### Creating a Diffable Data Source

- [NSCollectionViewDiffableDataSourceItemProvider](../nscollectionviewdiffabledatasourcereferenceitemprovider.md): A closure that configures and returns an item for a collection view from its diffable data source.
