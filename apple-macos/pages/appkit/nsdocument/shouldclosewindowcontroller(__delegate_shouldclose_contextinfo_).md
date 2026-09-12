> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/shouldclosewindowcontroller(_:delegate:shouldclose:contextinfo:)](https://developer.apple.com/documentation/appkit/nsdocument/shouldclosewindowcontroller(_:delegate:shouldclose:contextinfo:))

# shouldCloseWindowController(\_:delegate:shouldClose:contextInfo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Determines whether the system should close the document and its associated window.

## Declaration

```swift
func shouldCloseWindowController(_ windowController: NSWindowController, delegate: Any?, shouldClose shouldCloseSelector: Selector?, contextInfo: UnsafeMutableRawPointer?)
```

## Parameters

- `windowController`: The window controller that is closed.
- `delegate`: The delegate to which the selector message is sent.
- `shouldCloseSelector`: The selector of the message sent to the delegate.
- `contextInfo`: Object passed with the callback to provide any additional context information.

<a id="Discussion"></a>

## Discussion

If the window controller is the document’s last one, or is marked as causing the document to close, this method calls the method in the `shouldCloseSelector` parameter with the result of [canClose(withDelegate:shouldClose:contextInfo:)](canclose%28withdelegate_shouldclose_contextinfo_%29.md). In all other cases, this method calls `shouldCloseSelector` with [true](https://developer.apple.com/documentation/swift/true). This method is called automatically by [NSWindow](../nswindow.md) for any window that has a window controller and a document associated with it. `NSWindow` calls this method prior to sending its `delegate` the [windowShouldClose(\_:)](../nswindowdelegate/windowshouldclose%28__%29.md) message. Pass the `contextInfo` object with the callback.

The `shouldCloseSelector` callback method should have the following signature:

```objc
- (void)document:(NSDocument *)document shouldClose:(BOOL)shouldClose  contextInfo:(void  *)contextInfo
```

## See Also

### Creating and Managing Window Controllers

- [makeWindowControllers()](makewindowcontrollers%28%29.md): Creates the window controller objects that the document uses to display its content.
- [addWindowController(\_:)](addwindowcontroller%28__%29.md): Adds the specified window controller to the current document.
- [removeWindowController(\_:)](removewindowcontroller%28__%29.md): Removes the specified window controller from the receiver’s array of window controllers.
- [windowControllers](windowcontrollers.md): The document’s current window controllers.
- [windowNibName](windownibname.md): The name of the document’s sole nib file.
- [windowControllerDidLoadNib(\_:)](windowcontrollerdidloadnib%28__%29.md): Called after one of the document’s window controllers loads its nib file.
- [windowControllerWillLoadNib(\_:)](windowcontrollerwillloadnib%28__%29.md): Called before one of the document’s window controllers loads its nib file.

# shouldCloseWindowController:delegate:shouldCloseSelector:contextInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Determines whether the system should close the document and its associated window.

## Declaration

```objectivec
- (void) shouldCloseWindowController:(NSWindowController *) windowController delegate:(id) delegate shouldCloseSelector:(SEL) shouldCloseSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `windowController`: The window controller that is closed.
- `delegate`: The delegate to which the selector message is sent.
- `shouldCloseSelector`: The selector of the message sent to the delegate.
- `contextInfo`: Object passed with the callback to provide any additional context information.

<a id="Discussion"></a>

## Discussion

If the window controller is the document’s last one, or is marked as causing the document to close, this method calls the method in the `shouldCloseSelector` parameter with the result of [canCloseDocumentWithDelegate:shouldCloseSelector:contextInfo:](canclose%28withdelegate_shouldclose_contextinfo_%29.md). In all other cases, this method calls `shouldCloseSelector` with [true](https://developer.apple.com/documentation/swift/true). This method is called automatically by [NSWindow](../nswindow.md) for any window that has a window controller and a document associated with it. `NSWindow` calls this method prior to sending its `delegate` the [windowShouldClose:](../nswindowdelegate/windowshouldclose%28__%29.md) message. Pass the `contextInfo` object with the callback.

The `shouldCloseSelector` callback method should have the following signature:

```objc
- (void)document:(NSDocument *)document shouldClose:(BOOL)shouldClose  contextInfo:(void  *)contextInfo
```

## See Also

### Creating and Managing Window Controllers

- [makeWindowControllers](makewindowcontrollers%28%29.md): Creates the window controller objects that the document uses to display its content.
- [addWindowController:](addwindowcontroller%28__%29.md): Adds the specified window controller to the current document.
- [removeWindowController:](removewindowcontroller%28__%29.md): Removes the specified window controller from the receiver’s array of window controllers.
- [windowControllers](windowcontrollers.md): The document’s current window controllers.
- [windowNibName](windownibname.md): The name of the document’s sole nib file.
- [windowControllerDidLoadNib:](windowcontrollerdidloadnib%28__%29.md): Called after one of the document’s window controllers loads its nib file.
- [windowControllerWillLoadNib:](windowcontrollerwillloadnib%28__%29.md): Called before one of the document’s window controllers loads its nib file.
