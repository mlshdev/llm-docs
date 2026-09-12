> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gckeyboard](https://developer.apple.com/documentation/gamecontroller/gckeyboard)

# GCKeyboard (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that represents a physical keyboard connected to a device.

## Declaration

```swift
class GCKeyboard
```

<a id="overview"></a>

## Overview

To get the keyboard object and its input values, register for the [GCKeyboardDidConnect](../foundation/nsnotification/name-swift.struct/gckeyboarddidconnect.md) (Swift) or [GCKeyboardDidConnectNotification](gckeyboarddidconnectnotification.md) (Objective-C) notification for when a keyboard connects to the device, or use the [coalesced](gckeyboard/coalesced.md) class property. Then get the input values from the keyboard object’s [keyboardInput](gckeyboard/keyboardinput.md) controller profile.

## Topics

### Discovering keyboards

- [coalesced](gckeyboard/coalesced.md): The keyboard currently connected to the device.
- [GCKeyboardDidConnect](../foundation/nsnotification/name-swift.struct/gckeyboarddidconnect.md): A notification that posts after a keyboard connects to the device.
- [GCKeyboardDidDisconnect](../foundation/nsnotification/name-swift.struct/gckeyboarddiddisconnect.md): A notification that posts after a single keyboard, or the last of multiple keyboards, disconnects from the device.

### Getting input values

- [keyboardInput](gckeyboard/keyboardinput.md): The controller profile for the keyboard.

### Structures

- [GCKeyboard.DidConnectMessage](gckeyboard/didconnectmessage.md): A message that posts after a keyboard accessory connects to the device.
- [GCKeyboard.DidDisconnectMessage](gckeyboard/diddisconnectmessage.md): A message that posts after a keyboard accessory disconnects from the device.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [GCDevice](gcdevice.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Game controllers

- [Supporting Game Controllers](supporting-game-controllers.md): Support a physical controller or add a virtual controller to enhance how people interact with your game through haptics, lighting, and motion sensing.
- [Letting players use their second-generation Siri Remote as a game controller](letting-players-use-their-second-generation-siri-remote-as-a-game-controller.md): Support the second-generation Siri Remote as a game controller in your Apple TV game.
- [Discovering and tracking spatial game controllers and styli](discovering-and-tracking-spatial-game-controllers-and-styli.md): Receive controller and stylus input to interact with content in your augmented reality app.
- [GCDevice](gcdevice.md): A protocol that defines a common interface for game input devices.
- [GCController](gccontroller.md): A representation of a real game controller, a virtual controller, or a snapshot of a controller.
- [GCRacingWheel](gcracingwheel.md): An object that represents a physical racing wheel controller connected to a device.
- [GCMouse](gcmouse.md): An object that represents a physical mouse connected to a device.
- [GCStylus](gcstylus.md): An object that represents a physical stylus connected to the device.

# GCKeyboard (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that represents a physical keyboard connected to a device.

## Declaration

```objectivec
@interface GCKeyboard : NSObject
```

<a id="overview"></a>

## Overview

To get the keyboard object and its input values, register for the [GCKeyboardDidConnect](../foundation/nsnotification/name-swift.struct/gckeyboarddidconnect.md) (Swift) or [GCKeyboardDidConnectNotification](gckeyboarddidconnectnotification.md) (Objective-C) notification for when a keyboard connects to the device, or use the [coalescedKeyboard](gckeyboard/coalesced.md) class property. Then get the input values from the keyboard object’s [keyboardInput](gckeyboard/keyboardinput.md) controller profile.

## Topics

### Discovering keyboards

- [coalescedKeyboard](gckeyboard/coalesced.md): The keyboard currently connected to the device.
- [GCKeyboardDidConnectNotification](gckeyboarddidconnectnotification.md): A notification that posts after a keyboard connects to the device.
- [GCKeyboardDidDisconnectNotification](gckeyboarddiddisconnectnotification.md): A notification that posts after a single keyboard, or the last of multiple keyboards, disconnects from the device.

### Getting input values

- [keyboardInput](gckeyboard/keyboardinput.md): The controller profile for the keyboard.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [GCDevice](gcdevice.md)

## See Also

### Game controllers

- [Letting players use their second-generation Siri Remote as a game controller](letting-players-use-their-second-generation-siri-remote-as-a-game-controller.md): Support the second-generation Siri Remote as a game controller in your Apple TV game.
- [Discovering and tracking spatial game controllers and styli](discovering-and-tracking-spatial-game-controllers-and-styli.md): Receive controller and stylus input to interact with content in your augmented reality app.
- [GCDevice](gcdevice.md): A protocol that defines a common interface for game input devices.
- [GCController](gccontroller.md): A representation of a real game controller, a virtual controller, or a snapshot of a controller.
- [GCRacingWheel](gcracingwheel.md): An object that represents a physical racing wheel controller connected to a device.
- [GCMouse](gcmouse.md): An object that represents a physical mouse connected to a device.
- [GCStylus](gcstylus.md): An object that represents a physical stylus connected to the device.
