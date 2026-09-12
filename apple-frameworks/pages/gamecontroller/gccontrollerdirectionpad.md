> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerdirectionpad](https://developer.apple.com/documentation/gamecontroller/gccontrollerdirectionpad)

# GCControllerDirectionPad (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A control element associated with a directional pad or a thumbstick.

## Declaration

```swift
class GCControllerDirectionPad
```

<a id="overview"></a>

## Overview

You get the input values for this element from its subelements. You can use either the [xAxis](gccontrollerdirectionpad/xaxis.md) and [yAxis](gccontrollerdirectionpad/yaxis.md) properties to get coordinates, or the [up](gccontrollerdirectionpad/up.md), [down](gccontrollerdirectionpad/down.md), [left](gccontrollerdirectionpad/left.md), and [right](gccontrollerdirectionpad/right.md) buttons that simulate directional pad buttons.

## Topics

### Accessing values using the axes

- [xAxis](gccontrollerdirectionpad/xaxis.md): The x-axis element of the directional pad.
- [yAxis](gccontrollerdirectionpad/yaxis.md): The y-axis element of the directional pad.

### Accessing values using directional buttons

- [right](gccontrollerdirectionpad/right.md): The button element that changes the positive x-axis.
- [left](gccontrollerdirectionpad/left.md): The button element that changes the negative x-axis.
- [up](gccontrollerdirectionpad/up.md): The button element that changes the positive y-axis.
- [down](gccontrollerdirectionpad/down.md): The button element used for the negative y-axis direction.

### Getting change information

- [valueChangedHandler](gccontrollerdirectionpad/valuechangedhandler.md): The block that the directional pad calls when the user changes its values.
- [GCControllerDirectionPadValueChangedHandler](gccontrollerdirectionpadvaluechangedhandler.md): The signature for the block that executes when either axis changes values.

### Setting snapshot values

- [setValueForXAxis(\_:yAxis:)](gccontrollerdirectionpad/setvalueforxaxis%28__yaxis_%29.md): Sets the input values of a snapshot of a directional pad.

## Relationships

### Inherits From

- [GCControllerElement](gccontrollerelement.md)

### Inherited By

- [GCDeviceCursor](gcdevicecursor.md)

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
- [GCControllerTouchpad](gccontrollertouchpad.md): A control element that represents a touch event on a touchpad.
- [GCDeviceCursor](gcdevicecursor.md): A control element for the cursor used as a directional pad.
- [GCDualSenseAdaptiveTrigger](gcdualsenseadaptivetrigger.md): A class that encapsulates the features of a DualSense adaptive trigger.

# GCControllerDirectionPad (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A control element associated with a directional pad or a thumbstick.

## Declaration

```objectivec
@interface GCControllerDirectionPad : GCControllerElement
```

<a id="overview"></a>

## Overview

You get the input values for this element from its subelements. You can use either the [xAxis](gccontrollerdirectionpad/xaxis.md) and [yAxis](gccontrollerdirectionpad/yaxis.md) properties to get coordinates, or the [up](gccontrollerdirectionpad/up.md), [down](gccontrollerdirectionpad/down.md), [left](gccontrollerdirectionpad/left.md), and [right](gccontrollerdirectionpad/right.md) buttons that simulate directional pad buttons.

## Topics

### Accessing values using the axes

- [xAxis](gccontrollerdirectionpad/xaxis.md): The x-axis element of the directional pad.
- [yAxis](gccontrollerdirectionpad/yaxis.md): The y-axis element of the directional pad.

### Accessing values using directional buttons

- [right](gccontrollerdirectionpad/right.md): The button element that changes the positive x-axis.
- [left](gccontrollerdirectionpad/left.md): The button element that changes the negative x-axis.
- [up](gccontrollerdirectionpad/up.md): The button element that changes the positive y-axis.
- [down](gccontrollerdirectionpad/down.md): The button element used for the negative y-axis direction.

### Getting change information

- [valueChangedHandler](gccontrollerdirectionpad/valuechangedhandler.md): The block that the directional pad calls when the user changes its values.
- [GCControllerDirectionPadValueChangedHandler](gccontrollerdirectionpadvaluechangedhandler.md): The signature for the block that executes when either axis changes values.

### Setting snapshot values

- [setValueForXAxis:yAxis:](gccontrollerdirectionpad/setvalueforxaxis%28__yaxis_%29.md): Sets the input values of a snapshot of a directional pad.

## Relationships

### Inherits From

- [GCControllerElement](gccontrollerelement.md)

### Inherited By

- [GCDeviceCursor](gcdevicecursor.md)

## See Also

### Accessing controller elements

- [GCControllerElement](gccontrollerelement.md): An input for a physical control, such as a button or thumbstick.
- [GCControllerAxisInput](gccontrolleraxisinput.md): A control element that tracks movement along an axis.
- [GCControllerButtonInput](gccontrollerbuttoninput.md): A control element that represents a button touch or press.
- [GCControllerTouchpad](gccontrollertouchpad.md): A control element that represents a touch event on a touchpad.
- [GCDeviceCursor](gcdevicecursor.md): A control element for the cursor used as a directional pad.
- [GCDualSenseAdaptiveTrigger](gcdualsenseadaptivetrigger.md): A class that encapsulates the features of a DualSense adaptive trigger.
