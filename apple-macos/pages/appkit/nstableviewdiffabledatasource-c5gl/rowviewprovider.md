> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdiffabledatasource-c5gl/rowviewprovider](https://developer.apple.com/documentation/appkit/nstableviewdiffabledatasource-c5gl/rowviewprovider)

# rowViewProvider

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The closure that configures and returns the table view’s row views from the diffable data source.

## Declaration

```swift
var rowViewProvider: NSTableViewDiffableDataSource<SectionIdentifierType, ItemIdentifierType>.RowProvider?
```

<a id="Discussion"></a>

## Discussion

This property replaces the [tableView(\_:rowViewForRow:)](../nstableviewdelegate/tableview%28__rowviewforrow_%29.md) delegate method.

## See Also

### Creating Row and Section Views

- [sectionHeaderViewProvider](sectionheaderviewprovider-swift.property.md): The closure that configures and returns the table view’s section header views from the diffable data source.
- [NSTableViewDiffableDataSource.RowProvider](rowprovider.md): A closure that configures and returns a row view for a table view from its diffable data source.
- [NSTableViewDiffableDataSourceReferenceRowProvider](../nstableviewdiffabledatasourcereferencerowprovider.md): A closure that configures and returns a row view for a table view from its diffable data source.
- [NSTableViewDiffableDataSource.SectionHeaderViewProvider](sectionheaderviewprovider-swift.typealias.md): A closure that configures and returns a section header view for a table view from its diffable data source.
- [NSTableViewDiffableDataSourceReferenceSectionHeaderViewProvider](../nstableviewdiffabledatasourcereferencesectionheaderviewprovider.md): A closure that configures and returns a section header view for a table view from its diffable data source.
