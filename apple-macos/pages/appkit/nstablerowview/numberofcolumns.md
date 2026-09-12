> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablerowview/numberofcolumns](https://developer.apple.com/documentation/appkit/nstablerowview/numberofcolumns)

# numberOfColumns (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Returns the number of columns represented by views in the table row view.

## Declaration

```swift
var numberOfColumns: Int { get }
```

<a id="Discussion"></a>

## Discussion

The number of columns may not be equal to the number of columns in the enclosing [NSTableView](../nstableview.md), if this row view is a group style and has a single view that spans the entire width of the row.

## See Also

### Row Grouping

- [isGroupRowStyle](isgrouprowstyle.md): Specifies whether this row view is a group row.

# numberOfColumns (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Returns the number of columns represented by views in the table row view.

## Declaration

```objectivec
@property (readonly) NSInteger numberOfColumns;
```

<a id="Discussion"></a>

## Discussion

The number of columns may not be equal to the number of columns in the enclosing [NSTableView](../nstableview.md), if this row view is a group style and has a single view that spans the entire width of the row.

## See Also

### Row Grouping

- [groupRowStyle](isgrouprowstyle.md): Specifies whether this row view is a group row.
