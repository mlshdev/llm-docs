> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdiffabledatasourcereferencerowprovider](https://developer.apple.com/documentation/appkit/nstableviewdiffabledatasourcereferencerowprovider)

# NSTableViewDiffableDataSourceReferenceRowProvider (Swift)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A closure that configures and returns a row view for a table view from its diffable data source.

## Declaration

```swift
typealias NSTableViewDiffableDataSourceReferenceRowProvider = (NSTableView, Int, Any) -> NSTableRowView
```

## See Also

### Creating Row and Section Views

- [rowViewProvider](nstableviewdiffabledatasource-c5gl/rowviewprovider.md): The closure that configures and returns the table view’s row views from the diffable data source.
- [sectionHeaderViewProvider](nstableviewdiffabledatasource-c5gl/sectionheaderviewprovider-swift.property.md): The closure that configures and returns the table view’s section header views from the diffable data source.
- [NSTableViewDiffableDataSource.RowProvider](nstableviewdiffabledatasource-c5gl/rowprovider.md): A closure that configures and returns a row view for a table view from its diffable data source.
- [NSTableViewDiffableDataSource.SectionHeaderViewProvider](nstableviewdiffabledatasource-c5gl/sectionheaderviewprovider-swift.typealias.md): A closure that configures and returns a section header view for a table view from its diffable data source.
- [NSTableViewDiffableDataSourceReferenceSectionHeaderViewProvider](nstableviewdiffabledatasourcereferencesectionheaderviewprovider.md): A closure that configures and returns a section header view for a table view from its diffable data source.

# NSTableViewDiffableDataSourceRowProvider (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A closure that configures and returns a row view for a table view from its diffable data source.

## Declaration

```objectivec
typedef NSTableRowView *(^)(NSTableView *, long, id) NSTableViewDiffableDataSourceRowProvider;
```

## See Also

### Creating Row and Section Views

- [NSTableViewDiffableDataSourceSectionHeaderViewProvider](nstableviewdiffabledatasourcereferencesectionheaderviewprovider.md): A closure that configures and returns a section header view for a table view from its diffable data source.
