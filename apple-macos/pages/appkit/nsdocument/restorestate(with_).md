> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/restorestate(with:)](https://developer.apple.com/documentation/appkit/nsdocument/restorestate(with:))

# restoreState(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Restores the interface-related state of the document.

## Declaration

```swift
func restoreState(with coder: NSCoder)
```

## Parameters

- `coder`: The coder object to use to restore the document’s interface-related state.

<a id="Discussion"></a>

## Discussion

This method is part of the window restoration system and is called at launch time to restore the window-related state of your document object. The default implementation restores some basic information about the document. If you override this method, you must call `super` at some point in your implementation.

Subclasses can override this method and use it to restore the document-related information that was saved in the [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md) method. You can also use this method to reconfigure the document (or its associated window controller and window) to their previous appearance.

> **Note**

>  If the user’s computer is configured to close all windows when an app quits, the system automatically removes any preserved state as part of that process. As a result, the system doesn’t call `restoreState(with:)` the next time your app launches.

For information about using a coder object to read data from an archive, see [Encoding and Decoding Custom Types](https://developer.apple.com/documentation/foundation/encoding-and-decoding-custom-types).

## See Also

### Handling Window Restoration

- [allowedClasses(forRestorableStateKeyPath:)](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md): Saves the interface-related state of the document.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths that represent the restorable attributes of the document.
- [invalidateRestorableState()](invalidaterestorablestate%28%29.md): Marks the document’s interface-related state as dirty.
- [restoreWindow(withIdentifier:state:completionHandler:)](restorewindow%28withidentifier_state_completionhandler_%29.md): Restores a window that was associated with a document, after that document is reopened.

# restoreStateWithCoder: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Restores the interface-related state of the document.

## Declaration

```objectivec
- (void) restoreStateWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The coder object to use to restore the document’s interface-related state.

<a id="Discussion"></a>

## Discussion

This method is part of the window restoration system and is called at launch time to restore the window-related state of your document object. The default implementation restores some basic information about the document. If you override this method, you must call `super` at some point in your implementation.

Subclasses can override this method and use it to restore the document-related information that was saved in the [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md) method. You can also use this method to reconfigure the document (or its associated window controller and window) to their previous appearance.

> **Note**

>  If the user’s computer is configured to close all windows when an app quits, the system automatically removes any preserved state as part of that process. As a result, the system doesn’t call `restoreState(with:)` the next time your app launches.

For information about using a coder object to read data from an archive, see [Encoding and Decoding Custom Types](https://developer.apple.com/documentation/foundation/encoding-and-decoding-custom-types).

## See Also

### Handling Window Restoration

- [allowedClassesForRestorableStateKeyPath:](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md): Saves the interface-related state of the document.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths that represent the restorable attributes of the document.
- [invalidateRestorableState](invalidaterestorablestate%28%29.md): Marks the document’s interface-related state as dirty.
- [restoreDocumentWindowWithIdentifier:state:completionHandler:](restorewindow%28withidentifier_state_completionhandler_%29.md): Restores a window that was associated with a document, after that document is reopened.
