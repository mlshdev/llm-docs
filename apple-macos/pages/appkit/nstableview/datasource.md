> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/datasource](https://developer.apple.com/documentation/appkit/nstableview/datasource)

# dataSource (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object that provides the data displayed by the table view.

## Declaration

```swift
weak var dataSource: (any NSTableViewDataSource)? { get set }
```

<a id="Discussion"></a>

## Discussion

The data source for the table view must implement the appropriate methods of the [NSTableViewDataSource](../nstableviewdatasource.md) protocol. For more information, see the [NSTableViewDataSource](../nstableviewdatasource.md) `protocol` specification. Note that in versions of macOS prior to v10.12, the table view did not retain the data source in a managed memory environment.

Setting the data source invokes [tile()](tile%28%29.md).

If the delegate doesn’t respond to either [numberOfRows(in:)](../nstableviewdatasource/numberofrows%28in_%29.md) or [tableView(\_:objectValueFor:row:)](../nstableviewdatasource/tableview%28__objectvaluefor_row_%29.md), [internalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception) may be raised.

## See Also

### Managing the Table’s Data

- [usesStaticContents](usesstaticcontents.md): A Boolean value indicating whether the table uses static data.
- [reloadData()](reloaddata%28%29.md): Marks the table view as needing redisplay, so it will reload the data for visible cells and draw the new values.
- [reloadData(forRowIndexes:columnIndexes:)](reloaddata%28forrowindexes_columnindexes_%29.md): Reloads the data for only the specified rows and columns.

# dataSource (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object that provides the data displayed by the table view.

## Declaration

```objectivec
@property (weak, nullable) id<NSTableViewDataSource> dataSource;
```

<a id="Discussion"></a>

## Discussion

The data source for the table view must implement the appropriate methods of the [NSTableViewDataSource](../nstableviewdatasource.md) protocol. For more information, see the [NSTableViewDataSource](../nstableviewdatasource.md) `protocol` specification. Note that in versions of macOS prior to v10.12, the table view did not retain the data source in a managed memory environment.

Setting the data source invokes [tile](tile%28%29.md).

If the delegate doesn’t respond to either [numberOfRowsInTableView:](../nstableviewdatasource/numberofrows%28in_%29.md) or [tableView:objectValueForTableColumn:row:](../nstableviewdatasource/tableview%28__objectvaluefor_row_%29.md), [NSInternalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception) may be raised.

## See Also

### Managing the Table’s Data

- [usesStaticContents](usesstaticcontents.md): A Boolean value indicating whether the table uses static data.
- [reloadData](reloaddata%28%29.md): Marks the table view as needing redisplay, so it will reload the data for visible cells and draw the new values.
- [reloadDataForRowIndexes:columnIndexes:](reloaddata%28forrowindexes_columnindexes_%29.md): Reloads the data for only the specified rows and columns.
