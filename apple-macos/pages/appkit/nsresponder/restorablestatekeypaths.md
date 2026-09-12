> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/restorablestatekeypaths](https://developer.apple.com/documentation/appkit/nsresponder/restorablestatekeypaths)

# restorableStateKeyPaths (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Returns an array of key paths representing the restorable attributes of the responder.

## Declaration

```swift
class var restorableStateKeyPaths: [String] { get }
```

<a id="return-value"></a>

## Return Value

An array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains a key path to one of the responder’s attributes.

<a id="Discussion"></a>

## Discussion

You can use this method instead of, or in addition to, the [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md) and [restoreState(with:)](restorestate%28with_%29.md) methods to save and restore the state of your responder. The key paths you return must refer to attributes that are key-value coding and key-value observing compliant. To learn more about these mechanisms, see [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i) and [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

When changes are detected, the specified attributes are automatically written to disk with the rest of the application’s interface-related state. At launch time, the attributes are automatically restored to their previous values.

## See Also

### Handling Window Restoration

- [allowedClasses(forRestorableStateKeyPath:)](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md): Saves the interface-related state of the responder.
- [encodeRestorableState(with:backgroundQueue:)](encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the responder to a keyed archiver either synchronously or asynchronously on the given operation queue.
- [restoreState(with:)](restorestate%28with_%29.md): Restores the interface-related state of the responder.
- [invalidateRestorableState()](invalidaterestorablestate%28%29.md): Marks the responder’s interface-related state as dirty.

# restorableStateKeyPaths (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Returns an array of key paths representing the restorable attributes of the responder.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * restorableStateKeyPaths;
```

<a id="return-value"></a>

## Return Value

An array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains a key path to one of the responder’s attributes.

<a id="Discussion"></a>

## Discussion

You can use this method instead of, or in addition to, the [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md) and [restoreStateWithCoder:](restorestate%28with_%29.md) methods to save and restore the state of your responder. The key paths you return must refer to attributes that are key-value coding and key-value observing compliant. To learn more about these mechanisms, see [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i) and [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

When changes are detected, the specified attributes are automatically written to disk with the rest of the application’s interface-related state. At launch time, the attributes are automatically restored to their previous values.

## See Also

### Handling Window Restoration

- [allowedClassesForRestorableStateKeyPath:](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md): Saves the interface-related state of the responder.
- [encodeRestorableStateWithCoder:backgroundQueue:](encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the responder to a keyed archiver either synchronously or asynchronously on the given operation queue.
- [restoreStateWithCoder:](restorestate%28with_%29.md): Restores the interface-related state of the responder.
- [invalidateRestorableState](invalidaterestorablestate%28%29.md): Marks the responder’s interface-related state as dirty.
