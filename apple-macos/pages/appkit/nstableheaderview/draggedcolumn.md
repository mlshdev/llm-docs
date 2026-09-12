> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableheaderview/draggedcolumn](https://developer.apple.com/documentation/appkit/nstableheaderview/draggedcolumn)

# draggedColumn (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the column that the user is dragging.

## Declaration

```swift
var draggedColumn: Int { get }
```

<a id="Discussion"></a>

## Discussion

If the user is dragging a column, this property contains the index of that column; otherwise, it contains `-1`.

## See Also

### Checking altered columns

- [draggedDistance](draggeddistance.md): The horizontal distance that the user has dragged a column.
- [resizedColumn](resizedcolumn.md): The index of the column that the user is resizing.

# draggedColumn (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the column that the user is dragging.

## Declaration

```objectivec
@property (readonly) NSInteger draggedColumn;
```

<a id="Discussion"></a>

## Discussion

If the user is dragging a column, this property contains the index of that column; otherwise, it contains `-1`.

## See Also

### Checking altered columns

- [draggedDistance](draggeddistance.md): The horizontal distance that the user has dragged a column.
- [resizedColumn](resizedcolumn.md): The index of the column that the user is resizing.
