> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bekeyentry/keypressstate](https://developer.apple.com/documentation/browserenginekit/bekeyentry/keypressstate)

# BEKeyEntry.KeyPressState (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Key-press states for a keyboard event.

## Declaration

```swift
enum KeyPressState
```

## Topics

### Key states

- [BEKeyEntry.KeyPressState.down](keypressstate/down.md): An entry that indicates the key is down.
- [BEKeyEntry.KeyPressState.up](keypressstate/up.md): An entry that indicates the key is up.

### Creating a key-press state

- [init(rawValue:)](keypressstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting information about the keypress

- [state](state.md): A value that indicates if the key is pressed.
- [isKeyRepeating](iskeyrepeating.md): A Boolean value that indicates whether the person holds a key down to repeat its key event.
- [timestamp](timestamp.md): The time that the key event occurs.

# BEKeyPressState (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Key-press states for a keyboard event.

## Declaration

```objectivec
enum BEKeyPressState : NSInteger;
```

## Topics

### Key states

- [BEKeyPressStateDown](keypressstate/down.md): An entry that indicates the key is down.
- [BEKeyPressStateUp](keypressstate/up.md): An entry that indicates the key is up.

## See Also

### Getting information about the keypress

- [state](state.md): A value that indicates if the key is pressed.
- [keyRepeating](iskeyrepeating.md): A Boolean value that indicates whether the person holds a key down to repeat its key event.
- [timestamp](timestamp.md): The time that the key event occurs.
