> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdiffabledatasource-c5gl/cellprovider](https://developer.apple.com/documentation/appkit/nstableviewdiffabledatasource-c5gl/cellprovider)

# NSTableViewDiffableDataSource.CellProvider

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 11.0+

A closure that configures and returns a cell for a table view from its diffable data source.

## Declaration

```swift
typealias CellProvider = (NSTableView, NSTableColumn, Int, ItemIdentifierType) -> NSView
```

## See Also

### Creating a Diffable Data Source

- [init(tableView:cellProvider:)](init%28tableview_cellprovider_%29.md): Creates a diffable data source with the specified cell provider, and connects it to the specified table view.
