> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcbutton](https://developer.apple.com/documentation/touchcontroller/tcbutton)

# TCButton (Swift)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A control that represents a single on-screen button.

## Declaration

```swift
class TCButton
```

<a id="overview"></a>

## Overview

This is mirrored by a [GCControllerButtonInput](../gamecontroller/gccontrollerbuttoninput.md) on the associated [GCController](../gamecontroller/gccontroller.md).

## Topics

### Inspecting a button

- [contents](tcbutton/contents.md): The contents for the button in its normal state.
- [highlightDuration](tcbutton/highlightduration.md): The time it takes for a highlight to fade away, in seconds.

### Getting the collider shape

- [colliderShape](tcbutton/collidershape.md): The collider shape for the button.
- [TCColliderShape](tccollidershape.md): Defines the shape of a control collider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [TCControl](tccontrol.md)
- [TCControlLayout](tccontrollayout.md)

## See Also

### Controls

- [TCControl](tccontrol.md): A protocol that defines the base properties and methods for all touch controls.
- [TCDirectionPad](tcdirectionpad.md): An object that represents a direction pad.
- [TCSwitch](tcswitch.md): A control that represents a single on-screen switch.
- [TCThumbstick](tcthumbstick.md): Represents a single on-screen thumbstick.
- [TCThrottle](tcthrottle.md): Represents a single on-screen throttle - a one axis input.
- [TCTouchpad](tctouchpad.md): Represents a single on-screen touchpad that reports absolute coordinates or delta movements.

# TCButton (Objective-C)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A control that represents a single on-screen button.

## Declaration

```objectivec
@interface TCButton : NSObject
```

<a id="overview"></a>

## Overview

This is mirrored by a [GCControllerButtonInput](../gamecontroller/gccontrollerbuttoninput.md) on the associated [GCController](../gamecontroller/gccontroller.md).

## Topics

### Inspecting a button

- [contents](tcbutton/contents.md): The contents for the button in its normal state.
- [highlightDuration](tcbutton/highlightduration.md): The time it takes for a highlight to fade away, in seconds.

### Getting the collider shape

- [colliderShape](tcbutton/collidershape.md): The collider shape for the button.
- [TCColliderShape](tccollidershape.md): Defines the shape of a control collider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [TCControl](tccontrol.md)
- [TCControlLayout](tccontrollayout.md)

## See Also

### Controls

- [TCControl](tccontrol.md): A protocol that defines the base properties and methods for all touch controls.
- [TCDirectionPad](tcdirectionpad.md): An object that represents a direction pad.
- [TCSwitch](tcswitch.md): A control that represents a single on-screen switch.
- [TCThumbstick](tcthumbstick.md): Represents a single on-screen thumbstick.
- [TCThrottle](tcthrottle.md): Represents a single on-screen throttle - a one axis input.
- [TCTouchpad](tctouchpad.md): Represents a single on-screen touchpad that reports absolute coordinates or delta movements.
