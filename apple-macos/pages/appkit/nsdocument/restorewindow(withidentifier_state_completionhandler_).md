> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/restorewindow(withidentifier:state:completionhandler:)](https://developer.apple.com/documentation/appkit/nsdocument/restorewindow(withidentifier:state:completionhandler:))

# restoreWindow(withIdentifier:state:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Restores a window that was associated with a document, after that document is reopened.

## Declaration

```swift
func restoreWindow(withIdentifier identifier: NSUserInterfaceItemIdentifier, state: NSCoder, completionHandler: @escaping @Sendable (NSWindow?, (any Error)?) -> Void)
```

```swift
func restoreWindow(withIdentifier identifier: NSUserInterfaceItemIdentifier, state: NSCoder) async throws -> NSWindow
```

## Parameters

- `identifier`: The unique interface item identifier string that was previously associated with the window. Use this string to determine which window to create.
- `state`: A coder object containing the window state information. This coder object contains the combined restorable state of the window, which can include the state of the window, its delegate, window controller, and document object. You can use this state to determine which window to create.
- `completionHandler`: A block object to execute with the results of creating the window. You must execute this block at some point but may do so after the method returns if needed. This block takes the following parameters:

  - The window that was created or `nil` if the window could not be created.
  - An error object if the window was not recognized or could not be created for whatever reason; otherwise, specify `nil`.

<a id="Discussion"></a>

## Discussion

This method is called by the default `NSDocumentController` implementation of [restoreWindow(withIdentifier:state:completionHandler:)](../nswindowrestoration/restorewindow%28withidentifier_state_completionhandler_%29.md).

The default implementation of this method first checks if the document has window controllers, and if not, it calls [makeWindowControllers()](makewindowcontrollers%28%29.md). If there is then exactly one window controller, it invokes the completion handler with its window. If there is more than one, it searches the receiver’s window controllers for a window that matches the given identifier, and then calls the completion handler with it. If no window could be found, it invokes the completion handler with a `nil` window.

If your document has variable or optional windows, you may override this to create the requested window, and then call the completion handler with it. This allows you to use the default document reopening behavior, but intervene at the point of creating the windows. The parameters are the same as in the class method [restoreWindow(withIdentifier:state:completionHandler:)](../nswindowrestoration/restorewindow%28withidentifier_state_completionhandler_%29.md).

## See Also

### Related Documentation

- [restoreWindow(withIdentifier:state:completionHandler:)](../nswindowrestoration/restorewindow%28withidentifier_state_completionhandler_%29.md): Asks the class to provide a new window for the specified identifier.

### Handling Window Restoration

- [allowedClasses(forRestorableStateKeyPath:)](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md): Saves the interface-related state of the document.
- [restoreState(with:)](restorestate%28with_%29.md): Restores the interface-related state of the document.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths that represent the restorable attributes of the document.
- [invalidateRestorableState()](invalidaterestorablestate%28%29.md): Marks the document’s interface-related state as dirty.

# restoreDocumentWindowWithIdentifier:state:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Restores a window that was associated with a document, after that document is reopened.

## Declaration

```objectivec
- (void) restoreDocumentWindowWithIdentifier:(NSUserInterfaceItemIdentifier) identifier state:(NSCoder *) state completionHandler:(void (^)(NSWindow *, NSError *)) completionHandler;
```

## Parameters

- `identifier`: The unique interface item identifier string that was previously associated with the window. Use this string to determine which window to create.
- `state`: A coder object containing the window state information. This coder object contains the combined restorable state of the window, which can include the state of the window, its delegate, window controller, and document object. You can use this state to determine which window to create.
- `completionHandler`: A block object to execute with the results of creating the window. You must execute this block at some point but may do so after the method returns if needed. This block takes the following parameters:

  - The window that was created or `nil` if the window could not be created.
  - An error object if the window was not recognized or could not be created for whatever reason; otherwise, specify `nil`.

<a id="Discussion"></a>

## Discussion

This method is called by the default `NSDocumentController` implementation of [restoreWindowWithIdentifier:state:completionHandler:](../nswindowrestoration/restorewindow%28withidentifier_state_completionhandler_%29.md).

The default implementation of this method first checks if the document has window controllers, and if not, it calls [makeWindowControllers](makewindowcontrollers%28%29.md). If there is then exactly one window controller, it invokes the completion handler with its window. If there is more than one, it searches the receiver’s window controllers for a window that matches the given identifier, and then calls the completion handler with it. If no window could be found, it invokes the completion handler with a `nil` window.

If your document has variable or optional windows, you may override this to create the requested window, and then call the completion handler with it. This allows you to use the default document reopening behavior, but intervene at the point of creating the windows. The parameters are the same as in the class method [restoreWindowWithIdentifier:state:completionHandler:](../nswindowrestoration/restorewindow%28withidentifier_state_completionhandler_%29.md).

## See Also

### Related Documentation

- [restoreWindowWithIdentifier:state:completionHandler:](../nswindowrestoration/restorewindow%28withidentifier_state_completionhandler_%29.md): Asks the class to provide a new window for the specified identifier.

### Handling Window Restoration

- [allowedClassesForRestorableStateKeyPath:](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md): Saves the interface-related state of the document.
- [restoreStateWithCoder:](restorestate%28with_%29.md): Restores the interface-related state of the document.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths that represent the restorable attributes of the document.
- [invalidateRestorableState](invalidaterestorablestate%28%29.md): Marks the document’s interface-related state as dirty.
