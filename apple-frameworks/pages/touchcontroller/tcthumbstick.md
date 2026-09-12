> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcthumbstick](https://developer.apple.com/documentation/touchcontroller/tcthumbstick)

# TCThumbstick (Swift)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Represents a single on-screen thumbstick.

## Declaration

```swift
class TCThumbstick
```

<a id="overview"></a>

## Overview

This is mirrored by a `GCControllerDirectionPad` on the associated `GCController` instance.

## Topics

### Inspecting a thumbstick

- [backgroundContents](tcthumbstick/backgroundcontents.md): The contents for the background of the thumbstick.
- [hidesWhenNotPressed](tcthumbstick/hideswhennotpressed.md): A Boolean value that indicates whether to hide the thumbstick when it is not being pressed.
- [highlightDuration](tcthumbstick/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [stickContents](tcthumbstick/stickcontents.md): The contents for the thumbstick itself.
- [stickSize](tcthumbstick/sticksize.md): The size (width, height) of the thumbstick stick itself in points.

### Getting the collider shape

- [colliderShape](tcthumbstick/collidershape.md): The collider shape for the thumbstick.
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
- [TCThrottle](tcthrottle.md): Represents a single on-screen throttle - a one axis input.
- [TCTouchpad](tctouchpad.md): Represents a single on-screen touchpad that reports absolute coordinates or delta movements.

# TCThumbstick (Objective-C)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Represents a single on-screen thumbstick.

## Declaration

```objectivec
@interface TCThumbstick : NSObject
```

<a id="overview"></a>

## Overview

This is mirrored by a `GCControllerDirectionPad` on the associated `GCController` instance.

## Topics

### Inspecting a thumbstick

- [backgroundContents](tcthumbstick/backgroundcontents.md): The contents for the background of the thumbstick.
- [hidesWhenNotPressed](tcthumbstick/hideswhennotpressed.md): A Boolean value that indicates whether to hide the thumbstick when it is not being pressed.
- [highlightDuration](tcthumbstick/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [stickContents](tcthumbstick/stickcontents.md): The contents for the thumbstick itself.
- [stickSize](tcthumbstick/sticksize.md): The size (width, height) of the thumbstick stick itself in points.

### Getting the collider shape

- [colliderShape](tcthumbstick/collidershape.md): The collider shape for the thumbstick.
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
- [TCThrottle](tcthrottle.md): Represents a single on-screen throttle - a one axis input.
- [TCTouchpad](tctouchpad.md): Represents a single on-screen touchpad that reports absolute coordinates or delta movements.
