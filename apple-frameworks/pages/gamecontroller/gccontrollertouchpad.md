> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollertouchpad](https://developer.apple.com/documentation/gamecontroller/gccontrollertouchpad)

# GCControllerTouchpad (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A control element that represents a touch event on a touchpad.

## Declaration

```swift
class GCControllerTouchpad
```

<a id="overview"></a>

## Overview

A `GCControllerTouchpad` object provides the state of the touches and presses on a touchpad. This is a compound element with button and directional pad subelements.

## Topics

### Getting the subelements

- [touchSurface](gccontrollertouchpad/touchsurface.md): The element that represents the state of the user’s touch on the surface of the touchpad.
- [button](gccontrollertouchpad/button.md): The element that represents the button component on the touchpad.

### Accessing the input values

- [touchState](gccontrollertouchpad/touchstate-swift.property.md): The state of the user’s touch on the surface of the touchpad.
- [GCControllerTouchpad.TouchState](gccontrollertouchpad/touchstate-swift.enum.md): The possible states of the user’s touch.
- [reportsAbsoluteTouchSurfaceValues](gccontrollertouchpad/reportsabsolutetouchsurfacevalues.md): A Boolean value that determines whether the touch values are absolute or relative.

### Getting change information

- [touchDown](gccontrollertouchpad/touchdown.md): The block that the element calls when the user begins touching the touchpad.
- [touchMoved](gccontrollertouchpad/touchmoved.md): The block that the element calls when the user continues touching the touchpad, not when the user begins or ends touching the touchpad.
- [touchUp](gccontrollertouchpad/touchup.md): The block that the element calls when the user finishes touching the touchpad.
- [GCControllerTouchpadHandler](gccontrollertouchpadhandler.md): The signature for the block that executes when the user interacts with the touchpad.

### Setting snapshot values

- [setValueForXAxis(\_:yAxis:touchDown:buttonValue:)](gccontrollertouchpad/setvalueforxaxis%28__yaxis_touchdown_buttonvalue_%29.md): Sets the input values of a snapshot of a touchpad.

## Relationships

### Inherits From

- [GCControllerElement](gccontrollerelement.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing controller elements

- [GCControllerElement](gccontrollerelement.md): An input for a physical control, such as a button or thumbstick.
- [GCControllerAxisInput](gccontrolleraxisinput.md): A control element that tracks movement along an axis.
- [GCControllerButtonInput](gccontrollerbuttoninput.md): A control element that represents a button touch or press.
- [GCControllerDirectionPad](gccontrollerdirectionpad.md): A control element associated with a directional pad or a thumbstick.
- [GCDeviceCursor](gcdevicecursor.md): A control element for the cursor used as a directional pad.
- [GCDualSenseAdaptiveTrigger](gcdualsenseadaptivetrigger.md): A class that encapsulates the features of a DualSense adaptive trigger.

# GCControllerTouchpad (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A control element that represents a touch event on a touchpad.

## Declaration

```objectivec
@interface GCControllerTouchpad : GCControllerElement
```

<a id="overview"></a>

## Overview

A `GCControllerTouchpad` object provides the state of the touches and presses on a touchpad. This is a compound element with button and directional pad subelements.

## Topics

### Getting the subelements

- [touchSurface](gccontrollertouchpad/touchsurface.md): The element that represents the state of the user’s touch on the surface of the touchpad.
- [button](gccontrollertouchpad/button.md): The element that represents the button component on the touchpad.

### Accessing the input values

- [touchState](gccontrollertouchpad/touchstate-swift.property.md): The state of the user’s touch on the surface of the touchpad.
- [GCTouchState](gccontrollertouchpad/touchstate-swift.enum.md): The possible states of the user’s touch.
- [reportsAbsoluteTouchSurfaceValues](gccontrollertouchpad/reportsabsolutetouchsurfacevalues.md): A Boolean value that determines whether the touch values are absolute or relative.

### Getting change information

- [touchDown](gccontrollertouchpad/touchdown.md): The block that the element calls when the user begins touching the touchpad.
- [touchMoved](gccontrollertouchpad/touchmoved.md): The block that the element calls when the user continues touching the touchpad, not when the user begins or ends touching the touchpad.
- [touchUp](gccontrollertouchpad/touchup.md): The block that the element calls when the user finishes touching the touchpad.
- [GCControllerTouchpadHandler](gccontrollertouchpadhandler.md): The signature for the block that executes when the user interacts with the touchpad.

### Setting snapshot values

- [setValueForXAxis:yAxis:touchDown:buttonValue:](gccontrollertouchpad/setvalueforxaxis%28__yaxis_touchdown_buttonvalue_%29.md): Sets the input values of a snapshot of a touchpad.

## Relationships

### Inherits From

- [GCControllerElement](gccontrollerelement.md)

## See Also

### Accessing controller elements

- [GCControllerElement](gccontrollerelement.md): An input for a physical control, such as a button or thumbstick.
- [GCControllerAxisInput](gccontrolleraxisinput.md): A control element that tracks movement along an axis.
- [GCControllerButtonInput](gccontrollerbuttoninput.md): A control element that represents a button touch or press.
- [GCControllerDirectionPad](gccontrollerdirectionpad.md): A control element associated with a directional pad or a thumbstick.
- [GCDeviceCursor](gcdevicecursor.md): A control element for the cursor used as a directional pad.
- [GCDualSenseAdaptiveTrigger](gcdualsenseadaptivetrigger.md): A class that encapsulates the features of a DualSense adaptive trigger.
