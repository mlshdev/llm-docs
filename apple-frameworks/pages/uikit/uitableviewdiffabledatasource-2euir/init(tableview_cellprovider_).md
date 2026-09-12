> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdiffabledatasource-2euir/init(tableview:cellprovider:)](https://developer.apple.com/documentation/uikit/uitableviewdiffabledatasource-2euir/init(tableview:cellprovider:))

# init(tableView:cellProvider:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

Creates a diffable data source with the specified cell provider, and connects it to the specified table view.

## Declaration

```swift
@MainActor @preconcurrency init(tableView: UITableView, cellProvider: @escaping UITableViewDiffableDataSource<SectionIdentifierType, ItemIdentifierType>.CellProvider)
```

## Parameters

- `tableView`: The initialized table view object to connect to the diffable data source.
- `cellProvider`: A closure that creates and returns each of the cells for the table view from the data the diffable data source provides.

## See Also

### Creating a diffable data source

- [UITableViewDiffableDataSource.CellProvider](cellprovider.md): A closure that configures and returns a cell for a table view from its diffable data source.
