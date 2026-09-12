> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdiffabledatasource-c5gl/sectionheaderviewprovider-swift.typealias](https://developer.apple.com/documentation/appkit/nstableviewdiffabledatasource-c5gl/sectionheaderviewprovider-swift.typealias)

# NSTableViewDiffableDataSource.SectionHeaderViewProvider

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 11.0+

A closure that configures and returns a section header view for a table view from its diffable data source.

## Declaration

```swift
typealias SectionHeaderViewProvider = (NSTableView, Int, SectionIdentifierType) -> NSView
```

## See Also

### Creating Row and Section Views

- [rowViewProvider](rowviewprovider.md): The closure that configures and returns the table view’s row views from the diffable data source.
- [sectionHeaderViewProvider](sectionheaderviewprovider-swift.property.md): The closure that configures and returns the table view’s section header views from the diffable data source.
- [NSTableViewDiffableDataSource.RowProvider](rowprovider.md): A closure that configures and returns a row view for a table view from its diffable data source.
- [NSTableViewDiffableDataSourceReferenceRowProvider](../nstableviewdiffabledatasourcereferencerowprovider.md): A closure that configures and returns a row view for a table view from its diffable data source.
- [NSTableViewDiffableDataSourceReferenceSectionHeaderViewProvider](../nstableviewdiffabledatasourcereferencesectionheaderviewprovider.md): A closure that configures and returns a section header view for a table view from its diffable data source.
