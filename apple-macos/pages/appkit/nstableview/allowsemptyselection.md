> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/allowsemptyselection](https://developer.apple.com/documentation/appkit/nstableview/allowsemptyselection)

# allowsEmptySelection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the table view allows the user to select zero columns or rows.

## Declaration

```swift
var allowsEmptySelection: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default is [true](https://developer.apple.com/documentation/swift/true), which allows the user to select zero columns or rows.

## See Also

### Related Documentation

- [deselectRow(\_:)](deselectrow%28__%29.md): Deselects the row at the specified index if it’s selected.
- [deselectColumn(\_:)](deselectcolumn%28__%29.md): Deselects the column at the specified index if it’s selected.
- [deselectAll(\_:)](deselectall%28__%29.md): Deselects all selected rows or columns if empty selection is allowed; otherwise does nothing.

### Configuring Behavior

- [allowsColumnReordering](allowscolumnreordering.md): A Boolean value indicating whether the table view allows the user to rearrange columns by dragging their headers.
- [allowsColumnResizing](allowscolumnresizing.md): A Boolean value indicating whether the table view allows the user to resize columns by dragging between their headers.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value indicating whether the table view allows the user to select more than one column or row at a time.
- [allowsColumnSelection](allowscolumnselection.md): A Boolean value indicating whether the table view allows the user to select columns by clicking their headers.
- [usesAutomaticRowHeights](usesautomaticrowheights.md): A Boolean value that indicates whether the table view uses autolayout to calculate the height of rows.

# allowsEmptySelection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the table view allows the user to select zero columns or rows.

## Declaration

```objectivec
@property BOOL allowsEmptySelection;
```

<a id="Discussion"></a>

## Discussion

The default is [true](https://developer.apple.com/documentation/swift/true), which allows the user to select zero columns or rows.

## See Also

### Related Documentation

- [deselectRow:](deselectrow%28__%29.md): Deselects the row at the specified index if it’s selected.
- [deselectColumn:](deselectcolumn%28__%29.md): Deselects the column at the specified index if it’s selected.
- [deselectAll:](deselectall%28__%29.md): Deselects all selected rows or columns if empty selection is allowed; otherwise does nothing.

### Configuring Behavior

- [allowsColumnReordering](allowscolumnreordering.md): A Boolean value indicating whether the table view allows the user to rearrange columns by dragging their headers.
- [allowsColumnResizing](allowscolumnresizing.md): A Boolean value indicating whether the table view allows the user to resize columns by dragging between their headers.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value indicating whether the table view allows the user to select more than one column or row at a time.
- [allowsColumnSelection](allowscolumnselection.md): A Boolean value indicating whether the table view allows the user to select columns by clicking their headers.
- [usesAutomaticRowHeights](usesautomaticrowheights.md): A Boolean value that indicates whether the table view uses autolayout to calculate the height of rows.
