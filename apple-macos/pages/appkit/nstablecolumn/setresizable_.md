> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecolumn/setresizable:](https://developer.apple.com/documentation/appkit/nstablecolumn/setresizable:)

# setResizable:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Sets whether the user can resize the receiver in its NSTableView.

> Use [resizingMask](resizingmask.md) instead.

## Declaration

```objectivec
- (void) setResizable:(BOOL) flag;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) if the user can resize the table column; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

You can change the table column size programmatically regardless of this setting, with the minimum and maximum constraints defined by [minWidth](minwidth.md) and [maxWidth](maxwidth.md).

## See Also

### Deprecated Methods

- [isResizable](isresizable.md): Deprecated. Returns whether the column is resizable.
- [dataCell](datacell.md): Deprecated. The cell prototype used by the table column to draw individual cells.
- [dataCellForRow:](datacell%28forrow_%29.md): Deprecated. Returns the cell object used to display values in the specified row of the table column.
