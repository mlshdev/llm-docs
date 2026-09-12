> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcdirectionpad](https://developer.apple.com/documentation/touchcontroller/tcdirectionpad)

# TCDirectionPad (Swift)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object that represents a direction pad.

## Declaration

```swift
class TCDirectionPad
```

<a id="overview"></a>

## Overview

You can configure this object to behave as either a composite direction pad (mirrored by a `GCControllerDirectionPad` on the associated `GCController` instance) or as four separate buttons.

## Topics

### Inspecting the direction pad

- [compositeLabel](tcdirectionpad/compositelabel.md): A composite control label.
- [downContents](tcdirectionpad/downcontents.md): The contents for the down button.
- [downLabel](tcdirectionpad/downlabel.md): The label for the down button, if the control isn’t a composite direction pad.
- [highlightDuration](tcdirectionpad/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [inputIsMutuallyExclusive](tcdirectionpad/inputismutuallyexclusive.md): A Boolean value that indicates whether the control has mutally exclusive input.
- [isDigital](tcdirectionpad/isdigital.md): A Boolean value that indicates whether the control behaves as a digital button.
- [isRadial](tcdirectionpad/isradial.md): A Boolean value that indicates whether the control behaves as a swipeable radial button.
- [leftContents](tcdirectionpad/leftcontents.md): The contents for the left button.
- [leftLabel](tcdirectionpad/leftlabel.md): The label for the left button, if the control isn’t a composite direction pad.
- [rightContents](tcdirectionpad/rightcontents.md): The contents for the right button.
- [rightLabel](tcdirectionpad/rightlabel.md): The label for the right button, if the control isn’t a composite direction pad.
- [upContents](tcdirectionpad/upcontents.md): The contents for the up button.
- [upLabel](tcdirectionpad/uplabel.md): The label for the up button, if the control isn’t a composite direction pad.

### Getting the collider shape

- [colliderShape](tcdirectionpad/collidershape.md): The collider shape for the direction pad.
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
- [TCSwitch](tcswitch.md): A control that represents a single on-screen switch.
- [TCThumbstick](tcthumbstick.md): Represents a single on-screen thumbstick.
- [TCThrottle](tcthrottle.md): Represents a single on-screen throttle - a one axis input.
- [TCTouchpad](tctouchpad.md): Represents a single on-screen touchpad that reports absolute coordinates or delta movements.

# TCDirectionPad (Objective-C)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An object that represents a direction pad.

## Declaration

```objectivec
@interface TCDirectionPad : NSObject
```

<a id="overview"></a>

## Overview

You can configure this object to behave as either a composite direction pad (mirrored by a `GCControllerDirectionPad` on the associated `GCController` instance) or as four separate buttons.

## Topics

### Inspecting the direction pad

- [compositeLabel](tcdirectionpad/compositelabel.md): A composite control label.
- [downContents](tcdirectionpad/downcontents.md): The contents for the down button.
- [downLabel](tcdirectionpad/downlabel.md): The label for the down button, if the control isn’t a composite direction pad.
- [highlightDuration](tcdirectionpad/highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [mutuallyExclusiveInput](tcdirectionpad/inputismutuallyexclusive.md): A Boolean value that indicates whether the control has mutally exclusive input.
- [digital](tcdirectionpad/isdigital.md): A Boolean value that indicates whether the control behaves as a digital button.
- [radial](tcdirectionpad/isradial.md): A Boolean value that indicates whether the control behaves as a swipeable radial button.
- [leftContents](tcdirectionpad/leftcontents.md): The contents for the left button.
- [leftLabel](tcdirectionpad/leftlabel.md): The label for the left button, if the control isn’t a composite direction pad.
- [rightContents](tcdirectionpad/rightcontents.md): The contents for the right button.
- [rightLabel](tcdirectionpad/rightlabel.md): The label for the right button, if the control isn’t a composite direction pad.
- [upContents](tcdirectionpad/upcontents.md): The contents for the up button.
- [upLabel](tcdirectionpad/uplabel.md): The label for the up button, if the control isn’t a composite direction pad.

### Getting the collider shape

- [colliderShape](tcdirectionpad/collidershape.md): The collider shape for the direction pad.
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
- [TCSwitch](tcswitch.md): A control that represents a single on-screen switch.
- [TCThumbstick](tcthumbstick.md): Represents a single on-screen thumbstick.
- [TCThrottle](tcthrottle.md): Represents a single on-screen throttle - a one axis input.
- [TCTouchpad](tctouchpad.md): Represents a single on-screen touchpad that reports absolute coordinates or delta movements.
