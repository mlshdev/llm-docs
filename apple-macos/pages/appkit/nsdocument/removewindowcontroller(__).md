> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/removewindowcontroller(_:)](https://developer.apple.com/documentation/appkit/nsdocument/removewindowcontroller(_:))

# removeWindowController(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the specified window controller from the receiver’s array of window controllers.

## Declaration

```swift
func removeWindowController(_ windowController: NSWindowController)
```

## Parameters

- `windowController`: The window controller that is removed.

<a id="Discussion"></a>

## Discussion

A document with no window controllers is not necessarily closed. However, a window controller can be set to close its associated document when the window is closed or the window controller is deallocated.

The default implementation of this method sends a [document](../nswindowcontroller/document.md) message to the passed-in window controller with a `nil` argument. You would not typically override this method.

## See Also

### Related Documentation

- [shouldCloseDocument](../nswindowcontroller/shouldclosedocument.md): A Boolean value that indicates whether the receiver necessarily closes the associated document when the window it manages is closed.

### Creating and Managing Window Controllers

- [makeWindowControllers()](makewindowcontrollers%28%29.md): Creates the window controller objects that the document uses to display its content.
- [addWindowController(\_:)](addwindowcontroller%28__%29.md): Adds the specified window controller to the current document.
- [windowControllers](windowcontrollers.md): The document’s current window controllers.
- [windowNibName](windownibname.md): The name of the document’s sole nib file.
- [windowControllerDidLoadNib(\_:)](windowcontrollerdidloadnib%28__%29.md): Called after one of the document’s window controllers loads its nib file.
- [windowControllerWillLoadNib(\_:)](windowcontrollerwillloadnib%28__%29.md): Called before one of the document’s window controllers loads its nib file.
- [shouldCloseWindowController(\_:delegate:shouldClose:contextInfo:)](shouldclosewindowcontroller%28__delegate_shouldclose_contextinfo_%29.md): Determines whether the system should close the document and its associated window.

# removeWindowController: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the specified window controller from the receiver’s array of window controllers.

## Declaration

```objectivec
- (void) removeWindowController:(NSWindowController *) windowController;
```

## Parameters

- `windowController`: The window controller that is removed.

<a id="Discussion"></a>

## Discussion

A document with no window controllers is not necessarily closed. However, a window controller can be set to close its associated document when the window is closed or the window controller is deallocated.

The default implementation of this method sends a [document](../nswindowcontroller/document.md) message to the passed-in window controller with a `nil` argument. You would not typically override this method.

## See Also

### Related Documentation

- [shouldCloseDocument](../nswindowcontroller/shouldclosedocument.md): A Boolean value that indicates whether the receiver necessarily closes the associated document when the window it manages is closed.

### Creating and Managing Window Controllers

- [makeWindowControllers](makewindowcontrollers%28%29.md): Creates the window controller objects that the document uses to display its content.
- [addWindowController:](addwindowcontroller%28__%29.md): Adds the specified window controller to the current document.
- [windowControllers](windowcontrollers.md): The document’s current window controllers.
- [windowNibName](windownibname.md): The name of the document’s sole nib file.
- [windowControllerDidLoadNib:](windowcontrollerdidloadnib%28__%29.md): Called after one of the document’s window controllers loads its nib file.
- [windowControllerWillLoadNib:](windowcontrollerwillloadnib%28__%29.md): Called before one of the document’s window controllers loads its nib file.
- [shouldCloseWindowController:delegate:shouldCloseSelector:contextInfo:](shouldclosewindowcontroller%28__delegate_shouldclose_contextinfo_%29.md): Determines whether the system should close the document and its associated window.
