> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecolumn/isresizable](https://developer.apple.com/documentation/appkit/nstablecolumn/isresizable)

# isResizable

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Returns whether the column is resizable.

> Use [resizingMask](resizingmask.md) instead.

## Declaration

```objectivec
- (BOOL) isResizable;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user is allowed to resize the receiver in its `NSTableView`, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

You can change the table column size programmatically regardless of this setting, with the minimum and maximum constraints defined by [minWidth](minwidth.md) and [maxWidth](maxwidth.md).

## See Also

### Deprecated Methods

- [setResizable:](setresizable_.md): Deprecated. Sets whether the user can resize the receiver in its NSTableView.
- [dataCell](datacell.md): Deprecated. The cell prototype used by the table column to draw individual cells.
- [dataCellForRow:](datacell%28forrow_%29.md): Deprecated. Returns the cell object used to display values in the specified row of the table column.
