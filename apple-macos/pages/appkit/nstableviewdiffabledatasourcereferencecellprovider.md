> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdiffabledatasourcereferencecellprovider](https://developer.apple.com/documentation/appkit/nstableviewdiffabledatasourcereferencecellprovider)

# NSTableViewDiffableDataSourceReferenceCellProvider (Swift)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A closure that configures and returns a cell for a table view from its diffable data source.

## Declaration

```swift
typealias NSTableViewDiffableDataSourceReferenceCellProvider = (NSTableView, NSTableColumn, Int, Any) -> NSView
```

## See Also

### Creating a Diffable Data Source

- [init(tableView:cellProvider:)](nstableviewdiffabledatasourcereference/init%28tableview_cellprovider_%29.md): Creates a diffable data source with the specified cell provider, and connects it to the specified table view.

# NSTableViewDiffableDataSourceCellProvider (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A closure that configures and returns a cell for a table view from its diffable data source.

## Declaration

```objectivec
typedef NSView *(^)(NSTableView *, NSTableColumn *, long, id) NSTableViewDiffableDataSourceCellProvider;
```

## See Also

### Creating a Diffable Data Source

- [initWithTableView:cellProvider:](nstableviewdiffabledatasourcereference/init%28tableview_cellprovider_%29.md): Creates a diffable data source with the specified cell provider, and connects it to the specified table view.
