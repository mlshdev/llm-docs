> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdualsenseadaptivetrigger/setmodevibration(amplitudes:frequency:)](https://developer.apple.com/documentation/gamecontroller/gcdualsenseadaptivetrigger/setmodevibration(amplitudes:frequency:))

# setModeVibration(amplitudes:frequency:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Sets the mode to vibrate with the specified amplitudes for each possible trigger position.

## Declaration

```swift
func setModeVibration(amplitudes positionalAmplitudes: GCDualSenseAdaptiveTrigger.PositionalAmplitudes, frequency: Float)
```

## Parameters

- `positionalAmplitudes`: The amplitudes for each possible trigger position.
- `frequency`: The frequency of the vibration effect, which is a value between `0` and `1`, where `0` is the minimum and `1` is the maximum frequency.

## See Also

### Configuring the trigger

- [setModeFeedbackWithStartPosition(\_:resistiveStrength:)](setmodefeedbackwithstartposition%28__resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger at the start position or at a greater value.
- [GCDualSenseAdaptiveTrigger.PositionalResistiveStrengths](positionalresistivestrengths.md): The resistive strengths for multiple positions on a trigger.
- [setModeFeedback(resistiveStrengths:)](setmodefeedback%28resistivestrengths_%29.md): Sets the mode to provide feedback with the specified strengths for each possible trigger position.
- [setModeWeaponWithStartPosition(\_:endPosition:resistiveStrength:)](setmodeweaponwithstartposition%28__endposition_resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger between the start and the end positions.
- [setModeVibrationWithStartPosition(\_:amplitude:frequency:)](setmodevibrationwithstartposition%28__amplitude_frequency_%29.md): Sets the mode to vibrate when the user depresses the trigger at the start position or at a greater value.
- [GCDualSenseAdaptiveTrigger.PositionalAmplitudes](positionalamplitudes.md): The amplitudes for multiple positions on a trigger.
- [setModeSlopeFeedback(startPosition:endPosition:startStrength:endStrength:)](setmodeslopefeedback%28startposition_endposition_startstrength_endstrength_%29.md): Sets the mode to provide feedback when the user tilts the trigger between the start and the end positions.

# setModeVibrationWithAmplitudes:frequency: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Sets the mode to vibrate with the specified amplitudes for each possible trigger position.

## Declaration

```objectivec
- (void) setModeVibrationWithAmplitudes:(GCDualSenseAdaptiveTriggerPositionalAmplitudes) positionalAmplitudes frequency:(float) frequency;
```

## Parameters

- `positionalAmplitudes`: The amplitudes for each possible trigger position.
- `frequency`: The frequency of the vibration effect, which is a value between `0` and `1`, where `0` is the minimum and `1` is the maximum frequency.

## See Also

### Configuring the trigger

- [setModeFeedbackWithStartPosition:resistiveStrength:](setmodefeedbackwithstartposition%28__resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger at the start position or at a greater value.
- [GCDualSenseAdaptiveTriggerPositionalResistiveStrengths](positionalresistivestrengths.md): The resistive strengths for multiple positions on a trigger.
- [setModeFeedbackWithResistiveStrengths:](setmodefeedback%28resistivestrengths_%29.md): Sets the mode to provide feedback with the specified strengths for each possible trigger position.
- [setModeWeaponWithStartPosition:endPosition:resistiveStrength:](setmodeweaponwithstartposition%28__endposition_resistivestrength_%29.md): Sets the mode to provide feedback when the user depresses the trigger between the start and the end positions.
- [setModeVibrationWithStartPosition:amplitude:frequency:](setmodevibrationwithstartposition%28__amplitude_frequency_%29.md): Sets the mode to vibrate when the user depresses the trigger at the start position or at a greater value.
- [GCDualSenseAdaptiveTriggerPositionalAmplitudes](positionalamplitudes.md): The amplitudes for multiple positions on a trigger.
- [setModeSlopeFeedbackWithStartPosition:endPosition:startStrength:endStrength:](setmodeslopefeedback%28startposition_endposition_startstrength_endstrength_%29.md): Sets the mode to provide feedback when the user tilts the trigger between the start and the end positions.
