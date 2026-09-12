> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcswitch](https://developer.apple.com/documentation/touchcontroller/tcswitch)

# TCSwitch (Swift)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A control that represents a single on-screen switch.

## Declaration

```swift
class TCSwitch
```

<a id="overview"></a>

## Overview

This is mirrored by a [GCControllerButtonInput](../gamecontroller/gccontrollerbuttoninput.md) on the associated [GCController](../gamecontroller/gccontroller.md).

## Topics

### Inspecting the switch

- [contents](tcswitch/contents.md): The contents for the switch in its normal state.
- [highlightDuration](tcswitch/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [isSwitchedOn](tcswitch/isswitchedon.md): A Boolean value that indicates whether the switch is currently switched on.
- [switchedOnContents](tcswitch/switchedoncontents.md): The contents for the switch when it is switched on.

### Getting the collider shape

- [colliderShape](tcswitch/collidershape.md): The collider shape for the switch.
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
- [TCButton](tcbutton.md): A control that represents a single on-screen button.
- [TCDirectionPad](tcdirectionpad.md): An object that represents a direction pad.
- [TCThumbstick](tcthumbstick.md): Represents a single on-screen thumbstick.
- [TCThrottle](tcthrottle.md): Represents a single on-screen throttle - a one axis input.
- [TCTouchpad](tctouchpad.md): Represents a single on-screen touchpad that reports absolute coordinates or delta movements.

# TCSwitch (Objective-C)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A control that represents a single on-screen switch.

## Declaration

```objectivec
@interface TCSwitch : NSObject
```

<a id="overview"></a>

## Overview

This is mirrored by a [GCControllerButtonInput](../gamecontroller/gccontrollerbuttoninput.md) on the associated [GCController](../gamecontroller/gccontroller.md).

## Topics

### Inspecting the switch

- [contents](tcswitch/contents.md): The contents for the switch in its normal state.
- [highlightDuration](tcswitch/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [switchedOn](tcswitch/isswitchedon.md): A Boolean value that indicates whether the switch is currently switched on.
- [switchedOnContents](tcswitch/switchedoncontents.md): The contents for the switch when it is switched on.

### Getting the collider shape

- [colliderShape](tcswitch/collidershape.md): The collider shape for the switch.
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
- [TCButton](tcbutton.md): A control that represents a single on-screen button.
- [TCDirectionPad](tcdirectionpad.md): An object that represents a direction pad.
- [TCThumbstick](tcthumbstick.md): Represents a single on-screen thumbstick.
- [TCThrottle](tcthrottle.md): Represents a single on-screen throttle - a one axis input.
- [TCTouchpad](tctouchpad.md): Represents a single on-screen touchpad that reports absolute coordinates or delta movements.
