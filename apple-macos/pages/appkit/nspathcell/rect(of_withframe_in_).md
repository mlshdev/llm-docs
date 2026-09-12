> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcell/rect(of:withframe:in:)](https://developer.apple.com/documentation/appkit/nspathcell/rect(of:withframe:in:))

# rect(of:withFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the current rectangle being displayed for a given path component cell, with respect to a given frame in a given view.

## Declaration

```swift
func rect(of cell: NSPathComponentCell, withFrame frame: NSRect, in view: NSView) -> NSRect
```

## Parameters

- `cell`: The path component cell.
- `frame`: The frame of the view in which the cell appears.
- `view`: The view in which the cell appears.

<a id="return-value"></a>

## Return Value

The rectangle occupied by the path component cell. `NSZeroRect` is returned if `cell` is not found or is not currently visible.

## See Also

### Managing Path Components

- [pathComponentCellClass](pathcomponentcellclass.md): Returns the class used to create `pathComponentCell` objects when automatically filling up the control.
- [pathComponentCell(at:withFrame:in:)](pathcomponentcell%28at_withframe_in_%29.md): Returns the cell located at the given point within the given frame of the given view.
- [clickedPathComponentCell](clickedpathcomponentcell.md): Sets the value of the path displayed by the receiver.
- [pathComponentCells](pathcomponentcells.md): Sets the array of `NSPathComponentCell` objects currently being displayed.

# rectOfPathComponentCell:withFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the current rectangle being displayed for a given path component cell, with respect to a given frame in a given view.

## Declaration

```objectivec
- (NSRect) rectOfPathComponentCell:(NSPathComponentCell *) cell withFrame:(NSRect) frame inView:(NSView *) view;
```

## Parameters

- `cell`: The path component cell.
- `frame`: The frame of the view in which the cell appears.
- `view`: The view in which the cell appears.

<a id="return-value"></a>

## Return Value

The rectangle occupied by the path component cell. `NSZeroRect` is returned if `cell` is not found or is not currently visible.

## See Also

### Managing Path Components

- [pathComponentCellClass](pathcomponentcellclass.md): Returns the class used to create `pathComponentCell` objects when automatically filling up the control.
- [pathComponentCellAtPoint:withFrame:inView:](pathcomponentcell%28at_withframe_in_%29.md): Returns the cell located at the given point within the given frame of the given view.
- [clickedPathComponentCell](clickedpathcomponentcell.md): Sets the value of the path displayed by the receiver.
- [pathComponentCells](pathcomponentcells.md): Sets the array of `NSPathComponentCell` objects currently being displayed.
