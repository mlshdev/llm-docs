> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdatasource/tableview(_:objectvaluefor:row:)](https://developer.apple.com/documentation/appkit/nstableviewdatasource/tableview(_:objectvaluefor:row:))

# tableView(\_:objectValueFor:row:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Called by the table view to return the data object associated with the specified row and column.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, objectValueFor tableColumn: NSTableColumn?, row: Int) -> Any?
```

## Parameters

- `tableView`: The table view that sent the message.
- `tableColumn`: A column in `aTableView`.
- `row`: The row of the item in `aTableColumn`.

<a id="return-value"></a>

## Return Value

An item in the data source in the specified table column of the view.

<a id="Discussion"></a>

## Discussion

[tableView(\_:objectValueFor:row:)](tableview%28__objectvaluefor_row_%29.md) is called each time the table cell needs to be redisplayed, so it must be efficient.

> **Note**

>  This method is mandatory unless your application is using Cocoa bindings for providing data to the table view.

## See Also

### Getting Values

- [numberOfRows(in:)](numberofrows%28in_%29.md): Returns the number of records managed for `aTableView` by the data source object.

# tableView:objectValueForTableColumn:row: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Called by the table view to return the data object associated with the specified row and column.

## Declaration

```objectivec
- (id) tableView:(NSTableView *) tableView objectValueForTableColumn:(NSTableColumn *) tableColumn row:(NSInteger) row;
```

## Parameters

- `tableView`: The table view that sent the message.
- `tableColumn`: A column in `aTableView`.
- `row`: The row of the item in `aTableColumn`.

<a id="return-value"></a>

## Return Value

An item in the data source in the specified table column of the view.

<a id="Discussion"></a>

## Discussion

[tableView:objectValueForTableColumn:row:](tableview%28__objectvaluefor_row_%29.md) is called each time the table cell needs to be redisplayed, so it must be efficient.

> **Note**

>  This method is mandatory unless your application is using Cocoa bindings for providing data to the table view.

## See Also

### Getting Values

- [numberOfRowsInTableView:](numberofrows%28in_%29.md): Returns the number of records managed for `aTableView` by the data source object.
