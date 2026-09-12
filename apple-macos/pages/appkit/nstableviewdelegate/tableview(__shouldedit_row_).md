> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:shouldedit:row:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:shouldedit:row:))

# tableView(\_:shouldEdit:row:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate if the cell at the specified row and column can be edited.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, shouldEdit tableColumn: NSTableColumn?, row: Int) -> Bool
```

## Parameters

- `tableView`: The table view that sent the message.
- `tableColumn`: The table column.
- `row`: The row index.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow editing the cell, [false](https://developer.apple.com/documentation/swift/false) to deny editing.

<a id="Discussion"></a>

## Discussion

The delegate can implement this method to disallow editing of specific cells.

> **Note**

>  This method is only valid for [NSCell](../nscell.md)-based table views.

# tableView:shouldEditTableColumn:row: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate if the cell at the specified row and column can be edited.

## Declaration

```objectivec
- (BOOL) tableView:(NSTableView *) tableView shouldEditTableColumn:(NSTableColumn *) tableColumn row:(NSInteger) row;
```

## Parameters

- `tableView`: The table view that sent the message.
- `tableColumn`: The table column.
- `row`: The row index.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow editing the cell, [false](https://developer.apple.com/documentation/swift/false) to deny editing.

<a id="Discussion"></a>

## Discussion

The delegate can implement this method to disallow editing of specific cells.

> **Note**

>  This method is only valid for [NSCell](../nscell.md)-based table views.
