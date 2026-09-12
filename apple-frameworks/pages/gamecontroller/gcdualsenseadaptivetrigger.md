> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdualsenseadaptivetrigger](https://developer.apple.com/documentation/gamecontroller/gcdualsenseadaptivetrigger)

# GCDualSenseAdaptiveTrigger (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

A class that encapsulates the features of a DualSense adaptive trigger.

## Declaration

```swift
class GCDualSenseAdaptiveTrigger
```

<a id="overview"></a>

## Overview

A `GCDualSenseAdaptiveTrigger` object allows you to specify a dynamic resistance force that the DualSense controller applies when the user pulls the trigger. For example, set the resistance to give the user the feeling of pulling back on a bow string, firing a weapon, or pulling a lever.

## Topics

### Getting the mode

- [mode](gcdualsenseadaptivetrigger/mode-swift.property.md): The current configuration of the adaptive trigger.
- [GCDualSenseAdaptiveTrigger.Mode](gcdualsenseadaptivetrigger/mode-swift.enum.md): The possible modes of an adaptive trigger.
- [setModeOff()](gcdualsenseadaptivetrigger/setmodeoff%28%29.md): Sets the mode to off and stops any trigger effect.

### Configuring the trigger

- [setModeFeedbackWithStartPosition(\_:resistiveStrength:)](gcdualsenseadaptivetrigger/setmodefeedbackwithstartposition%28__resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger at the start position or at a greater value.
- [GCDualSenseAdaptiveTrigger.PositionalResistiveStrengths](gcdualsenseadaptivetrigger/positionalresistivestrengths.md): The resistive strengths for multiple positions on a trigger.
- [setModeFeedback(resistiveStrengths:)](gcdualsenseadaptivetrigger/setmodefeedback%28resistivestrengths_%29.md): Sets the mode to provide feedback with the specified strengths for each possible trigger position.
- [setModeWeaponWithStartPosition(\_:endPosition:resistiveStrength:)](gcdualsenseadaptivetrigger/setmodeweaponwithstartposition%28__endposition_resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger between the start and the end positions.
- [setModeVibrationWithStartPosition(\_:amplitude:frequency:)](gcdualsenseadaptivetrigger/setmodevibrationwithstartposition%28__amplitude_frequency_%29.md): Sets the mode to vibrate when the user depresses the trigger at the start position or at a greater value.
- [setModeVibration(amplitudes:frequency:)](gcdualsenseadaptivetrigger/setmodevibration%28amplitudes_frequency_%29.md): Sets the mode to vibrate with the specified amplitudes for each possible trigger position.
- [GCDualSenseAdaptiveTrigger.PositionalAmplitudes](gcdualsenseadaptivetrigger/positionalamplitudes.md): The amplitudes for multiple positions on a trigger.
- [setModeSlopeFeedback(startPosition:endPosition:startStrength:endStrength:)](gcdualsenseadaptivetrigger/setmodeslopefeedback%28startposition_endposition_startstrength_endstrength_%29.md): Sets the mode to provide feedback when the user tilts the trigger between the start and the end positions.

### Getting the arm position

- [armPosition](gcdualsenseadaptivetrigger/armposition.md): The position of the trigger’s arm.
- [discretePositionCount](gcdualsenseadaptivetrigger/discretepositioncount.md): The number of discrete control positions that the DualSense adaptive triggers support.

### Checking the status

- [status](gcdualsenseadaptivetrigger/status-swift.property.md): The current status of the adaptive trigger and whether it’s applying effects.
- [GCDualSenseAdaptiveTrigger.Status](gcdualsenseadaptivetrigger/status-swift.enum.md): The possible states of an adaptive trigger.

## Relationships

### Inherits From

- [GCControllerButtonInput](gccontrollerbuttoninput.md)

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
- [GCControllerDirectionPad](gccontrollerdirectionpad.md): A control element associated with a directional pad or a thumbstick.
- [GCDeviceCursor](gcdevicecursor.md): A control element for the cursor used as a directional pad.

# GCDualSenseAdaptiveTrigger (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

A class that encapsulates the features of a DualSense adaptive trigger.

## Declaration

```objectivec
@interface GCDualSenseAdaptiveTrigger : GCControllerButtonInput
```

<a id="overview"></a>

## Overview

A `GCDualSenseAdaptiveTrigger` object allows you to specify a dynamic resistance force that the DualSense controller applies when the user pulls the trigger. For example, set the resistance to give the user the feeling of pulling back on a bow string, firing a weapon, or pulling a lever.

## Topics

### Getting the mode

- [mode](gcdualsenseadaptivetrigger/mode-swift.property.md): The current configuration of the adaptive trigger.
- [GCDualSenseAdaptiveTriggerMode](gcdualsenseadaptivetrigger/mode-swift.enum.md): The possible modes of an adaptive trigger.
- [setModeOff](gcdualsenseadaptivetrigger/setmodeoff%28%29.md): Sets the mode to off and stops any trigger effect.

### Configuring the trigger

- [setModeFeedbackWithStartPosition:resistiveStrength:](gcdualsenseadaptivetrigger/setmodefeedbackwithstartposition%28__resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger at the start position or at a greater value.
- [GCDualSenseAdaptiveTriggerPositionalResistiveStrengths](gcdualsenseadaptivetrigger/positionalresistivestrengths.md): The resistive strengths for multiple positions on a trigger.
- [setModeFeedbackWithResistiveStrengths:](gcdualsenseadaptivetrigger/setmodefeedback%28resistivestrengths_%29.md): Sets the mode to provide feedback with the specified strengths for each possible trigger position.
- [setModeWeaponWithStartPosition:endPosition:resistiveStrength:](gcdualsenseadaptivetrigger/setmodeweaponwithstartposition%28__endposition_resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger between the start and the end positions.
- [setModeVibrationWithStartPosition:amplitude:frequency:](gcdualsenseadaptivetrigger/setmodevibrationwithstartposition%28__amplitude_frequency_%29.md): Sets the mode to vibrate when the user depresses the trigger at the start position or at a greater value.
- [setModeVibrationWithAmplitudes:frequency:](gcdualsenseadaptivetrigger/setmodevibration%28amplitudes_frequency_%29.md): Sets the mode to vibrate with the specified amplitudes for each possible trigger position.
- [GCDualSenseAdaptiveTriggerPositionalAmplitudes](gcdualsenseadaptivetrigger/positionalamplitudes.md): The amplitudes for multiple positions on a trigger.
- [setModeSlopeFeedbackWithStartPosition:endPosition:startStrength:endStrength:](gcdualsenseadaptivetrigger/setmodeslopefeedback%28startposition_endposition_startstrength_endstrength_%29.md): Sets the mode to provide feedback when the user tilts the trigger between the start and the end positions.

### Getting the arm position

- [armPosition](gcdualsenseadaptivetrigger/armposition.md): The position of the trigger’s arm.
- [GCDualSenseAdaptiveTriggerDiscretePositionCount](gcdualsenseadaptivetrigger/discretepositioncount.md): The number of discrete control positions that the DualSense adaptive triggers support.

### Checking the status

- [status](gcdualsenseadaptivetrigger/status-swift.property.md): The current status of the adaptive trigger and whether it’s applying effects.
- [GCDualSenseAdaptiveTriggerStatus](gcdualsenseadaptivetrigger/status-swift.enum.md): The possible states of an adaptive trigger.

## Relationships

### Inherits From

- [GCControllerButtonInput](gccontrollerbuttoninput.md)

## See Also

### Accessing controller elements

- [GCControllerElement](gccontrollerelement.md): An input for a physical control, such as a button or thumbstick.
- [GCControllerAxisInput](gccontrolleraxisinput.md): A control element that tracks movement along an axis.
- [GCControllerButtonInput](gccontrollerbuttoninput.md): A control element that represents a button touch or press.
- [GCControllerTouchpad](gccontrollertouchpad.md): A control element that represents a touch event on a touchpad.
- [GCControllerDirectionPad](gccontrollerdirectionpad.md): A control element associated with a directional pad or a thumbstick.
- [GCDeviceCursor](gcdevicecursor.md): A control element for the cursor used as a directional pad.
