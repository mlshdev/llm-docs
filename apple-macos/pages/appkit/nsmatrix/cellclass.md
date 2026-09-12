> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/cellclass](https://developer.apple.com/documentation/appkit/nsmatrix/cellclass)

# cellClass (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The subclass of [NSCell](../nscell.md) that the matrix uses when creating new (empty) cells.

## Declaration

```swift
var cellClass: AnyClass { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property should be the id of a subclass of [NSCell](../nscell.md), which can be obtained by sending the `class` message to either the [NSCell](../nscell.md) subclass object or to an instance of that subclass. The default cell class is that set with the class method `setCellClass(_:)`, or [NSActionCell](../nsactioncell.md) if no other default cell class has been specified.

You need to use this property only with matrices initialized with [init(frame:)](init%28frame_%29.md), because the other initializers allow you to specify an instance-specific cell class or cell prototype.

## See Also

### Related Documentation

- [insertColumn(\_:)](insertcolumn%28__%29.md): Inserts a new column of cells at the specified location.
- [addRow()](addrow%28%29.md): Adds a new row of cells below the last row.
- [addColumn()](addcolumn%28%29.md): Adds a new column of cells to the right of the last column.
- [insertRow(\_:)](insertrow%28__%29.md): Inserts a new row of cells before the specified row.
- [makeCell(atRow:column:)](makecell%28atrow_column_%29.md): Creates a new cell at the location specified by the given row and column in the receiver.

### Managing the Cell Class

- [prototype](prototype.md): The prototype cell that’s copied whenever the matrix creates a new cell.

# cellClass (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The subclass of [NSCell](../nscell.md) that the matrix uses when creating new (empty) cells.

## Declaration

```objectivec
@property (assign) Class cellClass;
```

<a id="Discussion"></a>

## Discussion

The value of this property should be the id of a subclass of [NSCell](../nscell.md), which can be obtained by sending the `class` message to either the [NSCell](../nscell.md) subclass object or to an instance of that subclass. The default cell class is that set with the class method `setCellClass(_:)`, or [NSActionCell](../nsactioncell.md) if no other default cell class has been specified.

You need to use this property only with matrices initialized with [initWithFrame:](init%28frame_%29.md), because the other initializers allow you to specify an instance-specific cell class or cell prototype.

## See Also

### Related Documentation

- [insertColumn:](insertcolumn%28__%29.md): Inserts a new column of cells at the specified location.
- [addRow](addrow%28%29.md): Adds a new row of cells below the last row.
- [addColumn](addcolumn%28%29.md): Adds a new column of cells to the right of the last column.
- [insertRow:](insertrow%28__%29.md): Inserts a new row of cells before the specified row.
- [makeCellAtRow:column:](makecell%28atrow_column_%29.md): Creates a new cell at the location specified by the given row and column in the receiver.

### Managing the Cell Class

- [prototype](prototype.md): The prototype cell that’s copied whenever the matrix creates a new cell.
