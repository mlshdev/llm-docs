> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/invalidaterestorablestate()](https://developer.apple.com/documentation/appkit/nsdocument/invalidaterestorablestate())

# invalidateRestorableState() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Marks the document’s interface-related state as dirty.

## Declaration

```swift
func invalidateRestorableState()
```

<a id="Discussion"></a>

## Discussion

Call this method whenever the restorable state of your document changes. This method marks the document’s state as dirty, which causes that state to be written to disk at some point in the future. Do not override this method.

## See Also

### Handling Window Restoration

- [allowedClasses(forRestorableStateKeyPath:)](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md): Saves the interface-related state of the document.
- [restoreState(with:)](restorestate%28with_%29.md): Restores the interface-related state of the document.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths that represent the restorable attributes of the document.
- [restoreWindow(withIdentifier:state:completionHandler:)](restorewindow%28withidentifier_state_completionhandler_%29.md): Restores a window that was associated with a document, after that document is reopened.

# invalidateRestorableState (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Marks the document’s interface-related state as dirty.

## Declaration

```objectivec
- (void) invalidateRestorableState;
```

<a id="Discussion"></a>

## Discussion

Call this method whenever the restorable state of your document changes. This method marks the document’s state as dirty, which causes that state to be written to disk at some point in the future. Do not override this method.

## See Also

### Handling Window Restoration

- [allowedClassesForRestorableStateKeyPath:](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md): Saves the interface-related state of the document.
- [restoreStateWithCoder:](restorestate%28with_%29.md): Restores the interface-related state of the document.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths that represent the restorable attributes of the document.
- [restoreDocumentWindowWithIdentifier:state:completionHandler:](restorewindow%28withidentifier_state_completionhandler_%29.md): Restores a window that was associated with a document, after that document is reopened.
