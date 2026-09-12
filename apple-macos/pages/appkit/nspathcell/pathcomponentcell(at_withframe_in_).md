> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcell/pathcomponentcell(at:withframe:in:)](https://developer.apple.com/documentation/appkit/nspathcell/pathcomponentcell(at:withframe:in:))

# pathComponentCell(at:withFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the cell located at the given point within the given frame of the given view.

## Declaration

```swift
func pathComponentCell(at point: NSPoint, withFrame frame: NSRect, in view: NSView) -> NSPathComponentCell?
```

## Parameters

- `point`: The point within the returned cell.
- `frame`: The frame within which the point is located.
- `view`: The view within which the frame is located.

<a id="return-value"></a>

## Return Value

The component cell within which the given point is located, or `nil` if no cell exists at that location.

## See Also

### Managing Path Components

- [pathComponentCellClass](pathcomponentcellclass.md): Returns the class used to create `pathComponentCell` objects when automatically filling up the control.
- [rect(of:withFrame:in:)](rect%28of_withframe_in_%29.md): Returns the current rectangle being displayed for a given path component cell, with respect to a given frame in a given view.
- [clickedPathComponentCell](clickedpathcomponentcell.md): Sets the value of the path displayed by the receiver.
- [pathComponentCells](pathcomponentcells.md): Sets the array of `NSPathComponentCell` objects currently being displayed.

# pathComponentCellAtPoint:withFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the cell located at the given point within the given frame of the given view.

## Declaration

```objectivec
- (NSPathComponentCell *) pathComponentCellAtPoint:(NSPoint) point withFrame:(NSRect) frame inView:(NSView *) view;
```

## Parameters

- `point`: The point within the returned cell.
- `frame`: The frame within which the point is located.
- `view`: The view within which the frame is located.

<a id="return-value"></a>

## Return Value

The component cell within which the given point is located, or `nil` if no cell exists at that location.

## See Also

### Managing Path Components

- [pathComponentCellClass](pathcomponentcellclass.md): Returns the class used to create `pathComponentCell` objects when automatically filling up the control.
- [rectOfPathComponentCell:withFrame:inView:](rect%28of_withframe_in_%29.md): Returns the current rectangle being displayed for a given path component cell, with respect to a given frame in a given view.
- [clickedPathComponentCell](clickedpathcomponentcell.md): Sets the value of the path displayed by the receiver.
- [pathComponentCells](pathcomponentcells.md): Sets the array of `NSPathComponentCell` objects currently being displayed.
