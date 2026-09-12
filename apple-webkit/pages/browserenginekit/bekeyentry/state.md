> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bekeyentry/state](https://developer.apple.com/documentation/browserenginekit/bekeyentry/state)

# state (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A value that indicates if the key is pressed.

## Declaration

```swift
var state: BEKeyEntry.KeyPressState { get }
```

## See Also

### Getting information about the keypress

- [BEKeyEntry.KeyPressState](keypressstate.md): Key-press states for a keyboard event.
- [isKeyRepeating](iskeyrepeating.md): A Boolean value that indicates whether the person holds a key down to repeat its key event.
- [timestamp](timestamp.md): The time that the key event occurs.

# state (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A value that indicates if the key is pressed.

## Declaration

```objectivec
@property (nonatomic, readonly) BEKeyPressState state;
```

## See Also

### Getting information about the keypress

- [BEKeyPressState](keypressstate.md): Key-press states for a keyboard event.
- [keyRepeating](iskeyrepeating.md): A Boolean value that indicates whether the person holds a key down to repeat its key event.
- [timestamp](timestamp.md): The time that the key event occurs.
