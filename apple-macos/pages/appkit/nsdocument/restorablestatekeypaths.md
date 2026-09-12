> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/restorablestatekeypaths](https://developer.apple.com/documentation/appkit/nsdocument/restorablestatekeypaths)

# restorableStateKeyPaths (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Returns an array of key paths that represent the restorable attributes of the document.

## Declaration

```swift
class var restorableStateKeyPaths: [String] { get }
```

<a id="return-value"></a>

## Return Value

An array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains a key path to one of the document’s attributes.

<a id="Discussion"></a>

## Discussion

You can use this method instead of, or in addition to, the [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md) and [restoreState(with:)](restorestate%28with_%29.md) methods to save and restore the state of your document. The key paths must refer to attributes that are [Key-value coding](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KeyValueCoding.html#//apple_ref/doc/uid/TP40008195-CH25) and [Key-value observing](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KVO.html#//apple_ref/doc/uid/TP40008195-CH16) compliant.

When changes are detected, the specified attributes are automatically written to disk with the rest of the app’s interface-related state. At launch time, the attributes are automatically restored to their previous values.

## See Also

### Handling Window Restoration

- [allowedClasses(forRestorableStateKeyPath:)](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md): Saves the interface-related state of the document.
- [restoreState(with:)](restorestate%28with_%29.md): Restores the interface-related state of the document.
- [invalidateRestorableState()](invalidaterestorablestate%28%29.md): Marks the document’s interface-related state as dirty.
- [restoreWindow(withIdentifier:state:completionHandler:)](restorewindow%28withidentifier_state_completionhandler_%29.md): Restores a window that was associated with a document, after that document is reopened.

# restorableStateKeyPaths (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Returns an array of key paths that represent the restorable attributes of the document.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * restorableStateKeyPaths;
```

<a id="return-value"></a>

## Return Value

An array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains a key path to one of the document’s attributes.

<a id="Discussion"></a>

## Discussion

You can use this method instead of, or in addition to, the [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md) and [restoreStateWithCoder:](restorestate%28with_%29.md) methods to save and restore the state of your document. The key paths must refer to attributes that are [Key-value coding](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KeyValueCoding.html#//apple_ref/doc/uid/TP40008195-CH25) and [Key-value observing](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KVO.html#//apple_ref/doc/uid/TP40008195-CH16) compliant.

When changes are detected, the specified attributes are automatically written to disk with the rest of the app’s interface-related state. At launch time, the attributes are automatically restored to their previous values.

## See Also

### Handling Window Restoration

- [allowedClassesForRestorableStateKeyPath:](allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md): Saves the interface-related state of the document.
- [restoreStateWithCoder:](restorestate%28with_%29.md): Restores the interface-related state of the document.
- [invalidateRestorableState](invalidaterestorablestate%28%29.md): Marks the document’s interface-related state as dirty.
- [restoreDocumentWindowWithIdentifier:state:completionHandler:](restorewindow%28withidentifier_state_completionhandler_%29.md): Restores a window that was associated with a document, after that document is reopened.
