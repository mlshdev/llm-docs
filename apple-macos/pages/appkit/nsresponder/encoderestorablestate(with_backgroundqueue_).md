> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/encoderestorablestate(with:backgroundqueue:)](https://developer.apple.com/documentation/appkit/nsresponder/encoderestorablestate(with:backgroundqueue:))

# encodeRestorableState(with:backgroundQueue:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Saves the interface-related state of the responder to a keyed archiver either synchronously or asynchronously on the given operation queue.

## Declaration

```swift
func encodeRestorableState(with coder: NSCoder, backgroundQueue queue: OperationQueue)
```

## Parameters

- `coder`: A thread-safe keyed archiver to write restorable state into.
- `queue`: A serial background operation queue to perform asynchronous encoding work on.

<a id="Discussion"></a>

## Discussion

Don’t call this method directly. The system calls this method on the main thread. The receiver may synchronously encode state to `coder` or may enqueue asynchronous work to encode additional restorable state using the provided serial background [OperationQueue](https://developer.apple.com/documentation/foundation/operationqueue), if it can safely access and encode that information. The encoding process finishes when the enqueued operations complete.

If you override this method, call the super implementation.

## See Also

### Handling Window Restoration

- [allowedClasses(forRestorableStateKeyPath:)](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md): Saves the interface-related state of the responder.
- [restoreState(with:)](restorestate%28with_%29.md): Restores the interface-related state of the responder.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths representing the restorable attributes of the responder.
- [invalidateRestorableState()](invalidaterestorablestate%28%29.md): Marks the responder’s interface-related state as dirty.

# encodeRestorableStateWithCoder:backgroundQueue: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Saves the interface-related state of the responder to a keyed archiver either synchronously or asynchronously on the given operation queue.

## Declaration

```objectivec
- (void) encodeRestorableStateWithCoder:(NSCoder *) coder backgroundQueue:(NSOperationQueue *) queue;
```

## Parameters

- `coder`: A thread-safe keyed archiver to write restorable state into.
- `queue`: A serial background operation queue to perform asynchronous encoding work on.

<a id="Discussion"></a>

## Discussion

Don’t call this method directly. The system calls this method on the main thread. The receiver may synchronously encode state to `coder` or may enqueue asynchronous work to encode additional restorable state using the provided serial background [NSOperationQueue](https://developer.apple.com/documentation/foundation/operationqueue), if it can safely access and encode that information. The encoding process finishes when the enqueued operations complete.

If you override this method, call the super implementation.

## See Also

### Handling Window Restoration

- [allowedClassesForRestorableStateKeyPath:](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md): Saves the interface-related state of the responder.
- [restoreStateWithCoder:](restorestate%28with_%29.md): Restores the interface-related state of the responder.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths representing the restorable attributes of the responder.
- [invalidateRestorableState](invalidaterestorablestate%28%29.md): Marks the responder’s interface-related state as dirty.
