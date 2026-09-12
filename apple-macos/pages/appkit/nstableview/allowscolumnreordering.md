> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/allowscolumnreordering](https://developer.apple.com/documentation/appkit/nstableview/allowscolumnreordering)

# allowsColumnReordering (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the table view allows the user to rearrange columns by dragging their headers.

## Declaration

```swift
var allowsColumnReordering: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which allows the user to rearrange the table view’s columns. You can rearrange columns programmatically regardless of this setting.

## See Also

### Related Documentation

- [moveColumn(\_:toColumn:)](movecolumn%28__tocolumn_%29.md): Moves the column and heading at the specified index to the new specified index.

### Configuring Behavior

- [allowsColumnResizing](allowscolumnresizing.md): A Boolean value indicating whether the table view allows the user to resize columns by dragging between their headers.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value indicating whether the table view allows the user to select more than one column or row at a time.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the table view allows the user to select zero columns or rows.
- [allowsColumnSelection](allowscolumnselection.md): A Boolean value indicating whether the table view allows the user to select columns by clicking their headers.
- [usesAutomaticRowHeights](usesautomaticrowheights.md): A Boolean value that indicates whether the table view uses autolayout to calculate the height of rows.

# allowsColumnReordering (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the table view allows the user to rearrange columns by dragging their headers.

## Declaration

```objectivec
@property BOOL allowsColumnReordering;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which allows the user to rearrange the table view’s columns. You can rearrange columns programmatically regardless of this setting.

## See Also

### Related Documentation

- [moveColumn:toColumn:](movecolumn%28__tocolumn_%29.md): Moves the column and heading at the specified index to the new specified index.

### Configuring Behavior

- [allowsColumnResizing](allowscolumnresizing.md): A Boolean value indicating whether the table view allows the user to resize columns by dragging between their headers.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value indicating whether the table view allows the user to select more than one column or row at a time.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the table view allows the user to select zero columns or rows.
- [allowsColumnSelection](allowscolumnselection.md): A Boolean value indicating whether the table view allows the user to select columns by clicking their headers.
- [usesAutomaticRowHeights](usesautomaticrowheights.md): A Boolean value that indicates whether the table view uses autolayout to calculate the height of rows.
