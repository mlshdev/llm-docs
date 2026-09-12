> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcthrottle](https://developer.apple.com/documentation/touchcontroller/tcthrottle)

# TCThrottle (Swift)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Represents a single on-screen throttle - a one axis input.

## Declaration

```swift
class TCThrottle
```

<a id="overview"></a>

## Overview

This is mirrored by a `GCControllerButtonInput` on the associated `GCController` instance.

## Topics

### Inspecting the throttle

- [backgroundContents](tcthrottle/backgroundcontents.md): The contents for the background of the throttle.
- [baseValue](tcthrottle/basevalue.md): The initial value of this control.
- [highlightDuration](tcthrottle/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [indicatorContents](tcthrottle/indicatorcontents.md): The contents for the indicator of the throttle.
- [indicatorSize](tcthrottle/indicatorsize.md): The size (width, height) of the indicator itself in points.
- [snapsToBaseValue](tcthrottle/snapstobasevalue.md): A Boolean value that indicates whether the control reverts to it’s base value.
- [throttleSize](tcthrottle/throttlesize.md): The size (width, height) of the throttle itself, providing boundaries for the indicator, in points.

### Getting the collider shape

- [colliderShape](tcthrottle/collidershape.md): The collider shape for the throttle.
- [TCColliderShape](tccollidershape.md): Defines the shape of a control collider.

### Getting the orientation

- [orientation](tcthrottle/orientation-swift.property.md): The orientation of the throttle.
- [TCThrottle.Orientation](tcthrottle/orientation-swift.enum.md): Defines the orientation of the throttle.

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
- [TCTouchpad](tctouchpad.md): Represents a single on-screen touchpad that reports absolute coordinates or delta movements.

# TCThrottle (Objective-C)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Represents a single on-screen throttle - a one axis input.

## Declaration

```objectivec
@interface TCThrottle : NSObject
```

<a id="overview"></a>

## Overview

This is mirrored by a `GCControllerButtonInput` on the associated `GCController` instance.

## Topics

### Inspecting the throttle

- [backgroundContents](tcthrottle/backgroundcontents.md): The contents for the background of the throttle.
- [baseValue](tcthrottle/basevalue.md): The initial value of this control.
- [highlightDuration](tcthrottle/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [indicatorContents](tcthrottle/indicatorcontents.md): The contents for the indicator of the throttle.
- [indicatorSize](tcthrottle/indicatorsize.md): The size (width, height) of the indicator itself in points.
- [snapsToBaseValue](tcthrottle/snapstobasevalue.md): A Boolean value that indicates whether the control reverts to it’s base value.
- [throttleSize](tcthrottle/throttlesize.md): The size (width, height) of the throttle itself, providing boundaries for the indicator, in points.

### Getting the collider shape

- [colliderShape](tcthrottle/collidershape.md): The collider shape for the throttle.
- [TCColliderShape](tccollidershape.md): Defines the shape of a control collider.

### Getting the orientation

- [orientation](tcthrottle/orientation-swift.property.md): The orientation of the throttle.
- [TCThrottleOrientation](tcthrottle/orientation-swift.enum.md): Defines the orientation of the throttle.

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
- [TCTouchpad](tctouchpad.md): Represents a single on-screen touchpad that reports absolute coordinates or delta movements.
