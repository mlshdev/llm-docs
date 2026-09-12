> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcell/pathcomponentcells](https://developer.apple.com/documentation/appkit/nspathcell/pathcomponentcells)

# pathComponentCells (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Sets the array of `NSPathComponentCell` objects currently being displayed.

## Declaration

```swift
var pathComponentCells: [NSPathComponentCell] { get set }
```

## Parameters

- `cells`: An array of `NSPathComponentCell` objects.

<a id="Discussion"></a>

## Discussion

Each item in the array must be an instance of `NSPathComponentCell` or a subclass thereof. You cannot set this value to `nil`, but you can set it to an empty array using, for example, `[NSArray array]`.

## See Also

### Managing Path Components

- [pathComponentCellClass](pathcomponentcellclass.md): Returns the class used to create `pathComponentCell` objects when automatically filling up the control.
- [rect(of:withFrame:in:)](rect%28of_withframe_in_%29.md): Returns the current rectangle being displayed for a given path component cell, with respect to a given frame in a given view.
- [pathComponentCell(at:withFrame:in:)](pathcomponentcell%28at_withframe_in_%29.md): Returns the cell located at the given point within the given frame of the given view.
- [clickedPathComponentCell](clickedpathcomponentcell.md): Sets the value of the path displayed by the receiver.

# pathComponentCells (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Sets the array of `NSPathComponentCell` objects currently being displayed.

## Declaration

```objectivec
@property (copy) NSArray<__kindof NSPathComponentCell *> * pathComponentCells;
```

## Parameters

- `cells`: An array of `NSPathComponentCell` objects.

<a id="Discussion"></a>

## Discussion

Each item in the array must be an instance of `NSPathComponentCell` or a subclass thereof. You cannot set this value to `nil`, but you can set it to an empty array using, for example, `[NSArray array]`.

## See Also

### Managing Path Components

- [pathComponentCellClass](pathcomponentcellclass.md): Returns the class used to create `pathComponentCell` objects when automatically filling up the control.
- [rectOfPathComponentCell:withFrame:inView:](rect%28of_withframe_in_%29.md): Returns the current rectangle being displayed for a given path component cell, with respect to a given frame in a given view.
- [pathComponentCellAtPoint:withFrame:inView:](pathcomponentcell%28at_withframe_in_%29.md): Returns the cell located at the given point within the given frame of the given view.
- [clickedPathComponentCell](clickedpathcomponentcell.md): Sets the value of the path displayed by the receiver.
