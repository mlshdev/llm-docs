> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchpad](https://developer.apple.com/documentation/touchcontroller/tctouchpad)

# TCTouchpad (Swift)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Represents a single on-screen touchpad that reports absolute coordinates or delta movements.

## Declaration

```swift
class TCTouchpad
```

<a id="overview"></a>

## Overview

This is mirrored by a `GCControllerDirectionPad` on the associated `GCController` instance.

## Topics

### Inspecting at touchpad

- [contents](tctouchpad/contents.md): The contents for the touchpad. May be `nil`.
- [highlightDuration](tctouchpad/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [reportsRelativeValues](tctouchpad/reportsrelativevalues.md): A Boolean value that represents the touchpad reports deltas.

### Getting the collider shape

- [colliderShape](tctouchpad/collidershape.md): The collider shape for the touchpad.
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
- [TCSwitch](tcswitch.md): A control that represents a single on-screen switch.
- [TCThumbstick](tcthumbstick.md): Represents a single on-screen thumbstick.
- [TCThrottle](tcthrottle.md): Represents a single on-screen throttle - a one axis input.

# TCTouchpad (Objective-C)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Represents a single on-screen touchpad that reports absolute coordinates or delta movements.

## Declaration

```objectivec
@interface TCTouchpad : NSObject
```

<a id="overview"></a>

## Overview

This is mirrored by a `GCControllerDirectionPad` on the associated `GCController` instance.

## Topics

### Inspecting at touchpad

- [contents](tctouchpad/contents.md): The contents for the touchpad. May be `nil`.
- [highlightDuration](tctouchpad/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [reportsRelativeValues](tctouchpad/reportsrelativevalues.md): A Boolean value that represents the touchpad reports deltas.

### Getting the collider shape

- [colliderShape](tctouchpad/collidershape.md): The collider shape for the touchpad.
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
- [TCSwitch](tcswitch.md): A control that represents a single on-screen switch.
- [TCThumbstick](tcthumbstick.md): Represents a single on-screen thumbstick.
- [TCThrottle](tcthrottle.md): Represents a single on-screen throttle - a one axis input.
