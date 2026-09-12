> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdualsenseadaptivetrigger/positionalresistivestrengths](https://developer.apple.com/documentation/gamecontroller/gcdualsenseadaptivetrigger/positionalresistivestrengths)

# GCDualSenseAdaptiveTrigger.PositionalResistiveStrengths (Swift)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

The resistive strengths for multiple positions on a trigger.

## Declaration

```swift
struct PositionalResistiveStrengths
```

## Topics

### Creating resistive strengths

- [init(values:)](positionalresistivestrengths/init%28values_%29.md): Creates a resistive strengths structure with the specified strength values.
- [init()](positionalresistivestrengths/init%28%29.md): Creates an empty resistive strengths structure.

### Accessing resistive strengths

- [values](positionalresistivestrengths/values.md): The resistive strength values for possible trigger positions.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Configuring the trigger

- [setModeFeedbackWithStartPosition(\_:resistiveStrength:)](setmodefeedbackwithstartposition%28__resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger at the start position or at a greater value.
- [setModeFeedback(resistiveStrengths:)](setmodefeedback%28resistivestrengths_%29.md): Sets the mode to provide feedback with the specified strengths for each possible trigger position.
- [setModeWeaponWithStartPosition(\_:endPosition:resistiveStrength:)](setmodeweaponwithstartposition%28__endposition_resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger between the start and the end positions.
- [setModeVibrationWithStartPosition(\_:amplitude:frequency:)](setmodevibrationwithstartposition%28__amplitude_frequency_%29.md): Sets the mode to vibrate when the user depresses the trigger at the start position or at a greater value.
- [setModeVibration(amplitudes:frequency:)](setmodevibration%28amplitudes_frequency_%29.md): Sets the mode to vibrate with the specified amplitudes for each possible trigger position.
- [GCDualSenseAdaptiveTrigger.PositionalAmplitudes](positionalamplitudes.md): The amplitudes for multiple positions on a trigger.
- [setModeSlopeFeedback(startPosition:endPosition:startStrength:endStrength:)](setmodeslopefeedback%28startposition_endposition_startstrength_endstrength_%29.md): Sets the mode to provide feedback when the user tilts the trigger between the start and the end positions.

# GCDualSenseAdaptiveTriggerPositionalResistiveStrengths (Objective-C)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The resistive strengths for multiple positions on a trigger.

## Declaration

```objectivec
typedef struct { ... } GCDualSenseAdaptiveTriggerPositionalResistiveStrengths;
```

## Topics

### Accessing resistive strengths

- [values](positionalresistivestrengths/values.md): The resistive strength values for possible trigger positions.

## See Also

### Configuring the trigger

- [setModeFeedbackWithStartPosition:resistiveStrength:](setmodefeedbackwithstartposition%28__resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger at the start position or at a greater value.
- [setModeFeedbackWithResistiveStrengths:](setmodefeedback%28resistivestrengths_%29.md): Sets the mode to provide feedback with the specified strengths for each possible trigger position.
- [setModeWeaponWithStartPosition:endPosition:resistiveStrength:](setmodeweaponwithstartposition%28__endposition_resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger between the start and the end positions.
- [setModeVibrationWithStartPosition:amplitude:frequency:](setmodevibrationwithstartposition%28__amplitude_frequency_%29.md): Sets the mode to vibrate when the user depresses the trigger at the start position or at a greater value.
- [setModeVibrationWithAmplitudes:frequency:](setmodevibration%28amplitudes_frequency_%29.md): Sets the mode to vibrate with the specified amplitudes for each possible trigger position.
- [GCDualSenseAdaptiveTriggerPositionalAmplitudes](positionalamplitudes.md): The amplitudes for multiple positions on a trigger.
- [setModeSlopeFeedbackWithStartPosition:endPosition:startStrength:endStrength:](setmodeslopefeedback%28startposition_endposition_startstrength_endstrength_%29.md): Sets the mode to provide feedback when the user tilts the trigger between the start and the end positions.
