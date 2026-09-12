> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bekeyentry/iskeyrepeating](https://developer.apple.com/documentation/browserenginekit/bekeyentry/iskeyrepeating)

# isKeyRepeating (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that indicates whether the person holds a key down to repeat its key event.

## Declaration

```swift
var isKeyRepeating: Bool { get }
```

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

## See Also

### Getting information about the keypress

- [state](state.md): A value that indicates if the key is pressed.
- [BEKeyEntry.KeyPressState](keypressstate.md): Key-press states for a keyboard event.
- [timestamp](timestamp.md): The time that the key event occurs.

# keyRepeating (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that indicates whether the person holds a key down to repeat its key event.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isKeyRepeating) BOOL keyRepeating;
```

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

## See Also

### Getting information about the keypress

- [state](state.md): A value that indicates if the key is pressed.
- [BEKeyPressState](keypressstate.md): Key-press states for a keyboard event.
- [timestamp](timestamp.md): The time that the key event occurs.
