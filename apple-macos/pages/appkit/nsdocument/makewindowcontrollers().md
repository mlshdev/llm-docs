> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/makewindowcontrollers()](https://developer.apple.com/documentation/appkit/nsdocument/makewindowcontrollers())

# makeWindowControllers() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates the window controller objects that the document uses to display its content.

## Declaration

```swift
func makeWindowControllers()
```

<a id="Discussion"></a>

## Discussion

Subclasses may override this method to create the initial window controller(s) for the document.

The base class implementation creates an `NSWindowController` object with [windowNibName](windownibname.md) and with the document as the file’s owner if [windowNibName](windownibname.md) returns a name. If you override this method to create your own window controllers, be sure to use [addWindowController(\_:)](addwindowcontroller%28__%29.md) to add them to the document after creating them.

This method is called by the `NSDocumentController` `open...` methods, but you might want to call it directly in some circumstances.

## See Also

### Creating and Managing Window Controllers

- [addWindowController(\_:)](addwindowcontroller%28__%29.md): Adds the specified window controller to the current document.
- [removeWindowController(\_:)](removewindowcontroller%28__%29.md): Removes the specified window controller from the receiver’s array of window controllers.
- [windowControllers](windowcontrollers.md): The document’s current window controllers.
- [windowNibName](windownibname.md): The name of the document’s sole nib file.
- [windowControllerDidLoadNib(\_:)](windowcontrollerdidloadnib%28__%29.md): Called after one of the document’s window controllers loads its nib file.
- [windowControllerWillLoadNib(\_:)](windowcontrollerwillloadnib%28__%29.md): Called before one of the document’s window controllers loads its nib file.
- [shouldCloseWindowController(\_:delegate:shouldClose:contextInfo:)](shouldclosewindowcontroller%28__delegate_shouldclose_contextinfo_%29.md): Determines whether the system should close the document and its associated window.

# makeWindowControllers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates the window controller objects that the document uses to display its content.

## Declaration

```objectivec
- (void) makeWindowControllers;
```

<a id="Discussion"></a>

## Discussion

Subclasses may override this method to create the initial window controller(s) for the document.

The base class implementation creates an `NSWindowController` object with [windowNibName](windownibname.md) and with the document as the file’s owner if [windowNibName](windownibname.md) returns a name. If you override this method to create your own window controllers, be sure to use [addWindowController:](addwindowcontroller%28__%29.md) to add them to the document after creating them.

This method is called by the `NSDocumentController` `open...` methods, but you might want to call it directly in some circumstances.

## See Also

### Creating and Managing Window Controllers

- [addWindowController:](addwindowcontroller%28__%29.md): Adds the specified window controller to the current document.
- [removeWindowController:](removewindowcontroller%28__%29.md): Removes the specified window controller from the receiver’s array of window controllers.
- [windowControllers](windowcontrollers.md): The document’s current window controllers.
- [windowNibName](windownibname.md): The name of the document’s sole nib file.
- [windowControllerDidLoadNib:](windowcontrollerdidloadnib%28__%29.md): Called after one of the document’s window controllers loads its nib file.
- [windowControllerWillLoadNib:](windowcontrollerwillloadnib%28__%29.md): Called before one of the document’s window controllers loads its nib file.
- [shouldCloseWindowController:delegate:shouldCloseSelector:contextInfo:](shouldclosewindowcontroller%28__delegate_shouldclose_contextinfo_%29.md): Determines whether the system should close the document and its associated window.
