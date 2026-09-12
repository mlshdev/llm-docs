> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bekeyentry/timestamp](https://developer.apple.com/documentation/browserenginekit/bekeyentry/timestamp)

# timestamp (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

The time that the key event occurs.

## Declaration

```swift
var timestamp: TimeInterval { get }
```

## See Also

### Getting information about the keypress

- [state](state.md): A value that indicates if the key is pressed.
- [BEKeyEntry.KeyPressState](keypressstate.md): Key-press states for a keyboard event.
- [isKeyRepeating](iskeyrepeating.md): A Boolean value that indicates whether the person holds a key down to repeat its key event.

# timestamp (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

The time that the key event occurs.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval timestamp;
```

## See Also

### Getting information about the keypress

- [state](state.md): A value that indicates if the key is pressed.
- [BEKeyPressState](keypressstate.md): Key-press states for a keyboard event.
- [keyRepeating](iskeyrepeating.md): A Boolean value that indicates whether the person holds a key down to repeat its key event.
