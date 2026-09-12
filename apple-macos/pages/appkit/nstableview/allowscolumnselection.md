> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/allowscolumnselection](https://developer.apple.com/documentation/appkit/nstableview/allowscolumnselection)

# allowsColumnSelection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the table view allows the user to select columns by clicking their headers.

## Declaration

```swift
var allowsColumnSelection: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false), which prevents the user from selecting columns (if you create the table view in Interface Builder, the default value is [true](https://developer.apple.com/documentation/swift/true)). You can select columns programmatically regardless of this setting.

## See Also

### Configuring Behavior

- [allowsColumnReordering](allowscolumnreordering.md): A Boolean value indicating whether the table view allows the user to rearrange columns by dragging their headers.
- [allowsColumnResizing](allowscolumnresizing.md): A Boolean value indicating whether the table view allows the user to resize columns by dragging between their headers.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value indicating whether the table view allows the user to select more than one column or row at a time.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the table view allows the user to select zero columns or rows.
- [usesAutomaticRowHeights](usesautomaticrowheights.md): A Boolean value that indicates whether the table view uses autolayout to calculate the height of rows.

# allowsColumnSelection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the table view allows the user to select columns by clicking their headers.

## Declaration

```objectivec
@property BOOL allowsColumnSelection;
```

<a id="Discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false), which prevents the user from selecting columns (if you create the table view in Interface Builder, the default value is [true](https://developer.apple.com/documentation/swift/true)). You can select columns programmatically regardless of this setting.

## See Also

### Related Documentation

- [selectColumn:byExtendingSelection:](selectcolumn_byextendingselection_.md): Deprecated. Selects the column at the specified index, optionally extending any existing selection.

### Configuring Behavior

- [allowsColumnReordering](allowscolumnreordering.md): A Boolean value indicating whether the table view allows the user to rearrange columns by dragging their headers.
- [allowsColumnResizing](allowscolumnresizing.md): A Boolean value indicating whether the table view allows the user to resize columns by dragging between their headers.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value indicating whether the table view allows the user to select more than one column or row at a time.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the table view allows the user to select zero columns or rows.
- [usesAutomaticRowHeights](usesautomaticrowheights.md): A Boolean value that indicates whether the table view uses autolayout to calculate the height of rows.
