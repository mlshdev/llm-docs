> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdiffabledatasourcereferencesupplementaryviewprovider](https://developer.apple.com/documentation/appkit/nscollectionviewdiffabledatasourcereferencesupplementaryviewprovider)

# NSCollectionViewDiffableDataSourceReferenceSupplementaryViewProvider (Swift)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A closure that configures and returns a collection view’s supplementary view, such as a header or footer, from a diffable data source.

## Declaration

```swift
typealias NSCollectionViewDiffableDataSourceReferenceSupplementaryViewProvider = (NSCollectionView, String, IndexPath) -> NSView?
```

## Parameters

- `collectionView`: The collection view to configure this supplementary view for.
- `kind`: The kind of supplementary view to provide. The layout object that supports the supplementary view defines the value of this string.
- `indexPath`: The index path that specifies the location of the supplementary view in the collection view.

<a id="return-value"></a>

## Return Value

A non-`nil` configured supplementary view object. The supplementary view provider must return a valid view object to the collection view.

## See Also

### Creating Supplementary Views

- [supplementaryViewProvider](nscollectionviewdiffabledatasourcereference/supplementaryviewprovider.md): The closure that configures and returns the collection view’s supplementary views, such as headers and footers, from the diffable data source.

# NSCollectionViewDiffableDataSourceSupplementaryViewProvider (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A closure that configures and returns a collection view’s supplementary view, such as a header or footer, from a diffable data source.

## Declaration

```objectivec
typedef NSView *(^)(NSCollectionView *, NSString *, NSIndexPath *) NSCollectionViewDiffableDataSourceSupplementaryViewProvider;
```

## Parameters

- `collectionView`: The collection view to configure this supplementary view for.
- `kind`: The kind of supplementary view to provide. The layout object that supports the supplementary view defines the value of this string.
- `indexPath`: The index path that specifies the location of the supplementary view in the collection view.

<a id="return-value"></a>

## Return Value

A non-`nil` configured supplementary view object. The supplementary view provider must return a valid view object to the collection view.

## See Also

### Creating Supplementary Views

- [supplementaryViewProvider](nscollectionviewdiffabledatasourcereference/supplementaryviewprovider.md): The closure that configures and returns the collection view’s supplementary views, such as headers and footers, from the diffable data source.
