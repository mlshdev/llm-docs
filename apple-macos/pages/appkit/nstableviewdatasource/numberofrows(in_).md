> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdatasource/numberofrows(in:)](https://developer.apple.com/documentation/appkit/nstableviewdatasource/numberofrows(in:))

# numberOfRows(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the number of records managed for `aTableView` by the data source object.

## Declaration

```swift
@MainActor optional func numberOfRows(in tableView: NSTableView) -> Int
```

## Parameters

- `tableView`: The table view that sent the message.

<a id="return-value"></a>

## Return Value

The number of rows in `aTableView`.

<a id="Discussion"></a>

## Discussion

An instance of [NSTableView](../nstableview.md) uses this method to determine how many rows it should create and display. Your [numberOfRows(in:)](numberofrows%28in_%29.md) implementation is called very frequently, so it must be efficient.

Both view-based table views and cell-based table views must implement this method.

> **Note**

>  This method is mandatory unless your application is using Cocoa bindings for providing data to the table view.

## See Also

### Related Documentation

- [NSTableView](../nstableview.md): A set of related records, displayed in rows that represent individual records and columns that represent the attributes of those records.

### Getting Values

- [tableView(\_:objectValueFor:row:)](tableview%28__objectvaluefor_row_%29.md): Called by the table view to return the data object associated with the specified row and column.

# numberOfRowsInTableView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the number of records managed for `aTableView` by the data source object.

## Declaration

```objectivec
- (NSInteger) numberOfRowsInTableView:(NSTableView *) tableView;
```

## Parameters

- `tableView`: The table view that sent the message.

<a id="return-value"></a>

## Return Value

The number of rows in `aTableView`.

<a id="Discussion"></a>

## Discussion

An instance of [NSTableView](../nstableview.md) uses this method to determine how many rows it should create and display. Your [numberOfRowsInTableView:](numberofrows%28in_%29.md) implementation is called very frequently, so it must be efficient.

Both view-based table views and cell-based table views must implement this method.

> **Note**

>  This method is mandatory unless your application is using Cocoa bindings for providing data to the table view.

## See Also

### Related Documentation

- [NSTableView](../nstableview.md): A set of related records, displayed in rows that represent individual records and columns that represent the attributes of those records.

### Getting Values

- [tableView:objectValueForTableColumn:row:](tableview%28__objectvaluefor_row_%29.md): Called by the table view to return the data object associated with the specified row and column.
