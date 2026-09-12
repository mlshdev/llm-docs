> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcontroldelegate/pathcontrol(_:validatedrop:)](https://developer.apple.com/documentation/appkit/nspathcontroldelegate/pathcontrol(_:validatedrop:))

# pathControl(\_:validateDrop:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Implement this method to enable dragging onto the control.

## Declaration

```swift
@MainActor optional func pathControl(_ pathControl: NSPathControl, validateDrop info: any NSDraggingInfo) -> NSDragOperation
```

## Parameters

- `pathControl`: The path control that sent the message.
- `info`: An object containing details about this dragging operation.

<a id="Discussion"></a>

## Discussion

This method is called when something is dragged over the control. Return `NSDragOperationNone` to refuse the drop, or return anything else to accept it.

If not implemented, and the control’s cell is editable, the drop is accepted if it contains an `NSURLPboardType` or `NSFilenamesPboardType` that conforms to the cell’s allowed types. Implementation of this method is optional.

## See Also

### Dragging Support

- [pathControl(\_:shouldDrag:with:)](pathcontrol%28__shoulddrag_with_%29-35j1e.md): Implement this method to enable dragging from the control.
- [pathControl(\_:acceptDrop:)](pathcontrol%28__acceptdrop_%29.md): Implement this method to accept previously validated contents dropped onto the control.

# pathControl:validateDrop: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Implement this method to enable dragging onto the control.

## Declaration

```objectivec
- (NSDragOperation) pathControl:(NSPathControl *) pathControl validateDrop:(id<NSDraggingInfo>) info;
```

## Parameters

- `pathControl`: The path control that sent the message.
- `info`: An object containing details about this dragging operation.

<a id="Discussion"></a>

## Discussion

This method is called when something is dragged over the control. Return `NSDragOperationNone` to refuse the drop, or return anything else to accept it.

If not implemented, and the control’s cell is editable, the drop is accepted if it contains an `NSURLPboardType` or `NSFilenamesPboardType` that conforms to the cell’s allowed types. Implementation of this method is optional.

## See Also

### Dragging Support

- [pathControl:shouldDragPathComponentCell:withPasteboard:](pathcontrol%28__shoulddrag_with_%29-35j1e.md): Implement this method to enable dragging from the control.
- [pathControl:acceptDrop:](pathcontrol%28__acceptdrop_%29.md): Implement this method to accept previously validated contents dropped onto the control.
