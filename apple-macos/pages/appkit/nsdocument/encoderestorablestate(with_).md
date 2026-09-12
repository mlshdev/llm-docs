> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/encoderestorablestate(with:)](https://developer.apple.com/documentation/appkit/nsdocument/encoderestorablestate(with:))

# encodeRestorableState(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Saves the interface-related state of the document.

## Declaration

```swift
func encodeRestorableState(with coder: NSCoder)
```

## Parameters

- `coder`: The coder object in which to save the document’s interface-related state.

<a id="Discussion"></a>

## Discussion

This method is part of the window restoration system and is called at appropriate times to save your document’s window-related state information to the specified archive. The default implementation of this method records some basic information about the document. If you override this method, you must call `super` at some point in your implementation.

Subclasses can override this method and use it to restore any information that would be needed to restore the document’s window to its current state. For example, you could use this method to record references to the data currently managed by the document and displayed by the window. (Do not store the actual data itself. Store only references to the data so that you can load it later from disk.) You must store enough data to reconfigure the document and its window to their current state during a subsequent launch of the app.

For information about using a coder object to write data to an archive, see [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i).

## See Also

### Handling Window Restoration

- [allowedClasses(forRestorableStateKeyPath:)](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [restoreState(with:)](restorestate%28with_%29.md): Restores the interface-related state of the document.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths that represent the restorable attributes of the document.
- [invalidateRestorableState()](invalidaterestorablestate%28%29.md): Marks the document’s interface-related state as dirty.
- [restoreWindow(withIdentifier:state:completionHandler:)](restorewindow%28withidentifier_state_completionhandler_%29.md): Restores a window that was associated with a document, after that document is reopened.

# encodeRestorableStateWithCoder: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Saves the interface-related state of the document.

## Declaration

```objectivec
- (void) encodeRestorableStateWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The coder object in which to save the document’s interface-related state.

<a id="Discussion"></a>

## Discussion

This method is part of the window restoration system and is called at appropriate times to save your document’s window-related state information to the specified archive. The default implementation of this method records some basic information about the document. If you override this method, you must call `super` at some point in your implementation.

Subclasses can override this method and use it to restore any information that would be needed to restore the document’s window to its current state. For example, you could use this method to record references to the data currently managed by the document and displayed by the window. (Do not store the actual data itself. Store only references to the data so that you can load it later from disk.) You must store enough data to reconfigure the document and its window to their current state during a subsequent launch of the app.

For information about using a coder object to write data to an archive, see [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i).

## See Also

### Handling Window Restoration

- [allowedClassesForRestorableStateKeyPath:](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [restoreStateWithCoder:](restorestate%28with_%29.md): Restores the interface-related state of the document.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths that represent the restorable attributes of the document.
- [invalidateRestorableState](invalidaterestorablestate%28%29.md): Marks the document’s interface-related state as dirty.
- [restoreDocumentWindowWithIdentifier:state:completionHandler:](restorewindow%28withidentifier_state_completionhandler_%29.md): Restores a window that was associated with a document, after that document is reopened.
