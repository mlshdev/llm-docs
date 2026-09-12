> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/restorestate(with:)](https://developer.apple.com/documentation/appkit/nsresponder/restorestate(with:))

# restoreState(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Restores the interface-related state of the responder.

## Declaration

```swift
func restoreState(with coder: NSCoder)
```

## Parameters

- `coder`: The coder object to use to restore the responder’s interface-related state.

<a id="Discussion"></a>

## Discussion

This method is part of the window restoration system and is called at launch time to restore the visual state of your responder object. The default implementation does nothing but specific subclasses (such as [NSView](../nsview.md) and [NSWindow](../nswindow.md)) override it and save important state information. Therefore, if you override this method, you should always call `super` at some point in your implementation.

Subclasses can override this method and use it to restore any information that was saved in the [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md) method. You can also use this method to reconfigure the responder to its previous appearance.

> **Note**

>  If the user’s computer is configured to close all windows when an app quits, the system automatically removes any preserved state as part of that process. As a result, the system doesn’t call `restoreState(with:)` the next time your app launches.

For information about using a coder object to read data from an archive, see [Encoding and Decoding Custom Types](https://developer.apple.com/documentation/foundation/encoding-and-decoding-custom-types).

## See Also

### Handling Window Restoration

- [allowedClasses(forRestorableStateKeyPath:)](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md): Saves the interface-related state of the responder.
- [encodeRestorableState(with:backgroundQueue:)](encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the responder to a keyed archiver either synchronously or asynchronously on the given operation queue.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths representing the restorable attributes of the responder.
- [invalidateRestorableState()](invalidaterestorablestate%28%29.md): Marks the responder’s interface-related state as dirty.

# restoreStateWithCoder: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Restores the interface-related state of the responder.

## Declaration

```objectivec
- (void) restoreStateWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The coder object to use to restore the responder’s interface-related state.

<a id="Discussion"></a>

## Discussion

This method is part of the window restoration system and is called at launch time to restore the visual state of your responder object. The default implementation does nothing but specific subclasses (such as [NSView](../nsview.md) and [NSWindow](../nswindow.md)) override it and save important state information. Therefore, if you override this method, you should always call `super` at some point in your implementation.

Subclasses can override this method and use it to restore any information that was saved in the [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md) method. You can also use this method to reconfigure the responder to its previous appearance.

> **Note**

>  If the user’s computer is configured to close all windows when an app quits, the system automatically removes any preserved state as part of that process. As a result, the system doesn’t call `restoreState(with:)` the next time your app launches.

For information about using a coder object to read data from an archive, see [Encoding and Decoding Custom Types](https://developer.apple.com/documentation/foundation/encoding-and-decoding-custom-types).

## See Also

### Handling Window Restoration

- [allowedClassesForRestorableStateKeyPath:](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md): Saves the interface-related state of the responder.
- [encodeRestorableStateWithCoder:backgroundQueue:](encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the responder to a keyed archiver either synchronously or asynchronously on the given operation queue.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths representing the restorable attributes of the responder.
- [invalidateRestorableState](invalidaterestorablestate%28%29.md): Marks the responder’s interface-related state as dirty.
