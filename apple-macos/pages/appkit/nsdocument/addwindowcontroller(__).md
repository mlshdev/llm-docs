> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/addwindowcontroller(_:)](https://developer.apple.com/documentation/appkit/nsdocument/addwindowcontroller(_:))

# addWindowController(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the specified window controller to the current document.

## Declaration

```swift
func addWindowController(_ windowController: NSWindowController)
```

## Parameters

- `windowController`: The window controller that is added.

<a id="Discussion"></a>

## Discussion

An [NSDocument](../nsdocument.md) object uses its list of window controllers when it displays all document windows, sets window edited status upon an undo or redo operation, and modifies window titles. If you create window controllers by overriding [windowNibName](windownibname.md), this method is invoked automatically. If you create window controllers in [makeWindowControllers()](makewindowcontrollers%28%29.md) or in any other context, such as in apps that present multiple windows per document, you should invoke this method for each window controller created.

You cannot attach a window controller to more than one document at a time. The default implementation of this method removes the passed-in window controller from the document to which it is attached, if it is already attached to one, then sends it a [document](../nswindowcontroller/document.md) message with `self` as the argument. It also ignores redundant invocations.

You would not typically override this method.

## See Also

### Related Documentation

- [document](../nswindowcontroller/document.md): The document associated with the window controller.

### Creating and Managing Window Controllers

- [makeWindowControllers()](makewindowcontrollers%28%29.md): Creates the window controller objects that the document uses to display its content.
- [removeWindowController(\_:)](removewindowcontroller%28__%29.md): Removes the specified window controller from the receiver’s array of window controllers.
- [windowControllers](windowcontrollers.md): The document’s current window controllers.
- [windowNibName](windownibname.md): The name of the document’s sole nib file.
- [windowControllerDidLoadNib(\_:)](windowcontrollerdidloadnib%28__%29.md): Called after one of the document’s window controllers loads its nib file.
- [windowControllerWillLoadNib(\_:)](windowcontrollerwillloadnib%28__%29.md): Called before one of the document’s window controllers loads its nib file.
- [shouldCloseWindowController(\_:delegate:shouldClose:contextInfo:)](shouldclosewindowcontroller%28__delegate_shouldclose_contextinfo_%29.md): Determines whether the system should close the document and its associated window.

# addWindowController: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the specified window controller to the current document.

## Declaration

```objectivec
- (void) addWindowController:(NSWindowController *) windowController;
```

## Parameters

- `windowController`: The window controller that is added.

<a id="Discussion"></a>

## Discussion

An [NSDocument](../nsdocument.md) object uses its list of window controllers when it displays all document windows, sets window edited status upon an undo or redo operation, and modifies window titles. If you create window controllers by overriding [windowNibName](windownibname.md), this method is invoked automatically. If you create window controllers in [makeWindowControllers](makewindowcontrollers%28%29.md) or in any other context, such as in apps that present multiple windows per document, you should invoke this method for each window controller created.

You cannot attach a window controller to more than one document at a time. The default implementation of this method removes the passed-in window controller from the document to which it is attached, if it is already attached to one, then sends it a [document](../nswindowcontroller/document.md) message with `self` as the argument. It also ignores redundant invocations.

You would not typically override this method.

## See Also

### Related Documentation

- [document](../nswindowcontroller/document.md): The document associated with the window controller.

### Creating and Managing Window Controllers

- [makeWindowControllers](makewindowcontrollers%28%29.md): Creates the window controller objects that the document uses to display its content.
- [removeWindowController:](removewindowcontroller%28__%29.md): Removes the specified window controller from the receiver’s array of window controllers.
- [windowControllers](windowcontrollers.md): The document’s current window controllers.
- [windowNibName](windownibname.md): The name of the document’s sole nib file.
- [windowControllerDidLoadNib:](windowcontrollerdidloadnib%28__%29.md): Called after one of the document’s window controllers loads its nib file.
- [windowControllerWillLoadNib:](windowcontrollerwillloadnib%28__%29.md): Called before one of the document’s window controllers loads its nib file.
- [shouldCloseWindowController:delegate:shouldCloseSelector:contextInfo:](shouldclosewindowcontroller%28__delegate_shouldclose_contextinfo_%29.md): Determines whether the system should close the document and its associated window.
