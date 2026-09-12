> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspresentationintent/columnalignments](https://developer.apple.com/documentation/foundation/nspresentationintent/columnalignments)

# columnAlignments

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The alignments for the columns in a table.

## Declaration

```objectivec
@property (readonly, nullable) NSArray<NSNumber *> * columnAlignments;
```

<a id="Discussion"></a>

## Discussion

If the intent is not a table, the value of this property is `nil`.

## See Also

### Getting table information

- [row](row.md): The row number to which this cell belongs.
- [column](column.md): The column number to which the cell belongs.
- [columnCount](columncount.md): The number of columns in a table.
