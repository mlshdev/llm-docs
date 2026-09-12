> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcontroldelegate/pathcontrol(_:acceptdrop:)](https://developer.apple.com/documentation/appkit/nspathcontroldelegate/pathcontrol(_:acceptdrop:))

# pathControl(\_:acceptDrop:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Implement this method to accept previously validated contents dropped onto the control.

## Declaration

```swift
@MainActor optional func pathControl(_ pathControl: NSPathControl, acceptDrop info: any NSDraggingInfo) -> Bool
```

## Parameters

- `pathControl`: The path control that sent the message.
- `info`: An object containing details about this dragging operation.

<a id="Discussion"></a>

## Discussion

In order to accept the dropped contents previously accepted from [pathControl(\_:validateDrop:)](pathcontrol%28__validatedrop_%29.md), you must implement this method. This method is called from performDragOperation:. You should change the URL value based on the dragged information.

If not implemented, and the control’s cell is editable, the drop is accepted if it contains an `NSURLPboardType` or `NSFilenamesPboardType` that conforms to the cell’s allowed types. The cell’s URL value is automatically changed, and the action is invoked. Implementation of this method is optional.

## See Also

### Dragging Support

- [pathControl(\_:shouldDrag:with:)](pathcontrol%28__shoulddrag_with_%29-35j1e.md): Implement this method to enable dragging from the control.
- [pathControl(\_:validateDrop:)](pathcontrol%28__validatedrop_%29.md): Implement this method to enable dragging onto the control.

# pathControl:acceptDrop: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Implement this method to accept previously validated contents dropped onto the control.

## Declaration

```objectivec
- (BOOL) pathControl:(NSPathControl *) pathControl acceptDrop:(id<NSDraggingInfo>) info;
```

## Parameters

- `pathControl`: The path control that sent the message.
- `info`: An object containing details about this dragging operation.

<a id="Discussion"></a>

## Discussion

In order to accept the dropped contents previously accepted from [pathControl:validateDrop:](pathcontrol%28__validatedrop_%29.md), you must implement this method. This method is called from performDragOperation:. You should change the URL value based on the dragged information.

If not implemented, and the control’s cell is editable, the drop is accepted if it contains an `NSURLPboardType` or `NSFilenamesPboardType` that conforms to the cell’s allowed types. The cell’s URL value is automatically changed, and the action is invoked. Implementation of this method is optional.

## See Also

### Dragging Support

- [pathControl:shouldDragPathComponentCell:withPasteboard:](pathcontrol%28__shoulddrag_with_%29-35j1e.md): Implement this method to enable dragging from the control.
- [pathControl:validateDrop:](pathcontrol%28__validatedrop_%29.md): Implement this method to enable dragging onto the control.
