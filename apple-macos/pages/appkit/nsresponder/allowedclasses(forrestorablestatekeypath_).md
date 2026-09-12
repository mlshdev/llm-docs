> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/allowedclasses(forrestorablestatekeypath:)](https://developer.apple.com/documentation/appkit/nsresponder/allowedclasses(forrestorablestatekeypath:))

# allowedClasses(forRestorableStateKeyPath:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Returns the classes that support secure coding.

## Declaration

```swift
class func allowedClasses(forRestorableStateKeyPath keyPath: String) -> [AnyClass]
```

## Parameters

- `keyPath`: The key path of the restorable object.

<a id="return-value"></a>

## Return Value

An array of classes that support secure coding.

<a id="Discussion"></a>

## Discussion

The system calls the function during a secure state restoration and restores values only for the allowed classes your app returns in the array.

## See Also

### Handling Window Restoration

- [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md): Saves the interface-related state of the responder.
- [encodeRestorableState(with:backgroundQueue:)](encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the responder to a keyed archiver either synchronously or asynchronously on the given operation queue.
- [restoreState(with:)](restorestate%28with_%29.md): Restores the interface-related state of the responder.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths representing the restorable attributes of the responder.
- [invalidateRestorableState()](invalidaterestorablestate%28%29.md): Marks the responder’s interface-related state as dirty.

# allowedClassesForRestorableStateKeyPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Returns the classes that support secure coding.

## Declaration

```objectivec
+ (NSArray<Class> *) allowedClassesForRestorableStateKeyPath:(NSString *) keyPath;
```

## Parameters

- `keyPath`: The key path of the restorable object.

<a id="return-value"></a>

## Return Value

An array of classes that support secure coding.

<a id="Discussion"></a>

## Discussion

The system calls the function during a secure state restoration and restores values only for the allowed classes your app returns in the array.

## See Also

### Handling Window Restoration

- [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md): Saves the interface-related state of the responder.
- [encodeRestorableStateWithCoder:backgroundQueue:](encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the responder to a keyed archiver either synchronously or asynchronously on the given operation queue.
- [restoreStateWithCoder:](restorestate%28with_%29.md): Restores the interface-related state of the responder.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths representing the restorable attributes of the responder.
- [invalidateRestorableState](invalidaterestorablestate%28%29.md): Marks the responder’s interface-related state as dirty.
