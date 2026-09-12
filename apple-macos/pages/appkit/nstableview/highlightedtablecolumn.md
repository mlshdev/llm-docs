> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/highlightedtablecolumn](https://developer.apple.com/documentation/appkit/nstableview/highlightedtablecolumn)

# highlightedTableColumn (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The column highlighted in the table.

## Declaration

```swift
weak var highlightedTableColumn: NSTableColumn? { get set }
```

<a id="Discussion"></a>

## Discussion

Assigning a value to this property highlights the specified column. A highlightable column header can be used in conjunction with row selection to highlight a particular column of the table. An example of this is how the Mail application indicates the currently sorted column.

# highlightedTableColumn (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The column highlighted in the table.

## Declaration

```objectivec
@property (weak, nullable) NSTableColumn * highlightedTableColumn;
```

<a id="Discussion"></a>

## Discussion

Assigning a value to this property highlights the specified column. A highlightable column header can be used in conjunction with row selection to highlight a particular column of the table. An example of this is how the Mail application indicates the currently sorted column.
