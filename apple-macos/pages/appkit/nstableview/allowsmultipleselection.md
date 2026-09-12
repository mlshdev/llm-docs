> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/allowsmultipleselection](https://developer.apple.com/documentation/appkit/nstableview/allowsmultipleselection)

# allowsMultipleSelection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the table view allows the user to select more than one column or row at a time.

## Declaration

```swift
var allowsMultipleSelection: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false), which allows the user to select only one column or row at a time. You can select multiple columns or rows programmatically regardless of this setting.

## See Also

### Related Documentation

- [selectColumnIndexes(\_:byExtendingSelection:)](selectcolumnindexes%28__byextendingselection_%29.md): Sets the column selection using `indexes` possibly extending the selection.
- [selectRowIndexes(\_:byExtendingSelection:)](selectrowindexes%28__byextendingselection_%29.md): Sets the row selection using `indexes` extending the selection if specified.

### Configuring Behavior

- [allowsColumnReordering](allowscolumnreordering.md): A Boolean value indicating whether the table view allows the user to rearrange columns by dragging their headers.
- [allowsColumnResizing](allowscolumnresizing.md): A Boolean value indicating whether the table view allows the user to resize columns by dragging between their headers.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the table view allows the user to select zero columns or rows.
- [allowsColumnSelection](allowscolumnselection.md): A Boolean value indicating whether the table view allows the user to select columns by clicking their headers.
- [usesAutomaticRowHeights](usesautomaticrowheights.md): A Boolean value that indicates whether the table view uses autolayout to calculate the height of rows.

# allowsMultipleSelection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the table view allows the user to select more than one column or row at a time.

## Declaration

```objectivec
@property BOOL allowsMultipleSelection;
```

<a id="Discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false), which allows the user to select only one column or row at a time. You can select multiple columns or rows programmatically regardless of this setting.

## See Also

### Related Documentation

- [selectColumnIndexes:byExtendingSelection:](selectcolumnindexes%28__byextendingselection_%29.md): Sets the column selection using `indexes` possibly extending the selection.
- [selectRowIndexes:byExtendingSelection:](selectrowindexes%28__byextendingselection_%29.md): Sets the row selection using `indexes` extending the selection if specified.

### Configuring Behavior

- [allowsColumnReordering](allowscolumnreordering.md): A Boolean value indicating whether the table view allows the user to rearrange columns by dragging their headers.
- [allowsColumnResizing](allowscolumnresizing.md): A Boolean value indicating whether the table view allows the user to resize columns by dragging between their headers.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the table view allows the user to select zero columns or rows.
- [allowsColumnSelection](allowscolumnselection.md): A Boolean value indicating whether the table view allows the user to select columns by clicking their headers.
- [usesAutomaticRowHeights](usesautomaticrowheights.md): A Boolean value that indicates whether the table view uses autolayout to calculate the height of rows.
