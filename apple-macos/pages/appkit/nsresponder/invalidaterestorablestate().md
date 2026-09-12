> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/invalidaterestorablestate()](https://developer.apple.com/documentation/appkit/nsresponder/invalidaterestorablestate())

# invalidateRestorableState() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Marks the responder’s interface-related state as dirty.

## Declaration

```swift
func invalidateRestorableState()
```

<a id="Discussion"></a>

## Discussion

Call this method whenever the restorable state of your responder changes. This method marks the responder’s state as dirty, which writes the state to disk at some point in the future. Don’t override this method.

## See Also

### Handling Window Restoration

- [allowedClasses(forRestorableStateKeyPath:)](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md): Saves the interface-related state of the responder.
- [encodeRestorableState(with:backgroundQueue:)](encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the responder to a keyed archiver either synchronously or asynchronously on the given operation queue.
- [restoreState(with:)](restorestate%28with_%29.md): Restores the interface-related state of the responder.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths representing the restorable attributes of the responder.

# invalidateRestorableState (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Marks the responder’s interface-related state as dirty.

## Declaration

```objectivec
- (void) invalidateRestorableState;
```

<a id="Discussion"></a>

## Discussion

Call this method whenever the restorable state of your responder changes. This method marks the responder’s state as dirty, which writes the state to disk at some point in the future. Don’t override this method.

## See Also

### Handling Window Restoration

- [allowedClassesForRestorableStateKeyPath:](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md): Saves the interface-related state of the responder.
- [encodeRestorableStateWithCoder:backgroundQueue:](encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the responder to a keyed archiver either synchronously or asynchronously on the given operation queue.
- [restoreStateWithCoder:](restorestate%28with_%29.md): Restores the interface-related state of the responder.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths representing the restorable attributes of the responder.
