> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdatasource/tableview(_:setobjectvalue:for:row:)](https://developer.apple.com/documentation/appkit/nstableviewdatasource/tableview(_:setobjectvalue:for:row:))

# tableView(\_:setObjectValue:for:row:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the data object for an item in the specified row and column.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, setObjectValue object: Any?, for tableColumn: NSTableColumn?, row: Int)
```

## Parameters

- `tableView`: The table view that sent the message.
- `object`: The new value for the item.
- `tableColumn`: A column in `aTableView`.
- `row`: The row of the item in `aTableColumn`.

<a id="Discussion"></a>

## Discussion

This method is intended for use with cell-based table views, it must not be used with view-based table views. In view-based tables, use target/action to set each item in the view cell.

> **Note**

>  This method is optional if your application is using Cocoa bindings for providing data to the table view, otherwise it must be implemented.

# tableView:setObjectValue:forTableColumn:row: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the data object for an item in the specified row and column.

## Declaration

```objectivec
- (void) tableView:(NSTableView *) tableView setObjectValue:(id) object forTableColumn:(NSTableColumn *) tableColumn row:(NSInteger) row;
```

## Parameters

- `tableView`: The table view that sent the message.
- `object`: The new value for the item.
- `tableColumn`: A column in `aTableView`.
- `row`: The row of the item in `aTableColumn`.

<a id="Discussion"></a>

## Discussion

This method is intended for use with cell-based table views, it must not be used with view-based table views. In view-based tables, use target/action to set each item in the view cell.

> **Note**

>  This method is optional if your application is using Cocoa bindings for providing data to the table view, otherwise it must be implemented.
