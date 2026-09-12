> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:isgrouprow:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:isgrouprow:))

# tableView(\_:isGroupRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns whether the specified row is a group row.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, isGroupRow row: Int) -> Bool
```

## Parameters

- `tableView`: The table view that sent the message.
- `row`: The row index.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified row should have the group row style drawn, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If the cell in `row` is an [NSTextFieldCell](../nstextfieldcell.md) object and contains only a string, the group row style attributes are automatically applied to the cell.

Group rows in [NSView](../nsview.md)-based table views can be made to visually “float” by setting the table view method [floatsGroupRows](../nstableview/floatsgrouprows.md) to [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  When configured as a source list style table view, rows identified as group rows draw with a specific style unique to source lists.

## See Also

### Related Documentation

- [floatsGroupRows](../nstableview/floatsgrouprows.md): A Boolean value indicating whether the table view draws grouped rows as if they are floating.

# tableView:isGroupRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns whether the specified row is a group row.

## Declaration

```objectivec
- (BOOL) tableView:(NSTableView *) tableView isGroupRow:(NSInteger) row;
```

## Parameters

- `tableView`: The table view that sent the message.
- `row`: The row index.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified row should have the group row style drawn, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If the cell in `row` is an [NSTextFieldCell](../nstextfieldcell.md) object and contains only a string, the group row style attributes are automatically applied to the cell.

Group rows in [NSView](../nsview.md)-based table views can be made to visually “float” by setting the table view method [floatsGroupRows](../nstableview/floatsgrouprows.md) to [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  When configured as a source list style table view, rows identified as group rows draw with a specific style unique to source lists.

## See Also

### Related Documentation

- [floatsGroupRows](../nstableview/floatsgrouprows.md): A Boolean value indicating whether the table view draws grouped rows as if they are floating.
