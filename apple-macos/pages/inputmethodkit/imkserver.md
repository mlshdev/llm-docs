> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkserver](https://developer.apple.com/documentation/inputmethodkit/imkserver)

# IMKServer (Swift)

**Framework:** InputMethodKit  
**Kind:** Class  
**Availability:** macOS 10.5+

The `IMKServer` class manages client connections to your input method.  When you write the main function for your input method, you create an `IMKServer` object.  You should never need to override this class.

## Declaration

```swift
class IMKServer
```

## Topics

### Initializing a Server Object

- [init(name:bundleIdentifier:)](imkserver/init%28name_bundleidentifier_%29.md): Creates and returns a server object from property list information contained in the provided bundle.
- [init(name:controllerClass:delegateClass:)](imkserver/init%28name_controllerclass_delegateclass_%29.md): Creates and returns a server object initialized with the provided parameters.

### Getting a Bundle for the Input Method

- [bundle()](imkserver/bundle%28%29.md): Returns an `NSBundle` object for the input method.

### Instance Methods

- [lastKeyEventWasDeadKey()](imkserver/lastkeyeventwasdeadkey%28%29.md)
- [paletteWillTerminate()](imkserver/palettewillterminate%28%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Classes

- [IMKCandidates](imkcandidates.md): The `IMKCandidates` class presents candidates to users and notifies the appropriate [IMKInputController](imkinputcontroller.md) object when the user selects a candidate. **Candidates** are alternate characters for a given input sequence. The `IMKCandidates` class supports using a candidates window in your input method; using `IMKCandidates` is optional. Not all input methods require them.
- [IMKInputController](imkinputcontroller.md): The `IMKInputController` class provides a base class for custom input controller classes. The [IMKServer](imkserver.md) class, which is allocated in the main function of an input method, creates an input controller object for each input session created by a client application. For every input session there is a corresponding `IMKInputController` object.

# IMKServer (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Class  
**Availability:** macOS 10.5+

The `IMKServer` class manages client connections to your input method.  When you write the main function for your input method, you create an `IMKServer` object.  You should never need to override this class.

## Declaration

```objectivec
@interface IMKServer : NSObject
```

## Topics

### Initializing a Server Object

- [initWithName:bundleIdentifier:](imkserver/init%28name_bundleidentifier_%29.md): Creates and returns a server object from property list information contained in the provided bundle.
- [initWithName:controllerClass:delegateClass:](imkserver/init%28name_controllerclass_delegateclass_%29.md): Creates and returns a server object initialized with the provided parameters.

### Getting a Bundle for the Input Method

- [bundle](imkserver/bundle%28%29.md): Returns an `NSBundle` object for the input method.

### Instance Methods

- [lastKeyEventWasDeadKey](imkserver/lastkeyeventwasdeadkey%28%29.md)
- [paletteWillTerminate](imkserver/palettewillterminate%28%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- IMKServerProxy

## See Also

### Classes

- [IMKCandidates](imkcandidates.md): The `IMKCandidates` class presents candidates to users and notifies the appropriate [IMKInputController](imkinputcontroller.md) object when the user selects a candidate. **Candidates** are alternate characters for a given input sequence. The `IMKCandidates` class supports using a candidates window in your input method; using `IMKCandidates` is optional. Not all input methods require them.
- [IMKInputController](imkinputcontroller.md): The `IMKInputController` class provides a base class for custom input controller classes. The [IMKServer](imkserver.md) class, which is allocated in the main function of an input method, creates an input controller object for each input session created by a client application. For every input session there is a corresponding `IMKInputController` object.
