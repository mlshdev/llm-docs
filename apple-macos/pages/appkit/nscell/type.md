> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/type](https://developer.apple.com/documentation/appkit/nscell/type)

# type (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The type of the cell.

## Declaration

```swift
var type: NSCell.CellType { get set }
```

<a id="Discussion"></a>

## Discussion

When you change the cell type to [NSCell.CellType.textCellType](celltype/textcelltype.md), the cell converts gives itself a default title and sets the font to the system font at the default size. When you change the cell type to [NSCell.CellType.imageCellType](celltype/imagecelltype.md), the cell type does not change until you assign a new non-`nil` image to it.

For a list of possible cell types, see [NSCell.CellType](celltype.md).

## See Also

### Related Documentation

- [image](image.md): The image displayed by the cell, if any.

### Managing Cell Attributes

- [setCellAttribute(\_:to:)](setcellattribute%28__to_%29.md): Sets the value for the specified cell attribute.
- [cellAttribute(\_:)](cellattribute%28__%29.md): Returns the value for the specified cell attribute.
- [isEnabled](isenabled.md): A Boolean value indicating whether the cell is currently enabled.
- [allowsUndo](allowsundo.md): A Boolean value indicating whether the cell assumes responsibility for undo operations.

# type (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The type of the cell.

## Declaration

```objectivec
@property NSCellType type;
```

<a id="Discussion"></a>

## Discussion

When you change the cell type to [NSTextCellType](celltype/textcelltype.md), the cell converts gives itself a default title and sets the font to the system font at the default size. When you change the cell type to [NSImageCellType](celltype/imagecelltype.md), the cell type does not change until you assign a new non-`nil` image to it.

For a list of possible cell types, see [NSCellType](celltype.md).

## See Also

### Related Documentation

- [image](image.md): The image displayed by the cell, if any.

### Managing Cell Attributes

- [setCellAttribute:to:](setcellattribute%28__to_%29.md): Sets the value for the specified cell attribute.
- [cellAttribute:](cellattribute%28__%29.md): Returns the value for the specified cell attribute.
- [enabled](isenabled.md): A Boolean value indicating whether the cell is currently enabled.
- [allowsUndo](allowsundo.md): A Boolean value indicating whether the cell assumes responsibility for undo operations.
