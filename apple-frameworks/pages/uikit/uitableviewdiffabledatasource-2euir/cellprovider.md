> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdiffabledatasource-2euir/cellprovider](https://developer.apple.com/documentation/uikit/uitableviewdiffabledatasource-2euir/cellprovider)

# UITableViewDiffableDataSource.CellProvider

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

A closure that configures and returns a cell for a table view from its diffable data source.

## Declaration

```swift
typealias CellProvider = (UITableView, IndexPath, ItemIdentifierType) -> UITableViewCell?
```

## Parameters

- `tableView`: The table view to configure this cell for.
- `indexPath`: The index path that specifies the location of the cell in the table view.
- `itemIdentifier`: The identifier of the item for this cell.

<a id="return-value"></a>

## Return Value

A non-`nil` configured cell object. The cell provider must return a valid cell object to the table view.

## See Also

### Creating a diffable data source

- [init(tableView:cellProvider:)](init%28tableview_cellprovider_%29.md): Creates a diffable data source with the specified cell provider, and connects it to the specified table view.
