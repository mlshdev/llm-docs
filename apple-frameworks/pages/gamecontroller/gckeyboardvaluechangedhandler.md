> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gckeyboardvaluechangedhandler](https://developer.apple.com/documentation/gamecontroller/gckeyboardvaluechangedhandler)

# GCKeyboardValueChangedHandler (Swift)

**Framework:** Game Controller  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The signature for the block that the keyboard input profile calls when a key value changes.

## Declaration

```swift
typealias GCKeyboardValueChangedHandler = (GCKeyboardInput, GCControllerButtonInput, GCKeyCode, Bool) -> Void
```

## Parameters

- `keyboard`: The keyboard controller profile for the physical keyboard.
- `key`: The element for the key that changes.
- `keyCode`: The code for the key that changes.
- `pressed`: [true](https://developer.apple.com/documentation/swift/true) if the user presses the key at the time the change occurs; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting Change Information

- [keyChangedHandler](gckeyboardinput/keychangedhandler.md): The block that the profile calls when the user presses a key.

# GCKeyboardValueChangedHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The signature for the block that the keyboard input profile calls when a key value changes.

## Declaration

```objectivec
typedef void (^)(GCKeyboardInput *, GCControllerButtonInput *, long, _Bool) GCKeyboardValueChangedHandler;
```

## Parameters

- `keyboard`: The keyboard controller profile for the physical keyboard.
- `key`: The element for the key that changes.
- `keyCode`: The code for the key that changes.
- `pressed`: [true](https://developer.apple.com/documentation/swift/true) if the user presses the key at the time the change occurs; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting Change Information

- [keyChangedHandler](gckeyboardinput/keychangedhandler.md): The block that the profile calls when the user presses a key.
