> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdiffabledatasourcereference/init(tableview:cellprovider:)](https://developer.apple.com/documentation/appkit/nstableviewdiffabledatasourcereference/init(tableview:cellprovider:))

# init(tableView:cellProvider:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates a diffable data source with the specified cell provider, and connects it to the specified table view.

## Declaration

```swift
init(tableView: NSTableView, cellProvider: @escaping NSTableViewDiffableDataSourceReferenceCellProvider)
```

## Parameters

- `tableView`: The initialized table view object to connect to the diffable data source.
- `cellProvider`: A closure that creates and returns each of the cells for the table view from the data the diffable data source provides. This replaces the [tableView(\_:viewFor:row:)](../nstableviewdelegate/tableview%28__viewfor_row_%29.md) delegate method.

## See Also

### Creating a Diffable Data Source

- [NSTableViewDiffableDataSourceReferenceCellProvider](../nstableviewdiffabledatasourcereferencecellprovider.md): A closure that configures and returns a cell for a table view from its diffable data source.

# initWithTableView:cellProvider: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Creates a diffable data source with the specified cell provider, and connects it to the specified table view.

## Declaration

```objectivec
- (instancetype) initWithTableView:(NSTableView *) tableView cellProvider:(NSTableViewDiffableDataSourceCellProvider) cellProvider;
```

## Parameters

- `tableView`: The initialized table view object to connect to the diffable data source.
- `cellProvider`: A closure that creates and returns each of the cells for the table view from the data the diffable data source provides. This replaces the [tableView:viewForTableColumn:row:](../nstableviewdelegate/tableview%28__viewfor_row_%29.md) delegate method.

## See Also

### Creating a Diffable Data Source

- [NSTableViewDiffableDataSourceCellProvider](../nstableviewdiffabledatasourcereferencecellprovider.md): A closure that configures and returns a cell for a table view from its diffable data source.
