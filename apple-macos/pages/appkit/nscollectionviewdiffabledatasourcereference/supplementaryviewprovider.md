> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdiffabledatasourcereference/supplementaryviewprovider](https://developer.apple.com/documentation/appkit/nscollectionviewdiffabledatasourcereference/supplementaryviewprovider)

# supplementaryViewProvider (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The closure that configures and returns the collection view’s supplementary views, such as headers and footers, from the diffable data source.

## Declaration

```swift
var supplementaryViewProvider: NSCollectionViewDiffableDataSourceReferenceSupplementaryViewProvider? { get set }
```

## See Also

### Creating Supplementary Views

- [NSCollectionViewDiffableDataSourceReferenceSupplementaryViewProvider](../nscollectionviewdiffabledatasourcereferencesupplementaryviewprovider.md): A closure that configures and returns a collection view’s supplementary view, such as a header or footer, from a diffable data source.

# supplementaryViewProvider (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The closure that configures and returns the collection view’s supplementary views, such as headers and footers, from the diffable data source.

## Declaration

```objectivec
@property (copy, nullable) NSCollectionViewDiffableDataSourceSupplementaryViewProvider supplementaryViewProvider;
```

## See Also

### Creating Supplementary Views

- [NSCollectionViewDiffableDataSourceSupplementaryViewProvider](../nscollectionviewdiffabledatasourcereferencesupplementaryviewprovider.md): A closure that configures and returns a collection view’s supplementary view, such as a header or footer, from a diffable data source.
