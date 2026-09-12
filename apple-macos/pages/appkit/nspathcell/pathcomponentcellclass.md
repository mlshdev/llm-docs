> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcell/pathcomponentcellclass](https://developer.apple.com/documentation/appkit/nspathcell/pathcomponentcellclass)

# pathComponentCellClass (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Returns the class used to create `pathComponentCell` objects when automatically filling up the control.

## Declaration

```swift
class var pathComponentCellClass: AnyClass { get }
```

<a id="return-value"></a>

## Return Value

The class used to create `NSPathComponentCell` objects.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to return a custom cell class that is automatically used. By default, the method returns `[NSPathComponentCell class]`, or a specialized subclass thereof.

## See Also

### Managing Path Components

- [rect(of:withFrame:in:)](rect%28of_withframe_in_%29.md): Returns the current rectangle being displayed for a given path component cell, with respect to a given frame in a given view.
- [pathComponentCell(at:withFrame:in:)](pathcomponentcell%28at_withframe_in_%29.md): Returns the cell located at the given point within the given frame of the given view.
- [clickedPathComponentCell](clickedpathcomponentcell.md): Sets the value of the path displayed by the receiver.
- [pathComponentCells](pathcomponentcells.md): Sets the array of `NSPathComponentCell` objects currently being displayed.

# pathComponentCellClass (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Returns the class used to create `pathComponentCell` objects when automatically filling up the control.

## Declaration

```objectivec
@property (class, readonly) Class pathComponentCellClass;
```

<a id="return-value"></a>

## Return Value

The class used to create `NSPathComponentCell` objects.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to return a custom cell class that is automatically used. By default, the method returns `[NSPathComponentCell class]`, or a specialized subclass thereof.

## See Also

### Managing Path Components

- [rectOfPathComponentCell:withFrame:inView:](rect%28of_withframe_in_%29.md): Returns the current rectangle being displayed for a given path component cell, with respect to a given frame in a given view.
- [pathComponentCellAtPoint:withFrame:inView:](pathcomponentcell%28at_withframe_in_%29.md): Returns the cell located at the given point within the given frame of the given view.
- [clickedPathComponentCell](clickedpathcomponentcell.md): Sets the value of the path displayed by the receiver.
- [pathComponentCells](pathcomponentcells.md): Sets the array of `NSPathComponentCell` objects currently being displayed.
