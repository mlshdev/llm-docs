> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/window(_:shoulddragdocumentwith:from:with:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/window(_:shoulddragdocumentwith:from:with:))

# window(\_:shouldDragDocumentWith:from:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Asks the delegate whether a user can drag the document icon from the window’s title bar.

## Declaration

```swift
@MainActor optional func window(_ window: NSWindow, shouldDragDocumentWith event: NSEvent, from dragImageLocation: NSPoint, with pasteboard: NSPasteboard) -> Bool
```

## Parameters

- `window`: The window containing the document icon the user wants to drag.
- `event`: The left-mouse down event that triggered the dragging operation.
- `dragImageLocation`: The location of the origin of the document icon, in window coordinates, when the user started the dragging operation.
- `pasteboard`: The pasteboard containing the contents of the document, which the delegate can modify.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the drag to proceed; [false](https://developer.apple.com/documentation/swift/false) to prevent it. Before turning no the delegate can implement its own dragging behavior as described below.

<a id="Discussion"></a>

## Discussion

Implementing this method enables an application to customize the process of dragging the window’s document icon. The delegate can prohibit the drag by returning [false](https://developer.apple.com/documentation/swift/false). Before returning [false](https://developer.apple.com/documentation/swift/false), the delegate can implement its own dragging behavior using  [drag(\_:at:offset:event:pasteboard:source:slideBack:)](../nswindow/drag%28__at_offset_event_pasteboard_source_slideback_%29.md).

Alternatively, the delegate can enable a drag by returning [true](https://developer.apple.com/documentation/swift/true), for example, to override the default `NSWindow` behavior of prohibiting the drag of an edited document. In addition, the delegate can customize the pasteboard contents before returning [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [representedURL](../nswindow/representedurl.md): The URL of the file the window represents.

# window:shouldDragDocumentWithEvent:from:withPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Asks the delegate whether a user can drag the document icon from the window’s title bar.

## Declaration

```objectivec
- (BOOL) window:(NSWindow *) window shouldDragDocumentWithEvent:(NSEvent *) event from:(NSPoint) dragImageLocation withPasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `window`: The window containing the document icon the user wants to drag.
- `event`: The left-mouse down event that triggered the dragging operation.
- `dragImageLocation`: The location of the origin of the document icon, in window coordinates, when the user started the dragging operation.
- `pasteboard`: The pasteboard containing the contents of the document, which the delegate can modify.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the drag to proceed; [false](https://developer.apple.com/documentation/swift/false) to prevent it. Before turning no the delegate can implement its own dragging behavior as described below.

<a id="Discussion"></a>

## Discussion

Implementing this method enables an application to customize the process of dragging the window’s document icon. The delegate can prohibit the drag by returning [false](https://developer.apple.com/documentation/swift/false). Before returning [false](https://developer.apple.com/documentation/swift/false), the delegate can implement its own dragging behavior using  [dragImage:at:offset:event:pasteboard:source:slideBack:](../nswindow/drag%28__at_offset_event_pasteboard_source_slideback_%29.md).

Alternatively, the delegate can enable a drag by returning [true](https://developer.apple.com/documentation/swift/true), for example, to override the default `NSWindow` behavior of prohibiting the drag of an edited document. In addition, the delegate can customize the pasteboard contents before returning [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [representedURL](../nswindow/representedurl.md): The URL of the file the window represents.
