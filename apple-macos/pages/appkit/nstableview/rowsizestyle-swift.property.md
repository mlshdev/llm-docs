> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/rowsizestyle-swift.property](https://developer.apple.com/documentation/appkit/nstableview/rowsizestyle-swift.property)

# rowSizeStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The row size style (small, medium, large, or custom) used by the table view.

## Declaration

```swift
var rowSizeStyle: NSTableView.RowSizeStyle { get set }
```

<a id="Discussion"></a>

## Discussion

To set the row size style on a row by row basis, set the value of this property to [NSTableView.RowSizeStyle.custom](rowsizestyle-swift.enum/custom.md) and implement the [tableView(\_:heightOfRow:)](../nstableviewdelegate/tableview%28__heightofrow_%29.md) method in your table view delegate object.

The default value of this property is [NSTableView.RowSizeStyle.custom](rowsizestyle-swift.enum/custom.md), which tells the table to use the [rowHeight](rowheight.md) of the table instead of any pre-determined system values. Generally, `rowSizeStyle` should always be [NSTableView.RowSizeStyle.custom](rowsizestyle-swift.enum/custom.md) except for “source lists”.

## See Also

### Getting and Setting Row Size Styles

- [effectiveRowSizeStyle](effectiverowsizestyle.md): The effective row size style for the table.

# rowSizeStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The row size style (small, medium, large, or custom) used by the table view.

## Declaration

```objectivec
@property NSTableViewRowSizeStyle rowSizeStyle;
```

<a id="Discussion"></a>

## Discussion

To set the row size style on a row by row basis, set the value of this property to [NSTableViewRowSizeStyleCustom](rowsizestyle-swift.enum/custom.md) and implement the [tableView:heightOfRow:](../nstableviewdelegate/tableview%28__heightofrow_%29.md) method in your table view delegate object.

The default value of this property is [NSTableViewRowSizeStyleCustom](rowsizestyle-swift.enum/custom.md), which tells the table to use the [rowHeight](rowheight.md) of the table instead of any pre-determined system values. Generally, `rowSizeStyle` should always be [NSTableViewRowSizeStyleCustom](rowsizestyle-swift.enum/custom.md) except for “source lists”.

## See Also

### Getting and Setting Row Size Styles

- [effectiveRowSizeStyle](effectiverowsizestyle.md): The effective row size style for the table.
