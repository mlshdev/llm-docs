> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/prototype](https://developer.apple.com/documentation/appkit/nsmatrix/prototype)

# prototype (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The prototype cell that’s copied whenever the matrix creates a new cell.

## Declaration

```swift
@NSCopying var prototype: NSCell? { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is `nil`, there is no prototype cell.

## See Also

### Related Documentation

- [init(frame:mode:prototype:numberOfRows:numberOfColumns:)](init%28frame_mode_prototype_numberofrows_numberofcolumns_%29.md): Initializes and returns a newly allocated matrix of the specified size using the given cell as a prototype.
- [makeCell(atRow:column:)](makecell%28atrow_column_%29.md): Creates a new cell at the location specified by the given row and column in the receiver.

### Managing the Cell Class

- [cellClass](cellclass.md): The subclass of [NSCell](../nscell.md) that the matrix uses when creating new (empty) cells.

# prototype (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The prototype cell that’s copied whenever the matrix creates a new cell.

## Declaration

```objectivec
@property (copy, nullable) NSCell * prototype;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is `nil`, there is no prototype cell.

## See Also

### Related Documentation

- [initWithFrame:mode:prototype:numberOfRows:numberOfColumns:](init%28frame_mode_prototype_numberofrows_numberofcolumns_%29.md): Initializes and returns a newly allocated matrix of the specified size using the given cell as a prototype.
- [makeCellAtRow:column:](makecell%28atrow_column_%29.md): Creates a new cell at the location specified by the given row and column in the receiver.

### Managing the Cell Class

- [cellClass](cellclass.md): The subclass of [NSCell](../nscell.md) that the matrix uses when creating new (empty) cells.
