> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikey](https://developer.apple.com/documentation/uikit/uikey)

# UIKey (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · tvOS 13.4+ · visionOS 1.0+

An object that provides information about the state of a keyboard key.

## Declaration

```swift
@MainActor class UIKey
```

<a id="overview"></a>

## Overview

[UIKey](uikey.md) provides relevant information about the current state of a key on a keyboard as a user presses and releases the key. To learn more, see [Handling key presses made on a physical keyboard](handling-key-presses-made-on-a-physical-keyboard.md).

## Topics

### Determining key type

- [keyCode](uikey/keycode.md): The HID usage code of the key.
- [modifierFlags](uikey/modifierflags.md): The modifier keys pressed and held while the user presses the key.

### Getting key characters

- [characters](uikey/characters.md): A string that represents the text value of the key combined with any active modifier keys.
- [charactersIgnoringModifiers](uikey/charactersignoringmodifiers.md): A string that represents the text value of the key without modifier keys.

### Initializers

- [init(coder:)](uikey/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Physical keyboards

- [Handling key presses made on a physical keyboard](handling-key-presses-made-on-a-physical-keyboard.md): Detect when someone presses and releases keys on a physical keyboard.
- [Navigating an app’s user interface using a keyboard](navigating-an-app-s-user-interface-using-a-keyboard.md): Navigate between user interface elements using a keyboard and focusable UI elements in iPad apps and apps built with Mac Catalyst.
- [Adding hardware keyboard support to your app](adding-hardware-keyboard-support-to-your-app.md): Enhance interactions with your app by handling raw keyboard events, writing custom keyboard shortcuts, and working with gesture recognizers.
- [UIKeyboardHIDUsage](uikeyboardhidusage.md): A set of HID usage codes that identify the keys of a USB keyboard.

# UIKey (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · tvOS 13.4+ · visionOS 1.0+

An object that provides information about the state of a keyboard key.

## Declaration

```objectivec
@interface UIKey : NSObject
```

<a id="overview"></a>

## Overview

[UIKey](uikey.md) provides relevant information about the current state of a key on a keyboard as a user presses and releases the key. To learn more, see [Handling key presses made on a physical keyboard](handling-key-presses-made-on-a-physical-keyboard.md).

## Topics

### Determining key type

- [keyCode](uikey/keycode.md): The HID usage code of the key.
- [modifierFlags](uikey/modifierflags.md): The modifier keys pressed and held while the user presses the key.

### Getting key characters

- [characters](uikey/characters.md): A string that represents the text value of the key combined with any active modifier keys.
- [charactersIgnoringModifiers](uikey/charactersignoringmodifiers.md): A string that represents the text value of the key without modifier keys.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)

## See Also

### Physical keyboards

- [Handling key presses made on a physical keyboard](handling-key-presses-made-on-a-physical-keyboard.md): Detect when someone presses and releases keys on a physical keyboard.
- [Navigating an app’s user interface using a keyboard](navigating-an-app-s-user-interface-using-a-keyboard.md): Navigate between user interface elements using a keyboard and focusable UI elements in iPad apps and apps built with Mac Catalyst.
- [UIKeyboardHIDUsage](uikeyboardhidusage.md): A set of HID usage codes that identify the keys of a USB keyboard.
