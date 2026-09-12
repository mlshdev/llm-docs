> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableheaderview/resizedcolumn](https://developer.apple.com/documentation/appkit/nstableheaderview/resizedcolumn)

# resizedColumn (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the column that the user is resizing.

## Declaration

```swift
var resizedColumn: Int { get }
```

<a id="Discussion"></a>

## Discussion

If the user is resizing a column, this property contains the index of that column; otherwise, it contains `-1`.

## See Also

### Checking altered columns

- [draggedColumn](draggedcolumn.md): The index of the column that the user is dragging.
- [draggedDistance](draggeddistance.md): The horizontal distance that the user has dragged a column.

# resizedColumn (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the column that the user is resizing.

## Declaration

```objectivec
@property (readonly) NSInteger resizedColumn;
```

<a id="Discussion"></a>

## Discussion

If the user is resizing a column, this property contains the index of that column; otherwise, it contains `-1`.

## See Also

### Checking altered columns

- [draggedColumn](draggedcolumn.md): The index of the column that the user is dragging.
- [draggedDistance](draggeddistance.md): The horizontal distance that the user has dragged a column.
