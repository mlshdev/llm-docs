> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/windowcontrollerwillloadnib(_:)](https://developer.apple.com/documentation/appkit/nsdocument/windowcontrollerwillloadnib(_:))

# windowControllerWillLoadNib(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Called before one of the document’s window controllers loads its nib file.

## Declaration

```swift
func windowControllerWillLoadNib(_ windowController: NSWindowController)
```

## Parameters

- `windowController`: The window controller that loads the nib file.

<a id="Discussion"></a>

## Discussion

See the class description for [NSWindowController](../nswindowcontroller.md) for additional information about nib files and the file’s owner object.

Typically an `NSDocument` subclass overrides [windowNibName](windownibname.md) or [makeWindowControllers()](makewindowcontrollers%28%29.md), but not both. If [windowNibName](windownibname.md) is overridden, the default implementation of [makeWindowControllers()](makewindowcontrollers%28%29.md) will load the named nib file, making the NSDocument the nib file’s owner. In that case, you can override [windowControllerWillLoadNib(\_:)](windowcontrollerwillloadnib%28__%29.md) and do custom processing before the nib file is loaded.

The default implementation of this method does nothing.

## See Also

### Creating and Managing Window Controllers

- [makeWindowControllers()](makewindowcontrollers%28%29.md): Creates the window controller objects that the document uses to display its content.
- [addWindowController(\_:)](addwindowcontroller%28__%29.md): Adds the specified window controller to the current document.
- [removeWindowController(\_:)](removewindowcontroller%28__%29.md): Removes the specified window controller from the receiver’s array of window controllers.
- [windowControllers](windowcontrollers.md): The document’s current window controllers.
- [windowNibName](windownibname.md): The name of the document’s sole nib file.
- [windowControllerDidLoadNib(\_:)](windowcontrollerdidloadnib%28__%29.md): Called after one of the document’s window controllers loads its nib file.
- [shouldCloseWindowController(\_:delegate:shouldClose:contextInfo:)](shouldclosewindowcontroller%28__delegate_shouldclose_contextinfo_%29.md): Determines whether the system should close the document and its associated window.

# windowControllerWillLoadNib: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Called before one of the document’s window controllers loads its nib file.

## Declaration

```objectivec
- (void) windowControllerWillLoadNib:(NSWindowController *) windowController;
```

## Parameters

- `windowController`: The window controller that loads the nib file.

<a id="Discussion"></a>

## Discussion

See the class description for [NSWindowController](../nswindowcontroller.md) for additional information about nib files and the file’s owner object.

Typically an `NSDocument` subclass overrides [windowNibName](windownibname.md) or [makeWindowControllers](makewindowcontrollers%28%29.md), but not both. If [windowNibName](windownibname.md) is overridden, the default implementation of [makeWindowControllers](makewindowcontrollers%28%29.md) will load the named nib file, making the NSDocument the nib file’s owner. In that case, you can override [windowControllerWillLoadNib:](windowcontrollerwillloadnib%28__%29.md) and do custom processing before the nib file is loaded.

The default implementation of this method does nothing.

## See Also

### Creating and Managing Window Controllers

- [makeWindowControllers](makewindowcontrollers%28%29.md): Creates the window controller objects that the document uses to display its content.
- [addWindowController:](addwindowcontroller%28__%29.md): Adds the specified window controller to the current document.
- [removeWindowController:](removewindowcontroller%28__%29.md): Removes the specified window controller from the receiver’s array of window controllers.
- [windowControllers](windowcontrollers.md): The document’s current window controllers.
- [windowNibName](windownibname.md): The name of the document’s sole nib file.
- [windowControllerDidLoadNib:](windowcontrollerdidloadnib%28__%29.md): Called after one of the document’s window controllers loads its nib file.
- [shouldCloseWindowController:delegate:shouldCloseSelector:contextInfo:](shouldclosewindowcontroller%28__delegate_shouldclose_contextinfo_%29.md): Determines whether the system should close the document and its associated window.
