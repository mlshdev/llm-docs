> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/encoderestorablestate(with:)](https://developer.apple.com/documentation/appkit/nsresponder/encoderestorablestate(with:))

# encodeRestorableState(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Saves the interface-related state of the responder.

## Declaration

```swift
func encodeRestorableState(with coder: NSCoder)
```

## Parameters

- `coder`: The coder object in which to save the responder’s interface-related state.

<a id="Discussion"></a>

## Discussion

This method is part of the window restoration system and is called at appropriate times to save the visual state of your responder to the specified archive. The default implementation of this method does nothing but specific subclasses (such as [NSView](../nsview.md) and [NSWindow](../nswindow.md)) override it to save important state information. Therefore, if you override this method, you should always call `super` at some point in your implementation.

Subclasses can override this method and use it to restore any information that would be needed to restore the responder to its current state. For example, the [NSTabView](../nstabview.md) class uses this method to save information about the currently selected tab. You must store enough data to reconfigure the responder and return it to its current state during a subsequent launch of the application.

For information about using a coder object to write data to an archive, see [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i).

## See Also

### Handling Window Restoration

- [allowedClasses(forRestorableStateKeyPath:)](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableState(with:backgroundQueue:)](encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the responder to a keyed archiver either synchronously or asynchronously on the given operation queue.
- [restoreState(with:)](restorestate%28with_%29.md): Restores the interface-related state of the responder.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths representing the restorable attributes of the responder.
- [invalidateRestorableState()](invalidaterestorablestate%28%29.md): Marks the responder’s interface-related state as dirty.

# encodeRestorableStateWithCoder: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Saves the interface-related state of the responder.

## Declaration

```objectivec
- (void) encodeRestorableStateWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The coder object in which to save the responder’s interface-related state.

<a id="Discussion"></a>

## Discussion

This method is part of the window restoration system and is called at appropriate times to save the visual state of your responder to the specified archive. The default implementation of this method does nothing but specific subclasses (such as [NSView](../nsview.md) and [NSWindow](../nswindow.md)) override it to save important state information. Therefore, if you override this method, you should always call `super` at some point in your implementation.

Subclasses can override this method and use it to restore any information that would be needed to restore the responder to its current state. For example, the [NSTabView](../nstabview.md) class uses this method to save information about the currently selected tab. You must store enough data to reconfigure the responder and return it to its current state during a subsequent launch of the application.

For information about using a coder object to write data to an archive, see [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i).

## See Also

### Handling Window Restoration

- [allowedClassesForRestorableStateKeyPath:](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableStateWithCoder:backgroundQueue:](encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the responder to a keyed archiver either synchronously or asynchronously on the given operation queue.
- [restoreStateWithCoder:](restorestate%28with_%29.md): Restores the interface-related state of the responder.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths representing the restorable attributes of the responder.
- [invalidateRestorableState](invalidaterestorablestate%28%29.md): Marks the responder’s interface-related state as dirty.
