> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/setcellattribute(_:to:)](https://developer.apple.com/documentation/appkit/nscell/setcellattribute(_:to:))

# setCellAttribute(\_:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the value for the specified cell attribute.

## Declaration

```swift
func setCellAttribute(_ parameter: NSCell.Attribute, to value: Int)
```

## Parameters

- `parameter`: The cell attribute whose value you want to set. Attributes include the receiver’s current state and  whether it is disabled, editable, or highlighted.
- `value`: The new value for the attribute.

## See Also

### Managing Cell Attributes

- [cellAttribute(\_:)](cellattribute%28__%29.md): Returns the value for the specified cell attribute.
- [type](type.md): The type of the cell.
- [isEnabled](isenabled.md): A Boolean value indicating whether the cell is currently enabled.
- [allowsUndo](allowsundo.md): A Boolean value indicating whether the cell assumes responsibility for undo operations.

# setCellAttribute:to: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the value for the specified cell attribute.

## Declaration

```objectivec
- (void) setCellAttribute:(NSCellAttribute) parameter to:(NSInteger) value;
```

## Parameters

- `parameter`: The cell attribute whose value you want to set. Attributes include the receiver’s current state and  whether it is disabled, editable, or highlighted.
- `value`: The new value for the attribute.

## See Also

### Managing Cell Attributes

- [cellAttribute:](cellattribute%28__%29.md): Returns the value for the specified cell attribute.
- [type](type.md): The type of the cell.
- [enabled](isenabled.md): A Boolean value indicating whether the cell is currently enabled.
- [allowsUndo](allowsundo.md): A Boolean value indicating whether the cell assumes responsibility for undo operations.
