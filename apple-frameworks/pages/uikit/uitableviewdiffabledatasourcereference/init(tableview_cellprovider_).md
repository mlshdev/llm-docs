> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdiffabledatasourcereference/init(tableview:cellprovider:)](https://developer.apple.com/documentation/uikit/uitableviewdiffabledatasourcereference/init(tableview:cellprovider:))

# init(tableView:cellProvider:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a diffable data source with the specified cell provider, and connects it to the specified table view.

## Declaration

```swift
init(tableView: UITableView, cellProvider: @escaping UITableViewDiffableDataSourceReferenceCellProvider)
```

## Parameters

- `tableView`: The initialized table view object to connect to the diffable data source.
- `cellProvider`: A closure that creates and returns each of the cells for the table view from the data the diffable data source provides.

## See Also

### Creating a diffable data source

- [UITableViewDiffableDataSourceReferenceCellProvider](../uitableviewdiffabledatasourcereferencecellprovider.md): A closure that configures and returns a cell for a table view from its diffable data source.

# initWithTableView:cellProvider: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a diffable data source with the specified cell provider, and connects it to the specified table view.

## Declaration

```objectivec
- (instancetype) initWithTableView:(UITableView *) tableView cellProvider:(UITableViewDiffableDataSourceCellProvider) cellProvider;
```

## Parameters

- `tableView`: The initialized table view object to connect to the diffable data source.
- `cellProvider`: A closure that creates and returns each of the cells for the table view from the data the diffable data source provides.

## See Also

### Creating a diffable data source

- [UITableViewDiffableDataSourceCellProvider](../uitableviewdiffabledatasourcereferencecellprovider.md): A closure that configures and returns a cell for a table view from its diffable data source.
