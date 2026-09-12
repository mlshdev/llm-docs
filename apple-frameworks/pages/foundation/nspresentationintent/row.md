> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspresentationintent/row](https://developer.apple.com/documentation/foundation/nspresentationintent/row)

# row

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The row number to which this cell belongs.

## Declaration

```objectivec
@property (readonly) NSInteger row;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `0`-based, with the first row at `0`, the second row at `1`, and so on. If The intent is not a cell, this value is `0`.

## See Also

### Getting table information

- [column](column.md): The column number to which the cell belongs.
- [columnCount](columncount.md): The number of columns in a table.
- [columnAlignments](columnalignments.md): The alignments for the columns in a table.
