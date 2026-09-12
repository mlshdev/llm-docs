> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdualsenseadaptivetrigger/setmodefeedback(resistivestrengths:)](https://developer.apple.com/documentation/gamecontroller/gcdualsenseadaptivetrigger/setmodefeedback(resistivestrengths:))

# setModeFeedback(resistiveStrengths:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Sets the mode to provide feedback with the specified strengths for each possible trigger position.

## Declaration

```swift
func setModeFeedback(resistiveStrengths positionalResistiveStrengths: GCDualSenseAdaptiveTrigger.PositionalResistiveStrengths)
```

## Parameters

- `positionalResistiveStrengths`: The resistance values for each possible trigger position.

## See Also

### Configuring the trigger

- [setModeFeedbackWithStartPosition(\_:resistiveStrength:)](setmodefeedbackwithstartposition%28__resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger at the start position or at a greater value.
- [GCDualSenseAdaptiveTrigger.PositionalResistiveStrengths](positionalresistivestrengths.md): The resistive strengths for multiple positions on a trigger.
- [setModeWeaponWithStartPosition(\_:endPosition:resistiveStrength:)](setmodeweaponwithstartposition%28__endposition_resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger between the start and the end positions.
- [setModeVibrationWithStartPosition(\_:amplitude:frequency:)](setmodevibrationwithstartposition%28__amplitude_frequency_%29.md): Sets the mode to vibrate when the user depresses the trigger at the start position or at a greater value.
- [setModeVibration(amplitudes:frequency:)](setmodevibration%28amplitudes_frequency_%29.md): Sets the mode to vibrate with the specified amplitudes for each possible trigger position.
- [GCDualSenseAdaptiveTrigger.PositionalAmplitudes](positionalamplitudes.md): The amplitudes for multiple positions on a trigger.
- [setModeSlopeFeedback(startPosition:endPosition:startStrength:endStrength:)](setmodeslopefeedback%28startposition_endposition_startstrength_endstrength_%29.md): Sets the mode to provide feedback when the user tilts the trigger between the start and the end positions.

# setModeFeedbackWithResistiveStrengths: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Sets the mode to provide feedback with the specified strengths for each possible trigger position.

## Declaration

```objectivec
- (void) setModeFeedbackWithResistiveStrengths:(GCDualSenseAdaptiveTriggerPositionalResistiveStrengths) positionalResistiveStrengths;
```

## Parameters

- `positionalResistiveStrengths`: The resistance values for each possible trigger position.

## See Also

### Configuring the trigger

- [setModeFeedbackWithStartPosition:resistiveStrength:](setmodefeedbackwithstartposition%28__resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger at the start position or at a greater value.
- [GCDualSenseAdaptiveTriggerPositionalResistiveStrengths](positionalresistivestrengths.md): The resistive strengths for multiple positions on a trigger.
- [setModeWeaponWithStartPosition:endPosition:resistiveStrength:](setmodeweaponwithstartposition%28__endposition_resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger between the start and the end positions.
- [setModeVibrationWithStartPosition:amplitude:frequency:](setmodevibrationwithstartposition%28__amplitude_frequency_%29.md): Sets the mode to vibrate when the user depresses the trigger at the start position or at a greater value.
- [setModeVibrationWithAmplitudes:frequency:](setmodevibration%28amplitudes_frequency_%29.md): Sets the mode to vibrate with the specified amplitudes for each possible trigger position.
- [GCDualSenseAdaptiveTriggerPositionalAmplitudes](positionalamplitudes.md): The amplitudes for multiple positions on a trigger.
- [setModeSlopeFeedbackWithStartPosition:endPosition:startStrength:endStrength:](setmodeslopefeedback%28startposition_endposition_startstrength_endstrength_%29.md): Sets the mode to provide feedback when the user tilts the trigger between the start and the end positions.
