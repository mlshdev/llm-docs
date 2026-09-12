> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/supplementaryviewprovider-swift.property](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/supplementaryviewprovider-swift.property)

# supplementaryViewProvider

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

The closure that configures and returns the collection view’s supplementary views, such as headers and footers, from the diffable data source.

## Declaration

```swift
@MainActor @preconcurrency var supplementaryViewProvider: UICollectionViewDiffableDataSource<SectionIdentifierType, ItemIdentifierType>.SupplementaryViewProvider? { get set }
```

## See Also

### Creating supplementary views

- [UICollectionViewDiffableDataSource.SupplementaryViewProvider](supplementaryviewprovider-swift.typealias.md): A closure that configures and returns a collection view’s supplementary view, such as a header or footer, from a diffable data source.
