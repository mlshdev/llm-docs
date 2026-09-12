> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/allowscolumnresizing](https://developer.apple.com/documentation/appkit/nstableview/allowscolumnresizing)

# allowsColumnResizing (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the table view allows the user to resize columns by dragging between their headers.

## Declaration

```swift
var allowsColumnResizing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default of this property is [true](https://developer.apple.com/documentation/swift/true), which allows the user to resize the table view’s columns. You can resize columns programmatically regardless of this setting.

## See Also

### Related Documentation

- [width](../nstablecolumn/width.md): The table column’s width, in points.

### Configuring Behavior

- [allowsColumnReordering](allowscolumnreordering.md): A Boolean value indicating whether the table view allows the user to rearrange columns by dragging their headers.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value indicating whether the table view allows the user to select more than one column or row at a time.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the table view allows the user to select zero columns or rows.
- [allowsColumnSelection](allowscolumnselection.md): A Boolean value indicating whether the table view allows the user to select columns by clicking their headers.
- [usesAutomaticRowHeights](usesautomaticrowheights.md): A Boolean value that indicates whether the table view uses autolayout to calculate the height of rows.

# allowsColumnResizing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the table view allows the user to resize columns by dragging between their headers.

## Declaration

```objectivec
@property BOOL allowsColumnResizing;
```

<a id="Discussion"></a>

## Discussion

The default of this property is [true](https://developer.apple.com/documentation/swift/true), which allows the user to resize the table view’s columns. You can resize columns programmatically regardless of this setting.

## See Also

### Related Documentation

- [width](../nstablecolumn/width.md): The table column’s width, in points.

### Configuring Behavior

- [allowsColumnReordering](allowscolumnreordering.md): A Boolean value indicating whether the table view allows the user to rearrange columns by dragging their headers.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value indicating whether the table view allows the user to select more than one column or row at a time.
- [allowsEmptySelection](allowsemptyselection.md): A Boolean value indicating whether the table view allows the user to select zero columns or rows.
- [allowsColumnSelection](allowscolumnselection.md): A Boolean value indicating whether the table view allows the user to select columns by clicking their headers.
- [usesAutomaticRowHeights](usesautomaticrowheights.md): A Boolean value that indicates whether the table view uses autolayout to calculate the height of rows.
