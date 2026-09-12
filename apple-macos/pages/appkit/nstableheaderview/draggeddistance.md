> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableheaderview/draggeddistance](https://developer.apple.com/documentation/appkit/nstableheaderview/draggeddistance)

# draggedDistance (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The horizontal distance that the user has dragged a column.

## Declaration

```swift
var draggedDistance: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

If the user is dragging a column, this property contains that column’s horizontal distance from its original position; otherwise, the property’s value is undefined.

## See Also

### Checking altered columns

- [draggedColumn](draggedcolumn.md): The index of the column that the user is dragging.
- [resizedColumn](resizedcolumn.md): The index of the column that the user is resizing.

# draggedDistance (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The horizontal distance that the user has dragged a column.

## Declaration

```objectivec
@property (readonly) CGFloat draggedDistance;
```

<a id="Discussion"></a>

## Discussion

If the user is dragging a column, this property contains that column’s horizontal distance from its original position; otherwise, the property’s value is undefined.

## See Also

### Checking altered columns

- [draggedColumn](draggedcolumn.md): The index of the column that the user is dragging.
- [resizedColumn](resizedcolumn.md): The index of the column that the user is resizing.
