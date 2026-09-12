> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcell/clickedpathcomponentcell](https://developer.apple.com/documentation/appkit/nspathcell/clickedpathcomponentcell)

# clickedPathComponentCell (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Sets the value of the path displayed by the receiver.

## Declaration

```swift
var clickedPathComponentCell: NSPathComponentCell? { get }
```

## Parameters

- `url`: The new path value to display.

<a id="Discussion"></a>

## Discussion

When setting, an array of `NSPathComponentCell` objects is automatically set, based on the path in `url`. The type of `NSPathComponentCell` objects created can be controlled by subclassing `NSPathCell` and overriding [pathComponentCellClass](pathcomponentcellclass.md).

If `url` is a file URL (returns [true](https://developer.apple.com/documentation/swift/true) from [isFileURL](https://developer.apple.com/documentation/foundation/nsurl/isfileurl)), the images are automatically filled with file icons, if the path exists. The URL value itself is stored in the `objectValue` property of the cell.

## See Also

### Managing Path Components

- [pathComponentCellClass](pathcomponentcellclass.md): Returns the class used to create `pathComponentCell` objects when automatically filling up the control.
- [rect(of:withFrame:in:)](rect%28of_withframe_in_%29.md): Returns the current rectangle being displayed for a given path component cell, with respect to a given frame in a given view.
- [pathComponentCell(at:withFrame:in:)](pathcomponentcell%28at_withframe_in_%29.md): Returns the cell located at the given point within the given frame of the given view.
- [pathComponentCells](pathcomponentcells.md): Sets the array of `NSPathComponentCell` objects currently being displayed.

# clickedPathComponentCell (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Sets the value of the path displayed by the receiver.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSPathComponentCell * clickedPathComponentCell;
```

## Parameters

- `url`: The new path value to display.

<a id="Discussion"></a>

## Discussion

When setting, an array of `NSPathComponentCell` objects is automatically set, based on the path in `url`. The type of `NSPathComponentCell` objects created can be controlled by subclassing `NSPathCell` and overriding [pathComponentCellClass](pathcomponentcellclass.md).

If `url` is a file URL (returns [true](https://developer.apple.com/documentation/swift/true) from [fileURL](https://developer.apple.com/documentation/foundation/nsurl/isfileurl)), the images are automatically filled with file icons, if the path exists. The URL value itself is stored in the `objectValue` property of the cell.

## See Also

### Managing Path Components

- [pathComponentCellClass](pathcomponentcellclass.md): Returns the class used to create `pathComponentCell` objects when automatically filling up the control.
- [rectOfPathComponentCell:withFrame:inView:](rect%28of_withframe_in_%29.md): Returns the current rectangle being displayed for a given path component cell, with respect to a given frame in a given view.
- [pathComponentCellAtPoint:withFrame:inView:](pathcomponentcell%28at_withframe_in_%29.md): Returns the cell located at the given point within the given frame of the given view.
- [pathComponentCells](pathcomponentcells.md): Sets the array of `NSPathComponentCell` objects currently being displayed.
