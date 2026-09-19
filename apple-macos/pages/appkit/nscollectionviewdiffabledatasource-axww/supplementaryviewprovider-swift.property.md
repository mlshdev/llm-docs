> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscollectionviewdiffabledatasource-axww/supplementaryviewprovider-swift.property

# supplementaryViewProvider

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15.1+

The closure that configures and returns the collection view’s supplementary views, such as headers and footers, from the diffable data source.

## Declaration

```swift
var supplementaryViewProvider: NSCollectionViewDiffableDataSource<SectionIdentifierType, ItemIdentifierType>.SupplementaryViewProvider? { get set }
```

## See Also

### Creating Supplementary Views

- [NSCollectionViewDiffableDataSource.SupplementaryViewProvider](supplementaryviewprovider-swift.typealias.md): A closure that configures and returns a collection view’s supplementary view, such as a header or footer, from a diffable data source.
