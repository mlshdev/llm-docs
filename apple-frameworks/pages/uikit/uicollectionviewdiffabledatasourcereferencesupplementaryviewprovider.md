> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasourcereferencesupplementaryviewprovider](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasourcereferencesupplementaryviewprovider)

# UICollectionViewDiffableDataSourceReferenceSupplementaryViewProvider (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A closure that configures and returns a collection view’s supplementary view, such as a header or footer, from a diffable data source.

## Declaration

```swift
typealias UICollectionViewDiffableDataSourceReferenceSupplementaryViewProvider = (UICollectionView, String, IndexPath) -> UICollectionReusableView?
```

## Parameters

- `collectionView`: The collection view to configure this supplementary view for.
- `kind`: The kind of supplementary view to provide. The layout object that supports the supplementary view defines the value of this string.
- `indexPath`: The index path that specifies the location of the supplementary view in the collection view.

<a id="return-value"></a>

## Return Value

A non-`nil` configured supplementary view object. The supplementary view provider must return a valid view object to the collection view.

## See Also

### Creating supplementary views

- [supplementaryViewProvider](uicollectionviewdiffabledatasourcereference/supplementaryviewprovider.md): The closure that configures and returns the collection view’s supplementary views, such as headers and footers, from the diffable data source.

# UICollectionViewDiffableDataSourceSupplementaryViewProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A closure that configures and returns a collection view’s supplementary view, such as a header or footer, from a diffable data source.

## Declaration

```objectivec
typedef UICollectionReusableView *(^)(UICollectionView *, NSString *, NSIndexPath *) UICollectionViewDiffableDataSourceSupplementaryViewProvider;
```

## Parameters

- `collectionView`: The collection view to configure this supplementary view for.
- `kind`: The kind of supplementary view to provide. The layout object that supports the supplementary view defines the value of this string.
- `indexPath`: The index path that specifies the location of the supplementary view in the collection view.

<a id="return-value"></a>

## Return Value

A non-`nil` configured supplementary view object. The supplementary view provider must return a valid view object to the collection view.

## See Also

### Creating supplementary views

- [supplementaryViewProvider](uicollectionviewdiffabledatasourcereference/supplementaryviewprovider.md): The closure that configures and returns the collection view’s supplementary views, such as headers and footers, from the diffable data source.
