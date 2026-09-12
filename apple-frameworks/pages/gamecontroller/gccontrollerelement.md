> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerelement](https://developer.apple.com/documentation/gamecontroller/gccontrollerelement)

# GCControllerElement (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An input for a physical control, such as a button or thumbstick.

## Declaration

```swift
class GCControllerElement
```

<a id="overview"></a>

## Overview

`GCControllerElement` is an abstract superclass for specific types of elements that represent controls on a game controller. Use the respective subclasses to either get the input of an element directly or set a handler that the element calls when the user changes a value. This class provides support for common features.

For complex elements that have subelements, you can get the containing element using the [collection](gccontrollerelement/collection.md) property. For example, a direction pad ([GCControllerDirectionPad](gccontrollerdirectionpad.md)) has two axis control and four button subelements.

If the user binds a controller element to a system gesture, the system sends the input to the system gesture recognizer first. If it doesn’t recognize a gesture, the system sends the input to your app but with a delay. If it does recognize a gesture, it doesn’t send any input to your app.

To change this default behavior, you can set the [preferredSystemGestureState](gccontrollerelement/preferredsystemgesturestate.md) property to [GCControllerElement.SystemGestureState.alwaysReceive](gccontrollerelement/systemgesturestate/alwaysreceive.md) to receive the input simultaneously without delay. Alternatively, set it to [GCControllerElement.SystemGestureState.disabled](gccontrollerelement/systemgesturestate/disabled.md) to disable the system gesture and receive the input exclusively. Use the [isBoundToSystemGesture](gccontrollerelement/isboundtosystemgesture.md) property to check whether the user included an element in a system gesture.

Use the [isAnalog](gccontrollerelement/isanalog.md) property to determine whether an element’s input value is a range of values or a discrete digital value.

## Topics

### Accessing input values

- [isAnalog](gccontrollerelement/isanalog.md): A Boolean value that indicates whether the element provides analog data.

### Getting a localized name

- [localizedName](gccontrollerelement/localizedname.md): The localized name for the element or the remapped element.
- [unmappedLocalizedName](gccontrollerelement/unmappedlocalizedname.md): The element’s localized name, not the remapped name.

### Displaying a symbol

- [sfSymbolsName](gccontrollerelement/sfsymbolsname.md): A system symbol for the element or the remapped element.
- [unmappedSfSymbolsName](gccontrollerelement/unmappedsfsymbolsname.md): The element’s system symbol, not the remapped symbol.

### Accessing elements by key

- [aliases](gccontrollerelement/aliases.md): The element’s aliases you use when accessing it with the subscript notation.

### Getting the containing element

- [collection](gccontrollerelement/collection.md): The enclosing element for this element.

### Handling system gesture input

- [isBoundToSystemGesture](gccontrollerelement/isboundtosystemgesture.md): A Boolean value that indicates whether the user binds the element to a system gesture.
- [preferredSystemGestureState](gccontrollerelement/preferredsystemgesturestate.md): The preferred state for handling input when the user binds the element to a system gesture.
- [GCControllerElement.SystemGestureState](gccontrollerelement/systemgesturestate.md): A state for handling input when an element is part of a system gesture.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GCControllerAxisInput](gccontrolleraxisinput.md)
- [GCControllerButtonInput](gccontrollerbuttoninput.md)
- [GCControllerDirectionPad](gccontrollerdirectionpad.md)
- [GCControllerTouchpad](gccontrollertouchpad.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing controller elements

- [GCControllerAxisInput](gccontrolleraxisinput.md): A control element that tracks movement along an axis.
- [GCControllerButtonInput](gccontrollerbuttoninput.md): A control element that represents a button touch or press.
- [GCControllerTouchpad](gccontrollertouchpad.md): A control element that represents a touch event on a touchpad.
- [GCControllerDirectionPad](gccontrollerdirectionpad.md): A control element associated with a directional pad or a thumbstick.
- [GCDeviceCursor](gcdevicecursor.md): A control element for the cursor used as a directional pad.
- [GCDualSenseAdaptiveTrigger](gcdualsenseadaptivetrigger.md): A class that encapsulates the features of a DualSense adaptive trigger.

# GCControllerElement (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An input for a physical control, such as a button or thumbstick.

## Declaration

```objectivec
@interface GCControllerElement : NSObject
```

<a id="overview"></a>

## Overview

`GCControllerElement` is an abstract superclass for specific types of elements that represent controls on a game controller. Use the respective subclasses to either get the input of an element directly or set a handler that the element calls when the user changes a value. This class provides support for common features.

For complex elements that have subelements, you can get the containing element using the [collection](gccontrollerelement/collection.md) property. For example, a direction pad ([GCControllerDirectionPad](gccontrollerdirectionpad.md)) has two axis control and four button subelements.

If the user binds a controller element to a system gesture, the system sends the input to the system gesture recognizer first. If it doesn’t recognize a gesture, the system sends the input to your app but with a delay. If it does recognize a gesture, it doesn’t send any input to your app.

To change this default behavior, you can set the [preferredSystemGestureState](gccontrollerelement/preferredsystemgesturestate.md) property to [GCSystemGestureStateAlwaysReceive](gccontrollerelement/systemgesturestate/alwaysreceive.md) to receive the input simultaneously without delay. Alternatively, set it to [GCSystemGestureStateDisabled](gccontrollerelement/systemgesturestate/disabled.md) to disable the system gesture and receive the input exclusively. Use the [boundToSystemGesture](gccontrollerelement/isboundtosystemgesture.md) property to check whether the user included an element in a system gesture.

Use the [analog](gccontrollerelement/isanalog.md) property to determine whether an element’s input value is a range of values or a discrete digital value.

## Topics

### Accessing input values

- [analog](gccontrollerelement/isanalog.md): A Boolean value that indicates whether the element provides analog data.

### Getting a localized name

- [localizedName](gccontrollerelement/localizedname.md): The localized name for the element or the remapped element.
- [unmappedLocalizedName](gccontrollerelement/unmappedlocalizedname.md): The element’s localized name, not the remapped name.

### Displaying a symbol

- [sfSymbolsName](gccontrollerelement/sfsymbolsname.md): A system symbol for the element or the remapped element.
- [unmappedSfSymbolsName](gccontrollerelement/unmappedsfsymbolsname.md): The element’s system symbol, not the remapped symbol.

### Accessing elements by key

- [aliases](gccontrollerelement/aliases.md): The element’s aliases you use when accessing it with the subscript notation.

### Getting the containing element

- [collection](gccontrollerelement/collection.md): The enclosing element for this element.

### Handling system gesture input

- [boundToSystemGesture](gccontrollerelement/isboundtosystemgesture.md): A Boolean value that indicates whether the user binds the element to a system gesture.
- [preferredSystemGestureState](gccontrollerelement/preferredsystemgesturestate.md): The preferred state for handling input when the user binds the element to a system gesture.
- [GCSystemGestureState](gccontrollerelement/systemgesturestate.md): A state for handling input when an element is part of a system gesture.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GCControllerAxisInput](gccontrolleraxisinput.md)
- [GCControllerButtonInput](gccontrollerbuttoninput.md)
- [GCControllerDirectionPad](gccontrollerdirectionpad.md)
- [GCControllerTouchpad](gccontrollertouchpad.md)

## See Also

### Accessing controller elements

- [GCControllerAxisInput](gccontrolleraxisinput.md): A control element that tracks movement along an axis.
- [GCControllerButtonInput](gccontrollerbuttoninput.md): A control element that represents a button touch or press.
- [GCControllerTouchpad](gccontrollertouchpad.md): A control element that represents a touch event on a touchpad.
- [GCControllerDirectionPad](gccontrollerdirectionpad.md): A control element associated with a directional pad or a thumbstick.
- [GCDeviceCursor](gcdevicecursor.md): A control element for the cursor used as a directional pad.
- [GCDualSenseAdaptiveTrigger](gcdualsenseadaptivetrigger.md): A class that encapsulates the features of a DualSense adaptive trigger.
