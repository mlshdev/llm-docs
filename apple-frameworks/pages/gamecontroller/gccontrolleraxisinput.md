> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrolleraxisinput](https://developer.apple.com/documentation/gamecontroller/gccontrolleraxisinput)

# GCControllerAxisInput (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A control element that tracks movement along an axis.

## Declaration

```swift
class GCControllerAxisInput
```

<a id="overview"></a>

## Overview

A `GCControllerAxisInput` object represents the value of a physical controller’s axis. For example, a [GCControllerDirectionPad](gccontrollerdirectionpad.md) has x-axis and y-axis subelements.

## Topics

### Accessing the input values

- [value](gccontrolleraxisinput/value.md): The current value of the axis.
- [setValue(\_:)](gccontrolleraxisinput/setvalue%28__%29.md): Sets the normalized value of the axis.

### Getting change information

- [valueChangedHandler](gccontrolleraxisinput/valuechangedhandler.md): The block that the element calls when the user changes the axis value.
- [GCControllerAxisValueChangedHandler](gccontrolleraxisvaluechangedhandler.md): The signature for the block that executes when the user changes the axis value.

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
- [GCControllerButtonInput](gccontrollerbuttoninput.md): A control element that represents a button touch or press.
- [GCControllerTouchpad](gccontrollertouchpad.md): A control element that represents a touch event on a touchpad.
- [GCControllerDirectionPad](gccontrollerdirectionpad.md): A control element associated with a directional pad or a thumbstick.
- [GCDeviceCursor](gcdevicecursor.md): A control element for the cursor used as a directional pad.
- [GCDualSenseAdaptiveTrigger](gcdualsenseadaptivetrigger.md): A class that encapsulates the features of a DualSense adaptive trigger.

# GCControllerAxisInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A control element that tracks movement along an axis.

## Declaration

```objectivec
@interface GCControllerAxisInput : GCControllerElement
```

<a id="overview"></a>

## Overview

A `GCControllerAxisInput` object represents the value of a physical controller’s axis. For example, a [GCControllerDirectionPad](gccontrollerdirectionpad.md) has x-axis and y-axis subelements.

## Topics

### Accessing the input values

- [value](gccontrolleraxisinput/value.md): The current value of the axis.
- [setValue:](gccontrolleraxisinput/setvalue%28__%29.md): Sets the normalized value of the axis.

### Getting change information

- [valueChangedHandler](gccontrolleraxisinput/valuechangedhandler.md): The block that the element calls when the user changes the axis value.
- [GCControllerAxisValueChangedHandler](gccontrolleraxisvaluechangedhandler.md): The signature for the block that executes when the user changes the axis value.

## Relationships

### Inherits From

- [GCControllerElement](gccontrollerelement.md)

## See Also

### Accessing controller elements

- [GCControllerElement](gccontrollerelement.md): An input for a physical control, such as a button or thumbstick.
- [GCControllerButtonInput](gccontrollerbuttoninput.md): A control element that represents a button touch or press.
- [GCControllerTouchpad](gccontrollertouchpad.md): A control element that represents a touch event on a touchpad.
- [GCControllerDirectionPad](gccontrollerdirectionpad.md): A control element associated with a directional pad or a thumbstick.
- [GCDeviceCursor](gcdevicecursor.md): A control element for the cursor used as a directional pad.
- [GCDualSenseAdaptiveTrigger](gcdualsenseadaptivetrigger.md): A class that encapsulates the features of a DualSense adaptive trigger.
