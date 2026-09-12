> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerbuttoninput](https://developer.apple.com/documentation/gamecontroller/gccontrollerbuttoninput)

# GCControllerButtonInput (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A control element that represents a button touch or press.

## Declaration

```swift
class GCControllerButtonInput
```

<a id="overview"></a>

## Overview

A `GCControllerButtonInput` object represents a button on a controller that can report either analog or digital values.

## Topics

### Accessing input values

- [isTouched](gccontrollerbuttoninput/istouched.md): A Boolean value that indicates whether the user is touching the button.
- [isPressed](gccontrollerbuttoninput/ispressed.md): A Boolean value that indicates whether the user is pressing the button.
- [value](gccontrollerbuttoninput/value.md): The level of pressure the user is applying to the button.

### Getting change information

- [touchedChangedHandler](gccontrollerbuttoninput/touchedchangedhandler.md): The block that the element calls when the user touches the button.
- [GCControllerButtonTouchedChangedHandler](gccontrollerbuttontouchedchangedhandler.md): The signature for the block that executes when the user touches the button if the controller supports that feature.
- [pressedChangedHandler](gccontrollerbuttoninput/pressedchangedhandler.md): The block that the element calls when the user presses or releases the button.
- [valueChangedHandler](gccontrollerbuttoninput/valuechangedhandler.md): The block that the element calls when the user changes the level of pressure on the button.
- [GCControllerButtonValueChangedHandler](gccontrollerbuttonvaluechangedhandler.md): The signature for the block that executes when a button’s state changes.

### Setting snapshot values

- [setValue(\_:)](gccontrollerbuttoninput/setvalue%28__%29.md): Sets the pressure value of a snapshot of a button.

## Relationships

### Inherits From

- [GCControllerElement](gccontrollerelement.md)

### Inherited By

- [GCDualSenseAdaptiveTrigger](gcdualsenseadaptivetrigger.md)

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
- [GCControllerTouchpad](gccontrollertouchpad.md): A control element that represents a touch event on a touchpad.
- [GCControllerDirectionPad](gccontrollerdirectionpad.md): A control element associated with a directional pad or a thumbstick.
- [GCDeviceCursor](gcdevicecursor.md): A control element for the cursor used as a directional pad.
- [GCDualSenseAdaptiveTrigger](gcdualsenseadaptivetrigger.md): A class that encapsulates the features of a DualSense adaptive trigger.

# GCControllerButtonInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A control element that represents a button touch or press.

## Declaration

```objectivec
@interface GCControllerButtonInput : GCControllerElement
```

<a id="overview"></a>

## Overview

A `GCControllerButtonInput` object represents a button on a controller that can report either analog or digital values.

## Topics

### Accessing input values

- [touched](gccontrollerbuttoninput/istouched.md): A Boolean value that indicates whether the user is touching the button.
- [pressed](gccontrollerbuttoninput/ispressed.md): A Boolean value that indicates whether the user is pressing the button.
- [value](gccontrollerbuttoninput/value.md): The level of pressure the user is applying to the button.

### Getting change information

- [touchedChangedHandler](gccontrollerbuttoninput/touchedchangedhandler.md): The block that the element calls when the user touches the button.
- [GCControllerButtonTouchedChangedHandler](gccontrollerbuttontouchedchangedhandler.md): The signature for the block that executes when the user touches the button if the controller supports that feature.
- [pressedChangedHandler](gccontrollerbuttoninput/pressedchangedhandler.md): The block that the element calls when the user presses or releases the button.
- [valueChangedHandler](gccontrollerbuttoninput/valuechangedhandler.md): The block that the element calls when the user changes the level of pressure on the button.
- [GCControllerButtonValueChangedHandler](gccontrollerbuttonvaluechangedhandler.md): The signature for the block that executes when a button’s state changes.

### Setting snapshot values

- [setValue:](gccontrollerbuttoninput/setvalue%28__%29.md): Sets the pressure value of a snapshot of a button.

## Relationships

### Inherits From

- [GCControllerElement](gccontrollerelement.md)

### Inherited By

- [GCDualSenseAdaptiveTrigger](gcdualsenseadaptivetrigger.md)

## See Also

### Accessing controller elements

- [GCControllerElement](gccontrollerelement.md): An input for a physical control, such as a button or thumbstick.
- [GCControllerAxisInput](gccontrolleraxisinput.md): A control element that tracks movement along an axis.
- [GCControllerTouchpad](gccontrollertouchpad.md): A control element that represents a touch event on a touchpad.
- [GCControllerDirectionPad](gccontrollerdirectionpad.md): A control element associated with a directional pad or a thumbstick.
- [GCDeviceCursor](gcdevicecursor.md): A control element for the cursor used as a directional pad.
- [GCDualSenseAdaptiveTrigger](gcdualsenseadaptivetrigger.md): A class that encapsulates the features of a DualSense adaptive trigger.
