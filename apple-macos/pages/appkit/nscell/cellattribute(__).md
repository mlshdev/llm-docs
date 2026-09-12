> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/cellattribute(_:)](https://developer.apple.com/documentation/appkit/nscell/cellattribute(_:))

# cellAttribute(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the value for the specified cell attribute.

## Declaration

```swift
func cellAttribute(_ parameter: NSCell.Attribute) -> Int
```

## Parameters

- `parameter`: The cell attribute whose value you want to get. Attributes include the receiver’s current state and  whether it is disabled, editable, or highlighted.

<a id="return-value"></a>

## Return Value

The value for the cell attribute specified by `aParameter`.

## See Also

### Managing Cell Attributes

- [setCellAttribute(\_:to:)](setcellattribute%28__to_%29.md): Sets the value for the specified cell attribute.
- [type](type.md): The type of the cell.
- [isEnabled](isenabled.md): A Boolean value indicating whether the cell is currently enabled.
- [allowsUndo](allowsundo.md): A Boolean value indicating whether the cell assumes responsibility for undo operations.

# cellAttribute: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the value for the specified cell attribute.

## Declaration

```objectivec
- (NSInteger) cellAttribute:(NSCellAttribute) parameter;
```

## Parameters

- `parameter`: The cell attribute whose value you want to get. Attributes include the receiver’s current state and  whether it is disabled, editable, or highlighted.

<a id="return-value"></a>

## Return Value

The value for the cell attribute specified by `aParameter`.

## See Also

### Managing Cell Attributes

- [setCellAttribute:to:](setcellattribute%28__to_%29.md): Sets the value for the specified cell attribute.
- [type](type.md): The type of the cell.
- [enabled](isenabled.md): A Boolean value indicating whether the cell is currently enabled.
- [allowsUndo](allowsundo.md): A Boolean value indicating whether the cell assumes responsibility for undo operations.
