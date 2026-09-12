> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bekeyentry](https://developer.apple.com/documentation/browserenginekit/bekeyentry)

# BEKeyEntry (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A class that represents a keyboard event in the text system.

## Declaration

```swift
class BEKeyEntry
```

## Topics

### Identifying the key

- [key](bekeyentry/key.md): The key that the person presses.

### Getting information about the keypress

- [state](bekeyentry/state.md): A value that indicates if the key is pressed.
- [BEKeyEntry.KeyPressState](bekeyentry/keypressstate.md): Key-press states for a keyboard event.
- [isKeyRepeating](bekeyentry/iskeyrepeating.md): A Boolean value that indicates whether the person holds a key down to repeat its key event.
- [timestamp](bekeyentry/timestamp.md): The time that the key event occurs.

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

### Keyboard input

- [BEKeyEntryContext](bekeyentrycontext.md): A class that describes a key event and the text document with which the event is associated.
- [BEKeyModifierFlags](bekeymodifierflags.md): An enumeration that records the state of the shift-modifier keys.

# BEKeyEntry (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A class that represents a keyboard event in the text system.

## Declaration

```objectivec
@interface BEKeyEntry : NSObject
```

## Topics

### Identifying the key

- [key](bekeyentry/key.md): The key that the person presses.

### Getting information about the keypress

- [state](bekeyentry/state.md): A value that indicates if the key is pressed.
- [BEKeyPressState](bekeyentry/keypressstate.md): Key-press states for a keyboard event.
- [keyRepeating](bekeyentry/iskeyrepeating.md): A Boolean value that indicates whether the person holds a key down to repeat its key event.
- [timestamp](bekeyentry/timestamp.md): The time that the key event occurs.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Keyboard input

- [BEKeyEntryContext](bekeyentrycontext.md): A class that describes a key event and the text document with which the event is associated.
- [BEKeyModifierFlags](bekeymodifierflags.md): An enumeration that records the state of the shift-modifier keys.
