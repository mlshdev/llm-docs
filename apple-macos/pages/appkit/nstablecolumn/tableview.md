> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecolumn/tableview](https://developer.apple.com/documentation/appkit/nstablecolumn/tableview)

# tableView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The table view that contains the table column.

## Declaration

```swift
weak var tableView: NSTableView? { get set }
```

<a id="Discussion"></a>

## Discussion

You should never need to set this property; it’s set automatically when you add a table column to a table view using the `NSTableView` class’s method [addTableColumn(\_:)](../nstableview/addtablecolumn%28__%29.md).

## See Also

### Related Documentation

- [addTableColumn(\_:)](../nstableview/addtablecolumn%28__%29.md): Adds the specified column as the last column of the table view.

# tableView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The table view that contains the table column.

## Declaration

```objectivec
@property (weak, nullable) NSTableView * tableView;
```

<a id="Discussion"></a>

## Discussion

You should never need to set this property; it’s set automatically when you add a table column to a table view using the `NSTableView` class’s method [addTableColumn:](../nstableview/addtablecolumn%28__%29.md).

## See Also

### Related Documentation

- [addTableColumn:](../nstableview/addtablecolumn%28__%29.md): Adds the specified column as the last column of the table view.
