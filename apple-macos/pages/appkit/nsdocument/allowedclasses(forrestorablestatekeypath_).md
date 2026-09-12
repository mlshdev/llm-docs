> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/allowedclasses(forrestorablestatekeypath:)](https://developer.apple.com/documentation/appkit/nsdocument/allowedclasses(forrestorablestatekeypath:))

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

- [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md): Saves the interface-related state of the document.
- [restoreState(with:)](restorestate%28with_%29.md): Restores the interface-related state of the document.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths that represent the restorable attributes of the document.
- [invalidateRestorableState()](invalidaterestorablestate%28%29.md): Marks the document’s interface-related state as dirty.
- [restoreWindow(withIdentifier:state:completionHandler:)](restorewindow%28withidentifier_state_completionhandler_%29.md): Restores a window that was associated with a document, after that document is reopened.

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

- [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md): Saves the interface-related state of the document.
- [restoreStateWithCoder:](restorestate%28with_%29.md): Restores the interface-related state of the document.
- [restorableStateKeyPaths](restorablestatekeypaths.md): Returns an array of key paths that represent the restorable attributes of the document.
- [invalidateRestorableState](invalidaterestorablestate%28%29.md): Marks the document’s interface-related state as dirty.
- [restoreDocumentWindowWithIdentifier:state:completionHandler:](restorewindow%28withidentifier_state_completionhandler_%29.md): Restores a window that was associated with a document, after that document is reopened.
