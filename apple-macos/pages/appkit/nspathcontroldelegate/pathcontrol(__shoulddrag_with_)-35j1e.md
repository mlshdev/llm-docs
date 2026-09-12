> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcontroldelegate/pathcontrol(_:shoulddrag:with:)-35j1e](https://developer.apple.com/documentation/appkit/nspathcontroldelegate/pathcontrol(_:shoulddrag:with:)-35j1e)

# pathControl(\_:shouldDrag:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Implement this method to enable dragging from the control.

## Declaration

```swift
@MainActor optional func pathControl(_ pathControl: NSPathControl, shouldDrag pathComponentCell: NSPathComponentCell, with pasteboard: NSPasteboard) -> Bool
```

## Parameters

- `pathControl`: The path control that sent the message.
- `pathComponentCell`: The path component cell from which the drag is beginning.
- `pasteboard`: The pasteboard.

<a id="Discussion"></a>

## Discussion

This method is called when a drag is about to begin. You can refuse to allow the drag to happen by returning [false](https://developer.apple.com/documentation/swift/false) and allow it by returning [true](https://developer.apple.com/documentation/swift/true). By default, the pasteboard automatically has the following types on it: `NSStringPboardType`, `NSURLPboardType` (if there is a URL value for the cell being dragged), and `NSFilenamesPboardType` (if the URL value returns [true](https://developer.apple.com/documentation/swift/true) from -[isFileURL](https://developer.apple.com/documentation/foundation/nsurl/isfileurl)). You can customize the types placed on the pasteboard at this time, if desired. Implementation of this method is optional.

## See Also

### Dragging Support

- [pathControl(\_:validateDrop:)](pathcontrol%28__validatedrop_%29.md): Implement this method to enable dragging onto the control.
- [pathControl(\_:acceptDrop:)](pathcontrol%28__acceptdrop_%29.md): Implement this method to accept previously validated contents dropped onto the control.

# pathControl:shouldDragPathComponentCell:withPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Implement this method to enable dragging from the control.

## Declaration

```objectivec
- (BOOL) pathControl:(NSPathControl *) pathControl shouldDragPathComponentCell:(NSPathComponentCell *) pathComponentCell withPasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `pathControl`: The path control that sent the message.
- `pathComponentCell`: The path component cell from which the drag is beginning.
- `pasteboard`: The pasteboard.

<a id="Discussion"></a>

## Discussion

This method is called when a drag is about to begin. You can refuse to allow the drag to happen by returning [false](https://developer.apple.com/documentation/swift/false) and allow it by returning [true](https://developer.apple.com/documentation/swift/true). By default, the pasteboard automatically has the following types on it: `NSStringPboardType`, `NSURLPboardType` (if there is a URL value for the cell being dragged), and `NSFilenamesPboardType` (if the URL value returns [true](https://developer.apple.com/documentation/swift/true) from -[fileURL](https://developer.apple.com/documentation/foundation/nsurl/isfileurl)). You can customize the types placed on the pasteboard at this time, if desired. Implementation of this method is optional.

## See Also

### Dragging Support

- [pathControl:validateDrop:](pathcontrol%28__validatedrop_%29.md): Implement this method to enable dragging onto the control.
- [pathControl:acceptDrop:](pathcontrol%28__acceptdrop_%29.md): Implement this method to accept previously validated contents dropped onto the control.
