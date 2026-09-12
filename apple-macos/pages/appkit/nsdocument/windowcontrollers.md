> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/windowcontrollers](https://developer.apple.com/documentation/appkit/nsdocument/windowcontrollers)

# windowControllers (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The document’s current window controllers.

## Declaration

```swift
var windowControllers: [NSWindowController] { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of [NSWindowController](../nswindowcontroller.md) objects belonging to the current document. If there are no window controllers, the value is an empty array object.

## See Also

### Creating and Managing Window Controllers

- [makeWindowControllers()](makewindowcontrollers%28%29.md): Creates the window controller objects that the document uses to display its content.
- [addWindowController(\_:)](addwindowcontroller%28__%29.md): Adds the specified window controller to the current document.
- [removeWindowController(\_:)](removewindowcontroller%28__%29.md): Removes the specified window controller from the receiver’s array of window controllers.
- [windowNibName](windownibname.md): The name of the document’s sole nib file.
- [windowControllerDidLoadNib(\_:)](windowcontrollerdidloadnib%28__%29.md): Called after one of the document’s window controllers loads its nib file.
- [windowControllerWillLoadNib(\_:)](windowcontrollerwillloadnib%28__%29.md): Called before one of the document’s window controllers loads its nib file.
- [shouldCloseWindowController(\_:delegate:shouldClose:contextInfo:)](shouldclosewindowcontroller%28__delegate_shouldclose_contextinfo_%29.md): Determines whether the system should close the document and its associated window.

# windowControllers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The document’s current window controllers.

## Declaration

```objectivec
@property (copy, readonly) NSArray<__kindof NSWindowController *> * windowControllers;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of [NSWindowController](../nswindowcontroller.md) objects belonging to the current document. If there are no window controllers, the value is an empty array object.

## See Also

### Creating and Managing Window Controllers

- [makeWindowControllers](makewindowcontrollers%28%29.md): Creates the window controller objects that the document uses to display its content.
- [addWindowController:](addwindowcontroller%28__%29.md): Adds the specified window controller to the current document.
- [removeWindowController:](removewindowcontroller%28__%29.md): Removes the specified window controller from the receiver’s array of window controllers.
- [windowNibName](windownibname.md): The name of the document’s sole nib file.
- [windowControllerDidLoadNib:](windowcontrollerdidloadnib%28__%29.md): Called after one of the document’s window controllers loads its nib file.
- [windowControllerWillLoadNib:](windowcontrollerwillloadnib%28__%29.md): Called before one of the document’s window controllers loads its nib file.
- [shouldCloseWindowController:delegate:shouldCloseSelector:contextInfo:](shouldclosewindowcontroller%28__delegate_shouldclose_contextinfo_%29.md): Determines whether the system should close the document and its associated window.
